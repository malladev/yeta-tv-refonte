import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Aminata Diallo",
      role: "Actrice Principale - Polygamie",
      content: "Travailler avec YETA TV a été une expérience transformatrice. Leur vision créative et leur professionnalisme sont exceptionnels.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Moussa Traoré",
      role: "Réalisateur - Le Goût des Sentiments", 
      content: "YETA TV donne aux créateurs la liberté artistique nécessaire pour produire des œuvres authentiques et percutantes.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Fatima Keita",
      role: "Scénariste - Kansinaw",
      content: "L'équipe YETA TV comprend vraiment les nuances culturelles qui rendent nos histoires si puissantes et universelles.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  const partners = [
    "Orange", "MTN", "Airtel", "Canal+", "TV5 Monde", "France 24"
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ils ont choisi YETA TV
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La confiance de nos talents et partenaires témoigne de notre excellence
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="mb-6">
                <Quote className="h-8 w-8 text-orange-500 mb-4" />
                <p className="text-gray-700 text-lg leading-relaxed italic">
                  "{testimonial.content}"
                </p>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img 
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
                
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-orange-500 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Partners */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Nos partenaires de confiance
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="bg-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 hover:opacity-100"
              >
                <span className="text-xl font-bold text-gray-800">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;