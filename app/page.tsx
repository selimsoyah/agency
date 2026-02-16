import Hero3D from '@/components/Hero3D';
import ThreeBackground from '@/components/ThreeBackground';
import ProjectShowcase from '@/components/ProjectShowcase';
import ServicesScroll from '@/components/ServicesScroll';
import ContactLuxury from '@/components/ContactLuxury';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white relative selection:bg-gold selection:text-black">
      <ThreeBackground />
      <div className="relative z-10 font-[family-name:var(--font-geist-sans)]">
        <Hero3D />
        <ProjectShowcase />
        <ServicesScroll />
        <ContactLuxury />

        <footer className="py-10 border-t border-neutral-900 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} AGENCY. All Rights Reserved.</p>
        </footer>
      </div>
    </main>
  );
}
