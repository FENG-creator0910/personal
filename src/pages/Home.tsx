import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import Services from '../components/Services';
import PortfolioPreview from '../components/PortfolioPreview';
import Experience from '../components/Experience';
import Testimonial from '../components/Testimonial';
import ArticlesPreview from '../components/ArticlesPreview';

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      <Hero />
      <Marquee />
      <Services />
      <PortfolioPreview />
      <Experience />
      <Testimonial />
      <ArticlesPreview />
    </div>
  );
}
