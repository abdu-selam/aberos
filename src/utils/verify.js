export const isEmail = (email) => {
  const regEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return regEx.test(email);
};

export const nextInput = (formRef, el) => {
  const form = formRef.current;

  const name = form.name;
  const email = form.email;
  const message = form.message;

  const elems = [name, email, message];

  if (el && el.value.trim() === "") {
    el.focus();
    return {
      status: false,
      elem: el,
    };
  }

  const invalids = elems.filter((elem) => {
    if (elem.name.trim() === "email") {
      return !isEmail(elem.value);
    }

    return elem.value.trim() === "";
  });

  let i = 0;
  for (const elem of invalids) {
    if (elem === el) {
      el.focus();
      return {
        status: false,
        elem: el,
      };
      break;
    }

    elem.focus();
    return {
      status: false,
      elem,
    };
    break;
  }

  return {
    status: true,
  };
};

export const tooltipHelper = (validation, timeout, setTooltip) => {
  if (!validation.status) {
    const elem = validation.elem;
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }

    if (elem.name === "email") {
      setTooltip({
        open: true,
        type: "email",
        message: "Please fill valid email",
      });
    } else if (elem.name === "name") {
      setTooltip({
        open: true,
        type: "name",
        message: "Please fill your name",
      });
    } else {
      setTooltip({
        open: true,
        type: "message",
        message: "Please fill your message",
      });
    }

    timeout = setTimeout(() => {
      setTooltip({
        open: false,
        type: "",
        message: "",
      });
      timeout = null;
    }, 3000);
    return false;
  }

  return true;
};
