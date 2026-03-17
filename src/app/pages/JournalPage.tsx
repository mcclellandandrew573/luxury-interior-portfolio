import React from 'react';
import { Navigation } from '../components/Navigation';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

export default function JournalPage() {
  const articles = [
    {
      title: 'The Future of BIM in Interior Design: AI and Automation',
      excerpt: 'Exploring how artificial intelligence and machine learning are transforming the way we approach Building Information Modeling, making design processes more efficient and accurate.',
      date: 'March 10, 2026',
      readTime: '8 min read',
      category: 'BIM Technology',
      image: 'https://images.unsplash.com/photo-1692598578454-570cb62ecf2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCSU0lMjBidWlsZGluZyUyMGluZm9ybWF0aW9uJTIwbW9kZWxpbmd8ZW58MXx8fHwxNzczNTQ3MTAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Streamlining Design Workflows with Dynamo',
      excerpt: 'A comprehensive guide to using Dynamo for Revit to automate repetitive tasks, create custom tools, and enhance productivity in your design practice.',
      date: 'February 24, 2026',
      readTime: '12 min read',
      category: 'Automation',
      image: 'https://images.unsplash.com/photo-1764737740462-2a310c7b2c39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3QlMjB3b3JraW5nJTIwZHJhZnRpbmclMjB0YWJsZXxlbnwxfHx8fDE3NzM1NDcwOTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'BIM Coordination: Best Practices for Multidisciplinary Teams',
      excerpt: 'Learn strategies for effective collaboration between architects, engineers, and interior designers using BIM 360 and other coordination platforms.',
      date: 'February 8, 2026',
      readTime: '10 min read',
      category: 'BIM Technology',
      image: 'https://images.unsplash.com/photo-1667985533629-ca8df3b4df6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzdHVkaW8lMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzczNTQ3MTAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Creating Custom Revit Families: A Designer\'s Guide',
      excerpt: 'Step-by-step tutorial on building parametric families that enhance your design library and improve project documentation quality.',
      date: 'January 20, 2026',
      readTime: '15 min read',
      category: 'BIM Technology',
      image: 'https://images.unsplash.com/photo-1695067439031-f59068994fae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZ3xlbnwxfHx8fDE3NzM0ODEyMDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Python Scripting for Interior Designers',
      excerpt: 'An introduction to using Python scripts to automate design tasks, generate reports, and create custom tools within your BIM workflow.',
      date: 'December 15, 2025',
      readTime: '14 min read',
      category: 'Automation',
      image: 'https://images.unsplash.com/photo-1753162657523-e81bb714f0b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2V0Y2hpbmclMjBkZXNpZ24lMjBpZGVhcyUyMG5vdGVib29rfGVufDF8fHx8MTc3MzU0NzA5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'The ROI of BIM Implementation in Small Design Practices',
      excerpt: 'Analyzing the costs, benefits, and timeline for implementing BIM in boutique design studios, with real-world case studies and metrics.',
      date: 'November 28, 2025',
      readTime: '11 min read',
      category: 'BIM Technology',
      image: 'https://images.unsplash.com/photo-1692598578454-570cb62ecf2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCSU0lMjBidWlsZGluZyUyMGluZm9ybWF0aW9uJTIwbW9kZWxpbmd8ZW58MXx8fHwxNzczNTQ3MTAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl mb-6">Journal</h1>
          <p className="text-xl text-neutral-600 max-w-3xl">
            Insights on BIM technology, design automation, and the intersection of 
            creativity and innovation in modern interior design practice.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-12 px-6 lg:px-8 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] bg-neutral-200">
              <ImageWithFallback
                src={articles[0].image}
                alt={articles[0].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="inline-block px-4 py-1 bg-neutral-900 text-white text-xs tracking-widest uppercase mb-4">
                Featured
              </span>
              <h2 className="text-4xl mb-4">{articles[0].title}</h2>
              <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                {articles[0].excerpt}
              </p>
              <div className="flex items-center gap-6 text-sm text-neutral-500 mb-6">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {articles[0].date}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {articles[0].readTime}
                </span>
              </div>
              <Link
                to="#"
                className="inline-flex items-center gap-2 text-neutral-900 hover:gap-4 transition-all"
              >
                <span>Read Article</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl mb-12">All Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {articles.slice(1).map((article, index) => (
              <Link key={index} to="#" className="group">
                <div className="aspect-[4/3] overflow-hidden mb-4 bg-neutral-100">
                  <ImageWithFallback
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="space-y-3">
                  <span className="text-xs tracking-widest uppercase text-neutral-500">
                    {article.category}
                  </span>
                  <h3 className="text-xl leading-tight group-hover:text-neutral-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-neutral-500 pt-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-6 lg:px-8 bg-neutral-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl mb-6">Stay Updated</h2>
          <p className="text-xl text-white/80 mb-10">
            Subscribe to receive the latest articles on BIM, automation, and design technology
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 bg-white text-neutral-900 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-white text-neutral-900 hover:bg-neutral-100 transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
