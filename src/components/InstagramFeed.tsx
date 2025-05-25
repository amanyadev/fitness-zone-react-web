import { useState, useEffect } from 'react';
import { Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

interface InstagramPost {
  id: string;
  media_url: string;
  caption: string;
  permalink: string;
  timestamp: string;
  media_type: string;
}

interface InstagramFeedProps {
  username: string;
  accessToken?: string;
}

// Fallback posts when no API token is available
const fallbackPosts = [
  {
    id: '1',
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    caption: "Morning grind at K4 Fitness! 💪 Start your day with energy and determination. Join our morning workout sessions and experience the difference. #FitnessMotivation #MorningWorkout"
  },
  {
    id: '2',
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    caption: "New equipment alert! 🔥 We've just upgraded our cardio section with state-of-the-art machines. Come check them out and take your cardio game to the next level! #GymLife #FitnessEquipment"
  },
  {
    id: '3',
    image: "https://images.unsplash.com/photo-1549476464-37392f717541?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    caption: "Transform your body, transform your life 💫 Join our strength training sessions with expert trainers. Book your session today! #StrengthTraining #PersonalTraining"
  },
  {
    id: '4',
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    caption: "The energy in our group classes is unmatched! 🎉 Join the fun and get fit with friends. New batch starting this week. #GroupFitness #FitnessMotivation"
  }
];

const InstagramFeed = ({ username, accessToken }: InstagramFeedProps) => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      if (!accessToken) {
        console.log('No access token provided, using fallback content');
        return;
      }
      
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(
          `https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink,timestamp,media_type&access_token=${accessToken}`
        );

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error?.message || 'Failed to fetch Instagram posts');
        }

        const data = await response.json();
        if (!data.data || !Array.isArray(data.data)) {
          throw new Error('Invalid response format from Instagram API');
        }

        setPosts(data.data.slice(0, 4));
      } catch (err) {
        console.error('Error fetching Instagram posts:', err);
        setError(err instanceof Error ? err.message : 'Failed to load Instagram posts');
      } finally {
        setLoading(false);
      }
    };

    fetchInstagramPosts();
  }, [accessToken]);

  const openInstagram = () => {
    window.open(`https://instagram.com/${username}`, '_blank');
  };

  // Show fallback content if no API token is provided or if there's an error
  const showFallback = !accessToken || error;

  return (
    <div className="space-y-4">
      {loading ? (
        <div className="grid grid-cols-2 gap-2 sm:gap-3">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="aspect-square bg-gray-800 animate-pulse rounded-xl" />
          ))}
        </div>
      ) : showFallback ? (
        <div className="grid grid-cols-2 gap-2 sm:gap-3">
          {fallbackPosts.map((post) => (
            <motion.div
              key={post.id}
              className="relative group/post overflow-hidden rounded-xl cursor-pointer aspect-square"
              onClick={openInstagram}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={post.image}
                alt="Instagram post"
                className="w-full h-full object-cover transition-transform duration-300 group-hover/post:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover/post:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 right-2">
                  <p className="text-white text-[10px] sm:text-xs font-medium line-clamp-2">
                    {post.caption}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-2 sm:gap-3">
          {posts.map((post) => (
            <motion.a
              key={post.id}
              href={post.permalink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group/post overflow-hidden rounded-xl aspect-square"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={post.media_url}
                alt={post.caption || 'Instagram post'}
                className="w-full h-full object-cover transition-transform duration-300 group-hover/post:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover/post:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 right-2">
                  <p className="text-white text-[10px] sm:text-xs font-medium line-clamp-2">
                    {post.caption || 'Visit our Instagram for more!'}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      )}

      {error && (
        <div className="mt-4 text-center text-red-400 text-xs sm:text-sm">
          Error: {error}
        </div>
      )}

      <div className="text-center">
        <button
          onClick={openInstagram}
          className="text-yellow-400 hover:text-yellow-500 font-semibold flex items-center justify-center space-x-2 mx-auto group/btn text-sm sm:text-base"
        >
          <span>View all posts</span>
          <span className="group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
        </button>
      </div>
    </div>
  );
};

export default InstagramFeed; 