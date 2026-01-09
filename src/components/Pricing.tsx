import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const pricingTiers = [
  {
    name: "Small",
    size: 'Up to 5 meters',
    price: 260,
    unit: "per meter",
    features: [
      "Full color printing",
      "Soft hand feel",
      "Stretch friendly",
      "Wash resistant",
    ],
    popular: false,
  },
  {
    name: "Medium",
    size: 'Above 5 meters',
    price: 180,
    unit: "per meter",
    features: [
      "Full color printing",
      "Soft hand feel",
      "Stretch friendly",
      "Wash resistant",
      "Gang sheets available",
    ],
    popular: true,
  },
  {
    name: "Large",
    size: 'Above 20 meters',
    price: null,
    unit: "XXX",
    features: [
      "Full color printing",
      "Soft hand feel",
      "Stretch friendly",
      "Wash resistant",
      "Gang sheets available",
      "Priority processing",
    ],
    popular: false,
  },
  {
    name: "Custom",
    size: "Any size",
    price: null,
    unit: "custom quote",
    features: [
      "Full color printing",
      "Soft hand feel",
      "Stretch friendly",
      "Wash resistant",
      "Gang sheets available",
      "Priority processing",
      "Bulk discounts",
    ],
    popular: false,
  },
];

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
  }).format(price);
};

const Pricing = () => {
  const scrollToOrder = () => {
    document.getElementById("order-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-20 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-fluid-h2 font-bold mb-4">Simple Pricing</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-fluid-p">
            Transparent pricing based on design size. Bulk discounts available!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`relative bg-card rounded-2xl p-6 border transition-all duration-300 hover:shadow-elevated ${
                tier.popular
                  ? "border-accent shadow-lg scale-[1.02]"
                  : "border-border shadow-soft hover:border-accent/50"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-accent text-accent-foreground text-xs font-medium px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-1">{tier.name}</h3>
                <p className="text-sm text-muted-foreground">{tier.size}</p>
              </div>

              <div className="text-center mb-6">
                {tier.price !== null ? (
                  <>
                    <span className="text-4xl font-bold">{formatPrice(tier.price)}</span>
                    <span className="text-muted-foreground text-sm block mt-1">{tier.unit}</span>
                  </>
                ) : (
                  <span className="text-2xl font-semibold text-accent">Contact Us</span>
                )}
              </div>

              <ul className="space-y-3 mb-6">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full rounded-full ${
                  tier.popular ? "bg-accent hover:bg-accent/90 text-accent-foreground" : ""
                }`}
                variant={tier.popular ? "default" : "outline"}
                onClick={scrollToOrder}
              >
                {tier.price !== null ? "Order Now" : "Get Quote"}
              </Button>
            </div>
          ))}
        </div>

        {/* Bulk Discount Note */}
        <div className="text-center mt-10">
          <p className="text-muted-foreground">
            🎉 <span className="font-medium">Bulk Orders:</span> Get 10% off orders of 50+
            transfers, 15% off 100+ transfers
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
