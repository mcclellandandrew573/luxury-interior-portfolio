import React from 'react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { HeroVideoLoop } from '../components/HeroVideoLoop';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center pt-20">
        <HeroVideoLoop />

        <div className="relative text-center text-white px-6 max-w-4xl">
          <p className="text-sm tracking-[0.3em] uppercase mb-6 text-white/90">
            Interior Designer & BIM Specialist
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl mb-8 font-light">
            Andrew T. McClelland
          </h1>
          <p className="text-xl md:text-2xl font-light text-white/90 mb-12 max-w-2xl mx-auto">
            Crafting sophisticated spaces through innovative design and cutting-edge technology
          </p>
          <Link
            to="/work"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-neutral-900 hover:bg-neutral-100 transition-all group"
          >
            <span className="tracking-widest text-sm uppercase">View Portfolio</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl md:text-5xl mb-6">Featured Work</h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                Explore a curated selection of luxury residential and commercial projects
                that showcase innovative design solutions and meticulous attention to detail.
              </p>
              <Link
                to="/work"
                className="inline-flex items-center gap-2 text-neutral-900 hover:gap-4 transition-all"
              >
                <span>View All Projects</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="aspect-[4/3] bg-neutral-100">
              <ImageWithFallback
                src="https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805633/01_oocwuk.png"
                alt="Featured project"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 lg:px-8 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl mb-12">Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white border border-neutral-200">
              <h3 className="text-2xl mb-4">Interior Design</h3>
              <p className="text-neutral-600 leading-relaxed">
                Creating refined, livable spaces that balance aesthetic excellence with functional sophistication.
              </p>
            </div>
            <div className="p-8 bg-white border border-neutral-200">
              <h3 className="text-2xl mb-4">BIM & Automation</h3>
              <p className="text-neutral-600 leading-relaxed">
                Leveraging advanced technology to streamline design workflows and enhance project delivery.
              </p>
            </div>
            <div className="p-8 bg-white border border-neutral-200">
              <h3 className="text-2xl mb-4">Project Management</h3>
              <p className="text-neutral-600 leading-relaxed">
                Orchestrating seamless collaboration between design teams, contractors, and clients.
              </p>
            </div>
            <div className="p-8 bg-white border border-neutral-200">
              <h3 className="text-2xl mb-4">Complex Renovations</h3>
              <p className="text-neutral-600 leading-relaxed">
                Transforming aging spaces into vibrant, livable environments through innovative design and meticulous execution.
              </p>
            </div>
            <div className="p-8 bg-white border border-neutral-200">
              <h3 className="text-2xl mb-4">Sustainability</h3>
              <p className="text-neutral-600 leading-relaxed">
                Prioritizing sustainable practices and materials to reduce environmental impact.
              </p>
            </div>
            <div className="p-8 bg-white border border-neutral-200">
              <h3 className="text-2xl mb-4">Multi-family</h3>
              <p className="text-neutral-600 leading-relaxed">
                Designing and renovating multi-family buildings to create livable, sustainable, and energy-efficient spaces.
              </p>
            </div>
            <div className="p-8 bg-white border border-neutral-200">
              <h3 className="text-2xl mb-4">Senior Living</h3>
              <p className="text-neutral-600 leading-relaxed">
                Designing and renovating senior living buildings to create livable, sustainable, and energy-efficient spaces.
              </p>
            </div>
            <div className="p-8 bg-white border border-neutral-200">
              <h3 className="text-2xl mb-4">Commercial Interiors</h3>
              <p className="text-neutral-600 leading-relaxed">
                Designing the spaces that define our daily lives.
              </p>
            </div>
            <div className="p-8 bg-white border border-neutral-200">
              <h3 className="text-2xl mb-4">Luxury Interiors & Hospitality</h3>
              <p className="text-neutral-600 leading-relaxed">
                Designing luxury Hi-Rise and Hospitality projects that provide an elevated experience for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 lg:px-8 bg-neutral-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl mb-6 font-light">Let's Create Something Extraordinary</h2>
          <p className="text-xl text-white/80 mb-10">
            Ready to transform your space? Get in touch to discuss your project.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-neutral-900 hover:bg-neutral-100 transition-all group"
          >
            <span className="tracking-widest text-sm uppercase">Get in Touch</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
