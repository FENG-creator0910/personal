import { FileText, Briefcase, TrendingUp, BarChart2 } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      period: 'Jan 2023 - Present',
      title: 'Mobile Product Designer',
      description: 'Vel facilisis volutpat est velit egestas dui. Urna nec cidu praesent semper feugiat. Vulputate ut pharetra sit.',
      icon: <Briefcase size={20} className="text-white" />,
      color: 'bg-neo-blue'
    },
    {
      period: 'Jan 2021 - Dec 2022',
      title: 'VP of Design',
      description: 'Vel facilisis volutpat est velit egestas dui. Urna nec cidu praesent semper feugiat. Vulputate ut pharetra sit.',
      icon: <TrendingUp size={20} className="text-white" />,
      color: 'bg-neo-blue'
    },
    {
      period: 'Mar 2020 - Dec 2020',
      title: 'Head of Product Design',
      description: 'Vel facilisis volutpat est velit egestas dui. Urna nec cidu praesent semper feugiat. Vulputate ut pharetra sit.',
      icon: <BarChart2 size={20} className="text-white" />,
      color: 'bg-neo-yellow'
    },
    {
      period: 'Sep 2017 - Feb 2020',
      title: 'Web Designer',
      description: 'Vel facilisis volutpat est velit egestas dui. Urna nec cidu praesent semper feugiat. Vulputate ut pharetra sit.',
      icon: <BarChart2 size={20} className="text-white" />,
      color: 'bg-neo-red'
    }
  ];

  return (
    <section className="bg-black text-white py-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Take a look at my<br />
            <span className="bg-neo-blue text-white px-2 py-1 inline-block mt-2">past experience</span>
          </h2>
          <p className="text-gray-400 font-sans mb-12 max-w-md">
            Eu pellentesque arcu ornare velit faucibus egestas gravida sed in purus enim molestie gravida imperdiet integer.
          </p>
          <button className="bg-white text-black px-8 py-4 rounded-xl font-display font-bold flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors neo-border neo-shadow-hover">
            <FileText size={20} />
            See full resume
          </button>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white text-black rounded-3xl neo-border-thick neo-shadow p-8 neo-shadow-hover transition-transform">
              <div className="flex justify-between items-center mb-6 pb-6 border-b-2 border-black">
                <span className="font-display font-bold text-lg">{exp.period}</span>
                <div className={`w-12 h-12 rounded-full ${exp.color} flex items-center justify-center neo-border neo-shadow-sm`}>
                  {exp.icon}
                </div>
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">{exp.title}</h3>
              <p className="text-gray-600 font-sans">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
