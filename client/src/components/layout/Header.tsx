import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";

const Header = () => {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 w-full bg-white z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="container mx-auto px-4 py-4 lg:py-2">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/sifabora.png"
              alt="Sifabora Logo"
              className="w-12 h-12 mr-4"
            />
            <span className="font-inter font-black text-xl">Sifabora</span>
          </Link>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-primary focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <i className="fas fa-times text-2xl"></i>
            ) : (
              <i className="fas fa-bars text-2xl"></i>
            )}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className={`font-medium py-4 ${
                location === "/"
                  ? "text-primary border-b-2 border-primary"
                  : "text-dark-gray hover:text-primary transition-colors duration-300"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`font-medium py-4 ${
                location === "/about"
                  ? "text-primary border-b-2 border-primary"
                  : "text-dark-gray hover:text-primary transition-colors duration-300"
              }`}
            >
              About Us
            </Link>
            <Link
              href="/services"
              className={`font-medium py-4 ${
                location === "/services"
                  ? "text-primary border-b-2 border-primary"
                  : "text-dark-gray hover:text-primary transition-colors duration-300"
              }`}
            >
              Services
            </Link>
            <Link
              href="/services/seo"
              className={`font-medium py-4 ${
                location === "/services/seo"
                  ? "text-primary border-b-2 border-primary"
                  : "text-dark-gray hover:text-primary transition-colors duration-300"
              }`}
            >
              SEO Management
            </Link>
            <Link
              href="/payment"
              className={`font-medium py-4 ${
                location === "/payment"
                  ? "text-primary border-b-2 border-primary"
                  : "text-dark-gray hover:text-primary transition-colors duration-300"
              }`}
            >
              Payment
            </Link>
            <Link
              href="/news"
              className={`font-medium py-4 ${
                location === "/news"
                  ? "text-primary border-b-2 border-primary"
                  : "text-dark-gray hover:text-primary transition-colors duration-300"
              }`}
            >
              News & Insights
            </Link>
            <Link
              href="/contact"
              className={`font-medium py-4 ${
                location === "/contact"
                  ? "text-primary border-b-2 border-primary"
                  : "text-dark-gray hover:text-primary transition-colors duration-300"
              }`}
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="font-medium bg-primary text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition-all duration-300"
            >
              Get Started
            </Link>
          </nav>
        </div>

        {/* Mobile Navigation */}
        <nav
          className={`lg:hidden mt-4 pb-4 ${
            mobileMenuOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col space-y-4">
            <Link
              href="/"
              className={`font-medium ${
                location === "/" ? "text-primary" : "text-dark-gray"
              }`}
              onClick={closeMobileMenu}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`font-medium ${
                location === "/about" ? "text-primary" : "text-dark-gray"
              }`}
              onClick={closeMobileMenu}
            >
              About Us
            </Link>
            <Link
              href="/services"
              className={`font-medium ${
                location === "/services" ? "text-primary" : "text-dark-gray"
              }`}
              onClick={closeMobileMenu}
            >
              Services
            </Link>
            <Link
              href="/services/seo"
              className={`font-medium ${
                location === "/services/seo" ? "text-primary" : "text-dark-gray"
              }`}
              onClick={closeMobileMenu}
            >
              SEO Management
            </Link>
            <Link
              href="/news"
              className={`font-medium ${
                location === "/news" ? "text-primary" : "text-dark-gray"
              }`}
              onClick={closeMobileMenu}
            >
              News & Insights
            </Link>
            <Link
              href="/contact"
              className={`font-medium ${
                location === "/contact" ? "text-primary" : "text-dark-gray"
              }`}
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="font-medium bg-primary text-white px-6 py-2 rounded-md text-center"
              onClick={closeMobileMenu}
            >
              Get Started
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
