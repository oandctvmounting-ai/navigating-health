import React from 'react';
import './tailwind.css';

const RealPeople = () => {
  return (
    <section className="section section-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 tracking-tighter" style={{ color: 'var(--primary)' }}>
            Real People. Real Journeys.
          </h2>
          <p className="text-[var(--muted)] text-lg max-w-2xl mx-auto" style={{ color: 'var(--muted)' }}>
            Because every health journey is different.
          </p>
        </div>

        {/* 3 Story Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Card 1 */}
          <div className="card reveal reveal-delay-1 p-6 md:p-8 hover:bg-[var(--primary)] hover:text-white transition-all duration-500">
            <div className="h-16 w-16 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(0, 35, 102, 0.1)' }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M17 21v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 21h10c.548-3.191-1.04-5.603-3-7.917A9.063 9.063 0 0 0 2 7c0 5.591 3.867 9.4 9 10.117z"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </div>
            <h3 className="font-serif text-xl mb-3" style={{ color: 'var(--primary)' }}>Maria's Story</h3>
            <p className="text-[var(--muted)] text-base leading-relaxed">"After years of chronic fatigue, I discovered the power of gentle movement and community support. Now I hike weekly."</p>
          </div>

          {/* Card 2 */}
          <div className="card reveal reveal-delay-2 p-6 md:p-8 hover:bg-[var(--primary)] hover:text-white transition-all duration-500">
            <div className="h-16 w-16 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(0, 35, 102, 0.1)' }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M17 21v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 21h10c.548-3.191-1.04-5.603-3-7.917A9.063 9.063 0 0 0 2 7c0 5.591 3.867 9.4 9 10.117z"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </div>
            <h3 className="font-serif text-xl mb-3" style={{ color: 'var(--primary)' }}>James's Journey</h3>
            <p className="text-[var(--muted)] text-base leading-relaxed">"The kitchen table became my classroom. Learning about nutrition from my grandmother changed everything for my family."</p>
          </div>

          {/* Card 3 */}
          <div className="card reveal reveal-delay-3 p-6 md:p-8 hover:bg-[var(--primary)] hover:text-white transition-all duration-500">
            <div className="h-16 w-16 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(0, 35, 102, 0.1)' }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M17 21v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 21h10c.548-3.191-1.04-5.603-3-7.917A9.063 9.063 0 0 0 2 7c0 5.591 3.867 9.4 9 10.117z"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </div>
            <h3 className="font-serif text-xl mb-3" style={{ color: 'var(--primary)' }}>Aisha's Path</h3>
            <p className="text-[var(--muted)] text-base leading-relaxed">"Stress was my constant companion until I found breathwork and the support of strangers who became friends."</p>
          </div>
        </div>

        {/* View all stories CTA */}
        <div className="text-center mt-16">
          <button className="cta-btn cta-btn-primary px-8 py-3 rounded mt-6">
            View All Real Stories
          </button>
        </div>
      </div>
    </section>
  );
};

export default RealPeople;
