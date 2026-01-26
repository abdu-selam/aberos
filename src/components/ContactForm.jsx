import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Button from "../components/Button";

function ContactForm() {
    const [loading, setLoading] = useState(false);
    const formRef = useRef();

    const sendEmail = async (e) => {
        e.preventDefault();
        if (loading) return;

        setLoading(true);

        try {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
            if (!re.test(formRef.current.email.value)) {
                alert('Email is not valid email')
                setLoading(false)
                return
            }
            await emailjs.sendForm(
                import.meta.env.VITE_SERVICE_KEY,
                import.meta.env.VITE_TEMPLATE_KEY,
                formRef.current,
                import.meta.env.VITE_EMAIL_KEY
            );

            alert("Message sent successfully!");
            formRef.current.reset();
        } catch (error) {
            alert("Failed to send message");
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form ref={formRef} onSubmit={sendEmail} className="bg-back text-text p-8 max-w-206 mx-auto rounded-3xl grid md:grid-cols-2 gap-6">
            <input
                className="border rounded-xl px-4 py-3 focus:outline-none focus:border-2"
                placeholder="Full Name"
                name="name"
                required
                type="text"
            />
            <input
                className="border rounded-xl px-4 py-3 focus:outline-none focus:border-2"
                name="email"
                type="email"
                placeholder="Email"
                required
            />
            <input hidden name="year" value={new Date().getFullYear()} />
            <textarea
                className="border rounded-xl px-4 py-3 md:col-span-2 h-40 focus:outline-none focus:border-2"
                name="message"
                placeholder="Your Message"
                required
            />
            <div className="md:col-span-2">
                <Button data="Send Message" full />
            </div>
        </form>
    )
}

export default ContactForm
