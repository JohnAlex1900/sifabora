import { Link } from "wouter";
import {
  FaTwitter,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <span className="text-white font-inter font-bold text-2xl">
                Sifabora
              </span>
            </Link>
            <p className="text-white text-opacity-80 mb-6">
              Dedicated to protecting and restoring your digital reputation with
              expertise and integrity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-inter font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-white text-opacity-80 hover:text-opacity-100 transition-all duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-white text-opacity-80 hover:text-opacity-100 transition-all duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-white text-opacity-80 hover:text-opacity-100 transition-all duration-300"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="text-white text-opacity-80 hover:text-opacity-100 transition-all duration-300"
                >
                  News & Insights
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white text-opacity-80 hover:text-opacity-100 transition-all duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-inter font-bold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services"
                  className="text-white text-opacity-80 hover:text-opacity-100 transition-all duration-300"
                >
                  Online Defamation Removal
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-white text-opacity-80 hover:text-opacity-100 transition-all duration-300"
                >
                  Content Suppression & De-indexing
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-white text-opacity-80 hover:text-opacity-100 transition-all duration-300"
                >
                  Digital Footprint Protection
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-white text-opacity-80 hover:text-opacity-100 transition-all duration-300"
                >
                  Private Image Removal
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-white text-opacity-80 hover:text-opacity-100 transition-all duration-300"
                >
                  Reputation Analysis
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-white text-opacity-80 hover:text-opacity-100 transition-all duration-300"
                >
                  Content Strategy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-inter font-bold text-lg mb-6">
              Contact Information
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaPhoneAlt className="mt-1 mr-3 text-white text-opacity-80" />
                <span className="text-white text-opacity-80">
                  +254 780 000 002 <br /> +254 780 000 004 <br /> +254 704 000
                  004 <br /> +254 704 000 002
                </span>
              </li>
              <li className="flex items-start">
                <FaEnvelope className="mt-1 mr-3 text-white text-opacity-80" />
                <span className="text-white text-opacity-80">
                  info@sifabora.com
                </span>
              </li>
              <li className="flex items-start">
                <FaClock className="mt-1 mr-3 text-white text-opacity-80" />
                <span className="text-white text-opacity-80">24 / 7</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6">
          <p className="text-white text-opacity-70 text-xs mb-4">
            All services and software provided by Sifabira Africa are intended
            strictly for lawful, authorized, and consent-based use only. Users
            are solely responsible for complying with local privacy and
            cybercrime laws.
          </p>

          <div className="pt-8 border-t border-white border-opacity-20 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white text-opacity-80 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Sifabora. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/privacy-policy"
                className="text-white text-opacity-80 hover:text-opacity-100 text-sm transition-all duration-300"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms-of-service"
                className="text-white text-opacity-80 hover:text-opacity-100 text-sm transition-all duration-300"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookie-policy"
                className="text-white text-opacity-80 hover:text-opacity-100 text-sm transition-all duration-300"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
