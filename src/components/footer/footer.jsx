import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div>
      <div className={styles.container}>
        <h2 className={styles.title}>Subscribe to our emails</h2>
        <p className={styles.subtitle}>
          Join our email list for exclusive offers and the latest news.
        </p>

        <div className={styles.inputContainer}>
          <input type="email" placeholder="Email" className={styles.input} />
          <button type="button" className={styles.button}>
            →
          </button>
        </div>
      </div>

      <div className={styles.companyInfo}>
        <p className={styles.companyName}>PinkParcel Services LLP</p>
        <p className={styles.contactInfo}>+91 98778 29376</p>

        <p className={styles.contactInfo}>
          <Link href="/">getpinkparcelindia@gmail.com</Link>
        </p>
      </div>

      <div className={styles.footer}>
        <p>
          © 2024, Pink Parcel Powered by Shopify · Refund policy · Privacy
          policy · Terms of service · Shipping policy
        </p>
      </div>
    </div>
  );
}
