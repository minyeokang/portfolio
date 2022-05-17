import styles from './about.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function About() {
    return (
        <div className={styles.about}>
            <div className={styles.flex}>
                <div className={styles.info_left}>
                    <h1><img src="img/about.jpg" alt="profile" /></h1>
                    <div>
                        <h2>Minyeo Kang  <FontAwesomeIcon icon="fa-solid fa-caret-down" className={styles.h2icon} /></h2>
                        <p>I'm frontend web developer focus on <br />providing trendy web design and <br />user friendly experience. I speak native <br />korean and very fluent english.
                        </p>
                    </div>
                </div>
                <div className={styles.info_right}>
                    <div className={styles.edu}>
                        <h2>Education</h2>

                        <div className={styles.edu_flex}>
                            <FontAwesomeIcon icon="fa-solid fa-book-open" className={styles.degree} />
                            <div><p className={styles.major}> Responsive Web Design</p>
                                <p className={styles.school}>  Busan IT training center in 2021-2022</p></div>

                        </div>
                        <div className={styles.edu_flex}>
                            <FontAwesomeIcon icon="fa-solid fa-graduation-cap" className={styles.degree} />
                            <div>
                                <p className={styles.major}>  Hotel Management Tourism</p>
                                <p className={styles.school}>KIT in 2013-2017</p>
                            </div>
                        </div>

                    </div>
                    <div className={styles.skill}>
                        <h2>My Skills</h2>

                        <div className={styles.box}>

                            <p> <img src="img/icon/html.svg" alt="html" /></p>
                            <p><img src="img/icon/css.svg" alt="css" /></p>
                            <p><img src="img/icon/js.svg" alt="js" /></p>
                            <p>                            <img src="img//icon/jquery.svg" alt="jquery" /></p>
                            <br />
                            <p> <img src="img/icon/react.svg" alt="react" /></p>
                            <p> <img src="img/icon/redux.svg" alt="redux" /></p>
                            <p><img src="img/icon/sasslogo.svg" alt="sass" /></p>
                            <p><img src="img/icon/bootstrap.svg" alt="bootstrap" /></p>
                            <br />
                            <p><img src="img/icon/ai.svg" alt="ai" /></p>
                            <p><img src="img/icon/ps.svg" alt="psd" /></p>
                            <p><img src="img/icon/figma.svg" alt="figma" /></p>
                            <p><img src="img/icon/git.svg" alt="git" /></p>

                        </div>

                    </div>
                </div>



            </div>


        </div>
    )

}

export default About;