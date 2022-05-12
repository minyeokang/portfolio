import styles from './contact.module.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('contact_service', 'contact_form', form.current, 'AZa_ZLquqLMCc21ee')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <form ref={form} onSubmit={sendEmail} className={styles.form}>
            <input type="text" name="user_name" placeholder='YOUR NAME' className={styles.name} />
            <input type="email" name="user_email" placeholder='YOUR EMAIL' className={styles.email} />
            <input type="title" name="content" placeholder='SUBJECT' className={styles.subject} />
            <textarea name="message" placeholder='MESSAGE' className={styles.message} />
            <input type="submit" value="SEND MESSAGE" className={styles.sendbtn} />
        </form>
    );
};

function Contact() {
    return (
        <div className={styles.contact}>
            <h1>CONTACT</h1>
            <div className={styles.flex}>
                <div className={styles.touch}>
                    <h2>Let's keep in touch <FontAwesomeIcon icon="fa-solid fa-hand-sparkles" /></h2>

                    <p>Feel free to send me a message<br />
                        I'll reply back as soon as possible</p>
                    <ul>
                        <li><FontAwesomeIcon icon="fa-solid fa-phone" /></li>
                        <li><FontAwesomeIcon icon="fa-brands fa-github" /></li>
                        <li><FontAwesomeIcon icon="fa-solid fa-book-open" /></li>
                    </ul>
                </div>

                <div className={styles.form}>
                    <ContactUs />
                </div>
            </div>

        </div >
    )

}

export default Contact;