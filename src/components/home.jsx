import styles from './home.module.css'

function Home() {
    return (
        <div className={styles.body}>
            <div className={styles.flex}>
                <div className={styles.img}>
                    <img src="img/Ellipse 10.png" alt="mainimage" />
                </div>
                <dl className={styles.intro}>
                    <dt>I'M MINYEO KANG</dt>
                    <dd>WEB DEVELOPER</dd>
                    <dd>I’m a verstile Front-end developer based in Korea <br />
                        Provide trendy Web Design and clean user-friendly experiences.<br />
                        I believe in Reliable and Committed work ethic   </dd>
                </dl>

            </div>
        </div>
    )

}

export default Home;