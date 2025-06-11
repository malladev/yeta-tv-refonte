import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Play, Plus, ThumbsUp, Share2, Star, Calendar, Clock, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import Header from '../components/Header';

const SeriesDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Données des séries
  const seriesData = {
    'polygamie': {
      title: "Polygamie",
      description: "Une exploration profonde et nuancée des relations familiales modernes en Afrique de l'Ouest. Cette série dramatique suit plusieurs familles polygames contemporaines, révélant les défis, les joies et les complexités de cette structure familiale traditionnelle dans un monde en mutation.",
      longDescription: "Polygamie plonge les spectateurs dans l'intimité de familles ouest-africaines modernes qui naviguent entre tradition et modernité. À travers des personnages complexes et authentiques, la série explore les dynamiques relationnelles, les défis économiques, les questions d'égalité et les transformations sociales qui touchent ces communautés. Chaque épisode révèle une facette différente de cette réalité, sans jugement mais avec une profondeur émotionnelle remarquable.",
      videoId: "3CEvkMv18ZM",
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEW0hwLEwgtxlxEYrAmPgMEpmgU4_iNJIF8Q&s",
      year: "2023",
      rating: "4.8",
      duration: "45 min",
      episodes: 12,
      views: "1.2M",
      genre: ["Drame", "Famille", "Social"],
      cast: ["Aminata Diallo", "Moussa Keita", "Fatima Traoré", "Ibrahim Sow"],
      director: "Ousmane Sembène Jr.",
      seasons: 2
    },
    'le-gout-des-sentiments': {
      title: "Le Goût des Sentiments",
      description: "Un drame romantique captivant qui explore l'amour, la tradition et la modernité dans l'Afrique contemporaine.",
      longDescription: "Le Goût des Sentiments raconte l'histoire de jeunes adultes africains qui naviguent entre les attentes familiales traditionnelles et leurs aspirations personnelles en matière d'amour et de carrière. Cette série romantique et dramatique explore les thèmes universels de l'amour, du sacrifice et de l'identité culturelle avec une sensibilité moderne et une esthétique cinématographique remarquable.",
      videoId: "dQw4w9WgXcQ",
      thumbnail: "https://i.ytimg.com/vi/Pe5uD7PzPGk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAGSjnE40ls88KcuYfy1aUCX1pDig",
      year: "2023",
      rating: "4.6",
      duration: "50 min",
      episodes: 10,
      views: "890K",
      genre: ["Romance", "Drame", "Contemporain"],
      cast: ["Aïcha Koné", "Seydou Camara", "Mariam Diabaté"],
      director: "Souleymane Cissé",
      seasons: 1
    },
    'kansinaw': {
      title: "Kansinaw",
      description: "Une série captivante sur les défis de la jeunesse africaine contemporaine.",
      longDescription: "Kansinaw suit un groupe de jeunes africains urbains qui font face aux défis de leur génération : chômage, migration, entrepreneuriat, relations amoureuses et pression sociale. Cette série moderne et dynamique capture l'esprit de la jeunesse africaine d'aujourd'hui avec authenticité et espoir, montrant comment cette génération forge son propre chemin vers l'avenir.",
      videoId: "jNQXAC9IVRw",
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOI0oBShIiaVH_H2Y5_1v4HaQC29RLC3V8kg&s",
      year: "2024",
      rating: "4.9",
      duration: "40 min",
      episodes: 8,
      views: "1.5M",
      genre: ["Jeunesse", "Urbain", "Comédie dramatique"],
      cast: ["Khadija Sy", "Mamadou Ba", "Awa Diop", "Cheikh Fall"],
      director: "Alain Gomis",
      seasons: 1
    }
  };

  const series = seriesData[id as keyof typeof seriesData];

  if (!series) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <h1 className="text-2xl font-bold text-white mb-4">Série non trouvée</h1>
          <button 
            onClick={() => navigate('/')}
            className="bg-orange-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-orange-400 transition-colors"
          >
            Retour à l'accueil
          </button>
        </motion.div>
      </div>
    );
  }

  // Animations
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } }
  };

  const slideUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Section vidéo principale */}
      <section className="relative h-screen">
        {!isPlaying ? (
          <>
            <div className="absolute inset-0">
              <img 
                src={series.thumbnail}
                alt={series.title}
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            </div>
            
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="absolute bottom-0 left-0 right-0 p-6 md:p-16"
            >
              <div className="max-w-7xl mx-auto">
                <motion.h1 
                  variants={slideUp}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6"
                >
                  {series.title}
                </motion.h1>
                
                <motion.div 
                  variants={slideUp}
                  className="flex flex-wrap items-center gap-4 mb-4 md:mb-6"
                >
                  <div className="flex items-center space-x-2">
                    <Star className="h-5 w-5 text-orange-500 fill-current" />
                    <span className="text-base md:text-lg font-semibold">{series.rating}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5 text-gray-400" />
                    <span>{series.year}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-gray-400" />
                    <span>{series.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-gray-400" />
                    <span>+{series.views} vues</span>
                  </div>
                </motion.div>
                
                <motion.p 
                  variants={slideUp}
                  className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 max-w-3xl leading-relaxed"
                >
                  {series.description}
                </motion.p>
                
                <motion.div 
                  variants={slideUp}
                  className="flex flex-wrap gap-2 mb-6 md:mb-8"
                >
                  {series.genre.map((g, index) => (
                    <span 
                      key={index} 
                      className="bg-gray-800 px-3 py-1 rounded-full text-xs sm:text-sm"
                    >
                      {g}
                    </span>
                  ))}
                </motion.div>
                
                <motion.div 
                  variants={slideUp}
                  className="flex flex-wrap gap-3 md:gap-4"
                >
                  <button 
                    onClick={() => setIsPlaying(true)}
                    className="bg-white text-black px-6 py-3 md:px-8 md:py-4 rounded-lg font-bold text-base md:text-lg hover:bg-gray-200 transition-all duration-200 flex items-center space-x-2 md:space-x-3"
                  >
                    <Play className="h-5 w-5 md:h-6 md:w-6" />
                    <span>Regarder maintenant</span>
                  </button>
                  <button className="bg-gray-800 text-white px-4 py-3 md:px-8 md:py-4 rounded-lg font-semibold hover:bg-gray-700 transition-colors flex items-center space-x-2">
                    <Plus className="h-5 w-5" />
                    <span className="hidden sm:inline">Ma liste</span>
                  </button>
                  <button className="bg-gray-800 text-white p-3 md:p-4 rounded-lg hover:bg-gray-700 transition-colors">
                    <ThumbsUp className="h-5 w-5" />
                  </button>
                  <button className="bg-gray-800 text-white p-3 md:p-4 rounded-lg hover:bg-gray-700 transition-colors">
                    <Share2 className="h-5 w-5" />
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </>
        ) : (
          <div className="relative h-full">
            {!isMobile ? (
              <iframe
                src={`https://www.youtube.com/embed/${series.videoId}?autoplay=1&controls=1&rel=0`}
                title={series.title}
                className="w-full h-full"
                allow="autoplay; encrypted-media; fullscreen"
                allowFullScreen
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-black">
                <p className="text-center px-4">
                  La lecture vidéo est optimisée pour le bureau. 
                  Veuillez visiter notre site sur un ordinateur pour la meilleure expérience.
                </p>
              </div>
            )}
            <button 
              onClick={() => setIsPlaying(false)}
              className="absolute top-4 right-4 bg-black/50 text-white p-2 md:p-3 rounded-full hover:bg-black/70 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 md:h-6 md:w-6" />
            </button>
          </div>
        )}
      </section>

      {/* Informations détaillées */}
      <section className="px-4 sm:px-8 md:px-16 py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {/* Description détaillée */}
            <div className="md:col-span-2">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-2xl md:text-3xl font-bold mb-4 md:mb-6"
              >
                À propos de {series.title}
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-gray-300 text-base md:text-lg leading-relaxed mb-6 md:mb-8"
              >
                {series.longDescription}
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="grid sm:grid-cols-2 gap-6 md:gap-8"
              >
                <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-orange-500">Distribution</h3>
                  <ul className="space-y-1 md:space-y-2">
                    {series.cast.map((actor, index) => (
                      <li key={index} className="text-gray-300 text-sm md:text-base">{actor}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-orange-500">Équipe technique</h3>
                  <div className="space-y-1 md:space-y-2">
                    <div>
                      <span className="text-gray-400 text-sm md:text-base">Réalisateur: </span>
                      <span className="text-white text-sm md:text-base">{series.director}</span>
                    </div>
                    <div>
                      <span className="text-gray-400 text-sm md:text-base">Saisons: </span>
                      <span className="text-white text-sm md:text-base">{series.seasons}</span>
                    </div>
                    <div>
                      <span className="text-gray-400 text-sm md:text-base">Épisodes: </span>
                      <span className="text-white text-sm md:text-base">{series.episodes}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Statistiques et infos */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <div className="bg-gray-900 p-4 md:p-6 rounded-xl mb-6">
                <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6">Statistiques</h3>
                <div className="space-y-3 md:space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-400 text-sm md:text-base">Note spectateurs</span>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-orange-500 fill-current" />
                      <span className="font-semibold text-sm md:text-base">{series.rating}/5</span>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400 text-sm md:text-base">Vues totales</span>
                    <span className="font-semibold text-sm md:text-base">+{series.views}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400 text-sm md:text-base">Année de sortie</span>
                    <span className="font-semibold text-sm md:text-base">{series.year}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400 text-sm md:text-base">Durée moyenne</span>
                    <span className="font-semibold text-sm md:text-base">{series.duration}</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-900 p-4 md:p-6 rounded-xl">
                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Genres</h3>
                <div className="flex flex-wrap gap-2">
                  {series.genre.map((g, index) => (
                    <span 
                      key={index} 
                      className="bg-orange-500 text-black px-2 py-1 rounded-full text-xs md:text-sm font-semibold"
                    >
                      {g}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SeriesDetailPage;