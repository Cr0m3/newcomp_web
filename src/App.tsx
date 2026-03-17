import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import './App.css'

const TerminalSnippet = () => (
  <div className="terminal-snippet animate">
    <p><span>$</span> newcomp --version</p>
    <p>newcomp v2.0.4 (stable)</p>
    <p><span>$</span> newcomp status --product coltivo</p>
    <p>Product: Coltivo.de</p>
    <p>Status: <span>Active</span></p>
    <p>Uptime: 99.99%</p>
  </div>
)

function App() {
  const [scrolled, setScrolled] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="app">
      <div className="bg-grid" />
      <div className="bg-glow" />

      <nav className={scrolled ? 'scrolled' : ''}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
          <div className="logo">NEWCOMP_</div>
          <div className="nav-links">
            <a href="#products">{t('nav.products')}</a>
            <a href="#services">{t('nav.services')}</a>
            <a href="#about">{t('nav.about')}</a>
            <div className="lang-switcher" style={{ display: 'flex', gap: '0.5rem', marginLeft: '1rem' }}>
              <button onClick={() => changeLanguage('en')} className={i18n.language === 'en' ? 'active' : ''} style={{ background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer', fontSize: '0.8rem', opacity: i18n.language === 'en' ? 1 : 0.5 }}>EN</button>
              <button onClick={() => changeLanguage('de')} className={i18n.language === 'de' ? 'active' : ''} style={{ background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer', fontSize: '0.8rem', opacity: i18n.language === 'de' ? 1 : 0.5 }}>DE</button>
              <button onClick={() => changeLanguage('cs')} className={i18n.language === 'cs' ? 'active' : ''} style={{ background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer', fontSize: '0.8rem', opacity: i18n.language === 'cs' ? 1 : 0.5 }}>CS</button>
            </div>
            <a href="#contact" className="cta-button" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem', marginLeft: '1rem' }}>{t('nav.getStarted')}</a>
          </div>
        </div>
      </nav>

      <main className="container">
        <section className="hero animate">
          <div className="product-tag">{t('hero.tag')}</div>
          <h1>{t('hero.title')}</h1>
          <p>{t('hero.description')}</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <a href="#products" className="cta-button">{t('hero.viewProducts')}</a>
            <a href="#about" className="cta-button" style={{ background: 'transparent', color: '#fff', border: '1px solid var(--border-color)' }}>{t('hero.learnMore')}</a>
          </div>
          <TerminalSnippet />
        </section>

        <section id="products" className="products-section animate">
          <h2 className="section-title">{t('products.title')}</h2>
          <div className="products-grid">
            <div className="product-card">
              <div className="product-tag">{t('products.coltivo.tag')}</div>
              <h3>{t('products.coltivo.title')}</h3>
              <p>{t('products.coltivo.description')}</p>
              <a href="https://www.coltivo.de" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-color)', textDecoration: 'none', fontWeight: '600' }}>{t('products.coltivo.explore')}</a>
            </div>

            <div className="product-card">
              <div className="product-tag">{t('products.nexus.tag')}</div>
              <h3>{t('products.nexus.title')}</h3>
              <p>{t('products.nexus.description')}</p>
              <a href="#" style={{ color: 'var(--accent-color)', textDecoration: 'none', fontWeight: '600' }}>{t('products.nexus.explore')}</a>
            </div>

            <div className="product-card">
              <div className="product-tag">{t('products.openclaw.tag')}</div>
              <h3>{t('products.openclaw.title')}</h3>
              <p>{t('products.openclaw.description')}</p>
              <a href="#" style={{ color: 'var(--accent-color)', textDecoration: 'none', fontWeight: '600' }}>{t('products.openclaw.explore')}</a>
            </div>
          </div>
        </section>

        <section id="about" className="hero animate" style={{ padding: '4rem 0', borderTop: '1px solid var(--border-color)' }}>
          <h2 className="section-title">{t('about.title')}</h2>
          <p style={{ maxWidth: '800px', margin: '0 auto' }}>
            {t('about.description')}
          </p>
        </section>

        <section id="services" className="hero animate" style={{ padding: '4rem 0' }}>
          <h2 className="section-title">{t('services.title')}</h2>
          <p style={{ margin: '0 auto 2rem' }}>{t('services.description')}</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', textAlign: 'left' }}>
            <div style={{ padding: '1rem', borderLeft: '2px solid var(--accent-color)' }}>
              <h4>{t('services.managedNetworks.title')}</h4>
              <p style={{ fontSize: '0.9rem' }}>{t('services.managedNetworks.description')}</p>
            </div>
            <div style={{ padding: '1rem', borderLeft: '2px solid var(--accent-color)' }}>
              <h4>{t('services.customSoftware.title')}</h4>
              <p style={{ fontSize: '0.9rem' }}>{t('services.customSoftware.description')}</p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <p>{t('footer.rights')}</p>
          <p style={{ fontSize: '0.7rem', marginTop: '1rem' }}>{t('footer.systemRoot')}</p>
        </div>
      </footer>
    </div>
  )
}

export default App
