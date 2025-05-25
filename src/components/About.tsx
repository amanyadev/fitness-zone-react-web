import { Target, Dumbbell, Users, Clock, Trophy, Heart } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Target,
      title: "Expert Trainers",
      description: "Our certified trainers bring years of experience and passion to help you reach your fitness goals safely and effectively."
    },
    {
      icon: Dumbbell,
      title: "Premium Equipment",
      description: "State-of-the-art machines and free weights from top brands ensure you have everything needed for an effective workout."
    },
    {
      icon: Users,
      title: "Personal Programs",
      description: "Customized workout plans tailored to your specific goals, fitness level, and lifestyle for maximum results."
    },
    {
      icon: Clock,
      title: "Flexible Hours",
      description: "Open early morning to late evening to fit your busy schedule. Your fitness journey shouldn't wait."
    },
    {
      icon: Heart,
      title: "Community",
      description: "Join a supportive community of like-minded individuals who motivate and inspire each other every day."
    },
    {
      icon: Trophy,
      title: "Proven Results",
      description: "Hundreds of success stories from members who transformed their lives through dedication and our guidance."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900/50 backdrop-blur-sm relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,0,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,0,0.1),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              WHY CHOOSE 
              <span className="block text-yellow-400 font-fc-fast italic">
                K4 FITNESS?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're not just a gym - we're a community dedicated to helping you achieve your fitness goals with state-of-the-art equipment and expert guidance.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:border-yellow-400/30 transition-all duration-300 transform hover:scale-105 group hover:bg-white/10">
                  <div className="w-16 h-16 bg-yellow-400/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-yellow-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-yellow-400">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
