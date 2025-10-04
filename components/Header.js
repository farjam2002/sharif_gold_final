import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>Sharif Gold</h1>
      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/designer/necklace">Necklaces</Link>
        <Link href="/designer/ring">Rings</Link>
        <Link href="/designer/bracelet">Bracelets</Link>
        <Link href="/designer/earrings">Earrings</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
