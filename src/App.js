import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSection = (id) => (e) => {
    e.preventDefault();
    setMenuOpen(false);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="font-sans text-gray-800">
      {/* Navbar */}
      <header className={`fixed w-full top-0 z-50 transition-colors duration-300 ${scrolled ? 'bg-white shadow' : 'bg-transparent'}`}>
        <nav className="container mx-auto p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-red-500">Passion</h1>

          {/* Hamburger button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
                 viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Menu items */}
          <ul className={`md:flex md:space-x-6 absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none transition-all duration-300 ease-in-out
            ${menuOpen ? 'block' : 'hidden'} md:block text-center md:text-left`}>
            <li className="py-2 md:py-0"><a href="#about" onClick={scrollToSection('about')} className="block px-4 hover:text-red-500">About</a></li>
            <li className="py-2 md:py-0"><a href="#services" onClick={scrollToSection('services')} className="block px-4 hover:text-red-500">Services</a></li>
            <li className="py-2 md:py-0"><a href="#portfolio" onClick={scrollToSection('portfolio')} className="block px-4 hover:text-red-500">Portfolio</a></li>
            <li className="py-2 md:py-0"><a href="#contact" onClick={scrollToSection('contact')} className="block px-4 hover:text-red-500">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero */}
<section className="relative w-full h-[500px] bg-black overflow-hidden mt-16">
  <video
    className="absolute inset-0 w-full h-full object-cover"
    src="samplevideo1.mp4"
    autoPlay
    muted
    loop
    playsInline
  >
    Your browser does not support the video tag.
  </video>
</section>









      {/* About */}
      <motion.section
        id="about"
        className="py-20 px-6 bg-gray-100 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-3xl font-semibold mb-4">About Us</h3>
        <p className="max-w-2xl mx-auto text-gray-700">We are a team of passionate developers and designers who love crafting modern and responsive websites.</p>
      </motion.section>

      {/* Services */}
      <motion.section
        id="services"
        className="py-20 px-6 bg-white text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-3xl font-semibold mb-10">Our Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 bg-gray-100 rounded shadow">Web Design</div>
          <div className="p-6 bg-gray-100 rounded shadow">Web Development</div>
          <div className="p-6 bg-gray-100 rounded shadow">SEO Optimization</div>
        </div>
      </motion.section>

      {/* Portfolio */}
      <motion.section
        id="portfolio"
        className="py-20 px-6 bg-gray-100 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-3xl font-semibold mb-10">Our Work</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          <div className="bg-white p-4 shadow rounded">Project 1</div>
          <div className="bg-white p-4 shadow rounded">Project 2</div>
          <div className="bg-white p-4 shadow rounded">Project 3</div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        id="testimonials"
        className="py-20 px-6 bg-white text-center max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-3xl font-semibold mb-10">Testimonials</h3>
        <Swiper spaceBetween={50} slidesPerView={1} autoplay={{ delay: 4000 }} loop>
          <SwiperSlide>
            <blockquote className="italic text-gray-600">"Great work, very professional!"</blockquote>
            <p className="mt-2 font-semibold">- Client A</p>
          </SwiperSlide>
          <SwiperSlide>
            <blockquote className="italic text-gray-600">"Highly recommend this team."</blockquote>
            <p className="mt-2 font-semibold">- Client B</p>
          </SwiperSlide>
          <SwiperSlide>
            <blockquote className="italic text-gray-600">"Exceptional service and support."</blockquote>
            <p className="mt-2 font-semibold">- Client C</p>
          </SwiperSlide>
        </Swiper>
      </motion.section>

      {/* Contact */}
      <motion.section
        id="contact"
        className="py-20 px-6 bg-white text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-3xl font-semibold mb-4">Contact Us</h3>
        <p className="mb-6 text-gray-600">Feel free to reach out with any inquiries or feedback.</p>
        <a href="mailto:contact@example.com" className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600">Email Us</a>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        &copy; 2025 Passion. All rights reserved.
      </footer>
    </div>
  );
}
