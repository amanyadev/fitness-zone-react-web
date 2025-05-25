import { Clock, Dumbbell, Users, Award, Target, Star } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

const BentoBox = () => {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,0,0.1),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <ScrollAnimation direction="up" delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                EXPERIENCE{" "}
                <span className="text-yellow-400 font-fc-fast italic">
                  K4 FITNESS
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our comprehensive fitness ecosystem designed for your success.
              </p>
            </div>
          </ScrollAnimation>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Large Card - Main Feature */}
            <ScrollAnimation direction="up" delay={0.3} className="lg:col-span-2 lg:row-span-2">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 group hover:border-yellow-400/30 transition-all duration-300 hover:bg-white/10 h-full">
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <div className="w-16 h-16 bg-yellow-400/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Award className="w-8 h-8 text-yellow-400" />
                    </div>
                    <h3 className="text-3xl font-bold mb-4 text-white">Premium Membership</h3>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      Access to all equipment, unlimited classes, personal training sessions, and exclusive member benefits.
                    </p>
                  </div>
                  <div className="flex items-center text-yellow-400 font-semibold">
                    <span>Learn More</span>
                    <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Stats Card */}
            <ScrollAnimation direction="up" delay={0.4}>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 group hover:border-yellow-400/30 transition-all duration-300 hover:bg-white/10 h-full">
                <div className="text-center">
                  <div className="w-12 h-12 bg-yellow-400/20 backdrop-blur-md rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <Star className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div className="text-4xl font-bold text-yellow-400 mb-2">500+</div>
                  <div className="text-gray-300">Happy Members</div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Feature Cards */}
            <ScrollAnimation direction="up" delay={0.5}>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 group hover:border-yellow-400/30 transition-all duration-300 hover:bg-white/10 h-full">
                <div className="w-12 h-12 bg-yellow-400/20 backdrop-blur-md rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-6 h-6 text-yellow-400" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">24/7 Access</h4>
                <p className="text-gray-400 text-sm">Train anytime that suits your schedule</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.6}>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 group hover:border-yellow-400/30 transition-all duration-300 hover:bg-white/10 h-full">
                <div className="w-12 h-12 bg-yellow-400/20 backdrop-blur-md rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Dumbbell className="w-6 h-6 text-yellow-400" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Latest Equipment</h4>
                <p className="text-gray-400 text-sm">State-of-the-art machines and free weights</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.7}>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 group hover:border-yellow-400/30 transition-all duration-300 hover:bg-white/10 h-full">
                <div className="w-12 h-12 bg-yellow-400/20 backdrop-blur-md rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-6 h-6 text-yellow-400" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Group Classes</h4>
                <p className="text-gray-400 text-sm">HIIT, Yoga, CrossFit and more</p>
              </div>
            </ScrollAnimation>

            {/* Wide Feature Card */}
            <ScrollAnimation direction="up" delay={0.8} className="lg:col-span-2">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 group hover:border-yellow-400/30 transition-all duration-300 hover:bg-white/10 h-full">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-2xl font-semibold text-white mb-2">Expert Trainers</h4>
                    <p className="text-gray-300">Certified professionals ready to guide your fitness journey</p>
                  </div>
                  <div className="w-16 h-16 bg-yellow-400/20 backdrop-blur-md rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-8 h-8 text-yellow-400" />
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoBox;
