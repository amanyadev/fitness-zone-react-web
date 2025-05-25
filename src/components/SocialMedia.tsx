
import { Instagram, Facebook } from "lucide-react";

const SocialMedia = () => {
  const instagramPosts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      caption: "Morning grind at K4 Fitness! 💪 #FitnessMotivation"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      caption: "New cardio equipment just arrived! 🔥"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1549476464-37392f717541?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      caption: "Strength training session with our expert trainers"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      caption: "Group class energy is unmatched! Join us today"
    }
  ];

  const openInstagram = () => {
    window.open('https://www.instagram.com/k4fitness', '_blank');
  };

  const openFacebook = () => {
    window.open('https://www.facebook.com/k4fitness', '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,0,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,0,0.1),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              FOLLOW OUR 
              <span className="text-yellow-400">
                JOURNEY
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay connected with our community and get daily motivation on social media.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Instagram Section */}
            <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-lg border border-white/10 rounded-3xl p-8 group hover:border-yellow-400/30 transition-all duration-500">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Instagram className="w-8 h-8 text-black" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">@k4fitness</h3>
                    <p className="text-gray-400">Follow us on Instagram</p>
                  </div>
                </div>
                <button
                  onClick={openInstagram}
                  className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105"
                >
                  Follow
                </button>
              </div>

              {/* Instagram Grid */}
              <div className="grid grid-cols-2 gap-3">
                {instagramPosts.map((post) => (
                  <div key={post.id} className="relative group/post overflow-hidden rounded-xl">
                    <img
                      src={post.image}
                      alt="Instagram post"
                      className="w-full h-40 object-cover transition-transform duration-300 group-hover/post:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover/post:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-2 left-2 right-2">
                        <p className="text-white text-xs font-medium line-clamp-2">{post.caption}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 text-center">
                <button
                  onClick={openInstagram}
                  className="text-yellow-400 hover:text-yellow-500 font-semibold flex items-center justify-center space-x-2 mx-auto group/btn"
                >
                  <span>View all posts</span>
                  <span className="group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                </button>
              </div>
            </div>

            {/* Facebook Section */}
            <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-lg border border-white/10 rounded-3xl p-8 group hover:border-yellow-400/30 transition-all duration-500">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Facebook className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">K4 Fitness</h3>
                    <p className="text-gray-400">Like our Facebook page</p>
                  </div>
                </div>
                <button
                  onClick={openFacebook}
                  className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Like
                </button>
              </div>

              {/* Facebook Content */}
              <div className="space-y-6">
                <div className="bg-black/30 rounded-xl p-6 border border-white/5">
                  <div className="flex items-start space-x-3 mb-4">
                    <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-black font-bold text-sm">K4</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold">K4 Fitness</p>
                      <p className="text-gray-400 text-sm">2 hours ago</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">
                    🔥 New week, new goals! Join us for our Monday Motivation class at 7 PM. 
                    Let's crush those fitness goals together! #MondayMotivation #K4Fitness
                  </p>
                  <div className="flex items-center space-x-6 text-gray-400 text-sm">
                    <span className="hover:text-blue-400 cursor-pointer">👍 42 Likes</span>
                    <span className="hover:text-blue-400 cursor-pointer">💬 8 Comments</span>
                    <span className="hover:text-blue-400 cursor-pointer">📤 Share</span>
                  </div>
                </div>

                <div className="bg-black/30 rounded-xl p-6 border border-white/5">
                  <div className="flex items-start space-x-3 mb-4">
                    <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-black font-bold text-sm">K4</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold">K4 Fitness</p>
                      <p className="text-gray-400 text-sm">1 day ago</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">
                    💪 Member spotlight: Congratulations to Sarah on achieving her 6-month transformation goal! 
                    Your dedication inspires us all! 🎉
                  </p>
                  <div className="flex items-center space-x-6 text-gray-400 text-sm">
                    <span className="hover:text-blue-400 cursor-pointer">👍 67 Likes</span>
                    <span className="hover:text-blue-400 cursor-pointer">💬 15 Comments</span>
                    <span className="hover:text-blue-400 cursor-pointer">📤 Share</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <button
                  onClick={openFacebook}
                  className="text-yellow-400 hover:text-yellow-500 font-semibold flex items-center justify-center space-x-2 mx-auto group/btn"
                >
                  <span>Visit our page</span>
                  <span className="group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                </button>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-gray-900/60 to-gray-800/60 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
              <h3 className="text-3xl font-bold mb-4 text-white">Join Our Community</h3>
              <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
                Connect with fellow fitness enthusiasts and stay motivated on your journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={openInstagram}
                  className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-semibold hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Instagram className="w-5 h-5" />
                  <span>Follow on Instagram</span>
                </button>
                <button
                  onClick={openFacebook}
                  className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Facebook className="w-5 h-5" />
                  <span>Like on Facebook</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
