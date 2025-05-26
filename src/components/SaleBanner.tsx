import { motion } from "framer-motion";
import { useSale } from "@/contexts/SaleContext";
import { X } from "lucide-react";
import { useState } from "react";

const SaleBanner = () => {
  const { saleActive, saleMessage } = useSale();
  const [isVisible, setIsVisible] = useState(true);

  if (!saleActive || !isVisible) return null;

  return (
    <>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        className="fixed top-0 left-0 right-0 z-[60] bg-black/95 border-b border-yellow-500/20"
      >
        <div className="relative flex items-center justify-center py-2 px-4">
          <div className="flex-1 overflow-hidden">
            <div className="animate-marquee whitespace-nowrap flex items-center justify-center text-sm font-medium">
              {[...Array(3)].map((_, index) => (
                <span key={index} className="mx-4 inline-flex items-center text-yellow-400">
                  {saleMessage}
                </span>
              ))}
            </div>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="absolute right-2 p-1 hover:bg-yellow-500/10 rounded-full transition-colors text-yellow-400"
            aria-label="Close sale banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
      {/* Spacer div to prevent header overlap */}
      <div className="h-8" />
    </>
  );
};

export default SaleBanner; 