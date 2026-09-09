import React from 'react';
import './tailwind.css';

const About = () => {
  return (
    <section className="section section-light">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 tracking-tighter" style={{ color: 'var(--primary)' }}>
            About Navigating Health
          </h2>
          <p className="text-[var(--muted)] text-lg max-w-2xl mx-auto" style={{ color: 'var(--muted)' }}>
            Cindy's journey into health podcasting began with a simple belief: everyone has a story worth sharing, and every health journey deserves to be heard.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-20 reveal reveal-delay-1">
          <div>
            <h3 className="font-serif text-2xl mb-4" style={{ color: 'var(--primary)' }}>Our Mission</h3>
            <ul className="text-[var(--muted)] space-y-3">
              <li>To provide a platform for real, unfiltered health conversations</li>
              <li>To bridge the gap between expert knowledge and everyday experience</li>
              <li>To empower listeners with information to make informed decisions</li>
              <li>To foster a community of curiosity and continuous learning</li>
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-2xl mb-4" style={{ color: 'var(--primary)' }}>Cindy</h3>
            <p className="text-[var(--muted)] text-lg">
              After years of navigating our complex healthcare system personally and professionally, Cindy launched Navigating Health to create space for the stories that don't make the headlines. A former healthcare administrator turned podcast host, she believes the most powerful insights often come from those who've walked the path themselves.
            </p>
            <div className="mt-6 pt-6 border-t" style={{ borderColor: 'var(--border)' }}>
              <p className="text-[var(--muted)] text-sm">
                Subscribe. Listen. Share. Together we navigate.
              </p>
            </div>
          </div>
        </div>

        {/* Quick links */}
        <div className="mt-20 pt-16 border-t" style={{ borderColor: 'var(--border)' }}>
          <h3 className="font-serif text-xl mb-4" style={{ color: 'var(--primary)' }}>Quick Links</h3>
          <div className="grid grid-cols-2 gap-4 text-[var(--muted)]">
            <a href="#" className="hover:text-[var(--accent)] transition-colors">Episodes</a>
            <a href="#" className="hover:text-[var(--accent)] transition-colors">Real Stories</a>
            <a href="#" className="hover:text-[var(--accent)] transition-colors">Resources</a>
            <a href="#" className="hover:text-[var(--accent)] transition-colors">Shop</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
