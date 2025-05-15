import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Sparkles, ArrowRight } from 'lucide-react';
import { supabase } from '../lib/supabase';
import toast, { Toaster } from 'react-hot-toast';
import BookCallModal from './BookCallModal';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [showBookCall, setShowBookCall] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('contacts')
        .insert([{
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          status: 'new'
        }]);

      if (error) throw error;

      toast.success('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-blue-600" />,
      title: "Email",
      content: "contact@techbeyo.com",
      link: "mailto:contact@techbeyo.com"
    },
    {
      icon: <Phone className="h-6 w-6 text-blue-600" />,
      title: "Phone",
      content: "+919988230172",
      link: "tel:+919988230172"
    },
    {
      icon: <MapPin className="h-6 w-6 text-blue-600" />,
      title: "Office",
      content: "Mumbai, IN",
      link: "https://maps.google.com"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      <Toaster position="top-right" />
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-40 -top-40 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute -left-40 -bottom-40 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-lg">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full blur-3xl opacity-10 animate-pulse"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have a project in mind or need consultation? We're here to help you turn your ideas into reality.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="bg-white/80 backdrop-blur-lg rounded-xl p-8 shadow-lg border border-gray-100 mb-10">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="p-3 bg-blue-100 rounded-full mr-4">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">{item.title}</h4>
                      <a 
                        href={item.link} 
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        {item.content}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-xl p-8 text-white shadow-lg relative overflow-hidden group">
              <div className="absolute inset-0 bg-grid-white/10"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="flex items-center mb-4">
                  <Sparkles className="h-6 w-6 mr-2 animate-pulse text-yellow-300" />
                  <h3 className="text-2xl font-semibold">Transform Your Vision Into Reality</h3>
                </div>
                <p className="mb-6 opacity-90 text-lg">
                  Ready to elevate your business with cutting-edge technology? Let's create something extraordinary together.
                </p>
                <button 
                  onClick={() => setShowBookCall(true)}
                  className="group inline-flex items-center px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-md"
                >
                  <span>Schedule a Free Strategy Session</span>
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              
              <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-lg rounded-xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send us a message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Tell us about your project..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md 
                  flex items-center justify-center
                  ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-700'} 
                  transition-colors`}
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      <BookCallModal isOpen={showBookCall} onClose={() => setShowBookCall(false)} />
    </section>
  );
};

export default Contact;
