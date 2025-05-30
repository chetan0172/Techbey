import React, { useState } from 'react';
import { ArrowRight, CodeSquare, Layers, LineChart, Sparkles } from 'lucide-react';
import BookCallModal from './BookCallModal';

const Hero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-blue-50 to-gray-100"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-4">
              Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">digital solutions</span> for tomorrow
            </h1>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              We create beautifully crafted web and mobile applications that help businesses grow. 
              Our expertise in development and DevOps ensures your project succeeds from start to finish.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="group px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg shadow-md hover:shadow-xl transition-all flex items-center justify-center relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <span className="relative flex items-center">
                  <Sparkles className="h-5 w-5 mr-2 animate-pulse text-yellow-300" />
                  Start Your Innovation Journey
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-20"></div>
              <div className="relative bg-white rounded-lg shadow-xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: <CodeSquare className="h-8 w-8 text-blue-600" />, title: "Web Development" },
                    { icon: <Layers className="h-8 w-8 text-purple-600" />, title: "Mobile Apps" },
                    { icon: <LineChart className="h-8 w-8 text-teal-600" />, title: "DevOps" },
                    { icon: <ArrowRight className="h-8 w-8 text-orange-600" />, title: "Custom Solutions" }
                  ].map((service, idx) => (
                    <div key={idx} className="bg-gray-50 rounded-md p-4 flex flex-col items-center justify-center hover:shadow-md transition-all text-center">
                      {service.icon}
                      <h3 className="mt-2 font-medium text-gray-900">{service.title}</h3>
                    </div>
                  ))}
                </div>
                <div className="absolute -z-10 rounded-xl w-full h-full bg-gradient-to-r from-blue-200 to-purple-200 blur-xl opacity-30 transform rotate-12 -right-10 top-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BookCallModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default Hero;