import Button from "../../../components/ui/Button";
import Tooltip from "../../../components/features/Tooltip";
import Input from "./ui/Input";
import { useRef } from "react";
import { useSubmit } from "../../../hooks/useSubmit";

const ContactForm = () => {
  const formRef = useRef(null);
  const { submit, tooltip, nextInput } = useSubmit(formRef);

  return (
    <div className="flex justify-center items-center px-4">
      <form
        onSubmit={submit}
        ref={formRef}
        className="grid gap-3 w-full max-w-100"
      >
        <Input
          open={tooltip.type === "name" && tooltip.open}
          content={tooltip.message}
          label="Name"
          id="name"
          name="name"
          onKeyDown={(e) => {
            if (e.key !== "Enter") return;
            nextInput(e.currentTarget);
          }}
        />
        <Input
          open={tooltip.type === "email" && tooltip.open}
          content={tooltip.message}
          label="Email"
          id="email"
          name="email"
          onKeyDown={(e) => {
            if (e.key !== "Enter") return;
            nextInput(e.currentTarget);
          }}
        />

        <Input
          open={tooltip.type === "message" && tooltip.open}
          content={tooltip.message}
          label="Message"
          id="message"
          name="message"
          textarea
        />

        <Button className="rounded-none bg-back w-full text-text z-1">
          Send Message
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
