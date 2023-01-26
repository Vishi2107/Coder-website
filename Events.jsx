import React from 'react'
import SideBar from './SideBar'
import styles from "../styles/Events.module.css";

function Events() {
  return (
    <>
      <div className={styles.Container}>
        <div className={styles.title}>
          <h1><b>Events</b></h1>
        </div>
        <div className={styles.Container2}>
          <div className={styles.event}>
            <div className={styles.img}>
              <img src="/images/event.jpg" alt="" />
            </div>
            <div className={styles.details}>
              <h2>IIT Roorkee Young Coders Hackathon</h2>
              <div className={styles.disc}>
                <span> They offer hands-on learning and let you apply your computer science learning, ideas, and creativity. Here is an opportunity to improve your coding skills and compete with the best coders out there.</span>
              </div>
            </div>
          </div>
          <div className={styles.event}>
            <div className={styles.img}>
              <img src="/images/event.jpg" alt="" />
            </div>
            <div className={styles.details}>
              <h2>BIT Mesra Junior Hackathon</h2>
              <div className={styles.disc}>
                <span> It is an online coding hackathon where students can participate individually.  They also conduct individual matches online every week that can help participants gain experience and do well in the competition.</span>
              </div>
            </div>
          </div>
          <div className={styles.event}>
            <div className={styles.img}>
              <img src="/images/event.jpg" alt="" />
            </div>
            <div className={styles.details}>
              <h2>Codeforces</h2>
              <div className={styles.disc}>
                <span>Codeforces is a website that hosts competitive programming competitions. It is one of the most popular websites for its exciting features. This is one of the top programming competitions to apply for.</span>
              </div>
            </div>
          </div>
          <div className={styles.event}>
            <div className={styles.img}>
              <img src="/images/event.jpg" alt="" />
            </div>
            <div className={styles.details}>
              <h2>Hoya Hacks 2023 </h2>
              <div className={styles.disc}>
                <span> Hoya Hacks returns to Georgetown University on January 27-29. This 36-hour hackathon brings in about 200-400 undergraduate students from around the world. Students can attend in person or virtually. Hoya Hacks focuses on projects that align with the social good and can benefit the world.</span>
              </div>
            </div>
          </div>
          <div className={styles.event}>
            <div className={styles.img}>
              <img src="/images/event.jpg" alt="" />
            </div>
            <div className={styles.details}>
              <h2>Startup Weekend Global</h2>
              <div className={styles.disc}>
                <span>Techstars’ global hackathon focuses on Web3, decentralized finance(DeFi), metaverse, NFT, and gaming concepts. Participants design, develop, and pitch new startup ideas.</span>
              </div>
            </div>
          </div>
          <div className={styles.event}>
            <div className={styles.img}>
              <img src="/images/event.jpg" alt="" />
            </div>
            <div className={styles.details}>
              <h2>Facebook Hacker Cup</h2>
              <div className={styles.disc}>
                <span>  This is one of the top programming competitions to apply for. These coding competitions focus on problem-solving and algorithmic coding skills to advance through every year’s online rounds, and after making it to the global finals they will be earning the grand prize.</span>
              </div>
            </div>
          </div>
        </div>
      </div >
    <SideBar />
    </>
  )
}

export default Events