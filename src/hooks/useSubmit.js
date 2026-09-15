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

  const submit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    const validation = nextInput(ref);

    const goon = tooltipHelper(validation, timeout, setTooltip);
    if (!goon) return;
  };

  return { submit, tooltip, nextInput: nextInputFunc };
};
