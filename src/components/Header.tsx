import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-yellow-400 fixed w-full z-50 shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('home')}
              className="flex items-center space-x-3 group"
            >
              <img 
                src="/logo.svg" 
                alt="K4 Fitness Zone" 
                className="h-8 w-auto" 
              />
              <span className="text-xl font-fc-fast italic text-zinc-900 group-hover:text-black transition-colors">K4 FITNESS ZONE</span>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-zinc-900 hover:text-black px-3 py-2 text-sm font-semibold transition-colors duration-200"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-zinc-900 hover:text-black px-3 py-2 text-sm font-semibold transition-colors duration-200"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-zinc-900 hover:text-black px-3 py-2 text-sm font-semibold transition-colors duration-200"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-zinc-900 text-yellow-400 px-6 py-2 rounded-lg text-sm font-semibold hover:bg-black transition-all duration-200 transform hover:scale-105 shadow-sm"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-zinc-900 hover:text-black p-2 transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-yellow-400 border-t border-zinc-900/10">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection('home')}
                className="text-zinc-900 hover:text-black block px-3 py-2 text-base font-semibold w-full text-left transition-colors duration-200"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-zinc-900 hover:text-black block px-3 py-2 text-base font-semibold w-full text-left transition-colors duration-200"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-zinc-900 hover:text-black block px-3 py-2 text-base font-semibold w-full text-left transition-colors duration-200"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-zinc-900 text-yellow-400 block px-3 py-2 rounded-lg text-base font-semibold hover:bg-black transition-all duration-200 w-full text-left shadow-sm"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
