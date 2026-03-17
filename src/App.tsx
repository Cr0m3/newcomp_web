import { useEffect, useState } from 'react'
import './App.css'

const TerminalSnippet = () => (
  <div className="terminal-snippet animate">
    <p><span>$</span> necomp --version</p>
    <p>necomp v2.0.4 (stable)</p>
    <p><span>$</span> necomp status --product coltivo</p>
    <p>Product: Coltivo.de</p>
    <p>Status: <span>Active</span></p>
    <p>Uptime: 99.99%</p>
  </div>
)

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      <div className="bg-grid" />
      <div className="bg-glow" />

      <nav className={scrolled ? 'scrolled' : ''}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
          <div className="logo">NECOMP_</div>
          <div className="nav-links">
            <a href="#products">Products</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact" className="cta-button" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}>Get Started</a>
          </div>
        </div>
      </nav>

      <main className="container">
        <section className="hero animate">
          <div className="product-tag">NEXT GEN IT SOLUTIONS</div>
          <h1>Cultivating the Digital Future.</h1>
          <p>
            NECOMP provides high-performance IT infrastructure and bespoke software solutions 
            designed to scale with your ambitions.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <a href="#products" className="cta-button">View Products</a>
            <a href="#about" className="cta-button" style={{ background: 'transparent', color: '#fff', border: '1px solid var(--border-color)' }}>Learn More</a>
          </div>
          <TerminalSnippet />
        </section>

        <section id="products" className="products-section animate">
          <h2 className="section-title">Our Products</h2>
          <div className="products-grid">
            <div className="product-card">
              <div className="product-tag">SAAS / AGRI-TECH</div>
              <h3>Coltivo.de</h3>
              <p>
                An intelligent platform for cultivating digital growth. 
                Seamlessly integrating data analytics with sustainable practices 
                to optimize your yield and digital footprint.
              </p>
              <a href="#" style={{ color: 'var(--accent-color)', textDecoration: 'none', fontWeight: '600' }}>Explore Coltivo →</a>
            </div>

            <div className="product-card">
              <div className="product-tag">INFRASTRUCTURE</div>
              <h3>Nexus Grid</h3>
              <p>
                High-availability network infrastructure for modern enterprises. 
                Zero-latency connectivity powered by NECOMP's proprietary hardware.
              </p>
              <a href="#" style={{ color: 'var(--accent-color)', textDecoration: 'none', fontWeight: '600' }}>Learn More →</a>
            </div>

            <div className="product-card">
              <div className="product-tag">SECURITY</div>
              <h3>Shield OS</h3>
              <p>
                Hardened operating environment for critical data processing. 
                Advanced encryption meets effortless management.
              </p>
              <a href="#" style={{ color: 'var(--accent-color)', textDecoration: 'none', fontWeight: '600' }}>View Specs →</a>
            </div>
          </div>
        </section>

        <section id="services" className="hero animate" style={{ padding: '4rem 0' }}>
          <h2 className="section-title">IT Services</h2>
          <p style={{ margin: '0 auto 2rem' }}>
            From network architecture in Düsseldorf to global cloud migrations, 
            we build the backbone of your digital success.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', textAlign: 'left' }}>
            <div style={{ padding: '1rem', borderLeft: '2px solid var(--accent-color)' }}>
              <h4>Managed Networks</h4>
              <p style={{ fontSize: '0.9rem' }}>24/7 monitoring and optimization of your corporate network.</p>
            </div>
            <div style={{ padding: '1rem', borderLeft: '2px solid var(--accent-color)' }}>
              <h4>Custom Software</h4>
              <p style={{ fontSize: '0.9rem' }}>Tailor-made applications built with modern stacks (React, Go, Rust).</p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <p>&copy; 2026 NECOMP GmbH. All rights reserved.</p>
          <p style={{ fontSize: '0.7rem', marginTop: '1rem' }}>SYSTEM_ROOT: DÜSSELDORF // GERMANY</p>
        </div>
      </footer>
    </div>
  )
}

export default App
