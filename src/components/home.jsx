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
                    <dd>I’m a kroean based web desginer  front-end developer focused on
                        crafting<br /> clean user-friendly experiences. im passionate abot bulding
                        excellent software<br /> that imports the lives of thoses around me.</dd>
                </dl>

            </div>
        </div>
    )

}

export default Home;