import { Play } from "lucide-react";
import { useState } from "react";

const videos = [
  {
    thumbnail: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=400&q=80",
    title: "DTF Printing Process",
    duration: "2:45",
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1574634534894-89d7576c8259?w=400&q=80",
    title: "Color Matching Guide",
    duration: "3:12",
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=400&q=80",
    title: "Heat Transfer Tips",
    duration: "4:30",
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=400&q=80",
    title: "Material Selection",
    duration: "2:18",
    instagramUrl: "https://www.instagram.com/reel/DQ_M02eE6N2/",
  },
];

const VideoReels = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Watch & Learn</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our process and see how we create stunning prints
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {videos.map((video, index) => (
            <div
              key={index}
              className="group relative aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer shadow-soft hover:shadow-elevated transition-all duration-300"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              
              {/* Play Button */}
              <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                hoveredIndex === index ? "opacity-100" : "opacity-70"
              }`}>
                <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center shadow-lg transform transition-transform duration-300 group-hover:scale-110">
                  <Play className="w-6 h-6 text-accent-foreground fill-current ml-1" />
                </div>
              </div>

              {/* Info */}
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-primary-foreground font-medium text-sm line-clamp-2">
                  {video.title}
                </p>
                <p className="text-primary-foreground/70 text-xs mt-1">
                  {video.duration}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoReels;
