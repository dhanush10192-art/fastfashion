import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const reviews = [
  {
    name: "Dhanush R",
    rating: 5,
    text: "Absolutely blown away by the quality! The colors are vibrant and the prints have held up perfectly after multiple washes.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    order: "Custom T-Shirts x 50",
  },
  {
    name: "James K.",
    rating: 5,
    text: "Fast turnaround and excellent customer service. My team's uniforms look professional and the pricing was great for bulk orders.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    order: "Sports Jerseys x 25",
  },
  {
    name: "Emily R.",
    rating: 5,
    text: "Started my small merch business with their prints. The quality helps me charge premium prices. Highly recommend!",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    order: "Mixed Apparel x 100",
  },
  {
    name: "Michael T.",
    rating: 5,
    text: "The DTF prints stretch beautifully with the fabric. No cracking or peeling even after heavy use. This is the real deal!",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    order: "Hoodies x 30",
  },
];

const CustomerReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-fluid-h2 font-bold mb-4">What Our Customers Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-fluid-p">
            Join hundreds of satisfied customers who trust us with their prints
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto overflow-hidden">
          <div className="relative min-h-[400px]">
            {reviews.map((review, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-500 p-6 ${
                  index === currentIndex
                    ? "opacity-100 translate-x-0"
                    : index < currentIndex
                    ? "opacity-0 -translate-x-full"
                    : "opacity-0 translate-x-full"
                }`}
              >
                <div className="bg-card border border-border rounded-2xl p-8 shadow-soft h-full flex flex-col justify-center">
                  <Quote className="w-10 h-10 text-accent/30 mb-4" />
                  
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                  
                  <p className="text-lg text-foreground mb-6 leading-relaxed">
                    "{review.text}"
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold">{review.name}</p>
                      <p className="text-sm text-muted-foreground">{review.order}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={goToPrevious}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <div className="flex gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-accent w-8"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={goToNext}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
