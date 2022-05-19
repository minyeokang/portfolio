import styles from './about.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function AboutKor() {
    return (
        <div className={styles.flex}>
            <div className={styles.info_top}>
                <div className={styles.profileimg}>
                    <img src="img/about.jpg" alt="profile" />
                </div>
                <div className={styles.profiletxt}>
                    <div className={styles.bio}>
                        <h2>Minyeo Kang</h2>
                        <p className='kr'>저는 창의적인 디자인과 편리함을 극대화하는 기능을 <br />가진 웹사이트를 만드는 것을 좋아하며 직접 기획하고 <br /> 개발할 수 있는 실력을 가지고 있습니다.

                        </p>
                    </div>

                    <div className={styles.provide}>
                        <h2>Service</h2>
                        <div>
                            <dl>
                                <dt><FontAwesomeIcon icon="fa-solid fa-hand-holding-heart" /></dt>
                                <dd className='kr'>
                                    주어진 시간 내에 완성도 높은 결과물을 만드는 효율성을 가지고 있습니다.
                                </dd>
                            </dl>
                            <dl>
                                <dt><FontAwesomeIcon icon="fa-solid fa-people-roof" /></dt>
                                <dd className='kr'>뛰어난 의사소통과 밝은 성격으로 원만한 대인관계를 만들 수 있습니다.</dd>
                            </dl>

                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.info_bottom}>
                <div className={styles.edu}>
                    <h2>Education</h2>

                    <div className={styles.edu_flex}>
                        <FontAwesomeIcon icon="fa-solid fa-book-open" className={styles.degree} />
                        <div><p className={styles.major, 'kr'}> 반응형 웹디자인 ＆ 퍼블리싱</p>
                            <p className={styles.school, 'kr1'}>  부산 IT 교육센터 in 2021-2022</p></div>

                    </div>
                    <div className={styles.edu_flex}>
                        <FontAwesomeIcon icon="fa-solid fa-graduation-cap" className={styles.degree} />
                        <div>
                            <p className={styles.major, 'kr'} >  호텔관광경영학과</p>
                            <p className={styles.school, 'kr1'}>경남정보대 in 2013-2017</p>
                        </div>
                    </div>

                </div>
                <div className={styles.skill}>
                    <h2>My Skills</h2>

                    <div className={styles.box}>

                        <p> <img src="img/icon/html.svg" alt="html" /></p>
                        <p><img src="img/icon/css.svg" alt="css" /></p>
                        <p><img src="img/icon/js.svg" alt="js" /></p>
                        <p>           <img src="img//icon/jquery.svg" alt="jquery" /></p>
                        <p> <img src="img/icon/react.svg" alt="react" /></p>

                        <p> <img src="img/icon/redux.svg" alt="redux" /></p>
                        <br /><p><img src="img/icon/bootstrap.svg" alt="bootstrap" /></p>
                        <p><img src="img/icon/sasslogo.svg" alt="sass" /></p>

                        <p><img src="img/icon/ps.svg" alt="psd" /></p>
                        <p><img src="img/icon/ai.svg" alt="ai" /></p>

                        <p><img src="img/icon/figma.svg" alt="figma" /></p>
                        <p><img src="img/icon/git.svg" alt="git" /></p>

                    </div>

                </div>
            </div>
        </div>



    )

}

export default AboutKor;