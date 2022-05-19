import styles from './home.module.css'
import HomeKor from './homeKor'
function Home(props) {
    return (
        <div className={styles.home}>
            <div className={styles.body}>

                {
                    props.eng === true && <div className={styles.flex}>
                        <div className={styles.img}>
                            <img src="img/profile.png" alt="mainimage" />
                        </div>
                        <dl className={styles.intro}>
                            <dt>Hello !</dt>
                            <dt>I’m Web Developer</dt>
                            <dd>I’m a Verstile Front-end Developer <br /> Based in Korea. Thanks for dropping in !<br />
                            </dd>
                        </dl>

                    </div>
                }
                {
                    props.eng === false && <HomeKor />
                }

            </div>
        </div>
    )

}

export default Home;