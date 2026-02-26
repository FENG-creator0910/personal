export default function Marquee() {
  const logos = [
    { name: 'business', icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5' },
    { name: 'company', icon: 'M4 4h16v16H4z' },
    { name: 'startup', icon: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z' },
    { name: 'venture', icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' },
    { name: 'agency', icon: 'M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z' },
    { name: 'application', icon: 'M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z' },
  ];

  return (
    <div className="bg-black text-white py-6 overflow-hidden transform -rotate-2 scale-105 my-12">
      <div className="flex whitespace-nowrap animate-[marquee_20s_linear_infinite]">
        {[...logos, ...logos, ...logos].map((logo, index) => (
          <div key={index} className="flex items-center gap-2 mx-8 text-xl font-display font-bold">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d={logo.icon}></path>
            </svg>
            {logo.name}
          </div>
        ))}
      </div>
    </div>
  );
}
