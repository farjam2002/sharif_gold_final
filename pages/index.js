export default function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '50px', fontFamily: 'Arial' }}>
      <h1 style={{ fontSize: '3em', marginBottom: '10px' }}>Sharif Gold</h1>
      <p style={{ fontSize: '1.2em', color: '#555', marginBottom: '40px' }}>
        Luxury AI-powered Jewelry Design Platform
      </p>

      {/* بخش دسته‌بندی‌ها */}
      <div 
        style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '20px', 
          maxWidth: '800px', 
          margin: '0 auto' 
        }}
      >
        <a href="/designer/necklace" style={cardStyle}>
          <h2>Necklace</h2>
          <p>Design your luxury necklace</p>
        </a>

        <a href="/designer/ring" style={cardStyle}>
          <h2>Ring</h2>
          <p>Create your unique ring</p>
        </a>

        <a href="/designer/bracelet" style={cardStyle}>
          <h2>Bracelet</h2>
          <p>Craft the perfect bracelet</p>
        </a>

        <a href="/designer/earrings" style={cardStyle}>
          <h2>Earrings</h2>
          <p>Personalize your earrings</p>
        </a>
      </div>
    </div>
  );
}

// استایل کارت‌ها
const cardStyle = {
  display: 'block',
  padding: '20px',
  backgroundColor: '#f8f8f8',
  borderRadius: '8px',
  textDecoration: 'none',
  color: 'black',
  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  textAlign: 'center'
};
