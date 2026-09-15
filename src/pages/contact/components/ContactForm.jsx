import Button from "../../../components/ui/Button";
import Tooltip from "../../../components/features/Tooltip";
import Input from "./ui/Input";
import { useRef } from "react";
import { useSubmit } from "../../../hooks/useSubmit";
import Alert from "../../../components/features/Alert";
import { BiLoader } from "react-icons/bi";

const ContactForm = () => {
  const formRef = useRef(null);
  const { submit, tooltip, nextInput, alert, setAlert, isSubmitting } =
    useSubmit(formRef);

  return (
    <div className="flex justify-center items-center px-4">
      <Alert
        open={alert.open}
        status={alert.status}
        message={alert.message}
        close={() =>
          setAlert({
            open: false,
            status: false,
            message: "",
          })
        }
      />
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

        <Button
          disabled={isSubmitting}
          className="rounded-none bg-back w-full text-text z-1"
        >
          {isSubmitting ? (
            <BiLoader className="animate-spin text-xl mx-auto" />
          ) : (
            <>Send Message</>
          )}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
