import styles from "../styles/ContactForm.module.css";

const ContactForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <div className={styles.mainText}>
                <p>Want to get in touch?</p>
                <p>Send me an email at <u><a href="mailto:athul.rajagopal@ucalgary.ca">athul.rajagopal@ucalgary.ca</a></u>, or send in a form below! I’ll get back to you as soon as I can.
                </p>
            </div>
            <form className={styles.contactForm} onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="name">
                    Name
                </label>
                <input type="text" id="name" name="name" />
                <label htmlFor="email">
                    Email
                </label>
                <input type="email" id="email" name="email" />
                <label htmlFor="description">
                    Description
                </label>
                <textarea id="description" name="description" />
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default ContactForm;