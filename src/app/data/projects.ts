export interface AmenityData {
  title: string;
  description: string;
  image: string;
  gallery?: string[];
}

export interface CommonSpaceData {
  title: string;
  image: string;
  details: string;
  gallery?: string[];
}

export interface TechnicalDocumentData {
  title: string;
  description: string;
  size: string;
  pages: number;
  link?: string;
  gallery?: string[];
}

export interface MoodBoardData {
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export interface BeforeAfterData {
  title: string;
  before: string;
  after: string;
  description: string;
}

export interface MaterialData {
  name: string;
  category: string;
  application: string;
  image: string;
}

export interface ColorData {
  name: string;
  hex: string;
}

export interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  location: string;
  year: string;
  image: string;
  link: string;

  // Optional dynamic sections
  amenities?: AmenityData[];
  commonSpaces?: CommonSpaceData[];
  technicalDocuments?: TechnicalDocumentData[];
  moodBoards?: MoodBoardData[];
  beforeAfter?: BeforeAfterData[];
  materials?: MaterialData[];
  colors?: ColorData[];
  videoReel?: string;
}

export const projectsData: ProjectData[] = [
  {
    id: 'Clover',
    title: 'Clover on Park Lane',
    subtitle: 'Repositioning a B+ class asset',
    category: 'Multifamily Value-Add Repositioning',
    location: 'Dallas, Texas',
    year: '2018',
    image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773803153/00_movube.png',
    link: '/work/Clover',
    amenities: [
      {
        title: 'Resort Style Pool',
        description: 'A tranquil retreat designed to create a resort-style living experience, enhance the unique appeal of the property while creating a statement to increase visability and drive occupancy rates.',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773803531/clover_ba_09_after_dxpgap.jpg',
        gallery: [
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773962926/8673176986712211117667_mg09ts.jpg',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773962985/OvUkp5CQt119pxL_url_1564568414.jpg_hvyikg.jpg',
        ]
      },
      {
        title: 'Fitness Center',
        description: 'Updated fitness center with new equipment and finishes.',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773814051/VIEW_10_ez4kgf.png',
        gallery: [
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773962818/9668b2e8a1147316b9f434f7b7f99069c-f3450368272rd-w1280_h960_l96gxg.webp',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773962827/yaQQNd8k9WNeMep_url_1564568415.jpg_eydj1a.jpg',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773962842/93fccd8fbc9af6bb311281d76749fd4d.jpeg_652_416_rgqhew.jpg',
        ]
      },
      {
        title: 'Resident Lounge',
        description: 'An exclusive area for residents to unwind, featuring comfortable seating, and a premium beverage station.',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773814098/VIEW_14_dn6p1a.png'
      },
      {
        title: 'Playgrounds + Outdoor Kitchen/Grill Areas',
        description: 'Panoramic city views complemented by landscaped gardens, fire pits, and comfortable lounging areas perfect for evening gatherings.',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773803527/clover_ba_08_after_oodjzj.jpg',
        gallery: [
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773962546/playground-equipment-for-apartment-complexes-and-multi-family-hoa-areas_700x460_10_aohsn0.webp',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773962570/APS-118ADA-02-02__3D-Max__PRIMARY__Front__2-3-22__RB_web-1-430x287_apof12.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773962581/mountain-home-thumb_fs5twk.jpg',
        ]
      },
      {
        title: 'Dog Park',
        description: 'Panoramic city views complemented by landscaped gardens, fire pits, and comfortable lounging areas perfect for evening gatherings.',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773803555/clover_ba_17_after_e8tp94.jpg',
        gallery: [
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773962182/PHM1-1-scaled_ugitsg.jpg',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773962190/fit_bhxzh2.jpg',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773962199/commercial-property-amenity-lawn-dog-park_wxbkgr.jpg',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773962219/small_dog_kit_uqofic.jpg',
        ]
      },
      {
        title: 'Fire Pit Area',
        description: 'Panoramic city views complemented by landscaped gardens, fire pits, and comfortable lounging areas perfect for evening gatherings.',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773803557/clover_ba_18_after_g2ewo9.jpg',
        gallery: [
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773962354/a2_cq4jiq.jpg',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773962362/Fire_Pit_ziw52s.webp',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773962493/gravel-fire-pit-cons-v0-dmmdk5saaevd1_ottrab.jpg',
        ]
      }
    ],
    commonSpaces: [
      {
        title: 'Grand Entrance/ Demolition Plan/ Renovation Plan',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773803543/clover_ba_13_after_vb7i98.jpg',
        details: 'Double-height ceiling with custom leasing desk details and multifamily branding',
        gallery: [
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773803329/RENOVATION_PLAN_xecajt.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773803328/demo_plan_ctzhlv.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773803263/clover_leasing_z6l8mv.png',
        ]
      },
      {
        title: 'Main Lobby',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773803547/clover_ba_14_after_j0xruq.jpg',
        details: 'Concrete stained flooring, buffalo check upholstry and black metal tables for perspective residents to engage with leasing agents.',
        gallery: [
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773803404/view6_kgnbzc.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773803401/Sketch_3_4x_ymxxxl.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773803397/Render2_4x_t4b8s6.jpg',
        ]
      },
      {
        title: 'Kitchenette - concept',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773803400/Render6_4x_cm9lxj.png',
        details: 'Green Tile, White Stone Countertops, Wood Details and finishes, Accent Color Upholstry.',
        gallery: [
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773961525/View_2_4x_zq8o5f.jpg',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773961517/sketchofkitchenette_pke8ng.jpg',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773961412/clover_render02_ohnvdg.png',
        ]
      },
      {
        title: 'Wifi Lounge + Co-working Bar + Concept Sketches',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773803394/clover_sketch_03_nauux9.jpg',
        details: 'Natural Stained wood finishes, Black Metal and Matte Paint Accents, Green Upholstry accents and modern light fixtures.',
        gallery: [
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773803398/Render5_pcgqot.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773961466/Render_4_4x_cwxxwv.jpg',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773961493/SKETCH_6_zk1bci.jpg',
        ]
      },
      {
        title: 'Exterior Renovation Paint Directive',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773961395/clover_exterior_elevation_03_oqjoqv.jpg',
        details: 'Exterior Paint Directive for Clover on Park Lane Renovation Project',
        gallery: [
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773961403/clover_exterior_elevation_04_j0ibiq.jpg',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773961386/clover_exterior_elevation_02_vhetxz.jpg',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773961378/clover_exterior_elevation_01_p0gjfc.jpg',
        ]
      }
    ],
    technicalDocuments: [
      {
        title: 'Floor Plans & Layouts',
        description: 'Detailed architectural floor plans including spatial organization and dimensions.',
        size: '4 MB',
        pages: 3,
        link: 'https://drive.google.com/file/d/1ynZZtdBYTyTUyKkwkm9AkNUGgKzYIUCe/view?usp=drive_link'
      },
      {
        title: 'Lighting Specifications',
        description: 'Lighting and Finish Schedule for Clover on Park Lane Renovation Project',
        size: '238 KB',
        pages: 2,
        link: 'https://drive.google.com/file/d/13NQ36YAXSSL7mlEFrQvU4aJDAc4d2tJN/view?usp=drive_link'
      },
      {
        title: 'Financial Model - Value-add Proposition',
        description: 'Financial Model for Budgeting and Cost Estimation for Renovation at Clover on Park Lane',
        size: '28 KB',
        pages: 1,
        link: 'https://drive.google.com/file/d/1-GkyIliCeP32GcFRnhTHc7so_yFpQCMq/view?usp=drive_link'
      },
      {
        title: 'Finish Schedules',
        description: 'Index of specified materials, paints, and wallcoverings.',
        size: '215 KB',
        pages: 2,
        link: 'https://drive.google.com/file/d/1RsS0wsTIy6q8OJE8o6GYCaQ2uneapVIX/view?usp=drive_link'
      },
      {
        title: 'Floor Plan Studies/ Diagrams',
        description: 'Furniture, Fixtures, and Equipment specifications with tear sheets.',
        size: '3.5 MB',
        pages: 1,
        link: 'https://drive.google.com/file/d/1i1PwC0HOaIOf7jklwyiHQa3ZHptpqHZF/view?usp=drive_link'
      },
      {
        title: 'Developer Overview / Analysis Deck',
        description: 'Scheduled plumbing fixtures, sanitary ware, and architectural hardware.',
        size: '6.5 MB',
        pages: 16,
        link: 'https://drive.google.com/file/d/1arCeNjZfOuS09D5w6bgK-2q2yMcUD3U5/view?usp=drive_link'
      }
    ],
    moodBoards: [
      {
        title: 'Site Context & Site Analysis',
        description: 'The surrounding context is defined by a blend of established multifamily communities, large-scale retail destinations such as NorthPark Center, and ongoing reinvestment across the corridor—positioning the site within a rapidly evolving urban submarket. Clover’s placement at the intersection of Park Lane and Abrams Road reinforces its visibility and accessibility, while proximity to major arterial routes supports strong vehicular circulation and regional connectivity. From a site analysis standpoint, the project leverages its adjacency to retail amenities, employment centers, and transit infrastructure to create a highly livable residential environment. The existing urban fabric—characterized by mid-density residential and commercial uses—presents both opportunity and constraint, requiring thoughtful design responses to circulation, parking integration, and amenity activation. Ultimately, Clover on Park Lane is strategically positioned to capitalize on the continued growth of the Park Lane district, transforming a legacy multifamily asset into a contemporary, amenity-driven community within a thriving mixed-use ecosystem.',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773803154/01-04_acrzgh.jpg',
        tags: ['Site Context & Site Analysis', 'Proximity', 'Amenity Activation', 'Urban Fabric']
      },
      {
        title: 'Sketches & Conceptualization',
        description: 'The early conceptual sketches for Clover on Park Lane explore a clear, diagrammatic approach to site organization—translating existing conditions into a more intentional and activated residential environment. Through layered hand-drawn studies, circulation paths, amenity zones, and building relationships are simplified into bold graphic moves, allowing key ideas to emerge quickly and intuitively. The sketches focus on strengthening connectivity across the site, enhancing central gathering spaces, and redefining edges to create a more cohesive and navigable community. These initial studies served as the foundation for the design direction—bridging analytical site planning with a more curated, lifestyle-driven vision for the redevelopment.',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773940674/Cloversketches_x97sxf.png',
        tags: ['Early Design Conceptualization', 'Sketches', 'Architectural Diagrams', 'Site Planning']
      }
    ],
    beforeAfter: [
      {
        title: 'Signage/ Property Frontage',
        before: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773803512/clover_ba_00_before_mp8qev.jpg',
        after: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773814316/VIEW_2_pxq4ih.png',
        description: 'The Tired Property Sign needed a much cleaner and more visable statment to be made to promote the property and create more visual awareness.'
      },
      {
        title: 'Main Pool',
        before: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773803538/clover_ba_11_before_r5wm7q.jpg',
        after: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773803535/clover_ba_10_after_cxxx8d.jpg',
        description: 'Re-designing the Pool with the new "gate" water feature and cabana area to create a more upscale and resort-like feel.'
      },
      {
        title: 'Unit Model bedroom',
        before: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773803515/clover_ba_01_before_elzna0.jpg',
        after: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773803514/clover_ba_01_after_edgklt.jpg',
        description: 'The Model Unit was outdated and needed a refresh to appeal to the target demographic. The space was transformed with new finishes, furniture, and accessories.'
      },
      {
        title: 'Main Lobby',
        before: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773803545/clover_ba_13_before_bgyzyq.jpg',
        after: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773803543/clover_ba_13_after_vb7i98.jpg',
        description: 'The Main lobby was outdated, broken up and underutilized. The space was transformed with new finishes, furniture, and accessories.'
      },
      {
        title: 'Leasing Lounge',
        before: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773803552/clover_ba_15_before_fjvaqe.jpg',
        after: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773814098/VIEW_14_dn6p1a.png',
        description: 'This space was not being utilized and felt disconnected from the rest of the leasing office, making the whole space feel much smaller and increasing the dated and drab presence of the property. By opening this up we created better circulation, better sightlines to the pool and other amenities and modernized the appeal.'
      },
      {
        title: 'Leasing',
        before: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773803548/clover_ba_14_before_ytfqei.jpg',
        after: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773803547/clover_ba_14_after_j0xruq.jpg',
        description: 'The leasing area was outdated and needed a refresh to appeal to the target demographic. The space was transformed with new finishes, furniture, and accessories.'
      },
      {
        title: 'Fitness Center',
        before: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773803541/clover_ba_12_before_cacne2.jpg',
        after: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773814051/VIEW_10_ez4kgf.png',
        description: 'The fitness center was outdated and needed a refresh to appeal to the target demographic. The space was transformed with new finishes, furniture, and accessories.'
      }
    ],
    materials: [
      {
        name: 'Dark Walnut Stain',
        category: 'Wood',
        application: 'Flooring LVT in Units and Lobby Accents',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773803292/02_mwmhts.png'
      },
      {
        name: 'Accent Upholstry',
        category: 'Textile',
        application: 'Furniture Accent Color / Upholstry',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773960336/lona_tapicer_a_antimanchas_ocre-1_sjnmjh.jpg'
      },
      {
        name: 'Buffalo Check Upholstry',
        category: 'Textile',
        application: 'Lobby Chair Upholstry',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773960289/Four_Inch_check_kelly_green_b4clzr.jpg'
      },
      {
        name: 'Polished Concrete',
        category: 'Concrete',
        application: 'Stained and Polished Concrete Finish',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773960235/seamless-polished-dark-concrete-floor-or-old-grunge-texture-old-vintage-charcoal-black-chalkboard-or-blackboard-dark-wallpaper-grunge-texture-copy-space-texture-of-a-grungy-black-concrete-photo_jsmtzt.jpg'
      }
    ],
    colors: [
      { name: 'Cotton White', hex: '#F4EBDF' },
      { name: 'Pewter Cast', hex: '#999592' },
      { name: 'Black Magic', hex: '#2F2D2D' },
      { name: 'Saddle', hex: '#BB9937' },
      { name: 'Shamrock', hex: '#205032' }
    ]
  },
  {
    id: 'Revelstoke',
    title: 'Revelstoke',
    subtitle: 'Modern Living Rooted in Place.',
    category: 'Multi-family',
    location: 'Fort Worth, Texas',
    year: '2019',
    image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773803706/Rectangle6_vs3kqj.png',
    link: '/work/Revelstoke',
    amenities: [
      {
        title: 'Resort-Style Pool Deck',
        description: 'A resort-inspired pool courtyard serves as the central outdoor amenity space, offering lounge seating, cabanas, and sun terraces designed for relaxation and social gatherings.',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773803705/Rectangle_3-2_pxuwu0.png',
        gallery: [
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773803701/pool04_z8loik.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773803699/pool02_mkswjn.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773803697/pool_ptnaw1.png',
        ]
      },
      {
        title: 'Co-Working Hub',
        description: 'The co-working lounge offers a flexible work-from-home environment with comfortable seating, collaborative tables, and dedicated work areas.',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773803747/wifilounge_lnaihr.png',
        gallery: [
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773803686/coffee_jgtiuc.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773803724/revelstoke_-_conference_room_1_xvtx2k.webp',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773803733/revelstoke_-_private_offices_2_1_oztqso.webp',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773803731/revelstoke_-_private_offices_-_1_1_wfnglp.webp',
        ]
      },
      {
        title: 'Resident Bar & Multipurpose Lounge',
        description: 'This hospitality-inspired lounge includes bar seating, flexible gathering areas, and warm material finishes that create an inviting social environment.',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773803745/wifibar_tqmdz7.png',
        gallery: [
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773803734/revelstoke_-_upstairs_coffee_lounge_1_1_qeh6w2.webp',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773803743/terrace_clqvas.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773803749/wifilounge02_lnd9jb.png',
        ]
      },
      {
        title: 'Game Room & Entertainment Lounge',
        description: 'The game room introduces a dynamic entertainment environment featuring lounge seating, recreational games, and media viewing areas.',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773803721/revelstoke_-_community_game_room_2_2_ccrcff.webp',
        gallery: [
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773803719/revelstoke_-_community_game_room_1_1_dpbyd1.webp',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773803721/revelstoke_-_community_game_room_2_2_ccrcff.webp',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773803690/gameroom_snfqbp.png',
        ]
      }
    ],
    commonSpaces: [
      {
        title: 'Resident Lobby & Lounge',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773803692/lobby_mszl3m.png',
        details: 'The double-height resident lobby creates a welcoming arrival experience with dramatic lighting, modern furnishings, and curated art elements.',
        gallery: [
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773803693/lobby03_h0rrwc.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773803703/r23_rfsbp6.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773803745/wifibar_tqmdz7.png',
        ]
      },
      {
        title: 'Courtyard & Outdoor Social Lawn',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773803678/15_h2aal9.png',
        details: 'The landscaped courtyard introduces a welcoming outdoor environment framed by residential buildings and shaded seating areas.',
        gallery: [
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773803688/courtyard_qiwlcv.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773964489/dd94b5fa3005d10212543529286b4246_yavdhv.webp',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773964480/fire_courtyard_lal_nr61mj.jpg',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773964470/0a7b1fe9e5633fb490249c5dd455189ec-f2929370765rd-w1280_h960_gurt8e.webp',
        ]
      },
      {
        title: 'Pet Wash + EV Charger',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773803726/revelstoke_-_dog_wash_-_lowres_jtl7da.webp',
        details: 'The living areas feature open floor plans that connect the kitchen and living spaces, maximizing natural light.',
        gallery: [
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773803710/revelstoke_-_bark_bar_and_cat_cafe_-_lowres_azpkwk.webp',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773964333/1_4a83c132-8b33-4792-931e-1a26b72d94d5_lfyh1k.jpg',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773964342/dog-wash-banner_cr9fqh.jpg',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773803714/revelstoke_-_car_wash_-_lowres_lgz2x0.webp',
        ]
      },
      {
        title: 'Teaching Kitchen',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773964219/revelstoke_-_community_chefs_kitchen_2_2_o67vgx.webp',
        details: 'Modern kitchens feature premium appliances, contemporary cabinetry, and designer countertops.',
        gallery: [
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773964208/revelstoke_-_community_chefs_kitchen_2_hfcfcm.webp',
        ]
      },
      {
        title: 'Bark Park',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773803712/revelstoke_-_bark_park_-_lowres_bdmfpt.webp',
        details: 'Bedrooms provide a calm and comfortable retreat with generous windows, neutral finishes, and flexible layouts.',
        gallery: [
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773803712/revelstoke_-_bark_park_-_lowres_bdmfpt.webp',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773963933/sherwood-dog-park_vp8bqu.jpg',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773963951/txhh_best-practices-when-taking-dog-park_dll36m.png',
        ]
      }
    ],
    technicalDocuments: [
      {
        title: 'First Floor Plan',
        description: 'Detailed architectural floor plans including spatial organization and dimensions for the first floor.',
        size: '12.4 MB',
        pages: 24,
        link: '/PORTFOLIOPAGES/01-00-clover/TECH-DWGS/RENOVATION PLAN.png'
      },
      {
        title: 'Second Floor Plan',
        description: 'Comprehensive layout and spatial planning for the second floor units and amenities.',
        size: '8.2 MB',
        pages: 24,
        link: '/PORTFOLIOPAGES/01-00-clover/TECH-DWGS/RENOVATION PLAN.png'
      }
    ],
    moodBoards: [
      {
        title: 'Site Plan',
        description: 'Located along the Blue Mound corridor in North Fort Worth, Revelstoke is positioned within a rapidly expanding suburban growth zone anchored by Alliance Town Center—one of the region’s primary retail and employment hubs. The site benefits from strong proximity to major highways, retail, and corporate expansion corridors, while maintaining a quieter residential character slightly removed from the urban core. The site analysis focused on balancing accessibility with livability—studying vehicular flow, internal circulation, and the integration of amenity zones across a large-scale 17+ acre footprint. Strategic planning emphasized creating a sense of place within an otherwise car-dependent environment, using building placement, amenity clustering, and open space to establish a cohesive community framework. Environmental and contextual studies informed the orientation of buildings and outdoor spaces, allowing the project to maximize usable amenity areas while reinforcing a resort-style living experience. Ultimately, the site strategy transforms a suburban parcel into a structured, amenity-driven residential environment that responds to both the scale of the development and the evolving growth of North Fort Worth.',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773803738/site_lst5hb.png',
        tags: ['Site Analysis', 'Rendered Site Plan', 'Space Planning']
      },
      {
        title: 'Concept Sketches',
        description: 'Early conceptual sketches exploring the volume, scale, and material applications throughout the spaces.',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773818620/74Frame_8_eve7q2.png',
        tags: ['Conceptual', 'Hand Sketches', 'Volume', 'Scale']
      },
      {
        title: 'Floor Plan',
        description: 'Detailed floor plans of the leasing office and amenities, showcasing the spatial layout and organization.',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773819098/FIRST_FLOOR_mtzji0.png',
        tags: ['First Floor Plan', 'Architectural Plan', 'Space Planning', 'Leasing Office']
      }
    ],
    materials: [
      {
        name: 'Wood Paneling',
        category: 'Wood',
        application: 'General Finishes',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773818169/Container_w0en0v.png'
      },
      {
        name: 'Decorative Wall Tile',
        category: 'Wall Tile',
        application: 'Accent Finishes',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773818164/3-4Container_csui0g.png'
      },
      {
        name: 'Stone Countertop',
        category: 'Stone',
        application: 'Textiles and Upholstery',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773818157/3-1Container_wnypcd.png'
      },
      {
        name: 'Floor Tile',
        category: 'Tile',
        application: 'Flooring in Leasing Office',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773818166/3-5Container_fix0or.png'
      }
    ],
    colors: [
      { name: 'Greek Villa', hex: '#EDEBE1' },
      { name: 'Applesauce', hex: '#DCD2C4' },
      { name: 'Charcoal', hex: '#444444' },
      { name: 'Denim', hex: '#3E4052' },
      { name: 'EarlGrey', hex: '#969696' }
    ]
  },
  {
    id: 'CollinsCreek',
    title: 'Collins Creek',
    subtitle: 'Reimagining Retail as Community.',
    category: 'Mixed-use Redevelopment',
    location: 'Plano, Texas',
    year: '2020',
    image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773803847/11Rectangle6_emxzsc.png',
    link: '/work/CollinsCreek',
    amenities: [
      {
        title: 'Lobby / Multifamily Interior Concepts',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773975498/atm8136_httpss.mj.runarMSk2MZ70k_Luxury_multifamily_amenity_l_6f1fb617-2284-4470-abe3-b05c76d4191c_3_twvp4o.png',
        description: 'Lobby Concepts for the Multifamily Properties apart of the Collin Creek Redevelopement Projects.',
        gallery: [
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773975848/atm8136_httpss.mj.runarMSk2MZ70k_Luxury_multifamily_amenity_l_6f1fb617-2284-4470-abe3-b05c76d4191c_2_soyzby.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773975859/atm8136_httpss.mj.runj5y0JQN1t4Y_Luxury_multifamily_amenity_l_8217915b-5e83-4324-a5db-a582400a747e_0_aspzhk.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773975870/atm8136_httpss.mj.runj5y0JQN1t4Y_Luxury_multifamily_amenity_l_8217915b-5e83-4324-a5db-a582400a747e_1_thpahl.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773975882/atm8136_httpss.mj.runj5y0JQN1t4Y_Luxury_multifamily_amenity_l_8217915b-5e83-4324-a5db-a582400a747e_2_gzqygg.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773975893/atm8136_httpss.mj.runj5y0JQN1t4Y_Luxury_multifamily_amenity_l_8217915b-5e83-4324-a5db-a582400a747e_3_gw7j5j.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773975915/atm8136_Luxury_multifamily_amenity_lounge_with_a_central_soci_28571804-752c-4844-923a-8407bc5790c1_3_jxlgbd.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773975926/atm8136_httpss.mj.runarMSk2MZ70k_Luxury_multifamily_amenity_l_6f1fb617-2284-4470-abe3-b05c76d4191c_0_wmduzh.png',
        ]
      },
      {
        title: 'Game Room - Concepts',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773976913/atm8136_httpss.mj.runj5y0JQN1t4Y_Luxury_multifamily_Game_Room_8877a9c1-8a6a-4b4e-b1e9-7582fe71cafa_3_xgj3fx.png',
        description: 'Let the games begin, Different Style Game rooms and activity focused based on community and unique styling of property within overall Collin Creek Scope.',
        gallery: [
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773976924/atm8136_httpss.mj.runj5y0JQN1t4Y_Luxury_multifamily_Game_Room_8877a9c1-8a6a-4b4e-b1e9-7582fe71cafa_2_lgovkc.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773976935/atm8136_httpss.mj.runj5y0JQN1t4Y_Luxury_multifamily_Game_Room_8877a9c1-8a6a-4b4e-b1e9-7582fe71cafa_1_u90lqw.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773976946/atm8136_httpss.mj.runj5y0JQN1t4Y_Luxury_multifamily_Game_Room_8877a9c1-8a6a-4b4e-b1e9-7582fe71cafa_0_fyskhw.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773977038/atm8136_httpss.mj.runj5y0JQN1t4Y_Luxury_multifamily_Game_Room_6ac88fa4-e006-479b-bdad-40e173c1c95e_3_amxmsw.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773977049/atm8136_httpss.mj.runj5y0JQN1t4Y_Luxury_multifamily_Game_Room_6ac88fa4-e006-479b-bdad-40e173c1c95e_0_dmsliu.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773977071/atm8136_httpss.mj.runj5y0JQN1t4Y_Luxury_multifamily_Game_Room_6ac88fa4-e006-479b-bdad-40e173c1c95e_2_dwjhcl.png',
        ]
      },
      {
        title: 'Fitness Center - Wellness Amenitiy Concepts',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773819793/Gen4_High-end_fitness_center_with_natural_light_premium_finishes_clean_architectural_a-2_37982622_1_1_ruupva.png',
        description: 'Fitness Center Concepts for the Multifamily Properties, being that Gym/ Wellness especially in luxury apartments is one of the largest selling features.',
        gallery: [
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773976408/image-gen_29_pnu03l.jpg',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773976421/image-gen_28_r3hgxi.jpg',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773976434/atm8136_Ultra-realistic_interior_rendering_of_a_River_Park_fi_298a1510-782b-45ec-9212-5f324f5cb9fa_1_sboqmq.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773976445/atm8136_Ultra-realistic_interior_rendering_of_a_River_Park_fi_298a1510-782b-45ec-9212-5f324f5cb9fa_3_1_eolbfb.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773976456/atm8136_Ultra-realistic_interior_rendering_of_a_River_Park_fi_298a1510-782b-45ec-9212-5f324f5cb9fa_2_dvvkfl.png',
        ]
      },
      {
        title: 'Corridor - Concepts',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773819758/2ef1c401502ce34a81f8e46ccb44e0a4_1_nb9271.png',
        description: 'A Variety of Corridor Concepts for the 7 Multifamily Properties apart of the Collin Creek Redevelopement Projects.',
        gallery: [
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773819775/2c5035505c3f322f49220ada56619ed3_1_x6xsrn.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773819772/b9eda8f7f5fd956b2f009177876efb16_1_gxjvny.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773819768/200953efb8b6f467305c90f5165ec438_1_cjmoea.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773819765/49266e56bb6ed5b02dcb70d7d89eb4ca_1_jhcr7r.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773819761/5b4ab598166478905c7ce048011eea4d_1_nuf9r4.png',
        ]
      },
      {
        title: 'Resort Styled Pool Areas',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773979717/atm8136_Luxury_multifamily_Pool__Cabannas_Lounge_Furniture_um_f54bd348-9e46-43a1-9d7d-60c67109691e_0_tybmrg.png',
        description: 'Pool Area Concepts for the Multifamily Properties apart of the Collin Creek Redevelopement Projects.',
        gallery: [
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773819789/Frame_1581_efa0ma.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773979867/atm8136_multifamily_Pool__Cabannas_Lounge_Furniture_umbrellas_ad8f6859-d15a-4bc5-a204-78244cc4535a_1_kujfn9.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773979885/atm8136_Luxury_multifamily_Pool__Cabannas_Lounge_Furniture_um_83477f94-cc52-47da-9db6-5396b39c7229_0_ppcimt.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773979911/atm8136_multifamily_Pool__Cabannas_Lounge_Furniture_umbrellas_ad8f6859-d15a-4bc5-a204-78244cc4535a_3_dmmtpm.png',
        ]
      },
      {
        title: 'Teaching Kitchen',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773974443/atm8136_httpss.mj.runUAIUos5tAyU_Create_an_ultra-realistic_ar_bcadfe48-5c36-4e83-9bda-ec2cb4481722_1_mgfxws.png',
        description: 'Curated art gallery and library',
        gallery: [
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773974472/atm8136_httpss.mj.runUAIUos5tAyU_Create_an_ultra-realistic_ar_bcadfe48-5c36-4e83-9bda-ec2cb4481722_3_na3obg.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773974432/atm8136_httpss.mj.runUAIUos5tAyU_Create_an_ultra-realistic_ar_bcadfe48-5c36-4e83-9bda-ec2cb4481722_0_vuo2cd.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773979898/atm8136_Luxury_multifamily_Pool__Cabannas_Lounge_Furniture_um_f54bd348-9e46-43a1-9d7d-60c67109691e_2_ejqktx.png',
        ]
      },
      {
        title: 'Tune Shop',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773819811/image_10_aa6ddz.png',
        description: 'Curated art gallery and library',
        gallery: [
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773819803/image_11_jygwys.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773978040/Alloy-Sunnyside-2024.09.19-132-scaled_tayzxr.jpg',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773978052/public-bike-repair-stand-with-pump_qqk0bp.jpg',
        ]
      },
      {
        title: 'Multifamily - Leasing Lobby Concept',
        description: 'Panoramic city views complemented by landscaped gardens, fire pits, and comfortable lounging areas perfect for evening gatherings.',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773980364/atm8136_httpss.mj.runfLUndmwZaDY_httpss.mj.runV3a_4nwmqRs_Int_95b62d7e-9446-4bc9-802c-89dcebb96c2e_1_zesfhe.png',
        gallery: [
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773819786/atm8136_Ultra-realistic_editorial-quality_architectural_rende_8f65a9cf-4a96-444e-9330-4a777a622d78_1_1_bmkxnv.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773980375/atm8136_httpss.mj.runfLUndmwZaDY_httpss.mj.runV3a_4nwmqRs_Int_323b43c9-3ee6-417b-a01e-3f208016a155_1_lloggg.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773980399/atm8136_httpss.mj.runfLUndmwZaDY_httpss.mj.runV3a_4nwmqRs_Int_323b43c9-3ee6-417b-a01e-3f208016a155_3_qqhqt1.png',
        ]
      },
      {
        title: 'Multifamily - Amenity Lounge Concept',
        description: 'Panoramic city views complemented by landscaped gardens, fire pits, and comfortable lounging areas perfect for evening gatherings.',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773980410/atm8136_httpss.mj.runfLUndmwZaDY_httpss.mj.runV3a_4nwmqRs_Int_82a5c474-75a2-432d-b676-c865ed321379_1_g9gzkj.png',
        gallery: [
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773980328/atm8136_httpss.mj.runfLUndmwZaDY_httpss.mj.runV3a_4nwmqRs_Int_163596cd-8740-49ee-8cbf-026557486416_1_douj0e.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773980340/atm8136_httpss.mj.runfLUndmwZaDY_httpss.mj.runV3a_4nwmqRs_Int_7423f3de-949a-4bdf-bab5-6e7d943618a6_0_auqeub.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773980352/atm8136_httpss.mj.runfLUndmwZaDY_httpss.mj.runV3a_4nwmqRs_Int_e30139f1-019d-47b6-9590-6fb4fb4c6df7_3_gvox4e.png',
        ]
      },
      {
        title: 'Multifamily - Amenity Dog Wash Concept',
        description: 'A modern business center equipped with high-speed internet, printing facilities, and comfortable workspaces.',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773819782/atm8136_Luxury_dog_wash_amenity_at_Capella_High_Rise._Clean_m_6ead8508-9ecd-42bb-b4b5-3363845df611_0_1_ouppjj.png',
        gallery: [
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773978192/the-sur-arlington-va-dog-wash_d27csa.jpg',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773978218/8421_Broad_Amenities_Pet_Spa-scaled_qnv9ok.jpg',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773978241/Apartment-2-e1746741742744_qbacuq.jpg',
        ]
      }
    ],
    commonSpaces: [
      {
        title: 'Retail Shopping Strategy',
        details: 'Planning for experience, visability and flow',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773971591/19_wwrwny.jpg',
        gallery: [
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773972279/collin_creek_street_level_06_wgtprz.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773972162/collin_creek_exterior_retail_04_i8llnz.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773972237/collin_creek_street_level_02_ujmfeh.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773972153/collin_creek_exterior_retail_03_kozmkd.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773971762/33_nzuxm6.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773971652/25_dguktg.png',
        ]
      },
      {
        title: 'Pedestrian Entry',
        details: 'New Iconic views and entry sequence to the area creating greater visuals for the area and increasing livability.',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773971411/collin_creek_aerial_hero_uceeed.png',
        gallery: [
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773971456/07_nysjoj.jpg',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773820132/RENDERING_4_p68gxh.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773971496/11_jtzond.jpg',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773803842/00_trjdyr.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773971548/16_imixii.jpg',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773971684/27_stowgg.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773972018/59_uxjqoh.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773972065/collin_creek_exterior_hero_04_jtlrci.jpg',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773972102/collin_creek_exterior_hero_08_lwdvwm.jpg',
        ]
      },
      {
        title: 'Office Building Concept',
        details: 'An exclusive area for offices to be located allowing the mixed use building program to fully mix shopping and entertainment, work locations and living quarters. The redevelopment projects aim is to improve by creating a living community fostered around all three categories to keep the area busy and varied for investment security.',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773971917/48_hxkzm4.png',
        gallery: [
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773972228/collin_creek_street_level_01_veh1su.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773972143/collin_creek_exterior_retail_02_baphri.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773971506/12_lzmaje.jpg',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773972256/collin_creek_street_level_04_rjv1qe.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773972237/collin_creek_street_level_02_ujmfeh.png',
        ]
      },
      {
        title: 'Hospitality Concept',
        details: 'The Hotel and the Restaurant offerings within the redevelopment area are significant and meant to enrich the lives of the residents by generating a pool of potential restaurants, bars, nightlife and even fine dining.',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773972228/collin_creek_street_level_01_veh1su.png',
        gallery: [
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773972143/collin_creek_exterior_retail_02_baphri.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773971917/48_hxkzm4.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773971506/12_lzmaje.jpg',
        ]
      },
      {
        title: 'Multifamily - Exterior + Surrounding Concepts',
        details: 'The Multifamily Concepts for blocks S1, S2, T, R, M, N, P, and U/V are spread throughout the re-development site. This way they are able to adapt and utilize the different zones and social energies of the particular block / area they reside. Each of these communities can offer a unique experience and lifestyle to the residents.',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773971419/01_sgl5gf.png',
        gallery: [
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773972200/collin_creek_plaza_03_uggkdn.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773972093/collin_creek_exterior_hero_07_aad2g9.jpg',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773971981/55_gnbocj.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773972181/collin_creek_multifamily_exterior_zx6zo7.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773972083/collin_creek_exterior_hero_06_wyajsq.jpg',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773971727/30_lglr7c.png',
        ]
      },
    ],
    technicalDocuments: [
      {
        title: 'Lighting Schedule',
        description: 'Lighting Schedule for the project.',
        size: '2.3 MB',
        pages: 2,
        link: 'https://drive.google.com/file/d/1ZJ00pzZSyczV8vKOV_j8rd8Z21QNBirw/view?usp=drive_link'
      },
      {
        title: 'Finish Specifications',
        description: 'Finish Specifications for the project.',
        size: '95 KB',
        pages: 7,
        link: 'https://drive.google.com/file/d/1EnbgwDJf8DgRw0ZZwHwtzI7-tw-TS75K/view?usp=drive_link'
      },
      {
        title: 'Specifications Schedule',
        description: 'Specifications Schedule for the project.',
        size: '208 KB',
        pages: 24,
        link: 'https://drive.google.com/file/d/1P6lk3f-IfHx7zirMLqQja3sv2FggigX9/view?usp=drive_link'
      },
      {
        title: 'Developer Presentation Deck',
        description: 'Developer Presentation Deck for the project used for investors, to drive interest, highlight key points and summarize findings and research.',
        size: '41 MB',
        pages: 24,
        link: 'https://drive.google.com/drive/folders/1AoFgqsSQ5QmXT-4dOaCWx5RMo1Aywpf8?usp=drive_link'
      },
      {
        title: 'Budgets - Working Budget/Proforma',
        description: 'Working Budget/Proforma for the project.',
        size: '22.8 MB',
        pages: 24,
        link: 'https://docs.google.com/spreadsheets/d/1QZc4uhH-DZmuR1bwWBUuCiBo5LZZbxd9/edit?usp=drive_link&ouid=104902722721489498097&rtpof=true&sd=true'
      },
      {
        title: 'Original Mood Boards and Unit Finish Boards',
        description: 'Original Mood Boards and Unit Finish Boards for the project.',
        size: '6.5 MB',
        pages: 24,
        link: 'https://drive.google.com/drive/folders/14mMAJGaSSlZIs3CbWE98UCUNzOu4FAU0?usp=drive_link'
      }
    ],
    moodBoards: [
      {
        title: 'Site Plan + Studies',
        description: 'Collin Creek is a unified development that incorporates a compatible  mix of uses, such as retail, office space, commercial and residential, and integrated with plenty of open spaces and pedestrian networks for enhanced community.',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773803885/image-gen_19_in7vlv.png',
        tags: ['Multifamily', 'Hospitality', 'Office-Workplace', 'Retail/Mixed-use']
      },
      {
        title: 'Concept Board',
        description: 'Natural and open state of the art fitness center with a variety of equipment and amenities.',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773819565/SKETCHES_08_dhvxzq.png',
        tags: ['Neutural Tones', 'Walnut Veneer', 'Sculptural Forms', 'Textured Glass']
      }
    ],
    materials: [
      {
        name: 'Brick',
        category: 'Brick',
        application: 'Exterior Walls',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773987895/medium-ironspot-77-velour-face-brick-modular-running-bond-322-in-architextures_fyignf.jpg'
      },
      {
        name: 'Concrete / Concrete Pavers',
        category: 'Concrete',
        application: 'Exterior Sidewalk + Flooring',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773987987/reflex-granite-4162-by-swisspearl-staggered-4862-in-architextures_teutsn.jpg'
      },
      {
        name: 'Painted Wood Cladding',
        category: 'Wood',
        application: 'Exterior Wall Accent',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773987974/afc-terraslat-by-tonality-70025-black-matte-staggered-685-in-architextures_ky7h5s.jpg'
      },
      {
        name: 'Fluted Metal Panel',
        category: 'Metal',
        application: 'Exterior / Accent Siding',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773987908/patina-inline-nxt-flint-070-by-swisspearl-stack-4862-in-architextures_mlusn9.jpg'
      }
    ],
    colors: [
      { name: 'Oatmeal', hex: '#EEEADF' },
      { name: 'Sage', hex: '#CEC6B5' },
      { name: 'Sunrise', hex: '#ABAD97' },
      { name: 'Lemon Meringue', hex: '#A49689' },
      { name: 'Derby Brown', hex: '#ABA79E' },
      { name: 'Derby Brown', hex: '#55504A' },
      { name: 'Derby Brown', hex: '#986F64' },
      { name: 'Derby Brown', hex: '#EDECE8' },
      { name: 'Derby Brown', hex: '#646458' },
      { name: 'Derby Brown', hex: '#E6E0D4' },
      { name: 'Derby Brown', hex: '#A49689' },
      { name: 'Derby Brown', hex: '#7A5463' },
    ]
  },
  {
    id: 'Capella',
    title: 'Capella',
    subtitle: 'Contemporary residential design reaching new heights.',
    category: 'Hi-Rise Mixed-Use / Multifamily',
    location: 'Las Vegas, Nevada',
    year: '2026',
    image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773803912/hero_lc545v.png',
    link: '/work/Capella',
    amenities: [
      {
        title: 'Resort Style Pool',
        description: 'A tranquil retreat designed to create a resort-style living experience, enhance the unique appeal of the property while creating a statement to increase visability and drive occupancy rates.',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773804041/pool00_t2dr4m.png',
        gallery: [
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773804039/pool00-01_zybmu9.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773804233/Gen4_Photorealistic_architectural_rendering_of_a_luxury_rooftop_amenity_at_a_Las_Vegas_residenti_a-2_mc9l9e.png',
        ]
      },
      {
        title: 'Cabanas and Poolside Bar',
        description: 'A tranquil retreat designed to create a resort-style living experience, enhance the unique appeal of the property while creating a statement to increase visability and drive occupancy rates. The First Rendering is the final output for the cabana and pool layout, where the final 3 images were conceptual renderings to get an approved direction',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773804043/pool01_rc0e6v.png',
        gallery: [
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773990223/atm8136_httpss.mj.runcMc3RU_c7_M_httpss.mj.run0-Mnji-ZY8s_htt_f3ea6a96-4b91-4a58-b108-c23004478f7b_0_qrrlfr.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773990382/atm8136_httpss.mj.runcMc3RU_c7_M_httpss.mj.run0-Mnji-ZY8s_htt_a02986e5-4131-4afa-bbdf-6a2da6cd31a9_0_brjdql.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773990395/atm8136_httpss.mj.runcMc3RU_c7_M_httpss.mj.run0-Mnji-ZY8s_htt_a02986e5-4131-4afa-bbdf-6a2da6cd31a9_1_vuseos.png',
        ]
      },
      {
        title: 'Resident Lounge',
        description: 'An exclusive area for residents to unwind, featuring comfortable seating, and a premium beverage station.',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773820898/Frame_1560_sppixx.png',
        gallery: [
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773990774/atm8136_httpss.mj.runl8_ickCOwGY_httpss.mj.runMA78LX2Hrbo_htt_eddc7813-6f44-4032-986f-5a937801b332_2_1_zezoz8.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773990801/atm8136_httpss.mj.runl8_ickCOwGY_httpss.mj.runMA78LX2Hrbo_htt_354dc71f-d00b-4b33-b45b-c1e5197ca8f4_1_ngqlnb.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773990827/atm8136_windowpane__herringbone_textiles_pinstripe_fluting_br_c3022de6-70b8-453b-81ec-6048c40d3ea7_0_wqzhjw.png',
        ]
      },
      {
        title: 'Arrival Sequence and Social Spaces',
        description: 'There are many social living rooms for the different floors and to help promote a more interactive and social living environment for residents.',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773820890/Frame_1563_jizvj0.png',
        gallery: [
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773991127/image-gen_5_glyt4t.jpg',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773991114/image-gen_3_xajhea.jpg',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773991099/image-gen_4_kfrzwr.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773821518/image-gen_-_2026-02-07T090507.273_gakdzt.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773821499/image-gen_26_fzh52r.jpg',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773820901/Frame_1561_rfj7om.png',
        ]
      },
      {
        title: 'Game Room',
        description: 'Panoramic city views complemented by landscaped gardens, fire pits, and comfortable lounging areas perfect for evening gatherings.',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773821131/capella_pg_10_ohunou.png',
        gallery: [
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773992356/atm8136_httpss.mj.runbkZEKT7VTPw_Luxury_game_room_lounge_at_C_36aa584b-8f2b-4a61-84af-a90e887448a3_2_1_ejscnz.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773992342/atm8136_httpss.mj.runbkZEKT7VTPw_Luxury_game_room_lounge_at_C_36aa584b-8f2b-4a61-84af-a90e887448a3_1_1_a0wqez.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773992328/atm8136_httpss.mj.runbkZEKT7VTPw_Luxury_game_room_lounge_at_C_36aa584b-8f2b-4a61-84af-a90e887448a3_3_1_iphtka.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773992315/atm8136_httpss.mj.runbkZEKT7VTPw_Luxury_game_room_lounge_at_C_36aa584b-8f2b-4a61-84af-a90e887448a3_0_1_ow5ghg.png',
        ]
      },
      {
        title: 'Terrace',
        description: 'A modern business center equipped with high-speed internet, printing facilities, and comfortable workspaces.',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773804046/terrace01_otulyk.png',
        gallery: [
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773991650/atm8136_httpss.mj.run0LmyT7JTrw4_multifamily_Terrace_area_as__c9f9dee6-aa64-4dab-9943-8cb9edc408bc_2_h5a1jj.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773991637/atm8136_httpss.mj.runcMc3RU_c7_M_httpss.mj.run0-Mnji-ZY8s_htt_bb18c0fb-cd75-48aa-91db-6197620596d6_3_kuozj2.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773990382/atm8136_httpss.mj.runcMc3RU_c7_M_httpss.mj.run0-Mnji-ZY8s_htt_a02986e5-4131-4afa-bbdf-6a2da6cd31a9_0_brjdql.png',
        ]
      }
    ],
    commonSpaces: [
      {
        title: 'Grand Entrance',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773820894/Frame_1557_euaktm.png',
        details: 'Double-height ceiling with custom chandelier',
        gallery: [
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773991739/image-gen_-_2026-02-07T090514.609_fv6fch.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773991099/image-gen_4_kfrzwr.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773991127/image-gen_5_glyt4t.jpg',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773991114/image-gen_3_xajhea.jpg',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773991179/image-gen_-_2026-02-07T090857.549_sxi0d3.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773992003/arrive_clnjvw.png',
        ]
      },
      {
        title: 'Main Lobby',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773820898/Frame_1560_sppixx.png',
        details: 'Italian marble flooring and bespoke seating',
        gallery: [
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773991905/atm8136_httpss.mj.runbkZEKT7VTPw_Ultra-realistic_editorial_in_6e14d329-f42f-407b-96c1-c70c212ca37c_0_fimfff.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773991272/image-gen_-_2026-02-07T090834.080_lwilk1.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773991905/atm8136_httpss.mj.runbkZEKT7VTPw_Ultra-realistic_editorial_in_6e14d329-f42f-407b-96c1-c70c212ca37c_0_fimfff.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773992100/atm8136_httpss.mj.runl8_ickCOwGY_httpss.mj.runMA78LX2Hrbo_htt_2a5e310b-9b3e-4331-99d8-6c05434c6abe_3_1_ddag4v.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773992113/atm8136_httpss.mj.runl8_ickCOwGY_httpss.mj.runMA78LX2Hrbo_htt_9b8c62b1-2b83-458f-b2fa-3e71481ac3b4_1_zgw0dg.png',

        ]
      },
      {
        title: 'Elevator Lobby',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773821499/image-gen_26_fzh52r.jpg',
        details: 'Bronze accents and custom paneled walls',
        gallery: [
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773821518/image-gen_-_2026-02-07T090507.273_gakdzt.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773821499/image-gen_26_fzh52r.jpg',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773991218/elevlobby_ttauxh.jpg',
        ]
      },
      {
        title: 'Concierge Desk',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773821598/image-gen_89_saledi.png',
        details: 'Walnut and brass custom reception desk',
        gallery: [
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773992256/atm8136_httpss.mj.runl8_ickCOwGY_httpss.mj.runMA78LX2Hrbo_htt_f6a9c0b8-eaac-4b37-a584-f8fa39b77240_0_1_h3arsq.png',
        ]
      },
      {
        title: 'Waiting Area',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773821437/atm8136_httpss.mj.runl8_ickCOwGY_httpss.mj.runMA78LX2Hrbo_htt_f6a9c0b8-eaac-4b37-a584-f8fa39b77240_2_eixp5x.png',
        details: 'Curated art gallery and library',
        gallery: [
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773992230/atm8136_httpss.mj.runl8_ickCOwGY_httpss.mj.runMA78LX2Hrbo_htt_e07de70a-194d-4c95-af8c-34985c0acbc4_2_msaoar.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773992192/atm8136_httpss.mj.runl8_ickCOwGY_httpss.mj.runMA78LX2Hrbo_htt_87e77f78-777c-4548-ad18-d551531f3238_3_pt8ogj.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773992163/atm8136_httpss.mj.runl8_ickCOwGY_httpss.mj.runMA78LX2Hrbo_htt_87e77f78-777c-4548-ad18-d551531f3238_1_hizug8.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773992205/atm8136_httpss.mj.runl8_ickCOwGY_httpss.mj.runMA78LX2Hrbo_htt_850e6b8d-a967-4617-b988-c425ea14a710_0_lgij4u.png',
        ]
      }
    ],
    technicalDocuments: [
      {
        title: 'Floor Plans & Layouts',
        description: 'Detailed architectural floor plans including spatial organization and dimensions.',
        size: '12.4 MB',
        pages: 24,
        link: 'https://drive.google.com/drive/folders/1amYq7FtTgGh36T7v4dQ1GFyPlI6Xq--I?usp=drive_link'
      },
      {
        title: 'Lighting Specifications',
        description: 'Comprehensive lighting design plan, fixture selections, and electrical layouts.',
        size: '8.2 MB',
        pages: 24,
        link: 'https://drive.google.com/drive/folders/1amYq7FtTgGh36T7v4dQ1GFyPlI6Xq--I?usp=drive_link'
      },
      {
        title: 'Millwork Details',
        description: 'Custom cabinetry, shelving, and architectural millwork shop drawings.',
        size: '15.6 MB',
        pages: 24,
        link: 'https://drive.google.com/drive/folders/1amYq7FtTgGh36T7v4dQ1GFyPlI6Xq--I?usp=drive_link'
      },
      {
        title: 'Finish Schedules',
        description: 'Complete index of all specified materials, paints, and wallcoverings.',
        size: '4.1 MB',
        pages: 24,
        link: 'https://drive.google.com/drive/folders/1amYq7FtTgGh36T7v4dQ1GFyPlI6Xq--I?usp=drive_link'
      },
      {
        title: 'FF&E Package',
        description: 'Furniture, Fixtures, and Equipment specifications with tear sheets.',
        size: '22.8 MB',
        pages: 24,
        link: 'https://drive.google.com/drive/folders/1amYq7FtTgGh36T7v4dQ1GFyPlI6Xq--I?usp=drive_link'
      },
      {
        title: 'Plumbing & Hardware',
        description: 'Scheduled plumbing fixtures, sanitary ware, and architectural hardware.',
        size: '6.5 MB',
        pages: 24,
        link: 'https://drive.google.com/drive/folders/1amYq7FtTgGh36T7v4dQ1GFyPlI6Xq--I?usp=drive_link'
      }
    ],
    moodBoards: [
      {
        title: 'Site Plan + Studies',
        description: 'Capella is a luxury high-rise multifamily tower located within Symphony Park, a 61-acre mixed-use cultural district in downtown Las Vegas that is rapidly emerging as one of the city’s most dynamic urban neighborhoods. Symphony Park',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773803914/site_ewanpi.png',
        tags: ['Hi-Rise', 'Luxury Multifamily', 'Mixed-Use']
      },
      {
        title: 'Accent Elements & Styling',
        description: 'Layering depth through deep jewel tones, rich wood veneers, and sculptural lighting. These elements provide contrast and visual interest while maintaining elegance.',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773803945/moodboard_lsmsmg.png',
        tags: ['Jewel Tones', 'Walnut Veneer', 'Sculptural Forms', 'Textured Glass']
      }
    ],
    materials: [
      {
        name: 'LVT - Medium Canadian Walnut',
        category: 'LVT',
        application: 'Flooring',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773803938/artmat01_sqlo2f.jpg'
      },
      {
        name: 'Calacatta Viola',
        category: 'Stone',
        application: 'Countertop/ Surface',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773803939/artmat02_h1eq3l.jpg'
      },
      {
        name: 'Floor Tile Porcelain',
        category: 'Tile',
        application: 'Floor Tile',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773820621/atm8136_httpss.mj.runEqntePBTXc4_Integrated_bar_within_the_Ca_6b0073cc-819d-404e-989a-29ee8e5704ed_0_1_5_weahjm.png'
      },
      {
        name: 'Wall Covering',
        category: 'Wall Covering',
        application: 'Corridors',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773820751/ELEVATOR_LOBBY_WEST_cioprq.png'
      }
    ],
    colors: [
      { name: 'Oatmeal', hex: '#595B49' },
      { name: 'Taupe', hex: '#7B7F67' },
      { name: 'Charcoal', hex: '#DBD8D4' },
      { name: 'Saddle', hex: '#9B978C' },
      { name: 'Saddle', hex: '#41413D' },
      { name: 'Saddle', hex: '#8D5B42' }
    ]
  },
  {
    id: 'WestHaven',
    title: 'Westhaven',
    subtitle: 'Designing Community for the next chapter.',
    category: 'Senior Living Care',
    location: 'Franklyn, Tennessee',
    year: '2026',
    image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773804273/hero_xjqa0c.png',
    link: '/work/WestHaven',
    amenities: [
      {
        title: 'Resort Style Pool',
        description: 'A tranquil retreat designed to create a resort-style living experience, enhance the unique appeal of the property while creating a statement to increase visability and drive occupancy rates.',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773804904/pool1_lw3myd.png',
        gallery: [
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773804739/atm8136_httpss.mj.runut0gt138P1Y_Create_an_ultra-realistic_ex_e1d9b843-569f-46aa-8e31-e65af0287ef8_2_avcgi0.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773804725/2_kls1py.jpg',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773804757/outdoor-pool_on7ltt.jpg'
        ]
      },
      {
        title: 'Fitness Center',
        description: 'Updated fitness center with new equipment and finishes.',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773804892/fitness_wzd7b9.png',
        gallery: [
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774106622/atm8136_uLTRA_REALISTIC_PHOTO_REALISTIC_RENDERING_FOR_THE_FIT_17bf9cea-022c-4ba2-b82b-8e53296d1558_1_br63gy.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774106604/atm8136_uLTRA_REALISTIC_PHOTO_REALISTIC_RENDERING_FOR_THE_FIT_17bf9cea-022c-4ba2-b82b-8e53296d1558_2_od1gph.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774106474/atm8136_uLTRA_REALISTIC_PHOTO_REALISTIC_RENDERING_FOR_THE_FIT_1a8f35aa-f429-4a91-9172-ff483e3df78b_0_h3wlqf.png'
        ]
      },
      {
        title: 'Co-working Lounge',
        description: 'An exclusive area for residents to work and collaborate, featuring comfortable seating, and a premium beverage station.',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773804472/cowork01_l3l9vk.png',
        gallery: [
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773804576/bar1_eksthn.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774106567/atm8136_httpss.mj.runAXqyplHGmOw_cREATE_A_CO-WORKING_LOUNGE_F_dc1a7049-c5de-4d63-8fe3-ea9f0f555e8a_2_x5gtwy.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774106586/atm8136_httpss.mj.runAXqyplHGmOw_cREATE_A_CO-WORKING_LOUNGE_F_c0163923-fd63-496d-a3be-4a622295a881_1_msbr1i.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774106531/atm8136_httpss.mj.runAXqyplHGmOw_cREATE_A_CO-WORKING_LOUNGE_F_dc1a7049-c5de-4d63-8fe3-ea9f0f555e8a_0_autze2.png'
        ]
      },
      {
        title: 'Cafe',
        description: 'A welcoming morning destination offering coffee, light snacks, and a bright atmosphere for residents to start their day and socialize.',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773804578/cafe_qpxtl8.png',
      },
      {
        title: 'Golf / Sports Simulator',
        description: 'An interactive entertainment space featuring state-of-the-art simulation technology for golf and other sports, complete with lounge seating for spectators.',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773804746/Golf-Simulator_d7ik1u.jpg'
      },
      {
        title: 'Library',
        description: 'A quiet, elegantly appointed retreat lined with curated books, offering cozy reading nooks and a peaceful environment for study or relaxation.',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773804754/Library_zvwjbq.jpg'
      },
      {
        title: 'Multipurpose Room',
        description: 'A highly flexible social space capable of hosting community events, fitness classes, guest speakers, or private gatherings.',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773804901/lounge_qitn2l.png',
        gallery: [
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774107615/atm8136_Design_in_the_refined_hospitality-driven_aesthetic_si_3d02e018-4f4d-44e4-9644-0bb6b5947f69_2_t8xr8i.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774107552/atm8136_Design_in_the_refined_hospitality-driven_aesthetic_si_1aef1fc8-2c4f-494c-b495-db3f28e33497_3_kgqzup.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774107530/atm8136_Design_in_the_refined_hospitality-driven_aesthetic_si_1aef1fc8-2c4f-494c-b495-db3f28e33497_2_huobuv.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774107511/atm8136_Design_in_the_refined_hospitality-driven_aesthetic_si_1aef1fc8-2c4f-494c-b495-db3f28e33497_0_a8g5wb.png'
        ]
      },
      {
        title: 'Salon',
        description: 'A full-service onsite beauty and wellness salon providing haircuts, styling, and spa services in a luxurious, professional setting.',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774107108/eb595bb58e80b739f2c84894475dc6f3_dx2vpl.jpg',
        gallery: [
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774107161/491eceb1b16deec46eb458efb60ece72_eskmg1.jpg',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774107206/f28243de2beff31caf923e967466ee0c_d0wyod.jpg',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774107224/6431fbc6ac967aa0bd8a62ff18e163ee_elfvvu.jpg'
        ]
      },
      {
        title: 'Sun Room',
        description: 'A climate-controlled, glass-enclosed space flooded with natural light, perfect for year-round enjoyment of the surrounding landscape views.',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773804586/sunroom_p1ww79.png'
      },
      {
        title: 'Theater',
        description: 'A private screening room with plush tiered seating, acoustic treatments, and a premium audiovisual system for movie nights and presentations.',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774107126/Vismara-Kubrik-Home-Theater-Seating-2_psnqvw.jpg',
        gallery: [
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774107059/VismaraDesign_KubrikModularSofa-997x768_zwg1mj.jpg',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774107041/Vismara-Kubrik-Home-Theater-Seating-1_hf6hbq.jpg',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774107077/VismaraDesign_KubrikModularSofa-2-997x768_nhhfcs.jpg',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774107021/atm8136_httpss.mj.runRYQkeq7Q4aA_httpss.mj.runaz82gw5Giko_htt_7507a9e0-3c3b-44bf-95fa-c12bef4a90b9_0_2_m14pfs.png'
        ]
      },
      {
        title: 'Performance Theater',
        description: 'A larger auditorium space designed for live entertainment, theatrical productions, musical performances, and large-scale community assemblies.',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773804765/theatre-1_jqossy.jpg'
      },
      {
        title: 'Dining Room',
        description: 'The primary dining venue offering a restaurant-style experience with varied menus, attentive service, and an elegant atmosphere.',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773804581/dining_selnep.png',
        gallery: [
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774107361/Screenshot_2026-02-23_033145_g72tkm.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774107298/atm8136_httpss.mj.rungQtwiuDQyS4_windowpane__herringbone_text_6dbb85fb-3c21-4c97-be01-cbc6722f02eb_2_2_ebcg6r.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774107244/atm8136_httpss.mj.rungQtwiuDQyS4_windowpane__herringbone_text_6dbb85fb-3c21-4c97-be01-cbc6722f02eb_2_2_e5bx1e.png'
        ]
      },
      {
        title: 'Private Dining Room',
        description: 'An intimate, reservable dining space ideal for family celebrations, private parties, or special catered events hosted by residents.',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773804583/privatedining_y190hn.png',
        gallery: [
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774107416/Screenshot_2026-02-23_033230_rxkihj.jpg'
        ]
      },
      {
        title: 'Indoor Pool',
        description: 'A temperature-controlled indoor aquatic center for year-round lap swimming, water aerobics, and low-impact fitness routines.',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773804759/pool_1_kshbsk.jpg'
      }
    ],
    commonSpaces: [
      {
        title: 'Grand Entrance',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773804722/04_o4u9ji.jpg',
        details: 'Arrival Sequence to Main Building - Building 1',
        gallery: [
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774103303/atm8136_httpss.mj.runDZ2WCSCe6Cc_Ultra_photorealistic_archite_975dfed4-577f-4418-8b90-ca0d42d824dc_1_wa2bft.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774103350/atm8136_httpss.mj.runDZ2WCSCe6Cc_View_from_under_a_covered_pa_1f040e08-9100-4948-90b2-2defaf541ae5_3_e6ctzx.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774105158/shoootin-photo-51-1a6ab318a3128043858986eb2a594236_1_u0huop.jpg'
        ]
      },
      {
        title: 'Living Room - Main Lounge',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773804744/Entry_ypjlvd.jpg',
        details: 'Natural Stone Tile Floor with Brass Details/ Inlays and Neutural Plaid Carpet',
        gallery: [
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774104637/atm8136_httpss.mj.run3eo2TBUsgQg_Ultra_photorealistic_archite_0752008b-73db-4a1f-a9a7-1af3fd6fa00b_1_qandk9.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774104672/atm8136_httpss.mj.run3eo2TBUsgQg_Ultra_photorealistic_archite_7dac6152-a1ff-4a8e-8188-91c562540112_2_msk84h.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774104705/atm8136_httpss.mj.run3eo2TBUsgQg_Ultra_photorealistic_archite_7dac6152-a1ff-4a8e-8188-91c562540112_3_z1lcrk.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774104763/atm8136_httpss.mj.run3eo2TBUsgQg_Ultra_photorealistic_archite_5ffd65cd-be3d-46f9-a742-463f4edee767_1_yyhcdg.png'
        ]
      },
      {
        title: 'Terrace',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773804906/terrace_bezwso.png',
        details: 'Custom Firepits, social lounges, community herb garden, games, pergolas, and outdoor kitchens for meaningful social interactions and active lifestyle activities.',
        gallery: [
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773804730/4_c9i3cn.jpg',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774103174/atm8136_httpss.mj.runDZ2WCSCe6Cc_Ultra_photorealistic_archite_a002eee9-31eb-417c-b0ba-4f0046c2eafb_0_wrsgtf.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774103213/atm8136_httpss.mj.runDZ2WCSCe6Cc_Ultra_photorealistic_archite_a002eee9-31eb-417c-b0ba-4f0046c2eafb_3_iswlkq.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774103268/atm8136_httpss.mj.runDZ2WCSCe6Cc_Ultra_photorealistic_archite_975dfed4-577f-4418-8b90-ca0d42d824dc_0_h1muce.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774103303/atm8136_httpss.mj.runDZ2WCSCe6Cc_Ultra_photorealistic_archite_975dfed4-577f-4418-8b90-ca0d42d824dc_1_wa2bft.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774103366/atm8136_httpss.mj.runDZ2WCSCe6Cc_Ultra_photorealistic_archite_3cb0f94e-542b-44dc-883c-ad962dc3a0cc_1_zve5rn.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774103435/atm8136_httpss.mj.runDZ2WCSCe6Cc_Ultra_photorealistic_archite_975dfed4-577f-4418-8b90-ca0d42d824dc_3_qnozjq.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774103458/atm8136_httpss.mj.runDZ2WCSCe6Cc_Ultra_photorealistic_archite_3cb0f94e-542b-44dc-883c-ad962dc3a0cc_2_gyptif.png'
        ]
      },
      {
        title: 'Resident Corridors',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773804402/corridor_vieaha.png',
        details: 'Neutural Plaid Wallcovering accents with Light Grey colored paint and Dark Grey Accent Trim Along with Brass and black lighting accents, curated framed gallery styled artwork and contemporary accessories to enhance the everyday experience.',
        gallery: [
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773804405/corridor02_q31lfk.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774101825/image-gen_70_wqwa9h.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774101899/atm8136_Generate_more_creative_luxury_corridor_versions_like__a13ecc86-abc3-4533-86ad-229ce46a602e_1_x4hll7.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774102044/image-gen_15_iqm6pw.jpg',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774102018/image-gen_16_luafbd.jpg'
        ]
      },
      {
        title: 'Pet Wash',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773804806/pet05_xjjunf.png',
        details: 'Custom pet wash station with tile flooring and wall accents, grooming station with elevated platform, and storage for pet supplies.',
        gallery: [
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773804809/pet06_si95pw.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773804803/pet04_hla2fn.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773804801/pet_x0qgcd.png'
        ]
      }
    ],
    technicalDocuments: [
      {
        title: 'Floor Plans - Building 1',
        description: 'Detailed architectural floor plans including spatial organization and dimensions.',
        size: '2.4 MB',
        pages: 24,
        link: 'https://drive.google.com/file/d/1RfZiyynbhD4ZjkgP6JRxGLKkMtvX13tY/view?usp=drive_link'
      },
      {
        title: 'Ceiling Coordination Plan',
        description: 'Comprehensive lighting design plan, fixture selections, and electrical layouts.',
        size: '3 MB',
        pages: 24,
        link: 'https://drive.google.com/file/d/1TuokhxrEMbWZM78ykt2jYbTZw7OnYz7u/view?usp=drive_link'
      },
      {
        title: 'Hardware + Plumbing Specifications',
        description: 'Hardware and Plumbing Specifications.',
        size: '328 KB',
        pages: 6,
        link: 'https://drive.google.com/file/d/1OwIkxIVYeLXHq3JxPnWWUWnPH8LjMcoJ/view?usp=drive_link'
      },
      {
        title: 'Detail Plans - Building 1',
        description: 'Complete index of all specified materials, paints, and wallcoverings.',
        size: '4.1 MB',
        pages: 24,
        link: 'https://drive.google.com/file/d/1kmDIKoG786SolCePFfphUEZaWUSaTUac/view?usp=drive_link'
      },
      {
        title: 'Elevation - Building 1',
        description: 'Furniture, Fixtures, and Equipment specifications with tear sheets.',
        size: '6 MB',
        pages: 24,
        link: 'https://drive.google.com/file/d/11IeKXIlUXxCFMtxy-wEtFfc5wrEBQjBD/view?usp=drive_link'
      },
      {
        title: 'Furniture Coordination Plans - Building 1',
        description: 'Scheduled plumbing fixtures, sanitary ware, and architectural hardware.',
        size: '6 MB',
        pages: 24,
        link: 'https://drive.google.com/file/d/1BOPE5nxpNmSdBM8wayHklRPHgPSa-KQf/view?usp=drive_link'
      },
      {
        title: 'FF&E Budget - Building 1 - Cost Estimations',
        description: 'Cost Estimations and budgeting to approve FF&E selections, amounts and procure assets for installation',
        size: '42 KB',
        pages: 7,
        link: 'https://drive.google.com/file/d/1MT34gv9NwbVE6UPMYyRByPQ3B43r_1gl/view?usp=drive_link'
      },
      {
        title: 'Unit Mix - Building 1',
        description: 'The calculated program data for unit mixes for the Westhaven Building 1 Project',
        size: '49 KB',
        pages: 5,
        link: 'https://drive.google.com/file/d/1tGtODLg8TxhuhV3lieepIgV2MS4RyLMB/view?usp=drive_link',
      },
      {
        title: 'Full Interior Design Set - CD Package Building 1',
        description: 'Bulliten 13 set for the Westhaven project, Building 1',
        size: '6.7 MB',
        pages: 119,
        link: 'https://drive.google.com/file/d/1dhSgF0BA_3bXtfVoXbrDS5ES5WThks07/view?usp=drive_link',
      },
    ],
    moodBoards: [
      {
        title: 'Site',
        description: 'As part of the broader 1,500-acre Westhaven community, the neighborhood benefits from a mature network of parks, trails, and civic spaces that foster a strong sense of community and intergenerational connection while providing residents with convenient access to the cultural and commercial offerings of nearby Franklin and the greater Nashville region.',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773804275/site_t07ecc.png',
        tags: ['Building 1 - 5 Stories', 'Building 2 - 4 Stories', 'Building 3 - 3 Stories']
      },
      {
        title: 'Accent Elements & Styling',
        description: 'The design direction draws inspiration from the timeless charm within the community while introducing a refined, hospitality-influenced atmosphere. The interiors, layer natural materials, warm wood tones, and soft neutral palettes with pops of jewel tones for added interest, creating spaces that feel both sophisticated and comfortable. The result is a design language rooted in Southern architecture and modern comfort, supporting the active, social, and wellness-focused living experience envisioned.',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773822086/MOOD_BOARD_2_ga9icn.png',
        tags: ['Jewel Tones', 'Walnut Veneer', 'Sculptural Forms', 'Textured Glass']
      }
    ],
    beforeAfter: [
      {
        title: 'Floor Plan',
        before: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773804968/04_k9uoxi.png',
        after: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773804635/enlargeddining_bar_hcrojj.jpg',
        description: 'This shows the floor plan for the bar, bar lounge and dining area with the slider to reveal the furniture plans of the same spaces.'
      },
      {
        title: 'Executive Lounge',
        before: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773804989/ARC_ENLARGED_FLOOR_PLAN_coxccq.png',
        after: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773804977/07_rrjdwm.png',
        description: 'This shows the floor plan for the main Livingroom / Lounge space as well as the furniture plan overlay '
      }
    ],
    materials: [
      {
        name: 'Graphic Wall Covering',
        category: 'Wallcovering',
        application: 'Main Dining Room',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773828994/MAT_1_bdcdhj.png'
      },
      {
        name: 'Sage Green Wall Tile',
        category: 'Tile',
        application: 'Snack Bar and Coffee Station',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773828999/MAT_2_bdb7u3.png'
      },
      {
        name: 'Cammel Leather',
        category: 'Upholstry',
        application: 'Furniture Throughout',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773829003/MAT_3_aef64n.png'
      },
      {
        name: 'Cararra Marble',
        category: 'Stone',
        application: 'Countertops and Backsplash',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773829008/MAT_4_pzy9la.png'
      },
      {
        name: 'White Wall Tile',
        category: 'Tile',
        application: 'Wall tile - Basketweave',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773828936/MAT5_fdggbg.png'
      },
      {
        name: 'Navy Houndstooth Wallcovering',
        category: 'Wallcovering',
        application: 'Community Restrooms',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773828970/MAT_6_jexd3d.png'
      },
      {
        name: 'Textured Wallcovering',
        category: 'Wallcovering',
        application: 'Living room wall covering',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773828945/MATERIAL_WC_jrbbmw.png'
      },
      {
        name: 'Custom Carpet',
        category: 'Carpet',
        application: 'Carpet Inlay',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773829311/black-tweed-herrington_1_qrm3bo.jpg'
      }
    ],
    colors: [
      { name: 'Chestnut - Accent', hex: '#844925' },
      { name: 'Ivory - Primary', hex: '#DDDCD8' },
      { name: 'Navy - Secondary', hex: '#2C383F' },
      { name: 'Umber - Secondary', hex: '#88665A' },
      { name: 'Saddle - Accent', hex: '#B68769' },
      { name: 'Morning Dew - Secondary', hex: '#A4A89D' },
      { name: 'Gray Mist - Trim', hex: '#747C7A' },
      { name: 'Hunter - Accent', hex: '#2C3F34' },
      { name: 'Silver Sky - Accent', hex: '#9AA9AD' },
      { name: 'Greek Villa - Primary', hex: '#DDD3CB' },
      { name: 'Morning Fog - Primary', hex: '#4A5557' },
      { name: 'Charcoal - Trim', hex: '#2E302F' }
    ]
  },
  {
    id: 'AftertheApplause',
    title: 'After the Applause',
    subtitle: 'Old Hollywood Glamour Reimagined',
    category: 'Restaurant - Hospitality',
    location: 'Dallas Texas',
    year: '2022',
    image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805257/01_u7i5pm.png',
    link: '/work/AftertheApplause',
    amenities: [
      {
        title: 'Main Dining Room',
        description: 'The main dining room serves as the central stage of the restaurant, where the full design language is expressed at its most complete. This collection of views is grouped to illustrate the layering of key elements—curved banquettes, sculptural ceiling forms, and a rich material palette of brass, stone, and velvet. Together, these components establish the spatial rhythm and atmosphere that define the guest experience, balancing openness with intimacy through varied seating zones and controlled lighting conditions.',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805260/02_jmeh21.png',
        gallery: [
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805257/01_u7i5pm.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774079123/Rectangle_6_h1oqkn.png'
        ]
      },
      {
        title: 'Arrival Sequence - Entry',
        description: 'The arrival sequence is presented as a progression rather than a single moment, capturing the transition from exterior to interior and the gradual shift in tone. These images are grouped to emphasize compression, reveal, and anticipation—guiding guests from a more restrained entry condition into the richness of the main space. Material continuity and controlled lighting create a deliberate threshold, establishing the identity of the restaurant before the full experience unfolds.',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805408/01_chu7dn.png',
        gallery: [
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774080286/atm8136_httpss.mj.runPG4CsBz1Jw8_httpss.mj.runnNMSK0FK1BA_Gen_fc3879be-10d5-462a-a490-a8c7154d8c46_1_c9xvun.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774080635/atm8136_httpss.mj.runPG4CsBz1Jw8_httpss.mj.runnNMSK0FK1BA_Gen_ca30f9ce-4875-45f4-bcac-46659af5d7e9_2_mexzom.png'
        ]
      },
      {
        title: 'Social Bar',
        description: 'The social bar is positioned as a primary point of interaction and energy within the overall layout. This grouping highlights its role as both a visual anchor and a social catalyst, where material richness and lighting intensity are slightly elevated to distinguish it from surrounding dining areas. The images collectively demonstrate how the bar connects adjacent spaces, supporting a more dynamic, informal experience while maintaining cohesion with the overall design language.',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774081206/atm8136_httpss.mj.runPG4CsBz1Jw8_httpss.mj.runnNMSK0FK1BA_htt_40e0db30-71d5-4050-97e1-cf0e50d3b307_0_cxjvcu.png',
        gallery: [
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774081387/atm8136_httpss.mj.runPG4CsBz1Jw8_httpss.mj.runnNMSK0FK1BA_htt_e0a22fad-41ba-47b7-84a2-33a8b245e5a6_1_qgm7gf.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774081423/atm8136_httpss.mj.runPG4CsBz1Jw8_httpss.mj.runnNMSK0FK1BA_htt_4dae5546-5576-49ae-be87-451df212ff54_3_iisvtf.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774080506/atm8136_httpss.mj.runPG4CsBz1Jw8_httpss.mj.runnNMSK0FK1BA_Gen_43fdeee4-e2f1-4d77-9bfa-f135dd2cf501_1_soyf14.png'
        ]
      },
      {
        title: 'Private Dining Rooms',
        description: 'The private dining room is curated as a more immersive and controlled environment, centered around intimacy and material depth. This set of images is grouped to emphasize enclosure, texture, and atmosphere—featuring darker tones, layered finishes, and a stronger focus on tactile elements. The inclusion of wine display and surrounding details reinforces the room’s identity as a destination within the larger space, tailored for more curated and personal dining experiences.',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805428/07-01_zbuwm8.png',
        gallery: [
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805425/06_bkl6mi.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805431/07_yasxg0.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805435/08_yjimdl.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805425/06_bkl6mi.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805422/05_j87xpi.png'
        ]
      },
      {
        title: 'Public Rest Rooms',
        description: 'The restrooms are treated as an extension of the overall design narrative rather than a secondary space. This grouping highlights consistency in material palette, lighting, and detailing—translating the main design language into a more compact and intimate scale. The sequence of images demonstrates how even utilitarian spaces are elevated through cohesion and attention to detail, reinforcing a continuous and immersive guest experience.',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805418/04_lp9zuw.png',
        gallery: [
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774079224/image-gen_35_1_bmeisy.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774079879/restroomwomen_svlmfs.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774080341/mensdimage-gen_37_4_nhjieo.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774079207/image-gen_37_1_kgclmf.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774079191/image-gen_37_2_lbeq3h.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774079174/image-gen_37_3_q1seop.png'
        ]
      },
      {
        title: 'Bar / Night Club',
        description: 'The bar and nightclub environment represents a shift in atmosphere from dining to late-night activation. These images are grouped to capture the transition in energy, where lighting becomes more dramatic, contrasts are heightened, and spatial boundaries soften. The design maintains continuity through materials and form, while introducing a more immersive and expressive condition that supports a different mode of occupancy and social interaction.',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805439/09-01_g5hfvx.png',
        gallery: [
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805442/09_x7vqzv.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774080616/atm8136_httpss.mj.runPG4CsBz1Jw8_httpss.mj.runnNMSK0FK1BA_Gen_ca30f9ce-4875-45f4-bcac-46659af5d7e9_3_fngdov.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774080661/atm8136_httpss.mj.runPG4CsBz1Jw8_httpss.mj.runnNMSK0FK1BA_Gen_ca30f9ce-4875-45f4-bcac-46659af5d7e9_1_jqg6gi.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774080303/atm8136_httpss.mj.runPG4CsBz1Jw8_httpss.mj.runnNMSK0FK1BA_Gen_fc3879be-10d5-462a-a490-a8c7154d8c46_3_c6mmzv.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774080360/atm8136_httpss.mj.runPG4CsBz1Jw8_httpss.mj.runnNMSK0FK1BA_Gen_4727ed0e-ba59-4f63-9a8f-ada056a3d6d2_0_ur0nyi.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774080449/atm8136_httpss.mj.runPG4CsBz1Jw8_httpss.mj.runnNMSK0FK1BA_Gen_c12fa3da-487f-4cf6-9e00-50aa8079abe0_3_y9v5zy.png'
        ]
      }
    ],
    commonSpaces: [
      {
        title: 'Floor Plan',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805219/fp00_eirjjj.png',
        details: 'The floor plan is included to provide a clear understanding of spatial organization and program relationships. This grouping illustrates how primary and secondary zones are arranged, emphasizing circulation paths, points of convergence, and the hierarchy between public and private areas. It serves as a framework for understanding how each space contributes to the overall experience.',
        gallery: [
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805219/fp00_eirjjj.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805457/00_o8bgn2.png'
        ]
      },
      {
        title: 'Sketches - Conceptualizations',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805355/sketch06_lv5qth.png',
        details: 'The conceptual sketches are grouped to communicate the evolution of the design language, focusing on form, proportion, and material intent. These studies explore key ideas such as curvature, layering, and vertical rhythm, which are later translated into built elements. The collection reflects the iterative process behind the project, bridging initial concepts with the final spatial outcomes.',
        gallery: [
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805352/sketch05_vuyy09.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805336/sketch00_jmnkxv.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805339/sketch01_xwo9h1.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805346/sketch03_ghpbmo.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805358/sketch07_ej00ut.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805365/sketch10_raf1qy.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805448/sk01_poq9se.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805451/sk02_tjnzdi.png'
        ]
      },
      {
        title: 'Exterior Entry - Arrival',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805405/00_mb7ugc.png',
        details: 'The exterior entry is presented as the first point of engagement with the project, establishing tone and identity before entry. This grouping highlights material cues, lighting, and architectural framing that signal the transition into the interior experience. It reinforces the concept of arrival as a designed moment rather than a simple threshold.'
      },
      {
        title: 'Coorridor / Gallery',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805412/02_wautwk.png',
        details: 'The corridor is conceived as a transitional gallery space, transforming circulation into an experiential sequence. These images are grouped to highlight movement, repetition, and moments of pause—where material detailing and curated elements create visual interest along the path. The space acts as both connector and extension of the overall narrative, maintaining engagement between primary destinations.',
        gallery: [
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774072022/image-gen_40_1_akrmqj.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774072105/image-gen_40_2_mtpcn0.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774072227/image-gen_40_3_effol9.png'
        ]
      },
      {
        title: 'Private Booths',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805445/10_hqmckn.png',
        details: 'The private booths are designed as micro-environments within the larger dining space, offering a more intimate and enclosed experience. This grouping emphasizes the balance between privacy and connection, using architectural framing, upholstery, and lighting to create distinct zones. Together, these elements support a layered spatial experience, allowing guests to engage with the space at varying levels of intimacy.',
        gallery: [
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774072584/88image-gen_60_8_kxqycm.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774072653/96image-gen_60_5_xza1lq.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774072637/45image-gen_60_9_gzumpa.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774072569/879image-gen_60_6_dzebo4.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774072676/11image-gen_60_4_bdajdg.png'
        ]
      }
    ],
    technicalDocuments: [
      {
        title: 'Floor Plans & Layouts',
        description: 'Furntiure and floor plans for visualization of main restaurant space',
        size: '12.4 MB',
        pages: 1,
        link: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805457/00_o8bgn2.png'
      },
      {
        title: 'Lighting Specifications',
        description: 'Lighting design selections.',
        size: '8.2 MB',
        pages: 1,
        link: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774070427/ChatGPT_Image_Mar_21_2026_12_04_33_AM_z1gmmb.png'
      },
      {
        title: 'Millwork Details',
        description: 'Millwork and Custom Casework design concepts and finishes.',
        size: '15.6 MB',
        pages: 1,
        link: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774069967/ChatGPT_Image_Mar_20_2026_11_56_54_PM_tn86nl.png'
      },
      {
        title: 'Finish Schedules',
        description: 'Specified materials, paints, and other commonly used finishes for concept.',
        size: '4.1 MB',
        pages: 1,
        link: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774070385/ChatGPT_Image_Mar_21_2026_12_01_33_AM_sqtjrp.png'
      },
      {
        title: 'FF&E Selections',
        description: 'Furniture, Fixtures, and Equipment specifications with tear sheets.',
        size: '22.8 MB',
        pages: 1,
        link: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774069877/ChatGPT_Image_Mar_20_2026_11_55_00_PM_aym9tv.png'
      },
      {
        title: 'Plumbing & Hardware',
        description: 'Scheduled plumbing fixtures, sanitary ware, and architectural hardware.',
        size: '6.5 MB',
        pages: 1,
        link: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774069667/ChatGPT_Image_Mar_20_2026_11_51_50_PM_rgqpbm.png'
      }
    ],
    moodBoards: [
      {
        title: 'Main Dining - Sketches',
        description: 'These conceptual sketches explore the foundational design language of the main dining space, focusing on proportion, material layering, and spatial rhythm. A palette of warm neutrals, natural stone, and metallic accents informs the early direction—establishing a balance between structure and softness. The studies capture the initial vision for a refined, atmospheric environment where classic influences are reinterpreted through a contemporary, hospitality-driven lens.',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805352/sketch05_vuyy09.png',
        tags: ['Art Deco', 'Holywood Glam', 'Brass']
      },
      {
        title: 'Concept Board',
        description: 'Layering depth through deep jewel tones, rich wood veneers, and sculptural lighting. These elements provide contrast and visual interest while maintaining elegance.',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774069379/atm8136_httpss.mj.runAEIQG2ge9rQ_httpss.mj.runnNMSK0FK1BA_Gen_d984da15-f27c-4781-b395-06154c1ec9df_2_uqcsyu.png',
        tags: ['Deep Reds and Burgandy', 'Walnut Veneer', 'Brass Inlays', 'Patterned Floor Tile']
      }
    ],
    materials: [
      {
        name: 'Brushed Brass',
        category: 'Metal',
        application: 'Hardware and Trim',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805304/mat00_stwpn2.png'
      },
      {
        name: 'Seating Fabric',
        category: 'Upholstry',
        application: 'Private Dining Room Seating',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774070965/Linen-like_white_stain-resistant_upholstery_fabric_xzixb4.webp'
      },
      {
        name: 'Terrazzo',
        category: 'Stone',
        application: 'Floor and Restroom',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805330/mat09_smx9o5.png'
      },
      {
        name: 'Red Velvet',
        category: 'Upholstry',
        application: 'Dining Room Seating',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805313/mat04_aohswp.png'
      },
      {
        name: 'Green Velvet',
        category: 'Upholstry',
        application: 'Dining Room Seating',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805317/mat05_tmayue.png'
      },
      {
        name: 'Wood Paneling',
        category: 'Wood',
        application: 'Wood Paneling',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805323/mat07_x2x49y.png'
      },
      {
        name: 'Natural Stone',
        category: 'Stone',
        application: 'Bar Countertop',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805307/mat02_lzysvf.png'
      },
      {
        name: 'Pink Velvet',
        category: 'Upholstry',
        application: 'Dinning Room Seating',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805310/mat03_a8zhd6.png'
      }
    ],
    colors: [
      { name: 'Ivory', hex: '#E4DCD7' },
      { name: 'Chantilly lace', hex: '#CFB9AB' },
      { name: 'Pewter', hex: '#1E1305' },
      { name: 'Spiced Umber', hex: '#47120C' },
      { name: 'Merlot', hex: '#3E1718' },
      { name: 'Sage', hex: '#4F4B36' }
    ]
  },
  {
    id: 'Serpent&Silk',
    title: 'Serpent & Silk',
    subtitle: 'An immersive and luxurious commercial design experience.',
    category: 'Restaurant - Hospitality',
    location: 'Montreal, Quebec',
    year: '2022',
    image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805547/rewoif4e6a3196343515.661e7b8277adb_1_cudkx8.png',
    link: '/work/Serpent&Silk',
    amenities: [
      {
        title: 'Marketing Concepts/ Table Settings',
        description: 'The marketing concepts and table settings explore the Eyrie’s identity through curated moments of materiality, color, and atmosphere. Rich, layered compositions of dark tones, metallic accents, and tactile finishes are paired with statement lighting to create an intimate yet expressive setting. These studies establish a cohesive visual language that translates across dining and event experiences—capturing the project’s refined, immersive character while reinforcing its distinct brand presence.',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805488/ce8ee3b6-99e1-4be1-a250-504131cf8076_1_n29qcm.png',
        gallery: [
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805485/9aa7d51b-772f-489f-a437-2b6b72554d54_1_khbddu.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805481/5e937ab6-a2a6-4079-bd8c-2531732f640c_1_xvjsqg.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805478/015d474f-e347-47df-ab66-9f0e77c73dc7_1_spmkbf.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805470/logo_qfscb8.png'
        ]
      },
      {
        title: 'Lighting Fixtures',
        description: 'The lighting fixtures are designed as sculptural focal points that reinforce the Eyrie’s refined and atmospheric identity. Layered compositions of metal, glass, and soft illumination create moments of visual interest while contributing to the overall mood of each space. These fixtures balance elegance with presence—serving both as functional elements and as key contributors to the project’s immersive, hospitality-driven experience.',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774059916/Swinton_Chandelier-6heads_1_e2k3lh.png',
        gallery: [
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774059404/lighting_1_imdl7y.png'
        ]
      },
      {
        title: 'Private Dining Enclave',
        description: 'The private dining enclave is designed as an intimate, layered environment that offers a sense of separation without complete isolation. Defined by architectural framing elements, soft transitions, and carefully curated materials, the space creates a more personal dining experience within the larger setting. Subtle screening, warm lighting, and tailored seating arrangements establish a quiet sense of exclusivity—delivering a refined, hospitality-driven atmosphere suited for small gatherings and elevated dining moments.',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805540/bb64ea196343515.661e7b8273de8_1_tkmkhb.png',
        gallery: [
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774062223/isoview_vkmhhk.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774062147/446bb64ea196343515.661e7b8273de8_2_abr9pt.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774062126/664bb64ea196343515.661e7b8273de8_4_owtjaj.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774062076/774bb64ea196343515.661e7b8273de8_5_sq1ev6.png'
        ]
      },
      {
        title: 'Restrooms',
        description: 'The restrooms are designed as an extension of the overall hospitality experience, carrying the project’s material palette and atmospheric quality into a more intimate scale. Refined finishes, sculptural fixtures, and layered lighting create a space that feels elevated rather than utilitarian. Thoughtful detailing and a cohesive design language transform these areas into quiet, polished environments that reinforce the project’s commitment to a fully immersive and considered guest experience.',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774059471/b74bc5234759401.68c9b4002f86e_3_q9y9xd.png',
        gallery: [
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774060195/b74bc5234759401.68c9b4002f86e_4_ozw0mc.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774060147/b74bc5234759401.68c9b4002f86e_6_x09bv6.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774060115/b74bc5234759401.68c9b4002f86e_8_zkcyki.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774060131/b74bc5234759401.68c9b4002f86e_7_cyty7k.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774060163/b74bc5234759401.68c9b4002f86e_5_bip7as.png'
        ]
      }
    ],
    commonSpaces: [
      {
        title: 'Dining Room',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774059815/8a3163196343515.661e7b82742ee_3_kijjyd.png',
        details: 'The dining room is conceived as a layered, atmospheric environment where lighting, material, and spatial sequencing work together to shape the guest experience. A balance of intimate zones and more open seating creates a dynamic rhythm throughout the space, while warm, dimmed illumination enhances depth and visual focus. Rich finishes and carefully composed details establish a refined setting that feels both immersive and inviting—supporting a dining experience that is as much about atmosphere as it is about function.',
        gallery: [
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774059839/4420b7196343515.661e7b827310a_2_cfnh3d.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774059420/f9e65a196343515.661e7b8274a8b_2_vyyhvm.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774059839/4420b7196343515.661e7b827310a_2_cfnh3d.png'
        ]
      },
      {
        title: 'Mezzanine Overview',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805529/44444449ec5a196343515.661e7b8275214_2_sjw4ut.png',
        details: 'The mezzanine provides a layered vantage point overlooking the main dining floor, reinforcing the spatial hierarchy and overall sense of connectivity within the space. Defined by refined detailing and architectural elements, it introduces a balance between openness and separation—allowing for moments of observation while maintaining a more intimate experience. The elevated position enhances the visual rhythm of the interior, contributing to a dynamic and cohesive hospitality environment.',
        gallery: [
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774059339/f4e6a3196343515.661e7b8277adb_2_hl3pva.png'
        ]
      },
      {
        title: 'Private Dining Area',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774060082/22780561196343515.661e7b8273632_2_clucuy.png',
        details: 'The private dining area is designed as a more defined and intimate extension of the main dining environment, offering a sense of enclosure while maintaining visual connection to the larger space. Framed by architectural elements and softened through material layering and lighting, the area creates a comfortable setting for smaller group gatherings. The balance of openness and privacy allows for a tailored dining experience that feels both connected and distinctly set apart.',
        gallery: [
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774059897/aba4d8196343515.661e7b82759dd_2_autk53.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774059878/bb64ea196343515.661e7b8273de8_1_vqaavz.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805536/aba4d8196343515.661e7b82759dd_1_qdz88d.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805540/bb64ea196343515.661e7b8273de8_1_tkmkhb.png'
        ]
      },
      {
        title: 'Bar Area and Entrance',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774060243/55edb8196343515.661e7b8276b8d_1_dfcdiq.png',
        details: 'The bar and entrance sequence establishes a strong first impression, serving as both a point of arrival and a central social anchor within the space. Defined by layered materials, integrated lighting, and a clear spatial hierarchy, the design draws guests inward while immediately setting the tone for the overall experience. The bar acts as a focal element—balancing energy and refinement—while the surrounding layout supports fluid movement and gathering, creating a seamless transition from entry to engagement.',
        gallery: [
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774060575/0_3_640_N_9_lhsmnn.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774059509/0_1_1_e3f8uy.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774060259/59cc77192328603.65d9e15399962_2_q953hv.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774060504/59cc77192328603.65d9e15399962_4_pshxef.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774060465/59cc77192328603.65d9e15399962_8_yqpsyj.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774060548/59cc77192328603.65d9e15399962_3_hu2ub6.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774060390/59cc77192328603.65d9e15399962_6_zzvsxx.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774060292/59cc77192328603.65d9e15399962_7_xrni35.png'
        ]
      },
      {
        title: 'Entry View - Near Bar',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774060216/056074196343515.661e7b827751e_2_xlsq5f.png',
        details: 'This entry perspective frames the transition into the main social space, offering an immediate visual connection to the bar and surrounding activity. Layered materials, controlled lighting, and clear sightlines guide movement while reinforcing the hierarchy of the space. The composition creates a sense of anticipation—drawing guests inward and establishing the bar as a central focal point within the overall experience.',
      }
    ],
    technicalDocuments: [
      {
        title: 'Rendered Floor Plan',
        description: 'A fully rendered architectural floor plan detailing dining capacities, spatial zones, and the bar layout.',
        size: '2.2 MB',
        pages: 1,
        link: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805580/rendered_floor_plan_vaezhc.png'
      },
      {
        title: 'Furniture Plan (B&W)',
        description: 'Monochrome schematics identifying specific FF&E locations and clear pathways for service flow.',
        size: '2.2 MB',
        pages: 1,
        link: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805577/furniture_plan_black_and_white_wojamq.png'
      },
      {
        title: 'FF&E Seating Details',
        description: 'Technical cut sheets and dimensional data for custom booth seating and loose chairs.',
        size: '3.1 MB',
        pages: 1,
        link: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805574/FF_E_Seating_Details_and_selections_-_all_mv5pih.png'
      },
      {
        title: 'Bar Details',
        description: 'Technical details of the bar area.',
        size: '3.1 MB',
        pages: 1,
        link: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805563/59cc77192328603.65d9e15399962_6_k8sifs.png'
      },
      {
        title: 'Bar Front Elevation',
        description: 'Technical cut sheets and dimensional data for custom booth seating and loose chairs.',
        size: '3.1 MB',
        pages: 1,
        link: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805560/59cc77192328603.65d9e15399962_5_ycq5cw.png'
      },
      {
        title: 'Furniture Selections',
        description: ' Some Technical Details and images for the fabric and furniture selections dining room seating.',
        size: '1.5 KB',
        pages: 1,
        link: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774060341/Screenshot_2026-03-20_211558_potgoo.jpg',
      }
    ],
    moodBoards: [
      {
        title: 'Conceptual Inspiration',
        description: 'An atmospheric vision board anchoring the "Serpent & Silk" identity around dark textures, warm lighting, and a seductive palette.',
        image: '/PORTFOLIOPAGES/04-01-serpent&silk/MATERIALS-SKETCHES/concept board.png',
        tags: ['Mood', 'Atmosphere', 'Hospitality', 'Identity']
      },
      {
        title: 'Floor Plans',
        description: 'Explorations in low-level, warm-toned illumination strategies to create intimacy within the expansive venue.',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805577/furniture_plan_black_and_white_wojamq.png',
        tags: ['Sconces', 'Pendants', 'Warmth', 'Ambiance']
      }
    ],
    materials: [
      {
        name: 'Plush Seating Fabrics',
        category: 'Textile',
        application: 'Chairs & Booths',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773830212/b2644793daa29bbddebb8ce1928c27ffefc7062a_mkb916.jpg'
      },
      {
        name: 'Mercury Wall Mirror Finish',
        category: 'Tile',
        application: 'Bar Front & Columns',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773830346/medium-mercury-01_peri5y.jpg'
      },
      {
        name: 'Gold Veined Nero Marquina',
        category: 'Stone',
        application: 'Tabletops & Surfaces',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773830405/seamless-black-marble-surface-with-gold-veins-free-photo_c4rbvw.jpg'
      },
      {
        name: 'Textured Bronze Metal',
        category: 'Metal',
        application: 'Screens & Hardware',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773830464/dark-gradient-bronze-texture-background_f135om.jpg'
      }
    ],
    colors: [
      { name: 'Serpent Green', hex: '#1C352D' },
      { name: 'Dark Bronze', hex: '#2E2A21' },
      { name: 'Mahogany', hex: '#2C1A10' },
      { name: 'Ivory', hex: '#F5F5F5' },
      { name: 'Grey Storm', hex: '#808080' },
      { name: '', hex: '#96A57A' },
    ]
  },
  {
    id: 'TheEyrieHotel',
    title: 'Eyrie Hotel',
    subtitle: 'A transformative hospitality project redefining guest experiences.',
    category: 'Hospitality',
    location: 'Pittsburgh, Pennsylvania',
    year: '2022',
    image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805633/01_oocwuk.png',
    link: '/work/TheEyrieHotel',
    amenities: [
      {
        title: 'Resort Style Pool + Building elevations',
        description: 'The resort-style pool and building elevations are conceived as a cohesive extension of the Eyrie’s identity—where architecture and amenity work together to create a strong visual and experiential anchor for the property. The pool environment is designed as a layered outdoor retreat, integrating water features, lounge areas, and structured sightlines to establish a sense of openness and escape. Surrounding elevations reinforce this experience through rhythm, material variation, and vertical articulation, enhancing the project’s presence while framing key views into and across the amenity space. Together, these elements create a dynamic focal point that elevates both the guest experience and the overall character of the development..',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774051690/ISOMETRIC_VIEW_tcdxsa.png',
        gallery: [
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774051641/ELEVATIONS_FIRST_2_xe2qq2.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774051656/ELEVATION_S_SECOND_2_vzzilv.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774051674/WATER_FEATURE_gkuens.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774051690/ISOMETRIC_VIEW_tcdxsa.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774051705/PERSPECTIVE_RENDERING_j4btml.png',
        ]
      },
      {
        title: 'Fitness Center',
        description: 'The fitness center is designed as an extension of the Eyrie’s elevated, nature-inspired narrative—balancing performance with atmosphere. Clean lines, layered lighting, and a refined material palette create a space that feels both energized and grounded, while subtle references to movement, lightness, and verticality echo the project’s overarching avian concept. The layout supports a range of training styles, from focused individual workouts to more open, dynamic zones, delivering a wellness environment that feels intentional, immersive, and seamlessly integrated into the hotel experience.',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805607/fit01_drntoz.png',
        gallery: [
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773831310/c82dc9240366249.693cb46934e45_1_okj2u1.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774051469/ee6a6b240366249.693cb46b26785_1_xnkwsf.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774051484/d3f9d3240366249.693d36cf7c9d0_1_d7guy6.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774051348/f11135240366249.693cb46b25a75_1_yu1y5s.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774051373/00575f240366249.693d2d5f5ac63_1_xep2la.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774051387/5e8e79240366249.693d2d5f5a3c7_1_c8rjcd.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774051402/a89b6d240366249.693cba69c6010_1_j4ckmh.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774051432/5a26a9240366249.693cba6b1971c_1_zfcx6b.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774051455/3daf1a240366249.693d36cf7a0e2_1_xhi103.png',
        ]
      },
      {
        title: 'Community Room / Salon',
        description: 'An exclusive area for residents to unwind, featuring comfortable seating, and a premium beverage station.',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805946/01_avvuav.png',
        gallery: [
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805959/05_zx51hz.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805962/06_tfibez.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805952/03_fgcxsn.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805949/02_ynvvfn.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805956/04_sdmmcd.png'
        ]
      },
      {
        title: 'Spa',
        description: 'The spa is conceived as a tranquil, immersive retreat centered on relaxation and sensory experience. Soft lighting, natural materials, and a calming, neutral palette establish a serene atmosphere across a sequence of spaces—including locker areas, treatment rooms, and pool environments. Thoughtful detailing and fluid transitions between zones create a cohesive wellness experience, balancing quiet intimacy with moments of openness to deliver a restorative, hospitality-driven escape.',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805627/spa01_hb3vco.png',
        gallery: [
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774050743/RENDERING_LOCKER_cdofzh.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774050759/c12a0432857985.569663ec03ecf_1_h0kf0e.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774050775/7f500932857985.5698fed022239_1_thamna.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774050775/7f500932857985.5698fed022239_1_thamna.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774050790/444RENDERING_POOL_t3vvxy.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774050820/RENDERING_POOL_lxd8nt.png'
        ]
      },
      {
        title: 'Suite',
        description: 'The suite is designed as a refined extension of the guest experience, offering a balance of comfort, intimacy, and elevated detail. Soft, layered materials, warm tones, and tailored furnishings create a calm, residential atmosphere while maintaining a distinctly hospitality-driven edge. The space is thoughtfully composed to feel both open and inviting, with subtle contrasts and curated finishes that enhance the sense of quiet luxury—providing a comfortable, elevated retreat for extended stays.',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805834/bedroom_rendering_0_nnclxq.png',
        gallery: [
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805841/bedroom_rendering_2_lvsfnj.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774050496/atm8136_httpss.mj.run5JruNgoAggo_luxury_boutique_hotel_honeym_b13da877-dd5b-49e4-b0f3-3304214cde38_0_vd987p.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774050511/atm8136_httpss.mj.run5JruNgoAggo_luxury_boutique_hotel_honeym_5189591b-1d2b-4fcb-afd4-a3a72a4646e9_3_h0nmcn.png'
        ]
      },
      {
        title: 'Presidential Suite',
        description: 'The Presidential Suite is designed as a fully immersive, hospitality-driven retreat—balancing refined luxury with residential comfort. Expansive living and sleeping areas are layered with rich materials, custom furnishings, and soft, ambient lighting to create a sense of depth and warmth. The suite extends beyond a single room into a sequence of curated spaces, including a lounge, spa-inspired bathroom, and elevated finishes throughout—delivering a private, high-end experience tailored for both relaxation and extended stays.',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805845/bedroom_rendering_m1utvo.png',
        gallery: [
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805848/living_room_rendering_jviuaf.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805831/bathroom_rendering_og1s7n.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774050258/atm8136_httpss.mj.runUhZmREDqOjg_httpss.mj.runRy_kURbEyQI_lux_54d26616-9fe8-4cda-88ef-689dd129cc22_3_unpt1u.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774050277/atm8136_httpss.mj.run5JruNgoAggo_luxury_boutique_hotel_honeym_5189591b-1d2b-4fcb-afd4-a3a72a4646e9_1_sgcszj.png'
        ]
      }
    ],
    commonSpaces: [
      {
        title: 'Reception / Lobby',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774043288/123RENDERING_VIEW_IMAGE_t94f0j.png',
        details: 'Double-height ceiling with custom chandelier',
        gallery: [
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774044437/isoRENDERING_VIEW_IMAGE_azxzzq.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774047483/tech_omo7fl.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774047498/elevation2_rbxx1s.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774047513/elevation_k9pyht.png'
        ]
      },
      {
        title: 'Lobby Lounge',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805643/04_qrcdf1.png',
        details: 'Italian marble flooring and bespoke seating',
        gallery: [
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774043301/RENDERED_IMAGE_aoq1tf.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805640/03_eoczvy.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805636/02_g8phwo.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774044278/isometric_RENDERED_IMAGE_woiybe.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774044116/sketches_drwawinRENDERED_IMAGE_mihlnj.png'
        ]
      },
      {
        title: 'Elevator Lobby + Elevators',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805911/01_czuzui.png',
        details: 'Bronze accents and custom paneled walls',
        gallery: [
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805925/05_pmmtac.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805918/03_xmiwjr.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805820/PLANS_aj6q8x.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805806/FLOOR_PLAN_abdiuf.png'
        ]
      },
      {
        title: 'Concierge Desk',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774043561/RENDERING_VIEW_IMAGE12_d2gv2j.png',
        details: 'Walnut and brass custom reception desk',
        gallery: [
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1774043585/RENDERING_VIEW_IMAGE_b920lf.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805769/17_ukwnzf.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805773/18_p1qiai.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805776/19_zm523g.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805765/16_uzmrdn.png',
        ]
      },
      {
        title: 'Corridors / Circulation',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805915/02_cznpvd.png',
        details: 'The corridors are conceived as more than transitional space—functioning instead as a curated gallery and library that enriches the daily experience of movement throughout the building. Layered with artwork, books, and moments of pause, the circulation path becomes an immersive journey, blending hospitality-driven design with a sense of discovery. Warm materials, integrated lighting, and thoughtful detailing elevate these spaces into quiet, refined environments that encourage both exploration and retreat.',
        gallery: [
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805922/04_gpdqsu.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805933/07_qfmpie.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805936/08_aivc2v.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805940/09_m6oiaj.png',
          'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805929/06_cocmqp.png',
        ]
      }
    ],
    technicalDocuments: [
      {
        title: 'Floor Plans & Layouts',
        description: 'Detailed architectural floor plans including spatial organization and dimensions.',
        size: '12.4 MB',
        pages: 24,
        link: 'https://drive.google.com/drive/folders/1aESKoedzYm7TDVg9T2x8fBStZNjh3wcH?usp=drive_link'
      },
      {
        title: 'Lighting Specifications',
        description: 'Comprehensive lighting design plan, fixture selections, and electrical layouts.',
        size: '8.2 MB',
        pages: 24,
        link: 'https://drive.google.com/drive/folders/1aESKoedzYm7TDVg9T2x8fBStZNjh3wcH?usp=drive_link'
      },
      {
        title: 'Millwork Details',
        description: 'Custom cabinetry, shelving, and architectural millwork shop drawings.',
        size: '15.6 MB',
        pages: 24,
        link: 'https://drive.google.com/drive/folders/1aESKoedzYm7TDVg9T2x8fBStZNjh3wcH?usp=drive_link'
      },
      {
        title: 'Finish Schedules',
        description: 'Complete index of all specified materials, paints, and wallcoverings.',
        size: '4.1 MB',
        pages: 24,
        link: 'https://drive.google.com/drive/folders/1aESKoedzYm7TDVg9T2x8fBStZNjh3wcH?usp=drive_link'
      },
      {
        title: 'FF&E Package',
        description: 'Furniture, Fixtures, and Equipment specifications with tear sheets.',
        size: '22.8 MB',
        pages: 24,
        link: 'https://drive.google.com/drive/folders/1aESKoedzYm7TDVg9T2x8fBStZNjh3wcH?usp=drive_link'
      },
      {
        title: 'Plumbing & Hardware',
        description: 'Scheduled plumbing fixtures, sanitary ware, and architectural hardware.',
        size: '6.5 MB',
        pages: 24,
        link: 'https://drive.google.com/drive/folders/1aESKoedzYm7TDVg9T2x8fBStZNjh3wcH?usp=drive_link'
      }
    ],
    moodBoards: [
      {
        title: 'Exterior Sketches',
        description: 'The exterior concept for Eyrie Hotel was developed through a series of exploratory sketches focused on form, silhouette, and site presence. Early studies investigated massing relationships, vertical articulation, and the balance between architectural boldness and contextual sensitivity. These sketches served as a foundation for shaping a distinct identity—one that feels elevated, intentional, and seamlessly integrated with its surroundings while setting the tone for the guest experience from the very first approach.',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805720/01_spvko5.png',
        tags: ['Warm Neutrals', 'Natural Stone', 'Brushed Brass', 'Organic Textures']
      },
      {
        title: 'Mood Boards',
        description: 'The mood boards establish the visual and material language for the Eyrie Hotel, drawing inspiration from the richness and intricacy of aviary environments. Deep emerald tones, warm metallics, layered textures, and organic forms come together to create a sense of refined drama and immersive luxury. The palette balances bold, expressive elements with grounded natural materials—setting the foundation for a hospitality experience that feels both elevated and intimately connected to nature.',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805684/01_s7vff3.png',
        tags: ['Jewel Tones', 'Walnut Veneer', 'Sculptural Forms', 'Textured Glass']
      }
    ],
    beforeAfter: [
      {
        title: 'Event Space - Warhol Ballroom',
        before: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805966/01_oesyla.png',
        after: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805969/02_po6kqy.png',
        description: 'The Warhol Ballroom is envisioned as a vibrant, contemporary event space characterized by its openness, clarity of layout, and elevated material expression. The design introduces a brighter, more refined atmosphere through enhanced lighting, cohesive finishes, and modern detailing. A balance of clean architectural lines and layered textures creates a versatile environment suited for a range of events, from formal gatherings to high-energy social functions, while maintaining a polished and visually engaging presence.'
      },
      {
        title: 'Event Space - Steel Ballroom',
        before: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805979/10_lpedwb.png',
        after: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773831661/wedding_event_iwzexm.png',
        description: 'The Steel Ballroom is designed as a refined, hospitality-driven event space defined by its open layout, elevated finishes, and cohesive material palette. Rich textures, warm lighting, and thoughtfully integrated architectural details create a setting that feels both sophisticated and adaptable—capable of hosting weddings, social gatherings, and large-scale events. The design balances elegance with functionality, delivering a space that is visually impactful while remaining flexible for a variety of uses.'
      }
    ],
    materials: [
      {
        name: 'Stained Oak',
        category: 'Wood',
        application: 'Flooring and Stain Color',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805613/mat01_nymksy.png',
      },
      {
        name: ' Natural Stone - Marble',
        category: 'Stone',
        application: 'Accent Cladding for Fireplace',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805617/mat02_taieyy.png'
      },
      {
        name: 'Natural Stone Tile',
        category: 'Tile',
        application: 'Floor Tile',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805620/mat03_v0u6xl.png'
      },
      {
        name: 'Teal Velvet',
        category: 'Upholstry',
        application: 'Accent Seating Upholstry',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773805623/mat04_ngtxnr.jpg'
      }
    ],
    colors: [
      { name: 'Midnight Onyx', hex: '#111315' },
      { name: 'Saphire Velvet', hex: '#123E66' },
      { name: 'Peacock Teal', hex: '#0E6B73' },
      { name: 'Burnished Bronze', hex: '#8A5A34' },
      { name: 'Champagne Mist', hex: '#D9CBB7' },
      { name: 'Soft Pearl', hex: '#E3DDD2' }
    ]
  }
];
