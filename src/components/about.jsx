import styles from './about.module.css'

function About() {
    return (
        <div className={styles.about}>
            <h1>ABOUT ME</h1>
            <div className={styles.flex}>
                <div className={styles.info}>
                    <h2>PERSONAL INFO</h2>
                    <p><span>Name</span> minyeo kang</p>
                </div>
                <div className={styles.edu}>
                    <h2>EDUCATION</h2>
                    <p className="date">2013-2017</p>
                    <p className="college">Hotel management tourism - KIT</p>
                    <p className="txt">loreminsp;dkfk</p>
                </div>
            </div>
            <h2 className={styles.skill}>MY SKILLS</h2>
        </div>
    )

}

export default About;