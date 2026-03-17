import React from 'react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';
import { projectsData } from '../data/projects';

export default function WorkPage() {
  const projects = projectsData;

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl mb-6">Portfolio</h1>
          <p className="text-xl text-neutral-600 max-w-3xl">
            A curated selection of luxury residential and commercial projects showcasing
            innovative design solutions and meticulous attention to detail.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <Link
                key={index}
                to={project.link}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden mb-6 bg-neutral-100">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-sm tracking-[0.2em] uppercase text-neutral-500">
                    {project.category} • {project.year}
                  </p>
                  <h2 className="text-3xl group-hover:text-neutral-600 transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-neutral-600">{project.location}</p>
                  <div className="flex items-center gap-2 text-neutral-900 pt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>View Case Study</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 lg:px-8 bg-neutral-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl mb-6">Interested in Working Together?</h2>
          <p className="text-xl text-neutral-600 mb-10">
            Let's discuss how we can bring your vision to life
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-neutral-900 text-white hover:bg-neutral-800 transition-all group"
          >
            <span className="tracking-widest text-sm uppercase">Start a Project</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
