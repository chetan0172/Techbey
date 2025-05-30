import React from 'react';
import { Users, Target, Award, Rocket } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: <Users className="h-6 w-6 text-blue-600" />, value: "10+", label: "Clients Worldwide" },
    { icon: <Target className="h-6 w-6 text-blue-600" />, value: "95%", label: "Project Success Rate" },
    { icon: <Award className="h-6 w-6 text-blue-600" />, value: "5+", label: "Years Experience" },
    { icon: <Rocket className="h-6 w-6 text-blue-600" />, value: "50+", label: "Projects Delivered" }
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About TechBeyo</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Empowering businesses with cutting-edge technology solutions and innovative development practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-gray-600 mb-6">
              At TechBeyo, we're dedicated to transforming businesses through innovative technology solutions. 
              Our mission is to empower organizations with cutting-edge software development, DevOps practices, 
              and cloud infrastructure that drives growth and success.
            </p>
            <p className="text-gray-600">
              We believe in delivering excellence through collaboration, innovation, and a deep understanding 
              of our clients' needs. Our team of experts works tirelessly to ensure every project exceeds 
              expectations and delivers real business value.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Why Choose Us?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="p-1 bg-white/20 rounded-full mr-3 mt-1">
                    <Award className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Technical Excellence</h4>
                    <p className="text-white/80 text-sm">
                      Our team brings deep expertise and proven methodologies to every project.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="p-1 bg-white/20 rounded-full mr-3 mt-1">
                    <Target className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Results-Driven Approach</h4>
                    <p className="text-white/80 text-sm">
                      We focus on delivering measurable business outcomes and ROI.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="p-1 bg-white/20 rounded-full mr-3 mt-1">
                    <Users className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Client Partnership</h4>
                    <p className="text-white/80 text-sm">
                      We build long-term relationships based on trust and mutual success.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-white/10 rounded-xl transform rotate-6"></div>
              <div className="relative bg-white/20 backdrop-blur-lg rounded-xl p-6">
                <h4 className="text-xl font-semibold mb-4">Our Values</h4>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Rocket className="h-5 w-5 mr-2" />
                    <span>Innovation at Core</span>
                  </li>
                  <li className="flex items-center">
                    <Award className="h-5 w-5 mr-2" />
                    <span>Quality First</span>
                  </li>
                  <li className="flex items-center">
                    <Users className="h-5 w-5 mr-2" />
                    <span>Client Success</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;