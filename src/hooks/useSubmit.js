import { useState } from "react";
import { nextInput, tooltipHelper } from "../utils/verify";

export const useSubmit = (ref) => {
  const [tooltip, setTooltip] = useState({
    open: false,
    type: "",
    message: "",
  });
  let timeout = null;

  const nextInputFunc = (el) => {
    nextInput(ref, el);
  };

  const submit = async (e) => {
    e.preventDefault();
    const form = ref.current;

    const validation = nextInput(ref);

    const goon = tooltipHelper(validation, timeout, setTooltip);
    if (!goon) return;

    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    const res = await fetcher(data);
  };

  return { submit, tooltip, nextInput: nextInputFunc };
};

const fetcher = async (data) => {
  const SERVER_ADRESS = import.meta.env.VITE_SERVER_URL;

  try {
    const res = await fetch(`${SERVER_ADRESS}/email`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const status = res.status;
    const response = {
      status: status === 200,
      message: "Thank you for your message",
    };

    if (status !== 200) {
      response.message =
        status === 400
          ? "Please fill fields properly"
          : "Something went wrong! try again later!";
    }

    return response;
  } catch (error) {
    return {
      status: false,
      message: "Something went wrong! try again later!",
    };
  }
};
