import React, { useState } from 'react';
import { Code2, Github, Twitter, Linkedin, Mail, X, Phone, MapPin, Globe, Clock, Rocket, Zap, Shield, Facebook, Instagram } from 'lucide-react';
import BookCallModal from './BookCallModal';

const Footer: React.FC = () => {
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [showBookCall, setShowBookCall] = useState(false);

  const contactInfo = [
    { icon: <Mail className="h-5 w-5" />, title: "Email", content: "contact@techbeyo.com", href: "mailto:contact@techbeyo.com" },
    { icon: <Phone className="h-5 w-5" />, title: "Phone", content: "+919988230172", href: "tel:+919988230172" },
    { icon: <MapPin className="h-5 w-5" />, title: "Address", content: "Mumbai, MH", href: "https://maps.google.com" },
    { icon: <Clock className="h-5 w-5" />, title: "Hours", content: "Mon-Sat: 24*7", href: "#" },
    { icon: <Globe className="h-5 w-5" />, title: "Global", content: "Serving Worldwide", href: "#" }
  ];

  const quickLinks = [
    { title: "About Us", href: "#about" },
    { title: "Services", href: "#services" },
    { title: "Portfolio", href: "#portfolio" },
    { title: "Blog", href: "#blog" },
    { title: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    { icon: <Instagram className="h-5 w-5" />, href: "https://www.instagram.com/tech_beyo/", label: "Instagram" },
    { icon: <Facebook className="h-5 w-5" />, href: "https://www.facebook.com/profile.php?id=61575331965291", label: "Facebook" },
    { icon: <Twitter className="h-5 w-5" />, href: "https://twitter.com/techbeyo", label: "X (Twitter)" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/company/techbeyo", label: "LinkedIn" }
  ];

  const highlights = [
    { icon: <Rocket className="h-6 w-6 text-white" />, title: "Fast Delivery", description: "Quick turnaround on projects" },
    { icon: <Shield className="h-6 w-6 text-white" />, title: "Enterprise Grade", description: "Built for scale and security" },
    { icon: <Zap className="h-6 w-6 text-white" />, title: "24/7 Support", description: "Always here when you need us" }
  ];

  const Modal: React.FC<{
    title: string;
    content: React.ReactNode;
    onClose: () => void;
  }> = ({ title, content, onClose }) => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="p-6">{content}</div>
      </div>
    </div>
  );

  const PrivacyPolicy = (
    <div className="space-y-4 text-gray-600">
      <p>Last updated: March 15, 2025</p>
      
      <h4 className="text-lg font-semibold text-gray-900">1. Information We Collect</h4>
      <p>We collect information you provide directly to us, including name, email, and company details when you contact us or use our services.</p>
      
      <h4 className="text-lg font-semibold text-gray-900">2. How We Use Your Information</h4>
      <ul className="list-disc pl-5 space-y-2">
        <li>To provide and maintain our services</li>
        <li>To notify you about changes to our services</li>
        <li>To provide customer support</li>
        <li>To gather analysis or valuable information to improve our services</li>
      </ul>
      
      <h4 className="text-lg font-semibold text-gray-900">3. Data Security</h4>
      <p>We implement appropriate security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information.</p>
      
      <h4 className="text-lg font-semibold text-gray-900">4. Third-Party Services</h4>
      <p>We may employ third-party companies and individuals to facilitate our service, provide service-related services, or assist us in analyzing how our service is used.</p>
      
      <h4 className="text-lg font-semibold text-gray-900">5. Contact Us</h4>
      <p>If you have any questions about this Privacy Policy, please contact us at contact@techbeyo.com</p>
    </div>
  );

  const TermsOfService = (
    <div className="space-y-4 text-gray-600">
      <p>Last updated: March 15, 2025</p>
      
      <h4 className="text-lg font-semibold text-gray-900">1. Acceptance of Terms</h4>
      <p>By accessing and using our services, you accept and agree to be bound by these Terms of Service.</p>
      
      <h4 className="text-lg font-semibold text-gray-900">2. Services Description</h4>
      <p>TechBeyo provides software development, DevOps, and technology consulting services. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.</p>
      
      <h4 className="text-lg font-semibold text-gray-900">3. Intellectual Property</h4>
      <p>All content, features, and functionality of our services are owned by TechBeyo and are protected by international copyright, trademark, and other intellectual property laws.</p>
      
      <h4 className="text-lg font-semibold text-gray-900">4. User Responsibilities</h4>
      <ul className="list-disc pl-5 space-y-2">
        <li>Provide accurate and complete information</li>
        <li>Maintain the confidentiality of any account credentials</li>
        <li>Use our services in compliance with all applicable laws</li>
      </ul>
      
      <h4 className="text-lg font-semibold text-gray-900">5. Limitation of Liability</h4>
      <p>TechBeyo shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services.</p>
    </div>
  );

  return (
    <>
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
              Join hundreds of successful businesses that have accelerated their growth with our innovative solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {highlights.map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center hover:bg-white/20 transition-all">
                <div className="bg-white/20 rounded-full p-3 w-fit mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-white text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-white/80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center mb-4">
                <Code2 className="h-8 w-8 text-blue-500" />
                <span className="ml-2 text-xl font-bold">TechBeyo</span>
              </div>
              <p className="text-gray-400 mb-6">
                Building innovative digital solutions for businesses worldwide. From concept to deployment, we bring your ideas to life.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, idx) => (
                  <a 
                    key={idx}
                    href={social.href}
                    className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors"
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link, idx) => (
                  <li key={idx}>
                    <a 
                      href={link.href}
                      className="text-gray-400 hover:text-blue-400 transition-colors flex items-center"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Contact Info</h3>
              <div className="space-y-4">
                {contactInfo.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    className="flex items-center text-gray-400 hover:text-blue-400 transition-colors group"
                  >
                    <span className="mr-3 group-hover:text-blue-400">{item.icon}</span>
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <p className="text-sm">{item.content}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Newsletter</h3>
              <p className="text-gray-400 mb-4">
                Subscribe to our newsletter for the latest updates and insights.
              </p>
              <form className="flex">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="px-4 py-2 bg-gray-800 text-gray-200 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                />
                <button 
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-lg transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} TechBeyo. All rights reserved
            </p>
            <div className="flex space-x-6">
              <button 
                onClick={() => setShowPrivacyPolicy(true)} 
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => setShowTerms(true)} 
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>

        {showPrivacyPolicy && (
          <Modal
            title="Privacy Policy"
            content={PrivacyPolicy}
            onClose={() => setShowPrivacyPolicy(false)}
          />
        )}

        {showTerms && (
          <Modal
            title="Terms of Service"
            content={TermsOfService}
            onClose={() => setShowTerms(false)}
          />
        )}
      </footer>

      <BookCallModal isOpen={showBookCall} onClose={() => setShowBookCall(false)} />
    </>
  );
};

export default Footer;