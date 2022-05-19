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
            <input type="text" name="user_name" placeholder='성함' className={styles.name} />
            <input type="email" name="user_email" placeholder='이메일 주소' className={styles.email} />
            <input type="title" name="content" placeholder='제목' className={styles.subject} />
            <textarea name="message" placeholder='내용' className={styles.message} />
            <button type="submit" className={styles.sendbtn} onClick={() => {
                alert('Your message has been sent')
            }}>이메일 전송</button>

        </form >
    );
};

function ContactKor() {
    return (

        <div className={styles.flex}>
            <div className={styles.touch}>
                <h2>Let's keep in touch </h2>

                <p className={styles.txt, 'kr'}>저에게 궁금하신 사항이 있으시면<br />
                    여기서 간편하게 이메일을 보내주세요
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
                        <p>01030494123</p>
                    </div>
                </div>

                <div className={styles.info}>
                    <div className={styles.bg}>
                        <FontAwesomeIcon icon="fa-solid fa-location-dot" className={styles.touch_icon} />
                    </div>
                    <div>
                        <p className={styles.small}>ADDRESS</p>
                        <p>부산시 사상구 주례동</p>
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

    )

}

export default ContactKor;