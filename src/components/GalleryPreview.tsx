import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const GalleryPreview = () => {
  // Show first 6 images as preview
  const previewImages = [
    { id: 1, url: "https://picsum.photos/400/300?random=1", title: "1" },
    { id: 2, url: "https://picsum.photos/400/300?random=2", title: "2" },
    { id: 3, url: "https://picsum.photos/400/300?random=3", title: "3" },
    { id: 4, url: "https://picsum.photos/400/300?random=4", title: "4" },
    { id: 5, url: "https://picsum.photos/400/300?random=5", title: "5" },
    { id: 6, url: "https://picsum.photos/400/300?random=6", title: "6" },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Gallery</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of stunning fashion prints and custom designs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {previewImages.map((image) => (
            <div key={image.id} className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <img
                src={image.url}
                alt={`Gallery Image ${image.title}`}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src = `https://via.placeholder.com/400x300/cccccc/666666?text=Image+${image.id}`;
                }}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <h3 className="text-white text-sm font-medium">Image {image.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full">
            <Link to="/gallery">
              View More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;