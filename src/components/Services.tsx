import React, { useState } from 'react';
import { 
  Smartphone, 
  Globe, 
  Server, 
  Code, 
  Brain,
  Cloud,
  Database,
  Headphones,
  Zap,
  Settings,
  ChevronRight
} from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, features }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`bg-white rounded-xl p-6 shadow-lg transition-all duration-500 border border-gray-100 h-full flex flex-col group relative overflow-hidden
        ${isHovered ? 'transform -translate-y-2 shadow-2xl' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/50 to-pink-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-full blur-2xl transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700"></div>
      
      <div className="relative">
        <div className={`p-4 rounded-xl mb-6 transition-all duration-500 transform
          ${isHovered ? 'bg-gradient-to-r from-blue-500 to-purple-500 rotate-3 scale-110' : 'bg-blue-50 rotate-0 scale-100'}`}>
          <div className={`transform transition-transform duration-500 ${isHovered ? '-rotate-3' : ''}`}>
            {React.cloneElement(icon as React.ReactElement, { 
              className: `h-8 w-8 ${isHovered ? 'text-white' : 'text-blue-600'}`
            })}
          </div>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 mb-6">{description}</p>

        <div className="space-y-3">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`flex items-center p-2 rounded-lg transition-all duration-300
                ${isHovered ? 'bg-blue-50' : 'hover:bg-gray-50'}`}
            >
              <ChevronRight className={`h-4 w-4 mr-2 transition-colors duration-300
                ${isHovered ? 'text-blue-600' : 'text-gray-400'}`} />
              <span className="text-gray-700 text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Frontend Development",
      description: "Creating stunning, responsive user interfaces with modern frameworks and best practices.",
      features: [
        "React, Vue, and Angular development",
        "Responsive web design",
        "Performance optimization",
        "UI/UX implementation"
      ]
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Backend Development",
      description: "Building robust, scalable server-side solutions and APIs for your applications.",
      features: [
        "API development & integration",
        "Database design & optimization",
        "Microservices architecture",
        "Security implementation"
      ]
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "AI & Machine Learning",
      description: "Implementing intelligent solutions to transform your business with cutting-edge AI.",
      features: [
        "Machine learning models",
        "Natural language processing",
        "Computer vision solutions",
        "Predictive analytics"
      ]
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      title: "DevOps & Cloud",
      description: "Streamlining development and deployment with modern cloud solutions.",
      features: [
        "Cloud infrastructure (AWS/Azure/GCP)",
        "CI/CD pipeline automation",
        "Container orchestration",
        "Infrastructure as Code"
      ]
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile Development",
      description: "Crafting native and cross-platform mobile applications for iOS and Android.",
      features: [
        "iOS & Android native apps",
        "React Native & Flutter",
        "Mobile UI/UX design",
        "App store optimization"
      ]
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "Technical Support 24/7",
      description: "Round-the-clock expert technical assistance and maintenance for your digital solutions.",
      features: [
        "24/7 dedicated support team",
        "Rapid incident response",
        "Proactive system monitoring",
        "Regular maintenance & updates"
      ]
    }
  ];

  const additionalFeatures = [
    { icon: <Code className="h-5 w-5" />, title: "Custom Solutions", text: "Tailored software solutions to address your unique business challenges" },
    { icon: <Settings className="h-5 w-5" />, title: "Maintenance", text: "Ongoing support and maintenance to keep your systems running smoothly" },
    { icon: <Server className="h-5 w-5" />, title: "Scalability", text: "Building systems that grow with your business needs" },
    { icon: <Globe className="h-5 w-5" />, title: "Global Reach", text: "Supporting businesses worldwide with innovative solutions" },
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-white"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-400/10 to-pink-400/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive technology solutions to help businesses 
            transform their digital presence and achieve their goals.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
            />
          ))}
        </div>
        
        <div className="mt-20">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-white opacity-5"></div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-2xl transform -translate-x-1/2 translate-y-1/2"></div>
            </div>

            <div className="relative">
              <h3 className="text-2xl font-semibold text-white mb-8 text-center">
                Why Choose TechBeyo?
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {additionalFeatures.map((feature, index) => (
                  <div 
                    key={index} 
                    className="group bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
                  >
                    <div className="bg-white/20 rounded-lg p-3 w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                      {React.cloneElement(feature.icon as React.ReactElement, { 
                        className: "text-white" 
                      })}
                    </div>
                    <h4 className="text-lg font-medium text-white mb-2">{feature.title}</h4>
                    <p className="text-white/80 text-sm">{feature.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;