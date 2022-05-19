import styles from './home.module.css'

function HomeKor() {
    return (


        <div className={styles.flex}>
            <div className={styles.img}>
                <img src="img/profile.png" alt="mainimage" />
            </div>
            <dl className={styles.intro}>
                <dt>Hello !</dt>
                <dt>I’m Web Developer</dt>
                <dd className={styles.kr}>안녕하세요 다재다능한 개발자 강민여입니다.<br />
                    프론트엔드 개발을 중심으로 끊임없이 성장하고 있습니다.<br />
                </dd>
            </dl>

        </div>

    )

}

export default HomeKor;