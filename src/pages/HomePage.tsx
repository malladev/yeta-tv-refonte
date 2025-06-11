import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import SeriesSection from '../components/SeriesSection';
import ServicesSection from '../components/ServicesSection';
import StatsSection from '../components/StatsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <SeriesSection />
      <ServicesSection />
      <StatsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default HomePage;