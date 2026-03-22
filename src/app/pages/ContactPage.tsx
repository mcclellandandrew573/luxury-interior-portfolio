import React from 'react';
import { Navigation } from '../components/Navigation';
import { Mail, Phone, MapPin, Linkedin, Instagram, Send } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column - Contact Info */}
            <div>
              <h1 className="text-5xl md:text-6xl mb-8">Get in Touch</h1>
              <p className="text-xl text-neutral-600 mb-12 leading-relaxed">
                I'm always interested in hearing about new projects and opportunities.
                Whether you're looking to collaborate or just want to say hello, feel free to reach out.
              </p>

              {/* Contact Details */}
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-neutral-100">
                    <Mail className="w-6 h-6 text-neutral-900" />
                  </div>
                  <div>
                    <h3 className="text-lg mb-1">Email</h3>
                    <a
                      href="mailto:atm8136@gmail.com"
                      className="text-neutral-600 hover:text-neutral-900 transition-colors"
                    >
                      atm8136@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-neutral-100">
                    <Phone className="w-6 h-6 text-neutral-900" />
                  </div>
                  <div>
                    <h3 className="text-lg mb-1">Phone</h3>
                    <a
                      href="tel:+15551234567"
                      className="text-neutral-600 hover:text-neutral-900 transition-colors"
                    >
                      (469) 525-2787
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-neutral-100">
                    <MapPin className="w-6 h-6 text-neutral-900" />
                  </div>
                  <div>
                    <h3 className="text-lg mb-1">Location</h3>
                    <p className="text-neutral-600">
                      Dallas, TX<br />
                      Available for projects worldwide
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-lg mb-4">Connect</h3>
                <div className="flex gap-4">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-neutral-100 hover:bg-neutral-900 transition-colors group"
                  >
                    <Linkedin className="w-6 h-6 text-neutral-900 group-hover:text-white transition-colors" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-neutral-100 hover:bg-neutral-900 transition-colors group"
                  >
                    <Instagram className="w-6 h-6 text-neutral-900 group-hover:text-white transition-colors" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-neutral-50 p-8 lg:p-12">
              <h2 className="text-3xl mb-8">Send a Message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm mb-2 tracking-wide">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 bg-white border border-neutral-200 focus:border-neutral-900 focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm mb-2 tracking-wide">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 bg-white border border-neutral-200 focus:border-neutral-900 focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm mb-2 tracking-wide">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 bg-white border border-neutral-200 focus:border-neutral-900 focus:outline-none transition-colors"
                    placeholder="(XXX) XXX-XXXX"
                  />
                </div>

                <div>
                  <label htmlFor="project-type" className="block text-sm mb-2 tracking-wide">
                    Project Type
                  </label>
                  <select
                    id="project-type"
                    className="w-full px-4 py-3 bg-white border border-neutral-200 focus:border-neutral-900 focus:outline-none transition-colors"
                  >
                    <option>Select project type</option>
                    <option>Residential Design</option>
                    <option>Commercial Design</option>
                    <option>BIM & Automation</option>
                    <option>Project Managment</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm mb-2 tracking-wide">
                    Estimated Budget
                  </label>
                  <select
                    id="budget"
                    className="w-full px-4 py-3 bg-white border border-neutral-200 focus:border-neutral-900 focus:outline-none transition-colors"
                  >
                    <option>Select budget range</option>
                    <option>$50,000 - $100,000</option>
                    <option>$100,000 - $250,000</option>
                    <option>$250,000 - $500,000</option>
                    <option>$500,000+</option>
                    <option>Not sure yet</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm mb-2 tracking-wide">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white border border-neutral-200 focus:border-neutral-900 focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-neutral-900 text-white hover:bg-neutral-800 transition-colors group"
                >
                  <span className="tracking-widest text-sm uppercase">Send Message</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <section className="px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="aspect-[21/9] bg-neutral-200 flex items-center justify-center">
            <p className="text-neutral-500">Dallas, TX</p>
          </div>
        </div>
      </section>
    </div>
  );
}
