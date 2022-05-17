
import styles from './portfolio.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Portfolio() {

    return (
        <div className={styles.portfolio}>
            <div className={styles.title}><h2> My projects</h2>

            </div>

            <ul>
                <li>
                    <div>
                        <div className={styles.dt}>

                            <div className={styles.shadow} onClick={() => {
                                window.open('https://minyeokang.github.io/space_styleguide')
                            }}><p><FontAwesomeIcon icon="fa-solid fa-arrow-up-right-from-square" className={styles.link} />  Styleguide</p></div>
                            <img src="img/space_main.jpg" alt="스페이스" />
                        </div>
                        <div className={styles.dd}>
                            <span>
                                Responsive Web with React
                            </span>
                            <button onClick={() => { window.open('https://minyeokang.github.io/space') }}><FontAwesomeIcon icon="fa-solid fa-arrow-up-right-from-square" className={styles.link} />Visit  Website  </button>
                        </div>
                    </div>
                </li>
                <li>
                    <div>
                        <div className={styles.dt}>
                            <div className={styles.shadow} onClick={() => {
                                window.open('https://minyeokang.github.io/globelist_styleguide')
                            }}><p><FontAwesomeIcon icon="fa-solid fa-arrow-up-right-from-square" className={styles.link} />  Styleguide</p></div>
                            <img src="img/globelist_main.jpg" alt="글로브리스트" />
                        </div>
                        <div className={styles.dd}>
                            <span>Static Web with JQuery </span>
                            <button onClick={() => { window.open('https://minyeokang.github.io/globelist') }}><FontAwesomeIcon icon="fa-solid fa-arrow-up-right-from-square" className={styles.link} /> Visit Website  </button>
                        </div>
                    </div>
                </li>
                <li>
                    <div>
                        <div className={styles.dt}>
                            <div className={styles.shadow} onClick={() => {
                                window.open('https://minyeokang.github.io/soul_styleguide')
                            }}><p><FontAwesomeIcon icon="fa-solid fa-arrow-up-right-from-square" className={styles.link} />  Styleguide</p></div>
                            <img src="img/soul_main.jpg" alt="소울" />
                        </div>
                        <div className={styles.dd}>
                            <span> Responsive Web with Sass</span>
                            <button onClick={() => { window.open('https://minyeokang.github.io/soul') }}><FontAwesomeIcon icon="fa-solid fa-earth-americas" className={styles.link} /> Visit Website  </button>
                        </div>
                    </div>
                </li>
                <li>
                    <div>
                        <div className={styles.dt}>
                            <img src="img/soulfull_main.jpg" alt="소울" />
                        </div>
                        <div className={styles.dd}>
                            <span>Fullscreen Scrolling Website </span>
                            <button onClick={() => { window.open('https://minyeokang.github.io/fullpage_soul') }}><FontAwesomeIcon icon="fa-solid fa-earth-americas" className={styles.link} />  Visit Website  </button>
                        </div>
                    </div>
                </li>
                <li>
                    <div>
                        <div className={styles.dt}>
                            <img src="img/reminder-main.jpg" alt="리마인더" />
                        </div>
                        <div className={styles.dd}>
                            <span>Progressive Web App with React</span>
                            <button onClick={() => { window.open('https://minyeokang.github.io/reminder') }}><FontAwesomeIcon icon="fa-solid fa-earth-americas" className={styles.link} /> Visit Website  </button>
                        </div>
                    </div>
                </li>
                <li>
                    <div>
                        <div className={styles.dt}>
                            <img src="img/soul_main.jpg" alt="쇼핑몰" />
                        </div>
                        <div className={styles.dd}>
                            <span>Shopping mall with Cafe24</span>
                            <button onClick={() => { window.open('https://minyeokang.github.io/soul') }}><FontAwesomeIcon icon="fa-solid fa-earth-americas" className={styles.link} /> Visit Website  </button>
                        </div>
                    </div>
                </li>




            </ul>






        </div>
    )

}

export default Portfolio;