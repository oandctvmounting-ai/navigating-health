import React, { useEffect, useRef, useState } from 'react';
import './tailwind.css';

const Home = () => {
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.querySelector('.hero')?.offsetHeight || window.innerHeight;
      setScrolledPastHero(window.scrollY > heroHeight * 0.6);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen hero relative overflow-hidden">
      {/* Layer 5: Sky with slow drift */}
      <div className="layer sky" style={{ background: 'linear-gradient(180deg, #1e3a5f 0%, #0d1a2e 100%) }}></div>
      
      {/* Layer 4: Clouds drifting */}
      <div className="layer clouds" style={{ background: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 320 200\' xmlns=\'http://www.w3.org/2000/svg%3E%3Cpath fill=\'%23fff%27 d=\'M25.4,96 C54.4,74.6 91.4,65 121.6,81 C151.8,97 174.8,113 191.6,125 C208.4,137 225.4,152 248.6,155 C271.8,158 297.4,142 315.5,125 L320 125 L320 200 L25.4 200 Z\'/%3E%3C/svg%3E') no-repeat center / contain }}></div>
      
      {/* Layer 3: Distant mountains - slowest movement */}
      <div className="layer mountains" style={{ 
        background: 'linear-gradient(180deg, #2d6a4f 0%, #1e3a5f 100%)',
        transform: 'translate3d(0, 0, 0)'
      }}></div>
      
      {/* Layer 2: Forest / medium speed */}
      <div className="layer forest" style={{ 
        background: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 1440 320\' xmlns=\'http://www.w3.org/2000/svg%3E%3Cpath fill=\'#2d6a4f\' d=\'M0,288 L32,288 C64,278.7 128,256 160,256 C202.9,256 256,278.7 288,288 C319.1,297.3 352,304 384,304 C416.1,304 448,297.3 480,288 C512,278.7 576,256 608,256 C640,256 672,278.7 704,288 C736,297.3 768,304 800,304 C832,304 864,297.3 896,288 C928,278.7 960,256 992,256 C1024,256 1056,278.7 1088,288 C1120,297.3 1152,304 1184,304 C1216,304 1248,297.3 1280,288 C1312,278.7 1344,256 1376,256 C1408,256 1440,278.7 1440,288 L1440,320 L0,320 Z\'/%3E%3C/svg%3E') no-repeat center / contain'
      }}></div>
      
      {/* Layer 1: Foreground trees - fastest */}
      <div className="layer foreground-trees" style={{ 
        background: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 1440 320\' xmlns=\'http://www.w3.org/2000/svg%3E%3Cpath fill=\'#2d6a4f\' d=\'M0,32 L48,46.6 C96,61.3 192,57 240,75.7 C288,94.3 384,96 432,113.3 C480,130.7 576,133.3 624,133.3 C672,133.3 704,117.1 752,98.7 C796,80.3 832,68.7 864,69.3 C888,63.3 912,53.3 944,58.7 C976,53.3 1008,69.3 1056,77.3 C1104,85.3 1152,96 1184,96 C1216,96 1248,85.3 1280,80.3 C1312,75.7 1344,61.3 1392,46.6 C1440,32 1440 32 1440 32 L0,32 Z\'/%3E%3C/svg%3E') no-repeat center / contain'
      }}></div>
      
      {/* Trail/road leading to horizon */}
      <div className="layer trail" style={{ 
        background: 'linear-gradient(90deg, #f5c35e 0%, #e8b44e 100%)',
        transform: 'translate3d(0, 0, 0)'
      }}></div>
      
      {/* Horizon highlight */}
      <div className="layer horizon" style={{ 
        position: absolute;
        bottom: 15%;
        left: 5%;
        width: 15%;
        height: 2px;
        background: var(--accent);
        box-shadow: 0 0 20px rgba(212, 175, 55, 0.4)
      }}></div>
      
      {/* Hero text - fades in on scroll */}
      <div className="hero-text">
        <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: '1.1', marginBottom: '1rem' }}>
          Your Health Journey Matters.
        </h1>
        <p style={{ fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', color: var(--muted), marginBottom: '2rem' }}>
          Real conversations. Informed insights. Inspiring stories. A different way to navigate your health.
        </p>
        <div className="flex gap-3">
          <button className="cta-btn cta-btn-primary px-8 py-3 rounded">
            Listen to the Podcast
          </button>
          <button className="cta-btn cta-btn-secondary px-8 py-3 rounded">
            Explore the Journey
          </button>
        </div>
      </div>
      
      {/* Floating microphone visual in hero */}
      <div className="absolute -bottom-6 -right-6 md:-bottom-12 md:-right-12 text-[var(--accent)]">
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="12" cy="12" r="6"/>
          <path d="M8 12h5a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-3m-5-2a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h3"/>
        </svg>
      </div>
      
      {/* Decorative leaves that move slowly */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <svg className="absolute -top-2 -left-2 w-64 h-64 opacity-20" viewBox="0 0 100 100" fill="none">
          <path d="M20 50 Q 35 20 50 50 Q 65 80 80 50" stroke="var(--accent)" stroke-width="2" fill="none" opacity="0.3">
            <animateTransform attributeName="transform" type="rotate" dur="4s" from="0 50 50" to="360 50 50" repeatCount="indefinite"/>
          </path>
        </svg>
      </div>
    </div>
  );
};

export default Home;
