import { Mail, Phone, MapPin, Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg">D</span>
              </div>
              <span className="font-display font-bold text-xl">Fastcolorfashion</span>
            </div>
            <p className="text-primary-foreground/70 text-sm">
              Premium Direct to Film printing services in India. Quality prints that last with vibrant colors and durable finish.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>
                <button
                  onClick={() => scrollTo("pricing")}
                  className="hover:text-primary-foreground transition-colors"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("order-form")}
                  className="hover:text-primary-foreground transition-colors"
                >
                  Place Order
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("gallery")}
                  className="hover:text-primary-foreground transition-colors"
                >
                  Our Work
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>orders@dtfprints.in</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+91 7812865788</span>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 flex-shrink-0" />
                <span>WhatsApp: +91 7812865788</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>72, KNP Subramaniam Nagar Pudur, Pirivu, Dharapuram Road, Tiruppur, Tamil Nadu 641604</span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-3 mt-4">
              <a 
                href="https://www.instagram.com/fastcolorsretail/" 
                className="w-9 h-9 bg-primary-foreground/10 hover:bg-accent rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 bg-primary-foreground/10 hover:bg-accent rounded-full flex items-center justify-center transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center text-sm text-primary-foreground/50">
          <p>© {new Date().getFullYear()} Fastcolorfashion. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
