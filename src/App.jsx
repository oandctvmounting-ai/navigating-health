import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import './tailwind.css';

// Helper NavLink with active styling
const NavLink = ({ to, children, ...props }) => {
  const navigate = useNavigate();
  const isActive = navigate() === `/${to}` || (navigate() === '/' && to === 'home');
  return (
    <Link to={to} className={isActive ? 'active' : ''} {...props}>
      {children}
    </Link>
  );
};

const App = () => {
  return (
    <Router>
      <nav className="hero">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-serif text-[var(--accent)]">N</span>
              <span className="text-xl font-serif text-[var(--fg)] tracking-tight">Navigating Health</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <NavLink to="home">Home</NavLink>
              <NavLink to="podcast">Podcast</NavLink>
              <NavLink to="real-people">Real People</NavLink>
              <NavLink to="about">About</NavLink>
            </div>
            <div className="flex items-center gap-3">
              <NavLink to="podcast"><button className="cta-btn cta-btn-primary px-6">Listen Now</button></NavLink>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-24">
        <Routes>
          <Route path="/" element={<Home /> />
          <Route path="podcast" element={<Podcast />} />
          <Route path="real-people" element={<RealPeople />} />
          <Route path="about" element={<About />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
