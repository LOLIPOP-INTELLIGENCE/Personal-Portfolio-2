import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <body>
      <p className={styles.header_text_1}>Hello I'm</p>
      <p className={styles.header_text_2}>Manas Bam</p>
      <p className={styles.header_text_3}>Student at NTU</p>
      <div className={styles.button_container}>
        <a className={styles.cv} href="https://www.qwikresume.com/resume-samples/checkout-operator">Download CV</a>
        <a className={styles.contact} href="https://api.whatsapp.com/send/?phone=919108006252&text=Hi">Let's Talk</a>
      </div>
      <img className={styles.line} src="/icons/line.svg" alt="" />
      <div className={styles.photo_container}>
        <img className={styles.photo} src="/images/manas.png" alt="" />
     </div>
     <p className={styles.about_me}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tmpor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
     <img className={styles.line} src="/icons/line.svg" alt="" />
     <p className={styles.footer}>created with ♡ in NTU </p>
    </body>
  )
}
