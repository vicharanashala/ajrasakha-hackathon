import styles from "./index.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <h1>🚀 National Hackathon 2026</h1>
        <p>Build. Compete. Win Big.</p>

        <div className={styles.buttons}>
          <a href="/register" className={styles.primary}>Register</a>
          <a href="/join" className={styles.secondary}>Join</a>
          <a href="/submit" className={styles.outline}>Submit</a>
        </div>
      </section>

      <section className={styles.prizes}>
        <div className={`${styles.prize} ${styles.gold}`}>
          🥇 First Prize
          <span>₹50,000</span>
        </div>

        <div className={`${styles.prize} ${styles.silver}`}>
          🥈 Second Prize
          <span>₹25,000</span>
        </div>

        <div className={`${styles.prize} ${styles.bronze}`}>
          🥉 Third Prize
          <span>₹10,000</span>
        </div>
      </section>
    </div>
  );
}
