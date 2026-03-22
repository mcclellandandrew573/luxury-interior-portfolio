import React from 'react';
import { Navigation } from '../components/Navigation';
import { Download, Award, Briefcase, GraduationCap, Code, Users } from 'lucide-react';

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-12 pb-8 border-b-2 border-neutral-900">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-6">
              <div className="flex items-center gap-6">
                <img
                  src="https://res.cloudinary.com/dk4hujmt3/image/upload/v1773803026/InteriorDesignerPortrait_utzaak.png"
                  alt="Andrew T. McClelland"
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover shrink-0"
                />
                <div>
                  <h1 className="text-4xl md:text-5xl mb-2">Andrew T. McClelland</h1>
                  <p className="text-lg md:text-xl text-neutral-600">
                    Senior Interior Designer & BIM Automation Specialist
                  </p>
                </div>
              </div>
              <button className="flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white hover:bg-neutral-800 transition-colors shrink-0">
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </button>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-neutral-600">
              <span>Dallas TX, </span>
              <span>•</span>
              <span>atm8136@gmail.com</span>
              <span>•</span>
              <span>(469) 525-2787</span>
              <span>•</span>
              <span>linkedin.com/in/andrew-mcclelland-0373975b</span>
            </div>
          </div>

          {/* Professional Summary */}
          <section className="mb-12">
            <h2 className="text-2xl mb-4 flex items-center gap-3">
              <div className="w-8 h-8 bg-neutral-900 flex items-center justify-center">
                <Users className="w-4 h-4 text-white" />
              </div>
              Professional Summary
            </h2>
            <p className="text-neutral-700 leading-relaxed text-lg">
              With over a decade of industry experience, I bring a disciplined and thoughtful approach to interior design—focused on translating complex ideas into precise, client-specific solutions. My work is grounded in clear communication, structured workflows, and efficient execution, allowing projects to move forward with confidence while achieving elevated design outcomes.
              <br />
              <br />
              Throughout my career, I have contributed to a wide range of project types, from small-scale renovations to large luxury developments. My experience includes garden-style, mid-rise, and high-rise multifamily communities, as well as senior living, workplace, residential, commercial, and education environments. This diversity of work has shaped a versatile design perspective and a calm, solution-oriented approach to complex challenges.
              <br />
              <br />
              I am a confident designer with a strong work ethic and a commitment to accountability. I translate ideas into resolved environments through thoughtful dialogue, clear documentation, and strong visual storytelling. My process prioritizes clarity and collaboration, ensuring that design intent is carried consistently from concept through execution.
              <br />
              <br />
              I am driven by work that moves both quickly and thoughtfully—creating sustainable, high-impact spaces that elevate everyday experience while strengthening long-term project value.
            </p>
          </section>

          {/* Experience */}
          <section className="mb-12">
            <h2 className="text-2xl mb-6 flex items-center gap-3">
              <div className="w-8 h-8 bg-neutral-900 flex items-center justify-center">
                <Briefcase className="w-4 h-4 text-white" />
              </div>
              Professional Experience
            </h2>

            <div className="space-y-8">
              {/* Job 1 */}
              <div className="border-l-2 border-neutral-900 pl-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl">Senior Interior Designer</h3>
                    <p className="text-neutral-600">Southern Land Company, Plano, TX</p>
                  </div>
                  <span className="text-neutral-500 text-sm">September 2025 - January 2026</span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-neutral-700 mt-4">
                  <li>Led interior design scope for multifamily, mixed-use, & hospitality-driven projects from concept through construction administration.</li>
                  <li>Coordinated third-party designers to ensure alignment with owner vision, design standards, budgets, & schedules.</li>
                  <li>Developed interior design standards, unit finish packages, & FF&E specifications, securing executive-level approvals.</li>
                  <li>Presented concepts, material strategies, & design updates at key project milestones for leadership review.</li>
                  <li>Reviewed submittals, RFIs, installations, & punch lists to ensure execution aligned with approved design intent.</li>
                  <li>Worked on award winning communities being developed such as Capella, Symphony Park, The Laurel, 5th and Spring, Fairington, Westhaven, and Food Hall</li>
                </ul>
              </div>

              {/* Job 2 */}
              <div className="border-l-2 border-neutral-200 pl-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl">Senior Interior Designer</h3>
                    <p className="text-neutral-600">Claycomb Associate Architects, Dallas, TX</p>
                  </div>
                  <span className="text-neutral-500 text-sm">March 2025 - September 2025</span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-neutral-700 mt-4">
                  <li>Led interior design efforts for K–12 and educational projects, supporting work from programming through design development.</li>
                  <li>Established project definitions, space programs, and budget frameworks aligned with school district goals and regulatory requirements.</li>
                  <li>Collaborated with architectural teams and clients to resolve complex design challenges and communicate intent through drawings and 3D studies.</li>
                  <li>Mentored junior designers on design principles and technical documentation</li>
                  <li>Spearheaded firm's creation of custom workflow tools and custom Revit add-ins custom tailored to thier processes</li>
                </ul>
              </div>

              {/* Job 3 */}
              <div className="border-l-2 border-neutral-200 pl-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl">Account Executive / Institutional Manager</h3>
                    <p className="text-neutral-600">Charels Schwab, Westlake, TX</p>
                  </div>
                  <span className="text-neutral-500 text-sm">March 2022 - December 2024</span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-neutral-700 mt-4">
                  <li>Supported high-volume advisors through complex client, technical, and service needs.</li>
                  <li>Developed client-facing reports and presentations to identify trends and improve engagement.</li>
                  <li>Recognized with three Principal Awards for performance and service excellence.</li>
                </ul>
              </div>

              {/* Job 4 */}
              <div className="border-l-2 border-neutral-200 pl-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl">Lead Interior Designer/ Account Executive</h3>
                    <p className="text-neutral-600">Made Renovations, San Francisco, CA</p>
                  </div>
                  <span className="text-neutral-500 text-sm">January 2021 - December 2023</span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-neutral-700 mt-4">
                  <li>Led residential interior projects from client consultation through final installation, balancing design vision, budget, & construction feasibility.</li>
                  <li>Developed interior concepts, space plans, & construction drawings.</li>
                  <li>Managed vendor coordination, procurement, & budgeting to ensure timely & cost-effective project delivery.</li>
                  <li>Served as primary client point of contact, guiding design decisions & maintaining alignment throughout project execution.</li>
                  <li>Collaborated with architects, engineers, & contractors to resolve complex design challenges & ensure project success.</li>
                </ul>
              </div>

              {/* Job 5 */}
              <div className="border-l-2 border-neutral-200 pl-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl">Lead Interior Designer</h3>
                    <p className="text-neutral-600">Bush Architects, Plano, TX</p>
                  </div>
                  <span className="text-neutral-500 text-sm">September 2019 - October 2020</span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-neutral-700 mt-4">
                  <li>Led interior design for new-build Class A multifamily and hospitality-driven projects, supporting work from concept through construction documentation.</li>
                  <li>Developed interior concepts, finish standards, FF&E packages, & visual presentations for stakeholder review & approval.</li>
                  <li>Produced interior documentation & coordinated closely with architectural, engineering, & consultant teams to ensure alignment.</li>
                  <li>Supported streamlined project delivery through consultant coordination & design intent oversight.</li>
                  <li>Collaborated with architects, engineers, & contractors to resolve complex design challenges & ensure project success.</li>
                </ul>
              </div>

              {/* Job 6 */}
              <div className="border-l-2 border-neutral-200 pl-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl">Lead Interior Designer/ Project Manager</h3>
                    <p className="text-neutral-600">Presidium Group, Dallas, TX</p>
                  </div>
                  <span className="text-neutral-500 text-sm">January 2016 - September 2019</span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-neutral-700 mt-4">
                  <li>Led interior design for multifamily renovation & redevelopment projects, guiding work from feasibility through documentation & on-site execution.</li>
                  <li>Developed interior concepts, space plans, finish palettes, & FF&E packages for amenity spaces, common areas, & model units. Produced construction documents & coordinated with architecture, engineering, & specialty consultants to ensure alignment & constructability.</li>
                  <li>Supported leadership reviews & investment decisions through feasibility analysis, presentations, & on-site quality control.</li>
                  <li>Produced and managed procurement and installation of all FF&E packages, including furniture, textiles, lighting, artwork, accessories, & finishes.</li>
                  <li>Collaborated with architects, engineers, & contractors to resolve complex design challenges & ensure project success.</li>
                </ul>
              </div>

              {/* Job 7 */}
              <div className="border-l-2 border-neutral-200 pl-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl">Interior Designer</h3>
                    <p className="text-neutral-600">Perkins Eastman, Pittsburgh, PA</p>
                  </div>
                  <span className="text-neutral-500 text-sm">February 2014 - October 2015</span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-neutral-700 mt-4">
                  <li>Contributed to large-scale commercial interior projects across senior living, workplace, hospitality, & mixed-use sectors. Supported design development, documentation, FF&E coordination, & client presentations using Revit, AutoCAD, & Adobe Creative Suite.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="mb-12">
            <h2 className="text-2xl mb-6 flex items-center gap-3">
              <div className="w-8 h-8 bg-neutral-900 flex items-center justify-center">
                <GraduationCap className="w-4 h-4 text-white" />
              </div>
              Education
            </h2>

            <div className="space-y-6">
              <div className="border-l-2 border-neutral-900 pl-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl">Bachelors of Science in Interior Design</h3>
                    <p className="text-neutral-600">Art Institute of Pittsburgh, Pittsburgh PA</p>
                  </div>
                  <span className="text-neutral-500 text-sm">2010 - 2013</span>
                </div>
                <p className="text-neutral-700 mt-2">
                  Graduated with Honors • Thesis: "Biomimicry Design Principals in the Built Environment"
                </p>
              </div>

              <div className="border-l-2 border-neutral-200 pl-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl">Bachelors of Science in International Marketing</h3>
                    <p className="text-neutral-600">University of Arizona, Tuscon, AZ</p>
                  </div>
                  <span className="text-neutral-500 text-sm">2008-2010</span>
                </div>
                <p className="text-neutral-700 mt-2">
                  Summa Cum Laude • Dean's List all semesters
                </p>
              </div>
            </div>
          </section>

          {/* Skills & Expertise */}
          <section className="mb-12">
            <h2 className="text-2xl mb-6 flex items-center gap-3">
              <div className="w-8 h-8 bg-neutral-900 flex items-center justify-center">
                <Code className="w-4 h-4 text-white" />
              </div>
              Skills & Expertise
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg mb-3 font-medium">Design Software</h3>
                <ul className="space-y-2 text-neutral-700">
                  <li>• Autodesk Revit (Advanced)</li>
                  <li>• AutoCAD (Expert)</li>
                  <li>• SketchUp Pro</li>
                  <li>• Adobe Creative Suite</li>
                  <li>• Enscape & V-Ray Rendering</li>
                  <li>• Rhino & Grasshopper</li>
<li>• Dynamo, Python, TypeScript, Design Script, C#, native WPF, Add-ins, APIs +</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg mb-3 font-medium">BIM & Automation</h3>
                <ul className="space-y-2 text-neutral-700">
                  <li>• Revit API & Dynamo</li>
                  <li>• Python Scripting</li>
                  <li>• BIM 360 & Collaboration Tools</li>
                  <li>• Navisworks Coordination</li>
                  <li>• BIM Standards Development</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg mb-3 font-medium">Design Expertise</h3>
                <ul className="space-y-2 text-neutral-700">
                  <li>• Space Planning</li>
                  <li>• FF&E Specification</li>
                  <li>• Custom Millwork Design</li>
                  <li>• Lighting Design</li>
                  <li>• Material Selection</li>
                  <li>• Color Theory</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg mb-3 font-medium">Project Management</h3>
                <ul className="space-y-2 text-neutral-700">
                  <li>• Budget Management</li>
                  <li>• Vendor Coordination</li>
                  <li>• Client Relations</li>
                  <li>• Team Leadership</li>
                  <li>• Construction Administration</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Certifications & Awards */}
          <section className="mb-12">
            <h2 className="text-2xl mb-6 flex items-center gap-3">
              <div className="w-8 h-8 bg-neutral-900 flex items-center justify-center">
                <Award className="w-4 h-4 text-white" />
              </div>
              Certifications & Awards
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg mb-3 font-medium">Certifications</h3>
                <ul className="space-y-2 text-neutral-700">
                  <li>• Six Sigma White Belt Certification</li>
                  <li>• Six Sigma Yellow Belt Certification</li>
                  <li>• Six Sigma Green Belt Certification</li>
                  <li>• SIE Certification</li>
                  <li>• Series 6 and 63 and 7 Licenses</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg mb-3 font-medium">Awards & Recognition</h3>
                <ul className="space-y-2 text-neutral-700">
                  <li>• President Award 2022-2023</li>
                  <li>• Multifamily Dallas Development Award- Best Garden Renovation 2020</li>
                  <li>• Multifamily Best New Build Garden Style Apartments - Austin Texas 2023</li>
                  <li>• SIE Certifications</li>
                  <li>• Six Sigma Certifications </li>
                  <li>• Multifamily Best Property of the Year 2018</li>
                  <li>• Luxury Apartment Awarded in San Antonio 2018</li>
                  <li>• Best Senior Living Community - Luxury Design Frisco TX 2019 </li>
                  <li>• Best in Show - Senior Thesis Review 2013</li>
                  <li>• ID Department Award for Excellence 2013</li>
                  <li>• Principal Award 2010-2013</li>
                  <li>• HGTV Online - Students to Watch 2010</li>
                  <li>• Special Mention Fall Fashion Week at W Hotel</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
