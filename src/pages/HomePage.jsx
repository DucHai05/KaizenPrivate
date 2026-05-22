import { useEffect } from 'react';
import BenefitsSection from '../components/BenefitsSection.jsx';
import ContactSection from '../components/ContactSection.jsx';
import EvidenceSection from '../components/EvidenceSection.jsx';
import Footer from '../components/Footer.jsx';
import GallerySection from '../components/GallerySection.jsx';
import Header from '../components/Header.jsx';
import HeroSection from '../components/HeroSection.jsx';
import MethodSection from '../components/MethodSection.jsx';
import PricingSection from '../components/PricingSection.jsx';
import ProblemSection from '../components/ProblemSection.jsx';

export default function HomePage() {
  useEffect(() => {
    const revealItems = document.querySelectorAll(
      '.hero-content, .hero-proof, .section-title, .grid article, .method-left, .steps > div, .gallery-card, .gallery-intro, .evidence-card, .testimonial-card, .lead-form, .form-copy',
    );

    revealItems.forEach((item, index) => {
      item.classList.add('reveal');
      item.style.setProperty('--reveal-delay', `${(index % 5) * 24}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -24px 0px' },
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main id="top">
        <HeroSection />
        <ProblemSection />
        <MethodSection />
        <GallerySection />
        <EvidenceSection />
        <BenefitsSection />
        <PricingSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
