import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToOrder = () => {
    document.getElementById("order-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Parallax Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-100 ease-out"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80')`,
          transform: `translateY(${scrollY * 0.5}px) scale(1.1)`,
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
        {/* Additional gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-black/40"></div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="animate-fade-up">
            <span className="inline-block px-6 py-2 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full text-sm font-semibold mb-8 shadow-lg tracking-wide uppercase hover:bg-white/20 transition-colors cursor-default">
              Premium DTF Printing
            </span>
          </div>
          
          <h1 className="text-fluid-h1 font-bold mb-8 text-white animate-fade-up tracking-tight leading-tight" style={{ animationDelay: "0.1s" }}>
            Vibrant Prints, <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-300 drop-shadow-sm">
              Lasting Quality
            </span>
          </h1>
          
          <p className="text-fluid-p text-white/90 max-w-2xl mx-auto mb-12 animate-fade-up font-light leading-relaxed" style={{ animationDelay: "0.2s" }}>
            Transform your designs into stunning, durable prints with our professional DTF (Direct to Film) printing service. Perfect for apparel, accessories, and more.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-white px-10 py-7 text-lg rounded-full shadow-[0_0_30px_rgba(249,115,22,0.4)] hover:shadow-[0_0_50px_rgba(249,115,22,0.6)] hover:-translate-y-1 transition-all duration-300"
              onClick={scrollToOrder}
            >
              Place Your Order
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-10 py-7 text-lg rounded-full border-white/30 bg-white/5 text-white backdrop-blur-sm hover:bg-white hover:text-black transition-all duration-300 hover:-translate-y-1"
              onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Pricing
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2 backdrop-blur-sm">
          <div className="w-1.5 h-3 bg-white/80 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
