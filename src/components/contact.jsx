import styles from './contact.module.css'

function Contact() {
    return (
        <div className={styles.contact}>
            <h1>CONTACT</h1>
            <div className={styles.flex}>
                <div>
                    <h2>keep in touch with me</h2>
                    <p>Feel free to get in touch with me, im awlays open<br />
                        to discussing new project, creatve ideas or <br />
                        opportunities to be part of your visions</p>
                    <dl>
                        <dt>Email me</dt>
                        <dd>dobieborie1@gmail.com</dd>
                    </dl>
                    <dl>
                        <dt>Email me</dt>
                        <dd>dobieborie1@gmail.com</dd>
                    </dl>
                    <dl>
                        <dt>Email me</dt>
                        <dd>dobieborie1@gmail.com</dd>
                    </dl>
                    <dl>
                        <dt>Email me</dt>
                        <dd>dobieborie1@gmail.com</dd>
                    </dl>
                </div>

                <div className={styles.form}>
                    <p>form box</p>
                </div>
            </div>

        </div >
    )

}

export default Contact;