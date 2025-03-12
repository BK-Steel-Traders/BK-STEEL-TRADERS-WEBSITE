import React, { useState, useRef } from 'react';
import { Building2, Phone, Mail, MapPin, ArrowRight, History, Calculator, Shield } from 'lucide-react';
import QuoteForm from './components/QuoteForm';
import Timeline from './components/Timeline';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const quoteRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (sectionRef, section) => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(section);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-black/30 backdrop-blur-sm z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div 
              className="text-2xl font-bold cursor-pointer" 
              onClick={() => scrollToSection(homeRef, 'home')}
            >
              BK Steel Traders
            </div>
            <div className="hidden md:flex space-x-8">
              {[
                { name: 'home', ref: homeRef },
                { name: 'about', ref: aboutRef },
                { name: 'quote', ref: quoteRef },
                { name: 'contact', ref: contactRef }
              ].map((section) => (
                <button
                  key={section.name}
                  onClick={() => scrollToSection(section.ref, section.name)}
                  className={`capitalize ${
                    activeSection === section.name
                      ? 'text-blue-400'
                      : 'text-white hover:text-blue-300'
                  }`}
                >
                  {section.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={homeRef} id="home" className="min-h-screen flex items-center justify-center relative">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?auto=format&fit=crop&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: '0.2'
          }}
        />
        <div className="container mx-auto px-6 z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Forging Excellence in Steel Trading
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              Your trusted partner in premium steel solutions. Quality materials, competitive prices, and exceptional service.
            </p>
            <button
              onClick={() => scrollToSection(quoteRef, 'quote')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg flex items-center space-x-2 transform transition hover:scale-105"
            >
              <span>Request a Quote</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} id="about" className="py-20 bg-black/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">About Us</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="p-6 bg-gray-900/50 rounded-lg">
              <Building2 className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">Industry Leaders</h3>
              <p className="text-gray-300">
                With decades of experience, we've established ourselves as leaders in steel trading.
              </p>
            </div>
            <div className="p-6 bg-gray-900/50 rounded-lg">
              <Shield className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">Quality Assured</h3>
              <p className="text-gray-300">
                We maintain the highest standards in steel quality and customer service.
              </p>
            </div>
            <div className="p-6 bg-gray-900/50 rounded-lg">
              <Calculator className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">Competitive Pricing</h3>
              <p className="text-gray-300">
                Get the best value for your investment with our competitive pricing structure.
              </p>
            </div>
          </div>
          <Timeline />
        </div>
      </section>

      {/* Quote Section */}
      <section ref={quoteRef} id="quote" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Get a Quote</h2>
          <div className="max-w-2xl mx-auto">
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer ref={contactRef} id="contact" className="bg-black/60 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone size={20} className="text-blue-400" />
                  <a href="tel:+918939214812" className="hover:text-blue-400 transition-colors">
                    +91 89392 14812
                  </a>
                  <a href="tel:+919841065911" className="hover:text-blue-400 transition-colors">
                    +91 98410 65911
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={20} className="text-blue-400" />
                  <a href="mailto:bksteeltraders@gmail.com" className="hover:text-blue-400 transition-colors">
                    bksteeltraders@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin size={20} className="text-blue-400" />
                  <a
                    href="https://maps.google.com/?q=No+1,+Jones+Lane,+2nd+Floor,+Chennai,+Tamil+Nadu+600001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors"
                  >
                    No: 1, Jones Lane, 2nd Floor, Chennai - 600001
                    <br />
                    <span className="text-sm text-gray-400">Landmark: Opposite to Mannadi Metro</span>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {[
                  { name: 'Home', ref: homeRef },
                  { name: 'About', ref: aboutRef },
                  { name: 'Quote', ref: quoteRef },
                  { name: 'Contact', ref: contactRef }
                ].map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.ref, link.name.toLowerCase())}
                      className="hover:text-blue-400 transition-colors"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Business Hours</h3>
              <p className="mb-2">Monday - saturday: 9:30 AM - 7:30 PM</p>
              <p>Sunday: Holiday</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} BK Steel Traders. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;