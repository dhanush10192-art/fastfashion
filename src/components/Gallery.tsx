import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const imagesPerPage = 12;
const totalImages = 350;

// Generate 350 t-shirt images using LoremFlickr's t-shirt category
const images = Array.from({ length: totalImages }, (_, i) => ({
  id: i + 1,
  url: `https://loremflickr.com/400/300/t-shirt?random=${i + 1}`,
  title: `${i + 1}`,
}));

const Gallery = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalImages / imagesPerPage);

  const startIndex = (currentPage - 1) * imagesPerPage;
  const endIndex = startIndex + imagesPerPage;
  const currentImages = images.slice(startIndex, endIndex);

  const goToPrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const goToNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section 
      id="gallery" 
      className="py-20 bg-background relative overflow-hidden"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-fluid-h2 font-bold mb-4 text-white">Gallery</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-white/90 text-fluid-p">
            Explore our collection of 350 stunning t-shirt designs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {currentImages.map((image) => (
            <div key={image.id} className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <h3 className="text-white text-sm font-medium">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-4">
          <Button
            variant="outline"
            onClick={goToPrevious}
            disabled={currentPage === 1}
            aria-label="Previous page"
          >
            <ChevronLeft className="h-4 w-4 mr-2" />
            Previous
          </Button>

          <div className="flex items-center gap-2">
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              const page = Math.max(1, Math.min(totalPages - 4, currentPage - 2)) + i;
              return (
                <Button
                  key={page}
                  variant={page === currentPage ? "default" : "outline"}
                  size="sm"
                  onClick={() => goToPage(page)}
                  className="w-10 h-10"
                >
                  {page}
                </Button>
              );
            })}
            {totalPages > 5 && currentPage < totalPages - 2 && (
              <>
                <span className="text-white/50 px-2">...</span>
                <Button
                  variant="ghost"
                  onClick={() => goToPage(totalPages)}
                  className="w-10 h-10 rounded-full text-white/70 hover:text-white hover:bg-white/10"
                >
                  {totalPages}
                </Button>
              </>
            )}
          </div>

          <Button
            variant="ghost"
            className="text-white hover:text-accent hover:bg-white/10 rounded-full w-10 h-10 p-0"
            onClick={goToNext}
            disabled={currentPage === totalPages}
            aria-label="Next page"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        <div className="text-center mt-4 text-sm text-white/80">
          Page {currentPage} of {totalPages} ({totalImages} t-shirt designs)
        </div>
      </div>
    </section>
  );
};

export default Gallery;