import React from 'react'
import SideBar from './SideBar'
import styles from "../styles/Profile.module.css";
import { CiEdit} from "react-icons/ci";

function Profile() {
  return (
    <>
    <SideBar />
    <div className={styles.header}>
      <div className={styles.sec1}>
        <img src="/images/p1.jpg"  alt="img" />
            <div className={styles.first}>
              <p><b>Following</b></p>
              <p><b>0</b></p>
            </div>
            <div className={styles.second}>
              <p><b>Followers</b></p>
              <p><b>0</b></p>
            </div>
      </div>
      <div className={styles.text}>
        <div className={styles.details}>
        <h2>Vishakha Rajput</h2>
              <p>@Vishi2107</p>
              <p>LDRP||CE'24</p>
              <p>#LiveLoveLaugh</p>
              <p>C, C++, Java, HTML, CSS, Javascript, React JS, Vscode</p>
        </div>
        <div className={styles.edit}>
            <div className={styles.icon}>
              <CiEdit/>
            </div>
            <div className={styles.button}>
              <button>Edit Profile</button>
            </div>
        </div> 
      </div>
      {/* <div class="skill">
        <h2>Skills</h2>
          <span>C, C++, Java, HTML, CSS, Javascript, React JS, Vscode</span>
      </div> */}
      <div className={styles.links}>
        <h3>Website</h3>
          <span>www.abcd.com</span>
        <h3>Twitter link</h3>
          <span>twitter.com/username</span>
        <h3>GitHub</h3>
          <span>Vishi2107</span>
        <h3>LinkedIn</h3>
          <span>www.linkedin.com/in/vishakha-rajput-953b42257</span>
        <h3>Leetcode</h3>
          <span>https://leetcode.com/</span>
        <h3>Location</h3>
          <span>Ahmedabad, India</span>
      </div>
    </div>
    
   
    </>
  )
}

export default Profile