import styles from './about.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function About() {
    return (
        <div className={styles.about}>
            <h1>ABOUT ME</h1>
            <div className={styles.flex}>
                <div className={styles.info}>
                    <h2>PERSONAL INFO</h2>
                    <p>Name<span>Minyeo Kang</span> </p>
                    <p>Email<span>minyeo0729@gmail.com</span> </p>
                    <p>Phone<span>+821030494123</span> </p>
                    <p>Address<span>Busan, Korea</span> </p>
                    <p>Language<span> Native korean, Fluent english</span></p>
                </div>
                <div className={styles.edu}>
                    <h2>EDUCATION</h2>
                    <div className={styles.eduIcon}>
                        <p className={styles.eduIcons} >
                            <FontAwesomeIcon icon="fa-solid fa-briefcase" />
                        </p>
                        <div className={styles.eduTxt}>
                            <p className={styles.date}> 2021-2022</p>
                            <p className={styles.college}>Responsive Web Design <span>- Busan IT training center</span></p>
                        </div>

                    </div>
                    <div className={styles.eduIcon}>
                        <p className={styles.eduIcons} >
                            <FontAwesomeIcon icon="fa-solid fa-briefcase" />
                        </p>
                        <div className={styles.eduTxt}>
                            <p className={styles.date}> 2021-2022</p>
                            <p className={styles.college}>Hotel Management Tourism <span>- KIT</span></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.skill}>
                <h2>MY SKILLS</h2>

                <div className={styles.ico}>
                    <div className={styles.box}>
                        <p>frontend</p>
                        <div>
                            <img src="img/icon/html.svg" alt="html" />
                            <img src="img/icon/css.svg" alt="css" />
                            <img src="img/icon/js.svg" alt="js" />
                        </div>

                    </div>
                    <div className={styles.box}>
                        <p>framework</p>
                        <div>
                            <img src="img//icon/jquery.svg" alt="jquery" />
                            <img src="img/icon/react.svg" alt="react" />
                            <img src="img/icon/redux.svg" alt="redux" />
                        </div>
                    </div>
                    <div className={styles.box}>
                        <p>css processor</p>
                        <div>
                            <img src="img/icon/sasslogo.svg" alt="sass" />
                            <img src="img/icon/postcss.svg" alt="postcss" />
                            <img src="img/icon/bootstrap.svg" alt="bootstrap" />
                        </div>
                    </div>
                    <div className={styles.box}>
                        <p>design</p>
                        <div>
                            <img src="img/icon/ai.svg" alt="ai" />
                            <img src="img/icon/ps.svg" alt="psd" />
                            <img src="img/icon/figma.svg" alt="figma" />
                        </div>
                    </div>
                    <div className={styles.box}>
                        <p>version control</p>
                        <div>
                            <img src="img/icon/github.svg" alt="github" />
                            <img src="img/icon/git.svg" alt="git" />
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )

}

export default About;