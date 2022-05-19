import styles from './contact.module.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ContactKor from './contactKor';

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
            <button type="submit" className={styles.sendbtn} onClick={() => {
                alert('Your message has been sent')
            }}> Send Message </button>

        </form>
    );
};

function Contact(props) {

    return (
        <div className={styles.contact}>
            <div className={styles.body}>

                {
                    props.eng === true &&

                    <div className={styles.flex}>
                        <div className={styles.touch}>
                            <h2>Let's keep in touch </h2>

                            <p className={styles.txt}>Feel free to send me a message
                                <br />
                                I'll reply back as soon as possible
                            </p>

                            <div className={styles.info}>
                                <div className={styles.bg}>
                                    <FontAwesomeIcon icon="fa-regular fa-envelope" className={styles.touch_icon} />
                                </div>
                                <div>
                                    <p className={styles.small}>EMAIL</p>
                                    <p>minyeo0729@gmail.com</p>
                                </div>
                            </div>

                            <div className={styles.info}>
                                <div className={styles.bg}>
                                    <FontAwesomeIcon icon="fa-solid fa-phone" className={styles.touch_icon} />
                                </div>
                                <div>
                                    <p className={styles.small}>PHONE</p>
                                    <p>+821030494123</p>
                                </div>
                            </div>

                            <div className={styles.info}>
                                <div className={styles.bg}>
                                    <FontAwesomeIcon icon="fa-solid fa-location-dot" className={styles.touch_icon} />
                                </div>
                                <div>
                                    <p className={styles.small}>ADDRESS</p>
                                    <p>Busan, Korea</p>
                                </div>
                            </div>

                            <div className={styles.info}>
                                <div className={styles.bg}>
                                    <FontAwesomeIcon icon="fa-solid fa-link" className={styles.touch_icon} />
                                </div>
                                <div>
                                    <p className={styles.small}>VISIT</p>

                                    <p>
                                        <span onClick={() => { window.open('https://github.com/minyeokang') }}>Github <FontAwesomeIcon icon="fa-brands fa-github" className={styles.touch_arc} /></span>

                                        <span onClick={() => { window.open('https://minyeo.tistory.com/') }}>Blog <FontAwesomeIcon icon="fa-solid fa-book-open" className={styles.touch_arc} /></span>
                                    </p>
                                </div>
                            </div>

                        </div>

                        <div className={styles.formBox}>
                            <ContactUs />
                        </div>
                    </div>

                }

                {
                    props.eng === false && <ContactKor />
                }
            </div>
        </div>

    )

}

export default Contact;