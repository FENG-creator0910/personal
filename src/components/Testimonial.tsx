export default function Testimonial() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
          What my clients say<br />
          about <span className="bg-neo-blue text-white px-2 py-1 inline-block mt-2">my work</span>
        </h2>
        <p className="text-gray-600 font-sans max-w-2xl mx-auto">
          Lacus, adipiscing lectus convallis purus aliquet cursus magnaol montes augue donec cras turpis ultrices nulla sed dolor.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center max-w-5xl mx-auto relative mt-24">
        <div className="bg-white rounded-3xl neo-border-thick neo-shadow p-12 relative w-full md:w-2/3 z-10 md:-mr-12">
          <div className="absolute -top-6 -left-6 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center text-3xl font-display font-bold neo-border">
            "
          </div>
          <p className="text-xl font-sans text-gray-800 mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim et minim quis nostrud exercitation ullamco laboris.
          </p>
          <div>
            <h4 className="font-display font-bold text-lg">Lily Woods</h4>
            <p className="text-gray-500 font-sans text-sm">VP of Design at Google</p>
          </div>
        </div>

        <div className="w-64 h-64 md:w-96 md:h-96 bg-neo-red rounded-full neo-border-thick neo-shadow overflow-hidden flex-shrink-0 relative z-0 mt-8 md:mt-0">
          <div className="absolute inset-0 flex items-center justify-center">
             <img src="https://picsum.photos/seed/lily/600/600" alt="Lily Woods" className="w-full h-full object-cover mix-blend-multiply opacity-80" referrerPolicy="no-referrer" />
          </div>
        </div>
      </div>
    </section>
  );
}
