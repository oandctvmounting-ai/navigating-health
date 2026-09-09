import React from 'react';
import './tailwind.css';

const ExplorePodcast = () => {
  return (
    <section className="section section-light">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 tracking-tighter" style={{ color: 'var(--primary)' }}>
            Explore the Podcast
          </h2>
          <p className="text-[var(--muted)] text-lg max-w-2xl mx-auto" style={{ color: 'var(--muted)' }}>
            A growing library of conversations, interviews, and stories about health and wellness.
          </p>
        </div>

        {/* Category filter pills */}
        <div className="flex justify-center gap-3 mb-16 reveal reveal-delay-1">
          <button className="px-4 py-2 border rounded text-sm font-medium hover:text-[var(--accent)] border-[var(--muted)] transition-colors">
            Latest Conversations
          </button>
          <button className="px-4 py-2 border rounded text-sm font-medium hover:text-[var(--accent)] border-[var(--muted)] transition-colors">
            Expert Interviews
          </button>
          <button className="px-4 py-2 border rounded text-sm font-medium hover:text-[var(--accent)] border-[var(--muted)] transition-colors">
            Real Stories
          </button>
          <button className="px-4 py-2 border rounded text-sm font-medium hover:text-[var(--accent)] border-[var(--muted)] transition-colors">
            Beyond Healthcare
          </button>
        </div>

        {/* Episode grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 reveal reveal-delay-2">
          {/* Episode Card 1 */}
          <div className="card group hover:-translate-y-1 transition-transform duration-300">
            <div className="relative h-56 overflow-hidden rounded-lg">
              <img 
                src="/placeholder-episode2.jpg" 
                alt="Expert interview episode" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                style={{ transform: 'scale(1)' }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                <span className="text-xs text-[var(--accent)] uppercase tracking-wider">Expert Interview</span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-serif text-base mb-1" style={{ color: 'var(--fg)' }}>Navigating Chronic Pain</h3>
              <p className="text-[var(--muted)] text-xs">Dr. Sarah Chen on evidence-based approaches</p>
            </div>
            <div className="p-4 border-t border-[var(--border)]">
              <button className="w-full text-[var(--accent)] text-sm font-medium hover:underline">Listen Now →</button>
            </div>
          </div>

          {/* Episode Card 2 */}
          <div className="card group hover:-translate-y-1 transition-transform duration-300">
            <div className="relative h-56 overflow-hidden rounded-lg">
              <img 
                src="/placeholder-episode3.jpg" 
                alt="Real story episode" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                style={{ transform: 'scale(1)' }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                <span className="text-xs text-[var(--accent)] uppercase tracking-wider">Real Story</span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-serif text-base mb-1" style={{ color: 'var(--fg)' }}>The Gut-Brain Connection</h3>
              <p className="text-[var(--muted)] text-xs">Personal experience with IBS</p>
            </div>
            <div className="p-4 border-t border-[var(--border)]">
              <button className="w-full text-[var(--accent)] text-sm font-medium hover:underline">Listen Now →</button>
            </div>
          </div>

          {/* Episode Card 3 */}
          <div className="card group hover:-translate-y-1 transition-transform duration-300">
            <div className="relative h-56 overflow-hidden rounded-lg">
              <img 
                src="/placeholder-episode4.jpg" 
                alt="Alternative approaches episode" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                style={{ transform: 'scale(1)' }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                <span className="text-xs text-[var(--accent)] uppercase tracking-wider">Beyond Healthcare</span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-serif text-base mb-1" style={{ color: 'var(--fg)' }}>Ancestral Wisdom</h3>
              <p className="text-[var(--muted)] text-xs">Traditional healing practices</p>
            </div>
            <div className="p-4 border-t border-[var(--border)]">
              <button className="w-full text-[var(--accent)] text-sm font-medium hover:underline">Listen Now →</button>
            </div>
          </div>
        </div>

        {/* View All Episodes CTA */}
        <div className="text-center mt-16">
          <button className="cta-btn cta-btn-primary px-8 py-3 rounded mt-6">
            Browse All Episodes
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExplorePodcast;
