import React from 'react';
import { Film, Handshake, Tv } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Film className="h-12 w-12 text-orange-500" />,
      title: "Production de Séries Originales",
      description: "De l'écriture du scénario à la post-production, nous gérons tout le processus créatif pour donner vie à des histoires uniques qui marquent les esprits."
    },
    {
      icon: <Handshake className="h-12 w-12 text-orange-500" />,
      title: "Placement de Produit & Partenariats",
      description: "Intégrez votre marque de manière authentique dans nos univers narratifs et touchez une audience engagée de millions de téléspectateurs."
    },
    {
      icon: <Tv className="h-12 w-12 text-orange-500" />,
      title: "Distribution & Diffusion",
      description: "Nous assurons une large visibilité à nos contenus grâce à notre plateforme YETA DIGITAL.TV et nos partenaires de diffusion stratégiques."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ce que nous faisons
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une expertise complète au service de vos ambitions créatives et commerciales
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-gray-50 p-8 rounded-xl hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-white">
                {service.title}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-300 leading-relaxed">
                {service.description}
              </p>
              <div className="mt-6">
                <span className="text-orange-500 font-semibold group-hover:text-orange-400 cursor-pointer">
                  En savoir plus →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;