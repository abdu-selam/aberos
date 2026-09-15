import React, { useState } from "react";
import Button from "../../../components/ui/Button";
import Tooltip from "../../../components/features/Tooltip";
import Input from "./ui/Input";

const ContactForm = () => {
  const [inputHover, setInputHover] = useState(false);
  return (
    <div className="flex justify-center items-center px-4">
      <form className="grid gap-3 w-full max-w-100">
        <Input label="Name" id="name" name="name" />
        <Input label="Email" id="email" name="email" />

        <Input label="Message" id="message" name="message" textarea />

        <Button className="rounded-none bg-back w-full text-text">
          Send Message
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
