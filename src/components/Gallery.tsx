import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dumbbell, Users, Target, Clock, Trophy, Heart, Zap, Activity } from "lucide-react";
import OptimizedImage from "@/components/ui/OptimizedImage";

const Gallery = () => {
  const galleryImages = [
    {
      url: "/gallery/gym-equipment-1.jpg",
      title: "Modern Equipment",
      icon: Dumbbell
    },
    {
      url: "/gallery/group-training-1.jpg",
      title: "Group Training",
      icon: Users
    },
    {
      url: "/gallery/personal-training-1.jpg",
      title: "Personal Training",
      icon: Target
    },
    {
      url: "/gallery/high-intensity-1.jpg",
      title: "High Intensity",
      icon: Zap
    },
    {
      url: "/gallery/strength-training-1.jpg",
      title: "Strength Training",
      icon: Trophy
    },
    {
      url: "/gallery/premium-equipment-1.jpg",
      title: "Premium Equipment",
      icon: Dumbbell
    },
    {
      url: "/gallery/strength-zone-1.jpg",
      title: "Strength Zone",
      icon: Trophy
    },
    {
      url: "/gallery/fitness-studio-1.jpg",
      title: "Fitness Studio",
      icon: Activity
    },
    {
      url: "/gallery/training-area-1.jpg",
      title: "Training Area",
      icon: Target
    },
    {
      url: "/gallery/training-zone-1.jpg",
      title: "Training Zone",
      icon: Target
    },
    {
      url: "/gallery/training-facility-1.jpg",
      title: "Training Facility",
      icon: Target
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-900/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              OUR{" "}
              <span className="text-yellow-400">
                GALLERY
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Take a virtual tour of our state-of-the-art facility and see where transformation happens.
            </p>
          </div>

          {/* Carousel */}
          <div className="relative">
            <Carousel className="w-full max-w-5xl mx-auto">
              <CarouselContent>
                {galleryImages.map((image, index) => {
                  const IconComponent = image.icon;
                  return (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                      <div className="p-2">
                        <div className="relative group overflow-hidden rounded-xl bg-white/5 backdrop-blur-md border border-white/10">
                          <OptimizedImage
                            src={image.url}
                            alt={image.title}
                            aspectRatio="4/3"
                            className="transition-transform duration-300 group-hover:scale-110"
                            fallbackText="Gallery Image"
                          />
                          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute bottom-4 left-4 flex items-center gap-3">
                              <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center border border-white/20">
                                <IconComponent className="w-5 h-5 text-white" />
                              </div>
                              <h3 className="text-white text-xl font-semibold">{image.title}</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <CarouselPrevious className="left-4 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-yellow-400/80" />
              <CarouselNext className="right-4 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-yellow-400/80" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
