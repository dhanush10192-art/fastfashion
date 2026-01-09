import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        const navbar = document.querySelector("nav");
        if (navbar && !navbar.contains(e.target as Node)) {
          setIsMobileMenuOpen(false);
        }
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isMobileMenuOpen]);

  const closeMenu = () => setIsMobileMenuOpen(false);

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
            className="md:hidden p-2 relative z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div 
            ref={menuRef}
            className="md:hidden fixed inset-0 top-[60px] bg-white/98 backdrop-blur-md z-40 animate-in fade-in duration-200"
          >
            <div className="container px-4 py-6 max-h-[calc(100vh-60px)] overflow-y-auto">
              <div className="flex flex-col gap-4">
                <Link
                  to="/"
                  className="px-4 py-3 text-base font-medium hover:text-accent hover:bg-accent/10 transition-all rounded-lg active:bg-accent/20"
                  onClick={closeMenu}
                >
                  Home
                </Link>
                <Link
                  to="/services"
                  className="px-4 py-3 text-base font-medium hover:text-accent hover:bg-accent/10 transition-all rounded-lg active:bg-accent/20"
                  onClick={closeMenu}
                >
                  Services
                </Link>
                <Link
                  to="/gallery"
                  className="px-4 py-3 text-base font-medium hover:text-accent hover:bg-accent/10 transition-all rounded-lg active:bg-accent/20"
                  onClick={closeMenu}
                >
                  Gallery
                </Link>
                <Link
                  to="/blogs"
                  className="px-4 py-3 text-base font-medium hover:text-accent hover:bg-accent/10 transition-all rounded-lg active:bg-accent/20"
                  onClick={closeMenu}
                >
                  Blog
                </Link>
                <Link
                  to="/#infrastructure"
                  className="px-4 py-3 text-base font-medium hover:text-accent hover:bg-accent/10 transition-all rounded-lg active:bg-accent/20"
                  onClick={closeMenu}
                >
                  Infrastructure
                </Link>
                <Link
                  to="/#about"
                  className="px-4 py-3 text-base font-medium hover:text-accent hover:bg-accent/10 transition-all rounded-lg active:bg-accent/20"
                  onClick={closeMenu}
                >
                  About
                </Link>
                <Link
                  to="/#pricing"
                  className="px-4 py-3 text-base font-medium hover:text-accent hover:bg-accent/10 transition-all rounded-lg active:bg-accent/20"
                  onClick={closeMenu}
                >
                  Pricing
                </Link>
                <div className="pt-4 pb-2">
                  <Button
                    asChild
                    className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full w-full text-base py-6 font-semibold"
                  >
                    <Link to="/#order-form" onClick={closeMenu}>
                      Place Order
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
