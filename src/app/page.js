import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Image
          src="/logo.png"
          alt="Nisarga Eco Consultants"
          className={styles.logo}
          width={750}
          height={250}
          priority
        />


        <div className={styles.info}>
          <p className={styles.infoHeader}>
            Where Sustainability Thrives!
          </p>
          <p className={styles.infoText}>
            Get ready to embark on a journey of regeneration with Us.
            We are gearing up to revolutionize the way you interact with the environment, offering a suite of services designed to breathe new life into your eco-practices.
          </p>

          <p className={styles.infoText}>
            We offer comprehensive solutions for Rainwater Harvesting, Green Audit, Energy Audit, Environment Audit, and Composting.
          </p>

          <p className={styles.infoText}>Stay tuned as we prepare to launch our website. </p>
        </div>

      </div>
    </main>
  );
}
