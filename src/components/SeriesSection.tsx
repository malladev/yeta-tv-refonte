import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, Star, Play } from 'lucide-react';

const SeriesSection = () => {
  const navigate = useNavigate();
  const [hoveredVideo, setHoveredVideo] = useState<string | null>(null);

  const series = [
    {
      id: "polygamie",
      title: "Polygamie",
      views: "1.2M",
      rating: "4.8",
      videoId: "3CEvkMv18ZM",
      thumbnail: "https://images.pexels.com/photos/7991438/pexels-photo-7991438.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop",
      description: "Une exploration profonde des relations familiales modernes en Afrique de l'Ouest."
    },
    {
      id: "le-gout-des-sentiments",
      title: "Le Goût des Sentiments",
      views: "890K",
      rating: "4.6", 
      videoId: "dQw4w9WgXcQ",
      thumbnail: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop",
      description: "Un drame romantique qui explore l'amour, la tradition et la modernité."
    },
    {
      id: "kansinaw",
      title: "Kansinaw",
      views: "1.5M",
      rating: "4.9",
      videoId: "jNQXAC9IVRw",
      thumbnail: "https://images.pexels.com/photos/7991647/pexels-photo-7991647.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop",
      description: "Une série captivante sur les défis de la jeunesse africaine contemporaine."
    }
  ];

  const handleWatchClick = (seriesId: string) => {
    navigate(`/series/${seriesId}`);
  };

  return (
    <section id="series" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nos dernières créations
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Des histoires authentiques qui résonnent avec les audiences à travers l'Afrique
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {series.map((show, index) => (
            <div 
              key={index}
              className="group relative bg-black rounded-xl overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300"
              onMouseEnter={() => setHoveredVideo(show.id)}
              onMouseLeave={() => setHoveredVideo(null)}
            >
              <div className="relative aspect-[9/16] md:aspect-[3/4]">
                {hoveredVideo === show.id ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${show.videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${show.videoId}&modestbranding=1&rel=0`}
                    title={show.title}
                    className="w-full h-full object-cover"
                    allow="autoplay; encrypted-media"
                  />
                ) : (
                  <img 
                    src={show.thumbnail}
                    alt={show.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                )}
                
                {/* Overlay avec bouton play */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button 
                    onClick={() => handleWatchClick(show.id)}
                    className="bg-white/20 backdrop-blur-sm border-2 border-white text-white p-4 rounded-full hover:bg-white hover:text-black transition-all duration-200 transform hover:scale-110"
                  >
                    <Play className="h-8 w-8" />
                  </button>
                </div>

                {/* Gradient overlay pour le texte */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                
                {/* Informations en overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="flex items-center space-x-1 text-orange-500">
                      <Eye className="h-4 w-4" />
                      <span className="text-sm font-semibold">+{show.views}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-orange-500">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="text-sm font-semibold">{show.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{show.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">{show.description}</p>
                  <button 
                    onClick={() => handleWatchClick(show.id)}
                    className="bg-orange-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-orange-400 transition-colors duration-200 flex items-center space-x-2"
                  >
                    <Play className="h-4 w-4" />
                    <span>Regarder</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-8 rounded-xl max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
              Découvrez toutes nos séries sur YETA DIGITAL.TV
            </h3>
            <p className="text-black/80 text-lg mb-6">
              Accédez à notre catalogue complet et regardez vos séries préférées en streaming
            </p>
            <button className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200">
              Visiter la plateforme
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeriesSection;