import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { initGA } from './components/analytics';
import { Smartphone, Globe, Monitor, Users } from "lucide-react";

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

  useEffect(() => {
    console.log("Calling initGA...");
    initGA();
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
          <div className="flex flex-col">
            <h1 className="text-xl font-bold text-red-500">ClearFiles</h1>
            <p className="text-sm text-gray-500 tracking-wide">Your Work, Our Passion</p>
          </div>
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
            <li className="py-2 md:py-0"><a href="#about" onClick={scrollToSection('about')} className="block px-4 hover:text-red-500">About Us</a></li>
            <li className="py-2 md:py-0"><a href="#vision" onClick={scrollToSection('vision')} className="block px-4 hover:text-red-500">Vision</a></li>
            <li className="py-2 md:py-0"><a href="#mission" onClick={scrollToSection('mission')} className="block px-4 hover:text-red-500">Mission</a></li>
            <li className="py-2 md:py-0"><a href="#services" onClick={scrollToSection('services')} className="block px-4 hover:text-red-500">Services</a></li>
            <li className="py-2 md:py-0"><a href="#portfolio" onClick={scrollToSection('portfolio')} className="block px-4 hover:text-red-500">Portfolio</a></li>
            <li className="py-2 md:py-0"><a href="#contact" onClick={scrollToSection('contact')} className="block px-4 hover:text-red-500">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero */}
      {/* <section className="relative w-full h-[500px] bg-black overflow-hidden mt-16">
  <video
    className="w-full h-[500px] object-cover"
  src="samplevideo.mp4"
  controls
  playsInline
  >
    Your browser does not support the video tag.
  </video>
</section> */}
      <video
        src="Our-Passion.mp4"
        controls
        width="100%"
        height="360"
        autoPlay
        playsInline
      />









      {/* About */}
      <motion.section
        id="about"
        className="py-20 px-6 bg-gray-100"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-3xl font-semibold mb-4 text-center">About Us</h3>
        <div class="max-w-6xl mx-auto text-left space-y-6 text-gray-700">
          <p>
            With over 7.5 years of rich experience in the IT industry, Vyankatesh Jadhav is a passionate software professional and the visionary founder of nAsh solution. Throughout a career spanning multiple domains and technologies, He has consistently delivered innovative, reliable, and scalable software solutions for businesses across various industries.</p>
          <p>Driven by a commitment to quality and a deep understand.
            ing of modern digital demands, Vyankatesh Jadhav established nAsh solution with a clear mission — to help businesses embrace digital transformation, reduce paper dependency, and contribute to building a greener, more sustainable world.</p>
          <p>Specializing in custom software development, enterprise applications, and digital solutions, the company focuses on empowering clients by turning their aspirational goals into functional, future-ready technology products.</p>
          <p>At nAsh solution, we believe in:</p>
          <ul><li>	Delivering software with passion and precision</li>
            <li>Building strong, transparent relationships with clients</li>
            <li>Creating solutions that not only solve problems but also drive growth and innovation</li>
          </ul>
          <p>Join us as we move businesses forward, one smart solution at a time.

          </p></div>









      </motion.section>
      <motion.section
        id="vision"
        className="py-20 px-6 bg-gray-100 bg-[url('/images/vision-bg.jpg')] bg-cover bg-center bg-no-repeat"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}>
        <h3 className="text-3xl font-semibold mb-4 text-center">Vision</h3>
        <div class="max-w-6xl mx-auto text-left space-y-6 text-gray-700">
          <p>
            Our vision is to drive a sustainable future by minimizing paper consumption, preserving natural resources, and empowering organizations to embrace digital transformation.</p>

        </div>
      </motion.section>

      <motion.section
        id="mission"
        className="py-20 px-6 bg-gray-100"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}>
        <h3 className="text-3xl font-semibold mb-4 text-center">Mission</h3>
        <div class="max-w-6xl mx-auto text-left space-y-6 text-gray-700">
          -
          <p>Driven by our passion for innovation, we create software solutions that turn your objectives into tangible results, guiding your business toward its desired future.          </p></div>


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
        <h3 className="text-3xl font-semibold mb-10 text-center">Our Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 bg-gray-100 rounded shadow flex flex-col items-center">
            <Smartphone className="w-16 h-16 text-blue-500 mb-4" />
            <p className="text-lg font-medium">Mobile Application</p>
          </div>
          <div className="p-6 bg-gray-100 rounded shadow flex flex-col items-center">
            <Globe className="w-16 h-16 text-green-500 mb-4" />
            <p className="text-lg font-medium">Web Application</p>
          </div>
          <div className="p-6 bg-gray-100 rounded shadow flex flex-col items-center">
            <Monitor className="w-16 h-16 text-purple-500 mb-4" />
            <p className="text-lg font-medium">Desktop Application</p>
          </div>
          <div className="p-6 bg-gray-100 rounded shadow flex flex-col items-center">
            <Users className="w-16 h-16 text-red-500 mb-4" />
            <p className="text-lg font-medium">IT Consulting</p>
          </div>
        </div>

      </motion.section>

    
{/* Enquiry Form */}
<motion.section
  id="enquiry"
  className="py-20 px-6 bg-gray-100"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
  <h3 className="text-3xl font-semibold mb-10 text-center">Software Company Enquiry Form</h3>

  <div className="max-w-3xl mx-auto bg-white shadow p-8 rounded-lg space-y-6">

    {/* Company Name */}
    <div>
      <label className="block font-medium mb-1">Company Name</label>
      <input type="text" className="w-full border p-2 rounded" />
    </div>

    {/* Contact Person */}
    <div>
      <label className="block font-medium mb-1">Contact Person</label>
      <input type="text" className="w-full border p-2 rounded" />
    </div>

    {/* Email */}
    <div>
      <label className="block font-medium mb-1">Email Address</label>
      <input type="email" className="w-full border p-2 rounded" />
    </div>

    {/* Phone */}
    <div>
      <label className="block font-medium mb-1">Phone Number</label>
      <input type="text" className="w-full border p-2 rounded" />
    </div>

    {/* Website */}
    <div>
      <label className="block font-medium mb-1">Website (if any)</label>
      <input type="text" className="w-full border p-2 rounded" />
    </div>

    {/* Nature of Enquiry */}
    <div>
      <label className="block font-medium mb-2">Nature of Enquiry</label>
      <div className="space-y-2">
        <label className="flex items-center gap-2"><input type="checkbox" /> Software Development</label>
        <label className="flex items-center gap-2"><input type="checkbox" /> Website Development</label>
        <label className="flex items-center gap-2"><input type="checkbox" /> Mobile App Development</label>
        <label className="flex items-center gap-2"><input type="checkbox" /> IT Consulting</label>
        <label className="flex items-center gap-2"><input type="checkbox" /> Support & Maintenance</label>
        <label className="flex items-center gap-2">
          <input type="checkbox" /> Other (please specify)
          <input type="text" className="border p-1 rounded ml-2 flex-1" />
        </label>
      </div>
    </div>

    {/* Brief Description */}
    <div>
      <label className="block font-medium mb-1">Brief Description of Requirements</label>
      <textarea className="w-full border p-2 rounded h-24"></textarea>
    </div>

    {/* Preferred Communication Method */}
    <div>
      <label className="block font-medium mb-2">Preferred Communication Method</label>
      <div className="space-y-2">
        <label className="flex items-center gap-2"><input type="checkbox" /> Email</label>
        <label className="flex items-center gap-2"><input type="checkbox" /> Phone Call</label>
        <label className="flex items-center gap-2"><input type="checkbox" /> Video Meeting</label>
      </div>
    </div>

    {/* Timeline */}
    <div>
      <label className="block font-medium mb-2">Timeline</label>
      <div className="space-y-2">
        <label className="flex items-center gap-2"><input type="checkbox" /> Immediate</label>
        <label className="flex items-center gap-2"><input type="checkbox" /> Within 1 month</label>
        <label className="flex items-center gap-2"><input type="checkbox" /> Within 3 months</label>
        <label className="flex items-center gap-2"><input type="checkbox" /> Not sure</label>
      </div>
    </div>

    {/* Budget */}
    <div>
      <label className="block font-medium mb-1">Budget Estimate</label>
      <input type="text" className="w-full border p-2 rounded" />
    </div>

    {/* Additional Comments */}
    <div>
      <label className="block font-medium mb-1">Additional Comments</label>
      <textarea className="w-full border p-2 rounded h-20"></textarea>
    </div>

    {/* Consent */}
    <div className="flex items-center gap-2">
      <input type="checkbox" />
      <label>I agree to receive further information and updates from the company.</label>
    </div>

    {/* Submit Button */}
    <div className="text-center mt-6">
      <button className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600">
        Submit Enquiry
      </button>
    </div>
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
