import React from "react";
import Button from "../../../components/ui/Button";

const ContactForm = () => {
  return (
    <div className="flex justify-center items-center px-4">
      <form className="grid gap-3 w-full max-w-100">
        <div className="flex flex-col w-full">
          <label className="text-back text-sm" htmlFor="name">
            Name
          </label>
          <input
            className="bg-accent/70 focus:outline-none text-back  transition px-3 py-2"
            type="text"
            id="name"
            name="name"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="text-back text-sm" htmlFor="email">
            Email
          </label>
          <input
            className="bg-accent/70 focus:outline-none text-back  transition px-3 py-2"
            type="text"
            id="email"
            name="email"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="text-back text-sm" htmlFor="text">
            Message
          </label>
          <textarea
            className="bg-accent/70 focus:outline-none text-back  transition px-3 py-2 h-65"
            name="message"
            id="text"
          />
        </div>
        <Button className="rounded-none bg-back w-full text-text">
          Send Message
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
