import React from 'react';
import { Navigation } from '../components/Navigation';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Mountain, Camera, Book, Plane, Coffee, Music, Computer, BrushIcon } from 'lucide-react';

export default function AboutPage() {
  const interests = [
    {
      icon: Mountain,
      title: 'Hiking & Outdoors',
      description: 'Some of my earliest and most formative experiences were spent hiking, backpacking, and exploring the outdoors. Time in nature provides a grounding balance to the design profession and reinforces an appreciation for natural materials, scale, and environment. These excursions offer both creative reflection and a deeper awareness of how built environments relate to the landscapes around them.',
    },
    {
      icon: BrushIcon,
      title: 'Painting & Art',
      description: 'Art has always been a meaningful outlet for exploration and observation. Inspired early on by my grandfather, i enjoy painting landscapes, still life compositions, and interior perspectives. Maintaining an active creative practice outside of professional work helps me cultivate visual awareness, composition and an ongoing curiosity about color, light, and spacial storytelling.',
    },
    {
      icon: Computer,
      title: 'Technology and Automation',
      description: 'I actively explore emerging technologies that support design innovation and workflow efficiency. Tools such as Dynamo allow designers to build custom automation within Revit through visual scripting, enabling parametric modeling, data analysis and workflow optimization. These explorations help to reduce repetitive tasks and create more intelligent design processes.',
    },
    {
      icon: Plane,
      title: 'Travel',
      description: 'Travel—both domestic and international—has long been one of my greatest sources of inspiration. Experiencing different cultures, cities, and landscapes continually sharpens my design perspective and expands my understanding of how people inhabit space. From historic European streets to emerging urban districts, travel offers a living catalog of architecture, materials, and spatial experiences that inform my design thinking.',
    },
    {
      icon: Coffee,
      title: 'Cooking',
      description: 'Cooking has always been a meaningful part of my life, shaped by growing up in an Italian family where food was at the center of gathering and tradition. Preparing meals is both a creative outlet and a way to stay connected to those roots, blending heritage, craft, and the simple joy of sharing good food with others',
    },
    {
      icon: Music,
      title: 'Current Music Trends',
      description: 'I am an avid music fan and enjoy listening to a wide range of genres, including pop, rock, and jazz. I am also a musician and play the guitar in a band. I enjoy playing music with my friends and family and find it to be a great way to relax and unwind.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="aspect-[3/4] bg-neutral-200">
              <ImageWithFallback
 src="https://res.cloudinary.com/dk4hujmt3/image/upload/v1773803025/Image_InteriorDesignerPortrait_uttwm0.png"
                alt="Andrew T. McClelland's Portrait"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-md tracking-[0.3em] uppercase mb-4 text-neutral-500">About Me</p>
              <h1 className="text-5xl md:text-6xl mb-8">Andrew T. McClelland</h1>
              <p className="text-xl text-neutral-600 leading-relaxed">
                Interior Designer & BIM Specialist with a passion for creating spaces that inspire
              </p>
              <p className="pt-32 pb-5 px-6 lg:px=8 bg-neutral-50">
              </p>
              <p className="text-xl text-bold-500 leading-relaxed">
                " I didn't set out to be a designer  - I set out to solve problems."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl mb-12">My Journey</h2>

          <div className="space-y-8 text-lg text-neutral-700 leading-relaxed">
            <p>
              From an early age, spaces facinated me; how we move through them, how they make us feel, and how the right detail can elevate ordinary moments into something meaningful.
              My fascination became a calling and over the past decade it's taken shape in hospitality-driven multifamily, senior living and commercial interiors where people's daily lives unfold.
            </p>

            <p>
              Design, is not decoration. Its strategy made visible. It's about understanding the human experience, technical realities of building, and the poetry that happens when the two align. I've learned that great design emerges less from intuition alone and more from the discipline of process - a throughful choreography of research, collaboration, iteration, and decisions that are purposeful.
            </p>

            <p>
              Early in my career, I discovered my strength lies in bridging the conceptual and the concrete. I love big ideas - but I'm equally passionate about the nuts and bolts that make those ideas buildable, resilient, and enduring. That means asking the hard questions early, listening harder, and always respecting the logic of the craft while pushing its boundaries.
              Wheter I'm refining a guest arrival sequence, selecting materials or coordinating complex workflows across teams, I'm driven by one guiding principle: design should create spaces that matter - spaces that feel right, work right and spaces that will last.
            </p>

            <p>
              The projects you'll see in this portfolio are not just visual statments, they are stories of the challenges, collaborations, and my own pursuit of clarity.
            </p>

            <p>
              I've been fortunate to work with clients and partners who value thoughtful process as much as thoughtful outcomes. Together we've navigated evolving needs, tight constraints and ambitious goals - and in doing so, shaped environments that enhance experience and elevate everyday life.
              This portfolio is a curated look at that journey. Here you'll find not just what I've done, but why it matters & how it came to be. If a project resonates with you - whether in approach, aesthetic, or intention - I'd love to start a conversation.
            </p>

            <p>
              Lets design something that matters!
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-6 lg:px-8 bg-neutral-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl mb-8">Design Philosophy</h2>
          <blockquote className="text-2xl md:text-3xl font-light leading-relaxed italic">
            "Great design is invisible—it simply feels right. It anticipates needs,
            celebrates beauty, and creates moments of quiet joy in everyday life."
          </blockquote>
        </div>
      </section>

      {/* Outside the Studio Section */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl mb-4">Outside the Studio</h2>
            <p className="text-lg text-neutral-600">
              When I'm not designing, I find inspiration in diverse pursuits and experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {interests.map((interest, index) => (
              <div key={index} className="group">
                <div className="mb-4 p-4 bg-neutral-50 w-fit group-hover:bg-neutral-900 transition-colors">
                  <interest.icon className="w-8 h-8 text-neutral-900 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl mb-2">{interest.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{interest.description}</p>
              </div>
            ))}
          </div>

          {/* Visual Interest Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            <div className="aspect-square bg-neutral-100">
              <ImageWithFallback
                src="https://res.cloudinary.com/dk4hujmt3/image/upload/v1773807188/hiking_gmwmld.webp"
                alt="Hiking"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square bg-neutral-100">
              <ImageWithFallback
                src="https://res.cloudinary.com/dk4hujmt3/image/upload/v1773807189/music_fbytkq.jpg"
                alt="Music"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square bg-neutral-100">
              <ImageWithFallback
                src="https://res.cloudinary.com/dk4hujmt3/image/upload/v1773807188/travel_bmwtbi.jpg"
                alt="Travel"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square bg-neutral-100">
              <ImageWithFallback
                src="https://res.cloudinary.com/dk4hujmt3/image/upload/v1773807188/cooking_uw5t3w.jpg"
                alt="Cooking"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div >
  );
}
