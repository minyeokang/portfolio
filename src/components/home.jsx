import styles from './home.module.css'

function Home() {
    return (
        <div className={styles.body}>

            <div className={styles.flex}>
                <div className={styles.img}>
                    <img src="img/profile.png" alt="mainimage" />
                </div>
                <dl className={styles.intro}>
                    <dt>Hello !</dt>
                    <dt>I’m Web Developer</dt>
                    <dd>I’m a verstile Front-end developer <br /> based in Korea. Thanks for dropping in !<br />
                    </dd>
                </dl>

            </div>
        </div>
    )

}

export default Home;