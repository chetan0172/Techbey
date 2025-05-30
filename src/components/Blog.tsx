import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, X } from 'lucide-react';

interface BlogPost {
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
}

const Blog: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const blogPosts: BlogPost[] = [
    {
      title: "Building Scalable SaaS Applications with Modern Architecture",
      excerpt: "Learn how to design and implement scalable SaaS applications using microservices, containerization, and cloud-native technologies.",
      content: `Modern SaaS applications require careful architectural planning to ensure scalability, reliability, and maintainability. In this comprehensive guide, we explore the key principles and best practices for building robust SaaS applications.

Key Topics Covered:
- Microservices architecture patterns
- Container orchestration with Kubernetes
- Event-driven architecture
- API gateway implementation
- Database scaling strategies
- Caching mechanisms
- Authentication and authorization
- Monitoring and observability

We'll walk through practical examples and real-world scenarios to help you make informed decisions when building your next SaaS application.`,
      date: "March 15, 2025",
      readTime: "8 min read",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
      author: "Christy R. Griffith"
    },
    {
      title: "DevOps Best Practices for Continuous Deployment",
      excerpt: "Explore essential DevOps practices and tools that enable seamless continuous integration and deployment pipelines.",
      content: `Implementing effective DevOps practices is crucial for modern software development teams. This article covers the essential aspects of setting up robust CI/CD pipelines and maintaining high-quality deployments.

Topics Covered:
- Automated testing strategies
- Infrastructure as Code (IaC)
- Continuous Integration best practices
- Deployment automation
- Monitoring and alerting
- Security considerations
- Performance optimization
- Rollback strategies

Learn how to implement these practices in your organization and improve your deployment workflow.`,
      date: "March 12, 2025",
      readTime: "6 min read",
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg",
      author: "Robert Montanez"
    },
    {
      title: "The Future of Software Development with AI",
      excerpt: "Discover how artificial intelligence is transforming software development and what it means for developers and businesses.",
      content: `Artificial Intelligence is revolutionizing how we approach software development. From code generation to testing and optimization, AI tools are becoming an integral part of the development workflow.

Key Areas of Impact:
- AI-powered code completion
- Automated code review
- Bug prediction and prevention
- Performance optimization
- Natural language processing
- Test case generation
- Development workflow automation
- Future trends and possibilities

Explore how AI is shaping the future of software development and how you can leverage these tools in your projects.`,
      date: "March 10, 2025",
      readTime: "7 min read",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
      author: "Emily Rodriguez"
    }
  ];

  const BlogModal: React.FC<{ post: BlogPost; onClose: () => void }> = ({ post, onClose }) => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[80vh] overflow-y-auto">
        <div className="relative h-64">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="p-8">
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{post.date}</span>
            <span className="mx-2">•</span>
            <Clock className="h-4 w-4 mr-1" />
            <span>{post.readTime}</span>
            <span className="mx-2">•</span>
            <span>By {post.author}</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{post.title}</h2>
          <div className="prose max-w-none">
            {post.content.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="mb-4 text-gray-600">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest Insights</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest trends and insights in software development, DevOps, and technology.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
              <div className="relative h-48">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <button 
                  onClick={() => setSelectedPost(post)}
                  className="text-blue-600 font-medium flex items-center hover:text-blue-700 transition-colors"
                >
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedPost && (
        <BlogModal post={selectedPost} onClose={() => setSelectedPost(null)} />
      )}
    </section>
  );
};

export default Blog;