import styles from '../../styles/Designer.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/image';

export default function Necklace() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.header}>
        <h1>Design Your Necklace</h1>
        <p>Upload your idea or choose from our AI suggestions</p>
      </div>
      <div className={styles.uploadSection}>
        <input type="file" accept="image/*" className={styles.uploadInput} />
        <button className={styles.uploadButton}>Generate Design</button>
      </div>
      <div className={styles.preview}>
        <Image src="/images/necklace.jpg" alt="Preview Necklace" width={300} height={300} />
      </div>
      <Footer />
    </div>
  );
}
