import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, X, Globe, Github, Calendar, Users, CheckCircle2 } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  features: string[];
  fullDescription?: string;
  challenges?: string[];
  solutions?: string[];
  results?: string[];
  demoUrl?: string;
  githubUrl?: string;
  completionDate?: string;
  teamSize?: number;
}

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const projectsPerPage = 6;

  const projects: Project[] = [
    {
      id: 1,
      title: "AI-Powered Music Distribution Web App",
      category: "Web",
      description: "Enterprise-grade SaaS platform for real-time analytics and AI-driven insights.",
      imageUrl: "https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg",
      technologies: ["Next.js", "React", "TypeScript", "TailwindCSS", "OpenAI API"],
      features: [
        "Real-time data processing",
        "AI-powered predictions",
        "Custom dashboard creation",
        "Multi-tenant architecture"
      ],
      fullDescription: `The AI-Powered Music Distribution Platform represents a next-generation solution for independent artists, record labels, and music publishers to distribute, promote, analyze, and monetize their music catalogs. The platform leverages multiple specialized AI agents that work in concert to optimize the entire music distribution lifecycle, from content preparation to performance analytics and royalty management..

The AI-Powered Music Distribution Platform represents a significant advancement in how independent artists and music companies can leverage artificial intelligence to compete effectively in the global music marketplace. By combining multiple specialized AI agents with powerful analytics and streamlined workflows, the platform enables users to make data-driven decisions, optimize their distribution strategy, and maximize their revenue potential while maintaining creative control of their careers.`,
      challenges: [
        "Processing large volumes of real-time data efficiently",
        "Implementing secure multi-tenant architecture",
        "Ensuring AI predictions remain accurate at scale"
      ],
      solutions: [
        "Implemented distributed processing using Apache Kafka",
        "Developed custom tenant isolation framework",
        "Created automated ML model retraining pipeline"
      ],
      results: [
        "50% reduction in data processing time",
        "99.99% system uptime",
        "90% prediction accuracy"
      ],
      demoUrl: "https://analytics.techbeyo.com",
      githubUrl: "https://github.com/techbeyo/analytics",
      completionDate: "February 2025",
      teamSize: 8
    },
    {
      id: 2,
      title: "Cloud Infrastructure Platform",
      category: "DevOps",
      description: "Comprehensive cloud management platform with automated scaling and monitoring.",
      imageUrl: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg",
      technologies: ["Kubernetes", "Terraform", "AWS", "Prometheus", "Grafana"],
      features: [
        "Auto-scaling infrastructure",
        "Real-time monitoring",
        "Cost optimization",
        "Security compliance"
      ],
      fullDescription: `Our Cloud Infrastructure Platform provides a comprehensive solution for managing cloud resources across multiple providers. The platform automates infrastructure deployment, scaling, and monitoring, while ensuring optimal cost management and security compliance.

Built on Kubernetes and powered by Terraform, the platform enables infrastructure as code practices, making it easy to version and replicate environments. Real-time monitoring with Prometheus and Grafana provides deep insights into system performance and resource utilization.`,
      challenges: [
        "Managing multi-cloud environments efficiently",
        "Implementing automated scaling without service disruption",
        "Maintaining security compliance across different cloud providers"
      ],
      solutions: [
        "Developed unified control plane for multi-cloud management",
        "Implemented predictive scaling algorithms",
        "Created automated compliance checking and reporting"
      ],
      results: [
        "40% reduction in cloud costs",
        "Zero downtime during scaling events",
        "100% compliance score"
      ],
      demoUrl: "https://cloud.techbeyo.com",
      githubUrl: "https://github.com/techbeyo/cloud-platform",
      completionDate: "January 2025",
      teamSize: 6
    },
    {
      id: 3,
      title: "Fitness & Wellness App",
      category: "Mobile",
      description: "Advanced fitness tracking application with personalized AI coaching and nutrition plans.",
      imageUrl: "https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg",
      technologies: ["Flutter", "Firebase", "TensorFlow Lite", "HealthKit"],
      features: [
        "AI workout recommendations",
        "Real-time progress tracking",
        "Social fitness challenges",
        "Nutrition planning"
      ],
      fullDescription: `The Fitness & Wellness App transforms personal health tracking through AI-powered recommendations and real-time monitoring. Using Flutter for cross-platform development and TensorFlow Lite for on-device AI processing, the app delivers personalized workout and nutrition plans while maintaining user privacy.

The app integrates with various health tracking devices and platforms, providing a comprehensive view of users' fitness journey. Social features encourage engagement and motivation through community challenges and achievements.`,
      challenges: [
        "Implementing accurate exercise form detection",
        "Ensuring real-time performance with limited device resources",
        "Creating personalized AI recommendations"
      ],
      solutions: [
        "Developed custom pose estimation models",
        "Optimized app performance through lazy loading",
        "Created hybrid recommendation system"
      ],
      results: [
        "1M+ active users",
        "4.8/5 app store rating",
        "85% user retention rate"
      ],
      demoUrl: "https://fitness.techbeyo.com",
      githubUrl: "https://github.com/techbeyo/fitness-app",
      completionDate: "March 2025",
      teamSize: 5
    },
    {
      id: 4,
      title: "DevOps Automation Suite",
      category: "DevOps",
      description: "End-to-end DevOps automation platform for continuous integration and deployment.",
      imageUrl: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg",
      technologies: ["Jenkins", "Docker", "Ansible", "GitLab CI"],
      features: [
        "Pipeline automation",
        "Container orchestration",
        "Infrastructure as Code",
        "Compliance monitoring"
      ],
      fullDescription: `The DevOps Automation Suite streamlines software delivery through comprehensive pipeline automation and infrastructure management. This platform integrates various DevOps tools into a unified interface, making it easier for teams to manage their entire development lifecycle.

The suite includes advanced features for container orchestration, automated testing, and compliance monitoring, ensuring that software delivery is both fast and reliable. Custom plugins extend functionality to support various development frameworks and deployment targets.`,
      challenges: [
        "Integrating diverse DevOps tools seamlessly",
        "Ensuring pipeline security",
        "Managing complex deployment scenarios"
      ],
      solutions: [
        "Created unified API for tool integration",
        "Implemented zero-trust security model",
        "Developed smart deployment orchestration"
      ],
      results: [
        "75% faster deployment time",
        "Zero security incidents",
        "95% automation coverage"
      ],
      demoUrl: "https://devops.techbeyo.com",
      githubUrl: "https://github.com/techbeyo/devops-suite",
      completionDate: "December 2024",
      teamSize: 7
    }
  ];

  const categories = ['All', 'Web', 'Mobile', 'DevOps'];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const ProjectModal: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-4xl w-full my-8 relative">
        <div className="relative h-80">
          <img 
            src={project.imageUrl} 
            alt={project.title}
            className="w-full h-full object-cover rounded-t-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-t-2xl">
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center space-x-3 mb-3">
                <span className="bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded-full">
                  {project.category}
                </span>
                {project.completionDate && (
                  <span className="text-white/90 text-sm flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {project.completionDate}
                  </span>
                )}
                {project.teamSize && (
                  <span className="text-white/90 text-sm flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    Team of {project.teamSize}
                  </span>
                )}
              </div>
              <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
              <p className="text-white/90">{project.description}</p>
            </div>
          </div>
        </div>

        <div className="p-8">
          {project.fullDescription && (
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Project Overview</h3>
              <div className="prose max-w-none text-gray-600">
                {project.fullDescription.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="mb-4">{paragraph}</p>
                ))}
              </div>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-gray-800 text-sm rounded-full border border-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
              <ul className="space-y-2">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {(project.challenges || project.solutions || project.results) && (
            <div className="grid md:grid-cols-3 gap-6">
              {project.challenges && (
                <div className="bg-red-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-red-900 mb-4">Challenges</h3>
                  <ul className="space-y-2">
                    {project.challenges.map((challenge, idx) => (
                      <li key={idx} className="text-red-700">{challenge}</li>
                    ))}
                  </ul>
                </div>
              )}
              {project.solutions && (
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-blue-900 mb-4">Solutions</h3>
                  <ul className="space-y-2">
                    {project.solutions.map((solution, idx) => (
                      <li key={idx} className="text-blue-700">{solution}</li>
                    ))}
                  </ul>
                </div>
              )}
              {project.results && (
                <div className="bg-green-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-green-900 mb-4">Results</h3>
                  <ul className="space-y-2">
                    {project.results.map((result, idx) => (
                      <li key={idx} className="text-green-700">{result}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          <div className="mt-8 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center"
            >
              <X className="h-5 w-5 mr-2" />
              Close Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div 
        className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div className="relative h-64 overflow-hidden">
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
            <div className="absolute bottom-4 left-4 right-4">
              <span className="inline-block bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded-full mb-2">
                {project.category}
              </span>
              <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
              <p className="text-white/90 text-sm line-clamp-2">{project.description}</p>
            </div>
          </div>
        </div>

        <div className="p-6 bg-gradient-to-b from-white to-gray-50">
          <div className="mb-4">
            <h4 className="font-medium text-gray-900 mb-2">Key Features:</h4>
            <ul className="space-y-1">
              {project.features.map((feature, idx) => (
                <li key={idx} className="text-sm text-gray-600 flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Technologies:</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span 
                  key={idx} 
                  className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-gray-800 text-sm rounded-full border border-gray-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className={`mt-6 transform transition-all duration-300 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <button 
              onClick={() => setSelectedProject(project)}
              className="w-full py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg flex items-center justify-center group"
            >
              <span>View Project</span>
              <ExternalLink className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="portfolio" className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-white"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-400/10 to-pink-400/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
            Our Portfolio
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our innovative solutions across web development, mobile applications, and DevOps.
          </p>
        </div>
        
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-white rounded-xl shadow-lg">
            {categories.map((category, index) => (
              <button
                key={category}
                className={`px-6 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                onClick={() => {
                  setActiveCategory(category);
                  setCurrentPage(1);
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {currentProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        {totalPages > 1 && (
          <div className="flex justify-center mt-12">
            <nav className="flex items-center space-x-2 bg-white rounded-lg shadow-lg p-2">
              <button
                onClick={() => paginate(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  currentPage === 1 
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                    : 'hover:bg-blue-50 text-gray-700 hover:text-blue-600'
                }`}
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => paginate(idx + 1)}
                  className={`w-10 h-10 rounded-lg transition-all duration-300 ${
                    currentPage === idx + 1
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' 
                      : 'hover:bg-blue-50 text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {idx + 1}
                </button>
              ))}
              
              <button
                onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  currentPage === totalPages 
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                    : 'hover:bg-blue-50 text-gray-700 hover:text-blue-600'
                }`}
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </nav>
          </div>
        )}
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
};

export default Portfolio;