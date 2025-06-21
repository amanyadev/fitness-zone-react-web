import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      review: "Fitness Zone transformed my life! The trainers are incredibly supportive and the community is amazing. I've lost 30 pounds and gained so much confidence.",
      role: "Member for 2 years"
    },
    {
      id: 2,
      name: "Mike Chen",
      rating: 5,
      review: "Best gym I've ever been to! The equipment is top-notch and the classes are challenging but fun. I've seen incredible results in just 6 months.",
      role: "Member for 6 months"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      rating: 5,
      review: "The personal training program here is exceptional. My trainer pushed me to achieve goals I never thought possible. Highly recommend!",
      role: "Member for 1 year"
    },
    {
      id: 4,
      name: "David Thompson",
      rating: 5,
      review: "Clean facility, friendly staff, and great atmosphere. The group classes are my favorite part. I've made friends and improved my fitness significantly.",
      role: "Member for 3 years"
    },
    {
      id: 5,
      name: "Lisa Wang",
      rating: 5,
      review: "As a beginner, I was nervous about joining a gym, but everyone here made me feel welcome. The trainers are patient and knowledgeable.",
      role: "Member for 8 months"
    },
    {
      id: 6,
      name: "James Wilson",
      rating: 5,
      review: "The nutrition guidance combined with the workout programs helped me achieve my fitness goals faster than expected. Great value for money!",
      role: "Member for 1.5 years"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating 
            ? "text-yellow-400 fill-current" 
            : "text-gray-400"
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              WHAT OUR{" "}
              <span className="text-yellow-400">
                MEMBERS SAY
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real stories from real people who transformed their lives at Fitness Zone.
            </p>
          </div>

          {/* Testimonials Carousel */}
          <div className="relative">
            <Carousel className="w-full max-w-5xl mx-auto">
              <CarouselContent>
                {testimonials.map((testimonial) => (
                  <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-4">
                      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 h-full hover:bg-white/10 transition-all duration-300">
                        {/* Rating */}
                        <div className="flex items-center mb-4">
                          {renderStars(testimonial.rating)}
                        </div>

                        {/* Review Text */}
                        <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">
                          "{testimonial.review}"
                        </p>

                        {/* Author Info */}
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-white font-bold text-lg">
                            {testimonial.name.charAt(0)}
                          </div>
                          <div>
                            <h4 className="text-white font-semibold text-sm">
                              {testimonial.name}
                            </h4>
                            <p className="text-gray-400 text-xs">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-yellow-400/80" />
              <CarouselNext className="right-4 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-yellow-400/80" />
            </Carousel>
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
                500+
              </div>
              <div className="text-gray-300 text-sm">
                Happy Members
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
                4.9
              </div>
              <div className="text-gray-300 text-sm">
                Average Rating
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
                50+
              </div>
              <div className="text-gray-300 text-sm">
                Success Stories
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
                98%
              </div>
              <div className="text-gray-300 text-sm">
                Satisfaction Rate
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 