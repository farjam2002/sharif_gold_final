import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
    <>
      <Header />
      <main style={{ padding: '40px', color: '#d4af37', fontFamily: 'Cinzel, serif' }}>
        <h1>About Sharif Gold</h1>
        <p>
          Sharif Gold is a luxury AI-powered jewelry design brand, blending timeless elegance with cutting-edge technology.
          We create bespoke pieces designed to reflect the unique personality and style of each client.
        </p>
      </main>
      <Footer />
    </>
  );
}
