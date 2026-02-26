import { Mail } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Web design',
      description: 'Lacus adipiscing lectus convallis purus aliquet cursus magnaol dolori montes augue donec cras.',
      iconBg: 'bg-gray-100',
      image: 'https://picsum.photos/seed/webdesign/400/300'
    },
    {
      title: 'UI/UX design',
      description: 'Arcu venenatis sit nullam pellentesq varius urna non sed aliquam colemir imperdiet amet imperdiet.',
      iconBg: 'bg-gray-100',
      image: 'https://picsum.photos/seed/uiux/400/300'
    },
    {
      title: 'Product design',
      description: 'Arcu venenatis sit nullam pellentesq varius urna non sed aliquam colemir imperdiet amet imperdiet.',
      iconBg: 'bg-gray-100',
      image: 'https://picsum.photos/seed/product/400/300'
    },
    {
      title: 'User research',
      description: 'Lacus adipiscing lectus convallis purus aliquet cursus magnaol dolori montes augue donec cras.',
      iconBg: 'bg-gray-100',
      image: 'https://picsum.photos/seed/research/400/300'
    },
    {
      title: 'Motion graphics',
      description: 'Lacus adipiscing lectus convallis purus aliquet cursus magnaol dolori montes augue donec cras.',
      iconBg: 'bg-gray-100',
      image: 'https://picsum.photos/seed/motion/400/300'
    }
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
          My broad <span className="bg-neo-red text-white px-2 py-1 inline-block transform rotate-2">set of services</span>
        </h2>
        <p className="text-gray-600 font-sans max-w-2xl mx-auto">
          Lacus, adipiscing lectus convallis purus aliquet cursus magnaol montes augue donec cras turpis ultrices nulla sed dolor.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-3xl neo-border-thick neo-shadow overflow-hidden flex flex-col h-full neo-shadow-hover transition-transform">
            <div className={`h-48 ${service.iconBg} flex items-center justify-center p-6 border-b-4 border-black relative`}>
               <img src={service.image} alt={service.title} className="w-full h-full object-cover rounded-xl neo-border" referrerPolicy="no-referrer" />
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <h3 className="text-2xl font-display font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 font-sans flex-1">{service.description}</p>
            </div>
          </div>
        ))}

        <div className="bg-neo-yellow rounded-3xl neo-border-thick neo-shadow overflow-hidden flex flex-col h-full justify-center items-center text-center p-8 neo-shadow-hover transition-transform">
          <div className="w-16 h-16 bg-white rounded-xl neo-border flex items-center justify-center mb-6">
            <Mail size={32} />
          </div>
          <h3 className="text-2xl font-display font-bold mb-4">Get in touch</h3>
          <p className="text-gray-800 font-sans mb-8">
            Looking for another service? Get in touch with me, there is a high chance that I will be able to help!
          </p>
          <button className="bg-black text-white px-8 py-4 rounded-xl font-display font-bold flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors w-full">
            <Mail size={20} />
            Get in touch
          </button>
        </div>
      </div>
    </section>
  );
}
