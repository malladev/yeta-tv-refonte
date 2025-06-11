import { Play } from 'lucide-react';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  // Détection des appareils mobiles pour optimisation vidéo
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image - Optimisé pour mobile */}
      <div className="absolute inset-0">
        {!isMobile ? (
          <iframe
            src="https://www.youtube.com/embed/3CEvkMv18ZM?autoplay=1&loop=1&playlist=3CEvkMv18ZM&controls=0&showinfo=0&rel=0&mute=1"
            title="YETA TV Background Video"
            className="w-full h-full object-cover"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              minWidth: '100%',
              minHeight: '100%',
              width: 'auto',
              height: 'auto'
            }}
            allow="autoplay; encrypted-media"
          />
        ) : (
          <img 
            src="https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="YETA TV Productions"
            className="w-full h-full object-cover"
            loading="eager"
          />
        )}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Hero Content - Optimisé responsive */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-snug md:leading-tight">
            YETA TV : Les créateurs de séries qui<br className="hidden sm:inline" />
            <span className="text-orange-500"> captivent l'Afrique</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-6 md:mb-8 mx-auto max-w-2xl md:max-w-3xl px-2 sm:px-0 leading-relaxed">
            Nous transformons des idées audacieuses en récits inoubliables. 
            Découvrez nos productions et imaginez notre prochaine collaboration.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button 
              className="bg-orange-500 text-black px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-orange-400 transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
              aria-label="Découvrir nos séries"
            >
              <Play className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="text-sm sm:text-base">Découvrir nos séries</span>
            </button>
            <button 
              className="border-2 border-white text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-200 text-sm sm:text-base"
              aria-label="Devenir partenaire"
            >
              Devenir partenaire
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Visible seulement sur desktop */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;