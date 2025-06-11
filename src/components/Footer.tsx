import React from 'react';
import { Play, Facebook, Youtube, Instagram, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Play className="h-8 w-8 text-orange-500" />
              <span className="text-2xl font-bold text-white">YETA TV</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Les créateurs de séries qui captivent l'Afrique. Nous transformons des idées audacieuses 
              en récits inoubliables qui résonnent à travers le continent.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
                aria-label="YouTube"
              >
                <Youtube className="h-6 w-6" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <a href="#series" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">
                  Nos Séries
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">
                  À Propos
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Platform Access */}
          <div>
            <h3 className="text-white font-semibold mb-4">Plateforme</h3>
            <a 
              href="#" 
              className="inline-flex items-center space-x-2 bg-orange-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-orange-400 transition-all duration-200"
            >
              <span>YETA DIGITAL.TV</span>
              <ExternalLink className="h-4 w-4" />
            </a>
            <p className="text-gray-400 text-sm mt-2">
              Accédez à toutes nos séries en streaming
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 YETA TV. Tous droits réservés.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">
                Mentions légales
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">
                Politique de confidentialité
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">
                Conditions d'utilisation
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;