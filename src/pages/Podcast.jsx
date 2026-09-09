import React from 'react';
import './tailwind.css';

const Podcast = () => {
  return (
    <section className="section section-light">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 tracking-tighter" style={{ color: 'var(--primary)' }}>
            More Than a Podcast.
          </h2>
          <p className="text-[var(--muted)] text-lg max-w-2xl mx-auto" style={{ color: 'var(--muted)' }}>
            Navigating Health is about conversations, stories, experiences, and information that help people make more informed decisions about their health.
          </p>
        </div>

        {/* Featured Episode Card */}
        <div className="card reveal reveal-delay-1 max-w-2xl mx-auto">
          <div className="relative h-64 overflow-hidden rounded-t-lg">
            <img 
              src="/placeholder-episode.jpg" 
              alt="Episode artwork" 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              style={{ transform: 'scale(1)' }}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" className="hover:scale-110 transition-transform duration-300">
                <circle cx="12" cy="12" r="6"/>
                <path d="M8 12h5a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-3m-5-2a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h3"/>
              </svg>
            </div>
          </div>
          <div className="p-6">
            <h3 className="font-serif text-xl mb-2" style={{ color: 'var(--fg)' }}>The Science of Letting Go</h3>
            <p className="text-[var(--muted)] text-sm mb-4">How mindful practices transform chronic pain</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-[var(--muted)]">42:31</span>
              <button className="text-[var(--accent)] hover:underline">Listen Now</button>
            </div>
          </div>
        </div>

        {/* Episodes grid CTA */}
        <div className="text-center mt-16">
          <button className="cta-btn cta-btn-primary px-8 py-3 rounded mt-6">
            View All Episodes
          </button>
        </div>
      </div>
    </section>
  );
};

export default Podcast;
