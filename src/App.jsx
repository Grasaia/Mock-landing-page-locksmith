import React from 'react';
import { Phone, ArrowRight, ShieldCheck, Clock, MapPin, Star, Key, Lock, Briefcase, Car } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-bg">
        <img src="/images/hero_locksmith_1781363648416.png" alt="Locksmith working on a smart lock" />
        <div className="hero-overlay"></div>
      </div>
      
      <header className="header">
        <div className="container">
          <div className="logo">
            <ShieldCheck size={32} color="var(--color-secondary)" />
            Fradon Lock Co.
          </div>
          <nav className="nav-links">
            <a href="#services">Services</a>
            <a href="#reviews">Reviews</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="hero-content">
          <div className="hero-badge">Serving Central NY Since 1966</div>
          <h1>Expert Locksmith Services You Can Trust</h1>
          <p>Licensed, bonded, and insured professionals providing top-tier residential, commercial, and automotive security solutions. Fast response, guaranteed quality.</p>
          
          <div className="hero-actions">
            <a href="tel:3154726988" className="btn btn-primary">
              <Phone size={20} style={{ marginRight: '0.5rem' }} />
              Call Now: (315) 472-6988
            </a>
            <a href="#quote" className="btn btn-outline">
              Request a Quote
            </a>
          </div>

          <div className="trust-indicators">
            <div className="trust-item">
              <ShieldCheck className="trust-icon" size={24} />
              <span>Licensed & Insured</span>
            </div>
            <div className="trust-item">
              <Clock className="trust-icon" size={24} />
              <span>Fast Response</span>
            </div>
            <div className="trust-item">
              <MapPin className="trust-icon" size={24} />
              <span>Trusted Local Business</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  const services = [
    {
      title: "Residential Security",
      desc: "Smart locks, rekeying, and complete home security solutions to keep your family safe.",
      img: "/images/service_residential_1781363658395.png",
      icon: <Lock size={24} />
    },
    {
      title: "Commercial Systems",
      desc: "Advanced access control, master key systems, and high-security locks for businesses.",
      img: "/images/service_commercial_1781363667620.png",
      icon: <Briefcase size={24} />
    },
    {
      title: "Automotive Locksmith",
      desc: "Key fob programming, transponder keys, and lockout assistance for all vehicles.",
      img: "/images/service_automotive_1781363675329.png",
      icon: <Car size={24} />
    }
  ];

  return (
    <section id="services" className="bg-light">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Our Premium Services</h2>
          <p className="section-subtitle">We offer comprehensive locksmith and security services tailored to your specific needs, using the latest technology and highest quality products.</p>
        </div>
        
        <div className="grid lg:grid-cols-3">
          {services.map((svc, idx) => (
            <div className="service-card" key={idx}>
              <img src={svc.img} alt={svc.title} className="service-img" />
              <div className="service-content">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--color-secondary)' }}>
                  {svc.icon}
                  <h3 style={{ margin: 0, color: 'var(--color-primary)' }}>{svc.title}</h3>
                </div>
                <p>{svc.desc}</p>
                <a href="#learn-more" className="service-link" style={{ marginTop: 'auto' }}>
                  Learn More <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeaturesSection = () => {
  const features = [
    { title: "Over 50 Years Experience", desc: "Established in 1966, we have decades of proven expertise in the community.", icon: <Clock /> },
    { title: "Licensed Professionals", desc: "Our technicians are factory-trained, bonded, and insured for your peace of mind.", icon: <ShieldCheck /> },
    { title: "Comprehensive Inventory", desc: "We stock hundreds of safes, locks, and security devices in our large showroom.", icon: <Key /> },
    { title: "Fair & Transparent Pricing", desc: "Professional services that are reasonably priced with no hidden fees.", icon: <Star /> }
  ];

  return (
    <section className="bg-white">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-2" style={{ alignItems: 'center', gap: '4rem' }}>
          <div>
            <h2 className="section-title">Why Choose Fradon Lock Co?</h2>
            <p className="section-subtitle" style={{ marginLeft: 0, textAlign: 'left' }}>When it comes to securing what matters most, experience counts. We combine traditional craftsmanship with modern technology.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '1.5rem', marginTop: '2rem' }}>
              {features.map((feat, idx) => (
                <div className="feature-item" key={idx}>
                  <div className="feature-icon">{feat.icon}</div>
                  <div className="feature-content">
                    <h3>{feat.title}</h3>
                    <p>{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            {/* Using hero image here again for aesthetic or could use another generated image if we had one. Let's just create a nice visual block instead. */}
            <div style={{ position: 'relative', borderRadius: '1rem', overflow: 'hidden', boxShadow: 'var(--shadow-xl)' }}>
               <img src="/images/hero_locksmith_1781363648416.png" alt="Experience" style={{ width: '100%', height: '500px', objectFit: 'cover' }} />
               <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}></div>
               <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', color: 'white' }}>
                 <div style={{ fontSize: '3rem', fontWeight: 'bold', color: 'var(--color-secondary)' }}>1966</div>
                 <div style={{ fontSize: '1.25rem', fontWeight: '500' }}>The year we started securing Central NY.</div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ReviewsSection = () => {
  const reviews = [
    { text: "Fast, professional, and courteous. They upgraded our office access control system flawlessly. Highly recommended for commercial needs.", author: "Michael T.", role: "Business Owner" },
    { text: "Locked out of my car in the rain. They arrived in 20 minutes and had me back on the road safely. Lifesavers!", author: "Sarah Jenkins", role: "Local Resident" },
    { text: "We've used Fradon for all our property management needs for over 10 years. Always reliable and fair pricing.", author: "David R.", role: "Property Manager" }
  ];

  return (
    <section id="reviews" className="bg-light">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Trusted by Central New York</h2>
          <p className="section-subtitle">Don't just take our word for it. See what our community has to say about our locksmith services.</p>
        </div>
        
        <div className="grid md:grid-cols-3">
          {reviews.map((rev, idx) => (
            <div className="review-card" key={idx}>
              <div className="review-stars">
                {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
              </div>
              <p className="review-text">"{rev.text}"</p>
              <div>
                <div className="review-author">{rev.author}</div>
                <div style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>{rev.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <h2>Ready to Upgrade Your Security?</h2>
        <p>Contact us today for a free consultation or emergency service.</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="tel:3154726988" className="btn" style={{ backgroundColor: 'white', color: 'var(--color-primary)' }}>
            <Phone size={20} style={{ marginRight: '0.5rem' }} />
            Call (315) 472-6988
          </a>
          <a href="#contact" className="btn btn-primary">
            Request Service Online
          </a>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="logo" style={{ marginBottom: '1rem' }}>
              <ShieldCheck size={28} color="var(--color-secondary)" />
              Fradon Lock Co.
            </div>
            <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '1.5rem' }}>
              Expert locksmith services, products, and security solutions for Syracuse and Central New York since 1966.
            </p>
          </div>
          
          <div>
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#services">Residential Locksmith</a></li>
              <li><a href="#services">Commercial Locksmith</a></li>
              <li><a href="#services">Automotive Services</a></li>
              <li><a href="#safes">Safes & Security</a></li>
            </ul>
          </div>
          
          <div>
            <h3>Contact Us</h3>
            <ul style={{ color: 'rgba(255,255,255,0.7)' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={16} /> (315) 472-6988
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MapPin size={16} /> Syracuse, NY
              </li>
              <li style={{ marginTop: '1rem' }}>
                <strong>Hours:</strong><br />
                Mon-Fri: 8:30am - 5:00pm<br />
                Sat: Limited Hours<br />
                Sun: Closed
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Fradon Lock Co. Mock Redesign by AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

function App() {
  return (
    <div className="app-container">
      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
      <ReviewsSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;
