import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', type: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <section id="contact\" className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-green-500 p-8 rounded-xl">
            <CheckCircle className="h-16 w-16 text-white mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Message envoyé avec succès!</h3>
            <p className="text-green-100">Nous vous recontacterons dans les plus brefs délais.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Prêt à créer le prochain succès ?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Que vous soyez une marque cherchant à innover, un talent créatif ou un diffuseur, 
            nous sommes ouverts à la discussion.
          </p>
        </div>

        <div className="bg-gray-900 p-8 rounded-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                  Nom complet *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-200"
                  placeholder="Votre nom"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-200"
                  placeholder="votre@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="type" className="block text-sm font-medium text-white mb-2">
                Type de demande *
              </label>
              <select
                id="type"
                name="type"
                required
                value={formData.type}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-200"
              >
                <option value="">Sélectionnez votre demande</option>
                <option value="Partenariat">Partenariat de marque</option>
                <option value="Talent">Opportunité talent</option>
                <option value="Distribution">Distribution/Diffusion</option>
                <option value="Production">Production collaborative</option>
                <option value="Autre">Autre</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-200 resize-none"
                placeholder="Décrivez votre projet ou votre demande..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 text-black py-4 px-6 rounded-lg font-semibold hover:bg-orange-400 transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <Send className="h-5 w-5" />
              <span>Contactez-nous pour une collaboration</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;