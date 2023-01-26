import React from 'react'
import SideBar from './SideBar'
import styles from "../styles/Notification.module.css";

function Notification() {
  return (
    <>
    <SideBar />
    <div className={styles.Container}>
        <div className={styles.Title}>
             <h2>Activity</h2>
        </div>
        <h4>Today</h4>
        <div className={styles.today}>
        <div className={styles.notifi_item}>
            <img src="/images/p1.jpg" alt="img"/>
            <div className={styles.text}>
                <p>Kaushal Kushwah liked your post</p>
            </div>
        </div>
        <div className={styles.notifi_item}>
            <img src="/images/p2.jpg" alt="img"/>
            <div className={styles.text}>
                <p>Tejas Patel commented on your post</p>
            </div>
        </div>
        <div className={styles.notifi_item}>
            <img src="/images/p3.jpg" alt="img"/>
            <div className={styles.text}>
                <p>Tanvi Patel posted something</p>
            </div>
        </div>
        <div className={styles.notifi_item}>
            <img src="/images/p4.jpg" alt="img"/>
            <div className={styles.text}>
                <p>Purvi Patel liked your post</p>
            </div>
        </div>
        <div className={styles.notifi_item}>
            <img src="/images/p5.jpg" alt="img"/>
            <div className={styles.text}>
                <p>Tejas Patel posted something.</p>
            </div>
        </div>
        <div className={styles.notifi_item}>
            <div className={styles.text}>
                <p><b>New events specially curated for you!</b></p>
            </div>
        </div>
         <div className={styles.notifi_item}>
            <img src="/images/p3.jpg" alt="img"/>
            <div className={styles.text}>
                <p>Veer Rajput mentioned you in a comment:@Vishi2103 Thank you so much.</p>
            </div>
        </div>
        </div>
        <h4>Yesterday</h4>
        <div className={styles.notifi_item}>
            <img src="/images/p3.jpg" alt="img"/>
            <div className={styles.text}>
                <p>Rajput-Devanshi, Soodhanshu-10,Santoshrajput727,Tejas2003 and others liked your post</p>
            </div>
        </div>
        <div className={styles.notifi_item}>
        <img src="/images/p2.jpg" alt="img"/>
            <div className={styles.text}>
                <p>Tejas Patel started following Tanvi Patel</p>
            </div>
        </div>
        <div className={styles.notifi_item}>
            <img src="/images/p6.jpg" alt="img"/>
            <div className={styles.text}>
                <p>Santosh Singh posted something</p>
            </div>
        </div>
        <div className={styles.notifi_item}>
            <img src="/images/p6.jpg" alt="img"/>
            <div className={styles.text}>
                <p>Santosh Singh posted something</p>
            </div>
        </div>
        <div className={styles.notifi_item}>
            <img src="/images/p6.jpg" alt="img"/>
            <div className={styles.text}>
                <p>Santosh Singh posted something</p>
            </div>
        </div>  
    </div>
    </>
  )
}

export default Notification
// import React from 'react'

// function Notification() {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Notification
