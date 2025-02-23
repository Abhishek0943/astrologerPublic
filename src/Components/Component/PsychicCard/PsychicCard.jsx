import React, { useEffect, useState } from 'react'
import styles from './PsychicCard.module.css';
import { useNavigate } from 'react-router-dom'

function PsychicCard({ astrologers }) {
  const navigate = useNavigate()
  const [astro, setAstro] = useState({})
 
  return (
    <div className={styles.offerContainer}>
      {
        astro._id && (


          <div style={{ top: "0", left: "0", height: "100vh", width: "100vw", position: "fixed", zIndex: "10", backgroundColor: "rgba(0, 0, 0, 0.5)", display: "flex", justifyContent: "center", alignItems: "center" }}>

            <div style={{ backgroundColor: "white", padding: "30px 0px", maxWidth: "450px", width: "95%", margin: "auto", borderRadius: "10px", }}>
              <div style={{ height: "100px", aspectRatio: "1", borderRadius: "50%", border: "1px solid red", margin: "auto" }}>

              </div>
              <h3 style={{ color: "black", textAlign: "center", marginTop: "10px", fontWeight: "500", fontSize: "1.3rem", textTransform: "capitalize" }}>{astro.professionalInfo.name}</h3>
              <h3 style={{ color: "black", opacity: ".5", textAlign: "center", marginTop: "-2px", fontWeight: "600", fontSize: "1rem", }}>Wait for Accept your request</h3>
              <div style={{ display: "flex", margin: "20px 0px", justifyContent: "center", gap: "10%", padding: "0px 10%" }}>
                <button onClick={() => {
                  dispatch(CancelChatRequest({
                    astrologer: astro._id, user: user._id
                  }))
                  setAstro({})
                }} className={`${styles.btn}`} style={{ backgroundColor: "red", flex: "1", fontSize: "1rem", padding: "5px 15px", margin: "0", cursor: "pointer" }}>Cancel Request</button>
              </div>
            </div>
          </div>
        )
      }
      {
        astrologers?.map((e, i) => (
          <>
            <div className={styles.psychicCard}>
              <div className={styles.psychicBanner}>
              </div>
              <div className={styles.psychicImage}>
                <img src={`https://picsum.photos/id/${i+10}/200`} style={{ height: "100%", width: "100%" }} alt="" />
              </div>
              <div className={styles.psychicReview}>
                <p>175(4.5)</p>
              </div>
              <div className={styles.psychicDetails}>
                <p>{e.name}</p>
                <p>Astrology, Palmistry, Vastu</p>
                <p>Hindi, English, Tamil</p>
                <p>Exp: 3 Years</p>
              </div>
              <div className={styles.psychicCTA}>
                <p>₹ 1000</p>
                <button className={styles.chatButton} onClick={() => {
                  // dispatch(SendChatRequest({
                  //   astrologer: e._id, ...user,
                  // }))
                  // setAstro(e)
                }}>{e.status|| "Online"}</button>
              </div>

            </div>
          </>
        ))
      }
    </div>
  )
}

export default PsychicCard
