
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Gallery = () => {
  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Modern Equipment"
    },
    {
      url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Group Training"
    },
    {
      url: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Personal Training"
    },
    {
      url: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Cardio Zone"
    },
    {
      url: "https://images.unsplash.com/photo-1549476464-37392f717541?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Strength Training"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              OUR 
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
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
                {galleryImages.map((image, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-2">
                      <div className="relative group overflow-hidden rounded-lg">
                        <img
                          src={image.url}
                          alt={image.title}
                          className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute bottom-4 left-4">
                            <h3 className="text-white text-xl font-semibold">{image.title}</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4 bg-black/50 border-orange-500/50 text-white hover:bg-orange-500" />
              <CarouselNext className="right-4 bg-black/50 border-orange-500/50 text-white hover:bg-orange-500" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
