import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { FaBars, FaTimes } from "react-icons/fa";
import icon from "../../public/sifabora.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return location === path;
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 w-full bg-white shadow-md z-50">
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
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className={`font-inter font-medium ${
                isActive("/")
                  ? "text-primary border-b-2 border-primary"
                  : "text-dark-gray hover:text-primary"
              } transition-colors duration-300 py-4`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`font-inter font-medium ${
                isActive("/about")
                  ? "text-primary border-b-2 border-primary"
                  : "text-dark-gray hover:text-primary"
              } transition-colors duration-300 py-4`}
            >
              About Us
            </Link>
            <Link
              href="/services"
              className={`font-inter font-medium ${
                isActive("/services")
                  ? "text-primary border-b-2 border-primary"
                  : "text-dark-gray hover:text-primary"
              } transition-colors duration-300 py-4`}
            >
              Services
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
              className={`font-inter font-medium ${
                isActive("/news")
                  ? "text-primary border-b-2 border-primary"
                  : "text-dark-gray hover:text-primary"
              } transition-colors duration-300 py-4`}
            >
              News & Insights
            </Link>
            <Link
              href="/contact"
              className={`font-inter font-medium ${
                isActive("/contact")
                  ? "text-primary border-b-2 border-primary"
                  : "text-dark-gray hover:text-primary"
              } transition-colors duration-300 py-4`}
            >
              Contact
            </Link>
            <Link href="/contact">
              <Button className="font-inter bg-primary text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition-all duration-300">
                Get Started
              </Button>
            </Link>
          </nav>
        </div>

        {/* Mobile Navigation */}
        <nav
          className={`lg:hidden mt-4 pb-4 ${isMenuOpen ? "block" : "hidden"}`}
        >
          <div className="flex flex-col space-y-4">
            <Link
              href="/"
              className={`font-inter font-medium ${
                isActive("/") ? "text-primary" : "text-dark-gray"
              }`}
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`font-inter font-medium ${
                isActive("/about") ? "text-primary" : "text-dark-gray"
              }`}
              onClick={closeMenu}
            >
              About Us
            </Link>
            <Link
              href="/services"
              className={`font-inter font-medium ${
                isActive("/services") ? "text-primary" : "text-dark-gray"
              }`}
              onClick={closeMenu}
            >
              Services
            </Link>
            <Link
              href="/success-stories"
              className={`font-inter font-medium ${
                isActive("/success-stories") ? "text-primary" : "text-dark-gray"
              }`}
              onClick={closeMenu}
            >
              Success Stories
            </Link>
            <Link
              href="/news"
              className={`font-inter font-medium ${
                isActive("/news") ? "text-primary" : "text-dark-gray"
              }`}
              onClick={closeMenu}
            >
              News & Insights
            </Link>
            <Link
              href="/contact"
              className={`font-inter font-medium ${
                isActive("/contact") ? "text-primary" : "text-dark-gray"
              }`}
              onClick={closeMenu}
            >
              Contact
            </Link>
            <Link href="/contact" onClick={closeMenu}>
              <Button className="font-inter bg-primary text-white px-6 py-2 rounded-md w-full text-center">
                Get Started
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
