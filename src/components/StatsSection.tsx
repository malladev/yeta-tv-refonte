import { Users, Eye, Award, Globe } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: <Users className="h-8 w-8 text-orange-500 group-hover:text-black" />,
      number: "900K+",
      label: "Abonnés sur notre plateforme",
      description: "Une communauté fidèle et engagée group-hover:text-black"
    },
    {
      icon: <Eye className="h-8 w-8 text-orange-500 group-hover:text-black" />,
      number: "10M+",
      label: "Vues par mois",
      description: "Un reach exceptionnel à travers l'Afrique"
    },
    {
      icon: <Award className="h-8 w-8 text-orange-500 group-hover:text-black" />,
      number: "15+",
      label: "Séries produites",
      description: "Des contenus primés et reconnus"
    },
    {
      icon: <Globe className="h-8 w-8 text-orange-500 group-hover:text-black" />,
      number: "8",
      label: "Pays de diffusion",
      description: "Une portée internationale croissante"
    }
  ];

  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            L'impact <span className="text-orange-500">YETA TV</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Des chiffres qui témoignent de notre expertise et de notre influence dans l'industrie du divertissement africain
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="bg-gray-900 p-8 rounded-xl group-hover:bg-orange-500 transition-all duration-300 h-64">
                <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-white mb-2 group-hover:text-black">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-orange-500 mb-2 group-hover:text-black">
                  {stat.label}
                </div>
                <div className="text-gray-400 text-sm group-hover:text-gray-700">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gray-900 p-8 rounded-xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Une expertise reconnue dans la création de contenu viral
            </h3>
            <p className="text-gray-100 text-lg">
              Avec une connaissance profonde du marché et des audiences en Afrique de l'Ouest, 
              YETA TV transforme chaque projet en succès retentissant.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;