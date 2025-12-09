import React from 'react';
import HeroSlider from '../../components/HeroSlider';
import AboutSection from '../../components/AboutSection';
import BrandsSection from '../../components/BrandsSection';
import ProductsSection from '../../components/ProductsSection';
import WhyChooseUs from '../../components/WhyChooseUs';
import FAQSection from '../../components/FAQSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSlider />
      <AboutSection />
      <BrandsSection />
      <ProductsSection />
      <WhyChooseUs />
      <FAQSection />
    </div>
  );
}
