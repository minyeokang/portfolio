import { useState } from 'react';
import styles from './portfolio.module.css'

function Portfolio() {
    let [pops, setPops] = useState(false);
    return (
        <div className={styles.portfolio}>
            <h1>PORTFOLIO</h1>
            <ul className={styles.menu}>
                <li>all</li>
                <li>website</li>
                <li>spa</li>
                <li>practice</li>
                <li>design</li>
            </ul>
            <ul className={styles.box}>
                <li onClick={() => {
                    setPops(true)
                }}><img src="img/space_main.jpg" alt="스페이스" /></li>
                <li><img src="img/space_main.jpg" alt="스페이스" /></li>
                <li><img src="img/space_main.jpg" alt="스페이스" /></li>
                <li><img src="img/space_main.jpg" alt="스페이스" /></li>
                <li><img src="img/space_main.jpg" alt="스페이스" /></li>
                <li><img src="img/space_main.jpg" alt="스페이스" /></li>
            </ul>
            {pops == true ?
                <>
                    <div className={styles.pop}>
                        <div className={styles.pop_inner}>
                            <p>메롱</p>
                            <button onClick={() => { setPops(false) }}>닫기</button>
                        </div>
                    </div>
                </>
                : null
            }
        </div>
    )

}

export default Portfolio;