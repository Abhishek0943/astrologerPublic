import React, { useEffect, useState } from 'react'
import styles from "./TerotComp.module.css"
import { useSelector } from 'react-redux';
function TerotComp({ onClick }) {
    const [time, setTime] = useState(0)

    const renderElem = () => {
        const a = new Date()
        a.setDate(a.getDate() + 1)
        const userDate = a
        const date = new Date()
        return (
            <button onClick={onClick}>Get Free Tarot</button>
        )
    }
    return (
        <>
            <div className={styles.warper} style={{ height: "auto", }}>
                <div className={styles.whatWeOffer} >
                    <div className={styles.tarot} >
                        <img src="/tarotbg.jpg" style={{ height: "100%", width: "100%" }} alt="" />
                        <div className={styles.tarotCon}>
                            <h3>Free Tarot</h3>
                            <p>Explore the wisdom of tarot with our free daily card reading. Each day, draw a single card to gain valuable insights into your life’s challenges and opportunities. This simple, no-cost service allows you to connect with the energy of the day and receive personalized guidance. Start each morning with a moment of reflection and discover what the cards have in store for you—completely free, every day.</p>
                            {
                                renderElem()
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TerotComp
