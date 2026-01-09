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
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/FCmain.png"
              alt="Fastcolorfashion Logo"
              className="w-auto h-10"
            />
            <span className="font-display font-bold text-xl"></span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
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
            <Button
              asChild
              className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-6"
            >
              <Link to="/#order-form">Place Order</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 relative z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed inset-0 z-[60] bg-black/60 backdrop-blur-[8px] transition-all duration-300 ${
            isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={closeMenu}
        >
          <div
            className={`fixed inset-y-0 right-0 w-full max-w-xs bg-white/10 backdrop-blur-xl shadow-2xl transition-transform duration-300 ease-out border-l border-white/20 ${
              isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <img
                  src="/FCmain.png"
                  alt="Fastcolorfashion"
                  className="h-8 w-auto brightness-0 invert"
                />
                <button
                  onClick={closeMenu}
                  className="p-2 text-white hover:bg-white/10 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto py-6 px-4">
                <div className="flex flex-col gap-2">
                  {[
                    { name: "Home", path: "/" },
                    { name: "Services", path: "/services" },
                    { name: "Gallery", path: "/gallery" },
                    { name: "Blog", path: "/blogs" },
                    { name: "Infrastructure", path: "/#infrastructure" },
                    { name: "About", path: "/#about" },
                    { name: "Pricing", path: "/#pricing" },
                  ].map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="group flex items-center justify-between px-4 py-4 text-lg font-medium text-white hover:bg-white/10 rounded-xl transition-all duration-200"
                      onClick={closeMenu}
                    >
                      <span className="group-hover:translate-x-2 transition-transform duration-200">
                        {item.name}
                      </span>
                      {/* Orange glow effect on hover */}
                      <div className="w-2 h-2 rounded-full bg-accent opacity-0 group-hover:opacity-100 shadow-[0_0_10px_rgba(249,115,22,0.8)] transition-all duration-200" />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="p-6 border-t border-white/10 bg-black/20">
                <Button
                  asChild
                  className="w-full bg-accent hover:bg-accent/90 text-white text-lg py-6 rounded-xl shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] transition-all duration-300"
                >
                  <Link to="/#order-form" onClick={closeMenu}>
                    Place Order
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
