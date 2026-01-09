import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white backdrop-blur-md shadow-soft py-3"
          : "bg-white py-5"
      }`}
    >
      <div className="container px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/FCmain.png"
              alt="Fastcolorfashion Logo"
              className="w-90 h-10"
            />
            <span className="font-display font-bold text-xl"></span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-sm font-medium hover:text-accent transition-colors"
            >
              Home
            </Link>
            <Link
              to="/services"
              className="text-sm font-medium hover:text-accent transition-colors"
            >
              Services
            </Link>
            <Link
              to="/gallery"
              className="text-sm font-medium hover:text-accent transition-colors"
            >
              Gallery
            </Link>
            <Link
              to="/blogs"
              className="text-sm font-medium hover:text-accent transition-colors"
            >
              Blog
            </Link>
            <Link
              to="/#infrastructure"
              className="text-sm font-medium hover:text-accent transition-colors"
            >
              Infrastructure
            </Link>
            <Link
              to="/#about"
              className="text-sm font-medium hover:text-accent transition-colors"
            >
              About
            </Link>
            <Link
              to="/#pricing"
              className="text-sm font-medium hover:text-accent transition-colors"
            >
              Pricing
            </Link>
            <Link
              to="/#order-form"
              className="text-sm font-medium hover:text-accent transition-colors"
            >
            </Link>
            <Button
              asChild
              className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-6"
            >
              <Link to="/#order-form">Place Order</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in bg-white">
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                className="text-left py-2 font-medium hover:text-accent transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/services"
                className="text-left py-2 font-medium hover:text-accent transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/gallery"
                className="text-left py-2 font-medium hover:text-accent transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link
                to="/blogs"
                className="text-left py-2 font-medium hover:text-accent transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/#infrastructure"
                className="text-left py-2 font-medium hover:text-accent transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Infrastructure
              </Link>
              <Link
                to="/#about"
                className="text-left py-2 font-medium hover:text-accent transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/#pricing"
                className="text-left py-2 font-medium hover:text-accent transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                to="/#order-form"
                className="text-left py-2 font-medium hover:text-accent transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Order
              </Link>
              <Button
                asChild
                className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full w-full"
              >
                <Link to="/#order-form" onClick={() => setIsMobileMenuOpen(false)}>Place Order</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
