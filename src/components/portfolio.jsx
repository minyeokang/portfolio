
import styles from './portfolio.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
function Portfolio() {
    let [fade, setFade] = useState('')
    useEffect(() => {
        setFade('end')
    }, [])
    return (
        <div className={styles.portfolio}>
            <div className={styles.body}>
                <div className={styles.title}><h2> My projects</h2></div>

                <ul className={'start ' + fade}>
                    <li>
                        <div className={styles.mb} onClick={() => { window.open('https://minyeokang.github.io/space') }}></div>
                        <img src="img/space_main.jpg" alt="space" className={styles.mainImg} />
                        <div className={styles.abs}>
                            <div className={styles.list}>
                                <span>
                                    <img src='img/icon/react.svg' alt='react' /> Responsive Web
                                </span>

                                <div onClick={() => { window.open('https://minyeokang.github.io/space') }}>
                                    <FontAwesomeIcon icon="fa-solid fa-globe" className={styles.link} />Website
                                </div>

                                <div onClick={() => {
                                    window.open('https://minyeokang.github.io/space_styleguide')
                                }}>
                                    <FontAwesomeIcon icon="fa-solid fa-arrow-up-right-from-square" className={styles.link} />  Styleguide
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className={styles.mb} onClick={() => { window.open('https://minyeokang.github.io/globelist') }}></div>
                        <img src="img/globelist_main.jpg" alt="globelist" className={styles.mainImg} />
                        <div className={styles.abs}>
                            <div className={styles.list}>
                                <span>
                                    <img src='img/icon/jquery.svg' alt='jquery' /> Static Web
                                </span>

                                <div onClick={() => { window.open('https://minyeokang.github.io/globelist') }}>
                                    <FontAwesomeIcon icon="fa-solid fa-globe" className={styles.link} />Website
                                </div>

                                <div onClick={() => {
                                    window.open('https://minyeokang.github.io/globelist_styleguide')
                                }}>
                                    <FontAwesomeIcon icon="fa-solid fa-arrow-up-right-from-square" className={styles.link} />  Styleguide
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className={styles.mb} onClick={() => { window.open('https://minyeokang.github.io/soul') }}></div>
                        <img src="img/soul_main.jpg" alt="soul" className={styles.mainImg} />
                        <div className={styles.abs}>
                            <div className={styles.list}>
                                <span>
                                    <img src='img/icon/sasslogo.svg' alt='sass' /> Responsive Web
                                </span>

                                <div onClick={() => { window.open('https://minyeokang.github.io/soul') }}>
                                    <FontAwesomeIcon icon="fa-solid fa-globe" className={styles.link} />Website
                                </div>

                                <div onClick={() => {
                                    window.open('https://minyeokang.github.io/soul_styleguide')
                                }}>
                                    <FontAwesomeIcon icon="fa-solid fa-arrow-up-right-from-square" className={styles.link} />  Styleguide
                                </div>
                            </div>
                        </div>
                    </li>
                    <li onClick={() => { window.open('https://minyeokang.github.io/fullpage_soul') }}>
                        <img src="img/soulfull_main.jpg" alt="soul" className={styles.mainImg} />
                        <div className={styles.abs}>
                            <div className={styles.list}>
                                <p><img src='img/icon/fullpage.png' alt='fullpage' /> Fullscreen Web<br />
                                    <span><FontAwesomeIcon icon="fa-solid fa-globe" className={styles.link} />Website</span> </p>
                            </div>
                        </div>
                    </li>
                    <li onClick={() => { window.open('https://minyeokang.github.io/reminder') }}>
                        <img src="img/reminder-main.jpg" alt="reminder" className={styles.mainImg} />
                        <div className={styles.abs}>
                            <div className={styles.list}>
                                <p><img src='img/icon/react.svg' alt='react' /> PWA<br />
                                    <span><FontAwesomeIcon icon="fa-solid fa-globe" className={styles.link} />Website</span> </p>
                            </div>
                        </div>
                    </li>
                    <li onClick={() => { window.open('https://minyeokang.github.io/') }}>
                        <img src="img/reminder-main.jpg" alt="" className={styles.mainImg} />
                        <div className={styles.abs}>
                            <div className={styles.list}>
                                <p><img src='img/icon/cafe.JPG' alt='cafe' className={styles.link_cafe} />Shopping mall<br />
                                    <span><FontAwesomeIcon icon="fa-solid fa-globe" className={styles.link} />Website</span> </p>
                            </div>
                        </div>
                    </li>

                </ul>





            </div>
        </div>
    )

}

export default Portfolio;