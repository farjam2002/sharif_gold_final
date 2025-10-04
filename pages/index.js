import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <header className={styles.header}>
        <h1 className={styles.title}>Sharif Gold</h1>
        <p className={styles.subtitle}>Luxury AI‑Powered Jewelry Design</p>
      </header>
      <section className={styles.gallery}>
        <div className={styles.card}>
          <Image src="/images/necklace.jpg" alt="Necklace" width={300} height={300} />
          <h3>Necklaces</h3>
        </div>
        <div className={styles.card}>
          <Image src="/images/ring.jpg" alt="Ring" width={300} height={300} />
          <h3>Rings</h3>
        </div>
        <div className={styles.card}>
          <Image src="/images/bracelet.jpg" alt="Bracelet" width={300} height={300} />
          <h3>Bracelets</h3>
        </div>
        <div className={styles.card}>
          <Image src="/images/earrings.jpg" alt="Earrings" width={300} height={300} />
          <h3>Earrings</h3>
        </div>
      </section>
      <Footer />
    </div>
  );
}
