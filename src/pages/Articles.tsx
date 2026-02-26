import ArticlesPreview from '../components/ArticlesPreview';

export default function Articles() {
  return (
    <div className="flex flex-col gap-12">
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-24 text-center">
        <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
          My <span className="bg-neo-red text-white px-2 py-1 inline-block transform rotate-2">Articles</span>
        </h1>
        <p className="text-gray-600 font-sans mb-8 max-w-2xl mx-auto text-lg">
          Lacus, adipiscing lectus convallis purus aliquet cursus magnaol montes augue donec cras turpis ultrices nulla sed dolor.
        </p>
      </div>
      
      <ArticlesPreview />
    </div>
  );
}
