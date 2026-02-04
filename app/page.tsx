import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import RevenueImpact from '@/components/RevenueImpact';
import Benefits from '@/components/Benefits';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <div id="roi">
        <RevenueImpact />
      </div>
      <div id="benefits">
        <Benefits />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <CTA />
      <Footer />
    </main>
  );
}
