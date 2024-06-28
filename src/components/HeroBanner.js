import React from 'react';

function HeroBanner() {
  return (
    <section id="hero-banner">
      <div className="banner-content">
        <div className="text-container">
          <h1>
            <span className='mobile'>Mobile</span>
            <span className='app'>Apps</span>
          </h1>
          <button className="button-hero">GITHUB.COM/MATHEUSANDRELL</button>
        </div>
        <div className="image-container">
          <img src="caminho/para/sua/imagem.jpg" alt="Mobile Apps Showcase" />
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
