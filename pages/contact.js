import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <>
      <Header />
      <main style={{ padding: '40px', color: '#d4af37', fontFamily: 'Cinzel, serif' }}>
        <h1>Contact Us</h1>
        <p>Email: info@sharifgold.com</p>
        <p>Phone: +98 912 123 4567</p>
        <p>Follow us on Instagram: @sharifgold</p>
        <form style={{ marginTop: '20px' }}>
          <input type="text" placeholder="Your Name" style={{ padding: '10px', marginRight: '10px' }} />
          <input type="email" placeholder="Your Email" style={{ padding: '10px', marginRight: '10px' }} />
          <button type="submit" style={{ padding: '10px', backgroundColor: '#d4af37', border: 'none', cursor: 'pointer' }}>
            Send
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
}
