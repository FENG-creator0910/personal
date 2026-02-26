import Experience from '../components/Experience';
import Testimonial from '../components/Testimonial';

export default function About() {
  return (
    <div className="flex flex-col gap-12">
      <section className="max-w-6xl mx-auto px-6 py-12 md:py-24 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 flex justify-center md:justify-start">
          <div className="w-full max-w-md bg-neo-red rounded-full neo-border-thick neo-shadow overflow-hidden aspect-square relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <img 
                src="https://picsum.photos/seed/avatar2/600/600" 
                alt="John Carter" 
                className="w-full h-full object-cover mix-blend-multiply opacity-80"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
        <div className="flex-1">
          <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-6">
            Who's behind all this<br />
            <span className="bg-neo-blue text-white px-2 py-1 inline-block mt-2">great work?</span>
          </h1>
          <p className="text-gray-600 font-sans mb-8 text-lg">
            Eu pellentesque arcu ornare velit faucibus egestas gravida sed in purus enim molestie gravida imperdiet integer.
          </p>
          
          <div className="space-y-6 mb-8">
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-md bg-neo-blue neo-border flex-shrink-0 mt-1"></div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2">15+ years of experience</h3>
                <p className="text-gray-600 font-sans">Eu pellentesque arcu ornare velit faucibus egestas me gravida sed in purus enim molestie gravida.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-md bg-neo-red neo-border flex-shrink-0 mt-1"></div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2">100+ successfull projects</h3>
                <p className="text-gray-600 font-sans">Eu pellentesque arcu ornare velit faucibus egestas me gravida sed in purus enim molestie gravida.</p>
              </div>
            </div>
          </div>

          <button className="bg-black text-white px-8 py-4 rounded-xl font-display font-bold flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors neo-shadow-hover">
            More about me
          </button>
        </div>
      </section>
      
      <Experience />
      <Testimonial />
    </div>
  );
}
