import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../styles/ContactForm.module.css";

const ContactForm = () => {
    const router = useRouter();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (name.length === 0 || email.length === 0 || description.length === 0) {
            window.alert("Please fill in all fields.");
        } else {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    text: description,
                }),
            });
            if (response.ok) {
                router.push("/success");
            } else {
                window.alert("Form could not be submitted. Please send me an email at athulrajagopaldev@gmail.com");
            }
        }
    }

    return (
        <>
            <div className={styles.mainText}>
                <p>Want to get in touch?</p>
                <p>Send me an email at <u><a href="mailto:athulrajagopaldev@gmail.com">athulrajagopaldev@gmail.com</a></u>, or send in a form below! I’ll get back to you as soon as I can.
                </p>
            </div>
            <form className={styles.contactForm} onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="name">
                    Name
                </label>
                <input type="text" id="name" name="name" onChange={(e) => setName(e.target.value)} />
                <label htmlFor="email">
                    Email
                </label>
                <input type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="description">
                    Description
                </label>
                <textarea id="description" name="description" onChange={(e) => setDescription(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default ContactForm;