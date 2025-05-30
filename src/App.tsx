import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminDashboard from './components/AdminDashboard';

function App() {
  useEffect(() => {
    document.title = "TechBeyo - Innovative Software Development Solutions";
  }, []);

  // Check if we're on the admin route
  const isAdminRoute = window.location.pathname === '/admin';

  if (isAdminRoute) {
    return <AdminDashboard />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>TechBeyo - Innovative Software Development Solutions</title>
        <meta name="description" content="Transform your business with cutting-edge software development, DevOps, and technology consulting services. Expert solutions for web, mobile, and cloud." />
        <meta name="keywords" content="software development, web development, mobile apps, DevOps, cloud solutions, AI, machine learning, technology consulting" />
        
        {/* Dynamic structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "TechBeyo",
            "description": "Innovative software development and technology consulting services",
            "url": "https://techbeyo.com",
            "logo": "https://techbeyo.com/logo.png",
            "sameAs": [
              "https://twitter.com/techbeyo",
              "https://linkedin.com/company/techbeyo",
              "https://facebook.com/techbeyo"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+919988230172",
              "contactType": "customer service",
              "email": "contact@techbeyo.com",
              "areaServed": "Worldwide"
            }
          })}
        </script>
      </Helmet>

      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;