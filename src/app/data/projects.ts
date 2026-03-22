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
}

export const projectsData: ProjectData[] = [
  {
    id: 'Clover',
    title: 'Clover on Park Lane',
    subtitle: 'Repositioning a B+ class asset',
    category: 'Multifamily Value-Add Repositioning',
    location: 'Dallas, Texas',
    year: '2018',
    image: 'https://drive.google.com/file/d/1ju0sg93HykgB6qLKbuILnzzdh05cLmDt/view?usp=drive_link',
    link: '/work/Clover',
    amenities: [
      {
        title: 'Resort Style Pool',
        description: 'A tranquil retreat designed to create a resort-style living experience, enhance the unique appeal of the property while creating a statement to increase visability and drive occupancy rates.',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773803531/clover_ba_09_after_dxpgap.jpg'
      },
      {
        title: 'Fitness Center',
        description: 'Updated fitness center with new equipment and finishes.',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773814051/VIEW_10_ez4kgf.png'
      },
      {
        title: 'Resident Lounge',
        description: 'An exclusive area for residents to unwind, featuring comfortable seating, and a premium beverage station.',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773814098/VIEW_14_dn6p1a.png'
      },
      {
        title: 'Playgrounds + Outdoor Kitchen/Grill Areas',
        description: 'Panoramic city views complemented by landscaped gardens, fire pits, and comfortable lounging areas perfect for evening gatherings.',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773962581/mountain-home-thumb_fs5twk.jpg'
      },
      {
        title: 'Dog Park',
        description: 'Panoramic city views complemented by landscaped gardens, fire pits, and comfortable lounging areas perfect for evening gatherings.',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773962219/small_dog_kit_uqofic.jpg'
      },
      {
        title: 'Fire Pit Area',
        description: 'Panoramic city views complemented by landscaped gardens, fire pits, and comfortable lounging areas perfect for evening gatherings.',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773962493/gravel-fire-pit-cons-v0-dmmdk5saaevd1_ottrab.jpg'
      }
    ],
    commonSpaces: [
      {
        title: 'Grand Entrance',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773803543/clover_ba_13_after_vb7i98.jpg',
        details: 'Double-height ceiling with custom leasing desk details and multifamily branding'
      },
      {
        title: 'Main Lobby',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773814098/VIEW_14_dn6p1a.png',
        details: 'Concrete stained flooring, buffalo check upholstry and black metal tables for perspective residents to engage with leasing agents.'
      },
      {
        title: 'Kitchenette - concept',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773961517/sketchofkitchenette_pke8ng.jpg',
        details: 'Green Tile, White Stone Countertops, Wood Details and finishes, Accent Color Upholstry.'
      },
      {
        title: 'Wifi Lounge + Co-working Bar - concept',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773803394/clover_sketch_03_nauux9.jpg',
        details: 'Natural Stained wood finishes, Black Metal and Matte Paint Accents, Green Upholstry accents and modern light fixtures.'
      },
      {
        title: 'Waiting Area',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773961466/Render_4_4x_cwxxwv.jpg',
        details: 'Stylized waiting area with accent wall and modern seating.'
      }
    ],
    technicalDocuments: [
      {
        title: 'Floor Plans & Layouts',
        description: 'Detailed architectural floor plans including spatial organization and dimensions.',
        size: '12.4 MB',
        pages: 24
      },
      {
        title: 'Lighting Specifications',
        description: 'Comprehensive lighting design plan, fixture selections, and electrical layouts.',
        size: '8.2 MB',
        pages: 15
      },
      {
        title: 'Millwork Details',
        description: 'Custom cabinetry, shelving, and architectural millwork shop drawings.',
        size: '15.6 MB',
        pages: 42
      },
      {
        title: 'Finish Schedules',
        description: 'Complete index of all specified materials, paints, and wallcoverings.',
        size: '4.1 MB',
        pages: 8
      },
      {
        title: 'FF&E Package',
        description: 'Furniture, Fixtures, and Equipment specifications with tear sheets.',
        size: '22.8 MB',
        pages: 64
      },
      {
        title: 'Plumbing & Hardware',
        description: 'Scheduled plumbing fixtures, sanitary ware, and architectural hardware.',
        size: '6.5 MB',
        pages: 12
      }
    ],
    moodBoards: [
      {
        title: 'Primary Palette & Textures',
        description: 'The foundation of the design features warm neutrals, natural stone, and brushed brass. This direction establishes a timeless and sophisticated atmosphere that flows throughout the space.',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773803263/clover_leasing_z6l8mv.png',
        tags: ['Warm Neutrals', 'Natural Stone', 'Brushed Brass', 'Organic Textures']
      },
      {
        title: 'Accent Elements & Styling',
        description: 'Layering depth through deep jewel tones, rich wood veneers, and sculptural lighting. These elements provide contrast and visual interest while maintaining elegance.',
        image: 'https://res.cloudinary.com/dk4hujmt3/image/upload/v1773940674/Cloversketches_x97sxf.png',
        tags: ['Jewel Tones', 'Walnut Veneer', 'Sculptural Forms', 'Textured Glass']
      }
    ],
    beforeAfter: [
      {
        title: 'Signage/ Property Frontage',
        before: 'https://drive.google.com/file/d/1JnVmAOrIyR2tFXENFiz9BETkDF1zOOxb/view?usp=drive_link',
        after: 'https://drive.google.com/file/d/17iLx3jCPd9lSL8RWgMnioZ0ZtBsxVEi-/view?usp=drive_link',
        description: 'The Tired Property Sign needed a much cleaner and more visable statment to be made to promote the property and create more visual awareness.'
      },
      {
        title: 'Main Pool',
        before: 'https://drive.google.com/file/d/198SFGPUD-ps_SgeyFMsROEQ4xcrNmE-T/view?usp=drive_link',
        after: 'https://drive.google.com/file/d/1X8T5wEVtQZzdJmW7fJ-z-B-wxHJIZJaf/view?usp=drive_link',
        description: 'Re-designing the Pool with the new "gate" water feature and cabana area to create a more upscale and resort-like feel.'
      },
      {
        title: 'Unit Model bedroom',
        before: 'https://drive.google.com/file/d/1o24qjpo3XlYzn39hCJTF6zVztybNyI3f/view?usp=drive_link',
        after: 'https://drive.google.com/file/d/1xS2C-7THYm8WlrFKDL3eZQnBT3a6vc9p/view?usp=drive_link',
        description: 'The Model Unit was outdated and needed a refresh to appeal to the target demographic. The space was transformed with new finishes, furniture, and accessories.'
      },
      {
        title: 'Main Lobby',
        before: 'https://drive.google.com/file/d/1EgE5S6SGnHxbAQGroQAXfqCBEid_IJ2Z/view?usp=drive_link',
        after: 'https://drive.google.com/file/d/1agcaSV_VdNkgPlU3NPD3Cn3rAgijFE90/view?usp=drive_link',
        description: 'The Main lobby was outdated, broken up and underutilized. The space was transformed with new finishes, furniture, and accessories.'
      },
      {
        title: 'Leasing Lounge',
        before: 'https://drive.google.com/file/d/1aPXgIQp-50MvRONEsuaP85rJzTvvQH1M/view?usp=drive_link',
        after: 'https://drive.google.com/file/d/1zCuevQAZEwyOFM-zx2OEXxZ9htgsYGmQ/view?usp=drive_link',
        description: 'This space was not being utilized and felt disconnected from the rest of the leasing office, making the whole space feel much smaller and increasing the dated and drab presence of the property. By opening this up we created better circulation, better sightlines to the pool and other amenities and modernized the appeal.'
      },
      {
        title: 'Leasing',
        before: 'https://drive.google.com/file/d/18g_8uJe9jb3Niax_e0Jmt_99t5wWuyjk/view?usp=drive_link',
        after: 'https://drive.google.com/file/d/1_78klSsQOYW1-TQke9I50S8DAgGNg4sz/view?usp=drive_link',
        description: 'The leasing area was outdated and needed a refresh to appeal to the target demographic. The space was transformed with new finishes, furniture, and accessories.'
      },
      {
        title: 'Fitness Center',
        before: 'https://drive.google.com/file/d/1Vck_mu9A7iuh3rbU5WNC49RTrimaDunx/view?usp=drive_link',
        after: 'https://drive.google.com/file/d/1sR-7oUH0b6h_iB-lJsEfoE7aMDRPfXbx/view?usp=drive_link',
        description: 'The fitness center was outdated and needed a refresh to appeal to the target demographic. The space was transformed with new finishes, furniture, and accessories.'
      }
    ],
    materials: [
      {
        name: 'Dark Walnut Stain',
        category: 'Wood',
        application: 'Flooring LVT in Units and Lobby Accents',
        image: 'https://drive.google.com/file/d/1QR1Jqdv0JLbZkaqJCz6rCd8urSUxMVu7/view?usp=drive_link'
      },
      {
        name: 'Accent Upholstry',
        category: 'Textile',
        application: 'Furniture Accent Color / Upholstry',
        image: 'https://drive.google.com/file/d/1hxc8-Qvf2qw71O3WLStTQVxCMFLkWhpG/view?usp=drive_link'
      },
      {
        name: 'Buffalo Check Upholstry',
        category: 'Textile',
        application: 'Lobby Chair Upholstry',
        image: 'https://drive.google.com/file/d/1tgY0rjZk4mHunwVeZhIRfNzgscAaCiul/view?usp=drive_link'
      },
      {
        name: 'Polished Concrete',
        category: 'Concrete',
        application: 'Stained and Polished Concrete Finish',
        image: 'https://drive.google.com/file/d/1EIHmdVaWRqtMyYfPbpsRpYpReSd4p56D/view?usp=drive_link'
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
    image: 'https://drive.google.com/file/d/17a-IHhJcFMrWv5ZTCE22__nyUL_YzWDB/view?usp=drive_link',
    link: '/work/Revelstoke',
    amenities: [
      {
        title: 'Resort-Style Pool Deck',
        description: 'A resort-inspired pool courtyard serves as the central outdoor amenity space, offering lounge seating, cabanas, and sun terraces designed for relaxation and social gatherings.',
        image: 'https://drive.google.com/file/d/1QF9yCbkdF16JAbVlFXcgIIuW4XUefaN0/view?usp=drive_link'
      },
      {
        title: 'Co-Working Hub',
        description: 'The co-working lounge offers a flexible work-from-home environment with comfortable seating, collaborative tables, and dedicated work areas.',
        image: 'https://drive.google.com/file/d/1TCXATrf6XyiULn3UXtJcqFtfPrvei3AI/view?usp=drive_link'
      },
      {
        title: 'Resident Bar & Multipurpose Lounge',
        description: 'This hospitality-inspired lounge includes bar seating, flexible gathering areas, and warm material finishes that create an inviting social environment.',
        image: 'https://drive.google.com/file/d/1j8Vq6wKNSyDuJ6qecDNgUhLXJF1dr0__/view?usp=drive_link'
      },
      {
        title: 'Game Room & Entertainment Lounge',
        description: 'The game room introduces a dynamic entertainment environment featuring lounge seating, recreational games, and media viewing areas.',
        image: 'https://drive.google.com/file/d/11PZv7vb9r3LBW44tiVLj3zMRCjpkGVKY/view?usp=drive_link'
      }
    ],
    commonSpaces: [
      {
        title: 'Resident Lobby & Lounge',
        image: 'https://drive.google.com/file/d/1JkP6A0GT9-AmB5qVKRGieNUVPByRmhc0/view?usp=drive_link',
        details: 'The double-height resident lobby creates a welcoming arrival experience with dramatic lighting, modern furnishings, and curated art elements.'
      },
      {
        title: 'Courtyard & Outdoor Social Lawn',
        image: 'https://drive.google.com/file/d/149jWT5ELZBVfM26-ajWw2TpWssGFQbms/view?usp=drive_link',
        details: 'The landscaped courtyard introduces a welcoming outdoor environment framed by residential buildings and shaded seating areas.'
      },
      {
        title: 'Open Concept Living Room',
        image: 'https://drive.google.com/file/d/1apefA7NHRTEmcTfObO5rhuTXQadW6CIL/view?usp=drive_link',
        details: 'The living areas feature open floor plans that connect the kitchen and living spaces, maximizing natural light.'
      },
      {
        title: 'Kitchen & Dining',
        image: 'https://drive.google.com/file/d/1peMvQ-x871yM0oVULyIkbi3Gz6q86zZJ/view?usp=drive_link',
        details: 'Modern kitchens feature premium appliances, contemporary cabinetry, and designer countertops.'
      },
      {
        title: 'Primary Bedroom',
        image: 'https://drive.google.com/file/d/1wye6W8tTlwMR4oa_eWv88QhTEpcX93vj/view?usp=drive_link',
        details: 'Bedrooms provide a calm and comfortable retreat with generous windows, neutral finishes, and flexible layouts.'
      }
    ],
    technicalDocuments: [
      {
        title: 'First Floor Plan',
        description: 'Detailed architectural floor plans including spatial organization and dimensions for the first floor.',
        size: '12.4 MB',
        pages: 24
      },
      {
        title: 'Second Floor Plan',
        description: 'Comprehensive layout and spatial planning for the second floor units and amenities.',
        size: '8.2 MB',
        pages: 15
      }
    ],
    moodBoards: [
      {
        title: 'Site Plan',
        description: 'Initial architectural and interior elevation concepts that formed the basis of the spatial design.',
        image: 'https://drive.google.com/file/d/10mCxcryS3v1uhmIJXwYAobhHHym2eTCh/view?usp=drive_link',
        tags: ['Site Analysis', 'Rendered Site Plan', 'Space Planning']
      },
      {
        title: 'Concept Sketches',
        description: 'Early conceptual sketches exploring the volume, scale, and material applications throughout the spaces.',
        image: 'https://drive.google.com/file/d/18ZBkBq_cwdV20Ihd_7WStgz_HavctB5I/view?usp=drive_link',
        tags: ['Conceptual', 'Hand Sketches', 'Volume', 'Scale']
      }
    ],
    materials: [
      {
        name: 'Wood Paneling',
        category: 'Wood',
        application: 'General Finishes',
        image: 'https://drive.google.com/file/d/1-_GceuZwWELfVWFAl4FPphMC0rM0JsoO/view?usp=drive_link'
      },
      {
        name: 'Decorative Wall Tile',
        category: 'Wall Tile',
        application: 'Accent Finishes',
        image: 'https://drive.google.com/file/d/14XnTvjITOgTS9va5T333jjuFbq-yp1Mw/view?usp=drive_link'
      },
      {
        name: 'Stone Countertop',
        category: 'Stone',
        application: 'Textiles and Upholstery',
        image: 'https://drive.google.com/file/d/1V_7zBIC-4z1wZ-miDk2uty2Ch8YDxcxx/view?usp=drive_link'
      },
      {
        name: 'Floor Tile',
        category: 'Tile',
        application: 'Flooring in Leasing Office',
        image: 'https://drive.google.com/file/d/14XnTvjITOgTS9va5T333jjuFbq-yp1Mw/view?usp=drive_link'
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
    image: 'https://drive.google.com/file/d/10KQtrRtX6jOZ6F7E4_c9Klz-nt8LqfyR/view?usp=drive_link',
    link: '/work/CollinsCreek',
    amenities: [
      {
        title: 'Retail Shopping Strategy',
        description: 'Planning for experience, visability and flow',
        image: 'https://drive.google.com/file/d/1RoOEUjZeYlusmnNB_DqWVmRBSbgGSmOP/view?usp=drive_link'
      },
      {
        title: 'Pedestrian Entry',
        description: 'New Iconic views and entry sequence to the area creating greater visuals for the area and increasing livability.',
        image: 'https://drive.google.com/file/d/1dCfvQxTKJiWHuALtIBjlSWOf7XenHsiA/view?usp=drive_link'
      },
      {
        title: 'Office Building Concept',
        description: 'An exclusive area for offices to be located allowing the mixed use building program to fully mix shopping and entertainment, work locations and living quarters. The redevelopment projects aim is to improve by creating a living community fostered around all three categories to keep the area busy and varied for investment security.',
        image: 'https://drive.google.com/file/d/1QTgCpNF57Ax8eOV4Bk7mE7l4B8G6Fj_B/view?usp=drive_link'
      },
      {
        title: 'Multifamily - Leasing Lobby Concept',
        description: 'Panoramic city views complemented by landscaped gardens, fire pits, and comfortable lounging areas perfect for evening gatherings.',
        image: 'https://drive.google.com/file/d/1pPt8QL257maCHp_lsFizGMKwzxgBEQDJ/view?usp=drive_link'
      },
      {
        title: 'Multifamily - Amenity Lounge Concept',
        description: 'Panoramic city views complemented by landscaped gardens, fire pits, and comfortable lounging areas perfect for evening gatherings.',
        image: 'https://drive.google.com/file/d/1k_eHf3tPcTAs68Nq_uzEVEtue98DCbNa/view?usp=drive_link'
      },
      {
        title: 'Multifamily - Amenity Dog Wash Concept',
        description: 'A modern business center equipped with high-speed internet, printing facilities, and comfortable workspaces.',
        image: 'https://drive.google.com/file/d/16FRkAgT7ebhQeFtULxf001qbnYGHSzIt/view?usp=drive_link'
      }
    ],
    commonSpaces: [
      {
        title: 'Corridor - Concepts',
        image: 'https://drive.google.com/file/d/1DvSrqY5mflkn89kGIq57fdRh_syw-GQw/view?usp=drive_link',
        details: 'Double-height ceiling with custom chandelier'
      },
      {
        title: 'Corridor - Concepts',
        image: 'https://drive.google.com/file/d/1SZtuoZJQxgqr4pCsrer6ek9WQ1fDTYvd/view?usp=drive_link',
        details: 'Italian marble flooring and bespoke seating'
      },
      {
        title: 'Corridor - Concepts',
        image: 'https://drive.google.com/file/d/1rN3G6g3DkNMBLC6WbtfNcp6L3cuWG3mB/view?usp=drive_link',
        details: 'Bronze accents and custom paneled walls'
      },
      {
        title: 'Corridor - Concepts',
        image: 'https://drive.google.com/file/d/1tGAVvXDpaiwhXhlOPCRbcfYBjozjjAcq/view?usp=drive_link',
        details: 'Walnut and brass custom reception desk'
      },
      {
        title: 'Resort Styled Pool Areas',
        image: 'https://drive.google.com/file/d/1duh_omVNYoJ2EEGvFTlDSXUcUZhtSoEv/view?usp=drive_link',
        details: 'Curated art gallery and library'
      },
      {
        title: 'Fitness Center + Spin/ Cycle Rooms',
        image: 'https://drive.google.com/file/d/1k63V7p8zMO6uzYcPBt1ZjhkEMu1D1qkl/view?usp=drive_link',
        details: 'Curated art gallery and library'
      }
    ],
    technicalDocuments: [
      {
        title: 'Floor Plans & Layouts',
        description: 'Detailed architectural floor plans including spatial organization and dimensions.',
        size: '12.4 MB',
        pages: 24
      },
      {
        title: 'Lighting Specifications',
        description: 'Comprehensive lighting design plan, fixture selections, and electrical layouts.',
        size: '8.2 MB',
        pages: 15
      },
      {
        title: 'Millwork Details',
        description: 'Custom cabinetry, shelving, and architectural millwork shop drawings.',
        size: '15.6 MB',
        pages: 42
      },
      {
        title: 'Finish Schedules',
        description: 'Complete index of all specified materials, paints, and wallcoverings.',
        size: '4.1 MB',
        pages: 8
      },
      {
        title: 'FF&E Package',
        description: 'Furniture, Fixtures, and Equipment specifications with tear sheets.',
        size: '22.8 MB',
        pages: 64
      },
      {
        title: 'Plumbing & Hardware',
        description: 'Scheduled plumbing fixtures, sanitary ware, and architectural hardware.',
        size: '6.5 MB',
        pages: 12
      }
    ],
    moodBoards: [
      {
        title: 'Site Plan + Studies',
        description: 'Collin Creek is a unified development that incorporates a compatible  mix of uses, such as retail, office space, commercial and residential, and integrated with plenty of open spaces and pedestrian networks for enhanced community.',
        image: 'https://drive.google.com/file/d/1z5mXsKVLiSsn6KLrO6SdcxG-p28ZoQeL/view?usp=drive_link',
        tags: ['Multifamily', 'Hospitality', 'Office-Workplace', 'Retail/Mixed-use']
      },
      {
        title: 'Fitness Centers',
        description: 'Natural and open state of the art fitness center with a variety of equipment and amenities.',
        image: 'https://drive.google.com/file/d/1k63V7p8zMO6uzYcPBt1ZjhkEMu1D1qkl/view?usp=drive_link',
        tags: ['Neutural Tones', 'Walnut Veneer', 'Sculptural Forms', 'Textured Glass']
      }
    ],
    materials: [
      {
        name: 'Brick',
        category: 'Brick',
        application: 'Exterior Walls',
        image: 'https://drive.google.com/file/d/1slwoteTPmzGpK5oSpnhLoT3a77OUEpk2/view?usp=drive_link'
      },
      {
        name: 'Concrete / Concrete Pavers',
        category: 'Concrete',
        application: 'Exterior Sidewalk + Flooring',
        image: 'https://drive.google.com/file/d/11Yo3oZ5PpsO5BssXGNaaFExRjOAxD7GR/view?usp=drive_link'
      },
      {
        name: 'Painted Wood Cladding',
        category: 'Wood',
        application: 'Exterior Wall Accent',
        image: 'https://drive.google.com/file/d/1gyP1eNcrt00u6pfzdtKW1XFHqWPMBr6r/view?usp=drive_link'
      },
      {
        name: 'Fluted Metal Panel',
        category: 'Metal',
        application: 'Exterior / Accent Siding',
        image: 'https://drive.google.com/file/d/1MCWvbUmOgWjoV2s_iY92TyjElYlS697K/view?usp=drive_link'
      }
    ],
    colors: [
      { name: 'Oatmeal', hex: '#CFC9BC' },
      { name: 'Sage', hex: '#7B9682' },
      { name: 'Sunrise', hex: '#B48E8B' },
      { name: 'Lemon Meringue', hex: '#D2C883' },
      { name: 'Derby Brown', hex: '#5F5854' }
    ]
  },
  {
    id: 'Capella',
    title: 'Capella',
    subtitle: 'Contemporary residential design reaching new heights.',
    category: 'Residential',
    location: 'Las Vegas, Nevada',
    year: '2026',
    image: 'https://drive.google.com/file/d/1oLK6AM8Ozc4jsxNa4wEiMHkY6wrO9ZDI/view?usp=drive_link',
    link: '/work/Capella',
    amenities: [
      {
        title: 'Resort Style Pool',
        description: 'A tranquil retreat designed to create a resort-style living experience, enhance the unique appeal of the property while creating a statement to increase visability and drive occupancy rates.',
        image: '/PORTFOLIOPAGES/02-01-capella/RENDERINGS/pool00.png'
      },
      {
        title: 'Cabanas and Poolside Bar',
        description: 'A tranquil retreat designed to create a resort-style living experience, enhance the unique appeal of the property while creating a statement to increase visability and drive occupancy rates.',
        image: '/PORTFOLIOPAGES/02-01-capella/RENDERINGS/pool01.png'
      },
      {
        title: 'Resident Lounge',
        description: 'An exclusive area for residents to unwind, featuring comfortable seating, and a premium beverage station.',
        image: '/PORTFOLIOPAGES/02-01-capella/RENDERINGS/lounge02.png'
      },
      {
        title: 'Arrival Sequence and Social Spaces',
        description: 'There are many social living rooms for the different floors and to help promote a more interactive and social living environment for residents.',
        image: '/PORTFOLIOPAGES/02-01-capella/old/08-amenity/Arrival/arrive.png'
      },
      {
        title: 'Game Room',
        description: 'Panoramic city views complemented by landscaped gardens, fire pits, and comfortable lounging areas perfect for evening gatherings.',
        image: '/PORTFOLIOPAGES/02-01-capella/RENDERINGS/capellapg9.png'
      },
      {
        title: 'Terrace',
        description: 'A modern business center equipped with high-speed internet, printing facilities, and comfortable workspaces.',
        image: '/PORTFOLIOPAGES/02-01-capella/RENDERINGS/terrace01.png'
      }
    ],
    commonSpaces: [
      {
        title: 'Grand Entrance',
        image: '/PORTFOLIOPAGES/02-01-capella/RENDERINGS/lounge.png',
        details: 'Double-height ceiling with custom chandelier'
      },
      {
        title: 'Main Lobby',
        image: '/PORTFOLIOPAGES/02-01-capella/RENDERINGS/lounge02.png',
        details: 'Italian marble flooring and bespoke seating'
      },
      {
        title: 'Elevator Lobby',
        image: '/PORTFOLIOPAGES/02-01-capella/old/08-amenity/elevator/elev.png',
        details: 'Bronze accents and custom paneled walls'
      },
      {
        title: 'Concierge Desk',
        image: '/PORTFOLIOPAGES/02-01-capella/old/04-material&palette/mb/desk.jpg',
        details: 'Walnut and brass custom reception desk'
      },
      {
        title: 'Waiting Area',
        image: '/PORTFOLIOPAGES/02-01-capella/old/08-amenity/1.LeasingLobbyHero/wait.png',
        details: 'Curated art gallery and library'
      }
    ],
    technicalDocuments: [
      {
        title: 'Floor Plans & Layouts',
        description: 'Detailed architectural floor plans including spatial organization and dimensions.',
        size: '12.4 MB',
        pages: 24
      },
      {
        title: 'Lighting Specifications',
        description: 'Comprehensive lighting design plan, fixture selections, and electrical layouts.',
        size: '8.2 MB',
        pages: 15
      },
      {
        title: 'Millwork Details',
        description: 'Custom cabinetry, shelving, and architectural millwork shop drawings.',
        size: '15.6 MB',
        pages: 42
      },
      {
        title: 'Finish Schedules',
        description: 'Complete index of all specified materials, paints, and wallcoverings.',
        size: '4.1 MB',
        pages: 8
      },
      {
        title: 'FF&E Package',
        description: 'Furniture, Fixtures, and Equipment specifications with tear sheets.',
        size: '22.8 MB',
        pages: 64
      },
      {
        title: 'Plumbing & Hardware',
        description: 'Scheduled plumbing fixtures, sanitary ware, and architectural hardware.',
        size: '6.5 MB',
        pages: 12
      }
    ],
    moodBoards: [
      {
        title: 'Site Plan + Studies',
        description: 'Capella is a luxury high-rise multifamily tower located within Symphony Park, a 61-acre mixed-use cultural district in downtown Las Vegas that is rapidly emerging as one of the city’s most dynamic urban neighborhoods. Symphony Park',
        image: '/PORTFOLIOPAGES/02-01-capella/HERO/site.png',
        tags: ['Hi-Rise', 'Luxury Multifamily', 'Mixed-Use']
      },
      {
        title: 'Accent Elements & Styling',
        description: 'Layering depth through deep jewel tones, rich wood veneers, and sculptural lighting. These elements provide contrast and visual interest while maintaining elegance.',
        image: '/PORTFOLIOPAGES/02-01-capella/MATERIAL-SKETCHES/moodboard.png',
        tags: ['Jewel Tones', 'Walnut Veneer', 'Sculptural Forms', 'Textured Glass']
      }
    ],
    materials: [
      {
        name: 'LVT - Medium Canadian Walnut',
        category: 'LVT',
        application: 'Flooring',
        image: '/PORTFOLIOPAGES/02-01-capella/MATERIAL-SKETCHES/artmat01.jpg'
      },
      {
        name: 'Calacatta Viola',
        category: 'Stone',
        application: 'Countertop/ Surface',
        image: '/PORTFOLIOPAGES/02-01-capella/MATERIAL-SKETCHES/artmat02.jpg'
      },
      {
        name: 'Floor Tile Porcelain',
        category: 'Tile',
        application: 'Floor Tile',
        image: '/PORTFOLIOPAGES/02-01-capella/old/04-material&palette/materials/tile01.jpg'
      },
      {
        name: 'Charcoal Carpet',
        category: 'Carpet',
        application: 'Office Flooring',
        image: '/PORTFOLIOPAGES/02-01-capella/old/04-material&palette/materials/cpt01.jpg'
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
    image: '/PORTFOLIOPAGES/03-00-westhaven/WESTHAVEN/HERO/hero.png',
    link: '/work/WestHaven',
    amenities: [
      {
        title: 'Resort Style Pool',
        description: 'A tranquil retreat designed to create a resort-style living experience, enhance the unique appeal of the property while creating a statement to increase visability and drive occupancy rates.',
        image: '/PORTFOLIOPAGES/03-00-westhaven/WESTHAVEN/RENDERINGS/ORIGINALS/outdoor-pool-1.jpg'
      },
      {
        title: 'Fitness Center',
        description: 'Updated fitness center with new equipment and finishes.',
        image: '/PORTFOLIOPAGES/03-00-westhaven/WESTHAVEN/RENDERINGS/fitness.png'
      },
      {
        title: 'Co-working Lounge',
        description: 'An exclusive area for residents to work and collaborate, featuring comfortable seating, and a premium beverage station.',
        image: '/PORTFOLIOPAGES/03-00-westhaven/WESTHAVEN/RENDERINGS/cowork01.png'
      },
      {
        title: 'Cafe',
        description: 'A welcoming morning destination offering coffee, light snacks, and a bright atmosphere for residents to start their day and socialize.',
        image: '/PORTFOLIOPAGES/03-00-westhaven/WESTHAVEN/RENDERINGS/cafe.png'
      },
      {
        title: 'Golf / Sports Simulator',
        description: 'An interactive entertainment space featuring state-of-the-art simulation technology for golf and other sports, complete with lounge seating for spectators.',
        image: '/PORTFOLIOPAGES/03-00-westhaven/WESTHAVEN/RENDERINGS/golf.png'
      },
      {
        title: 'Library',
        description: 'A quiet, elegantly appointed retreat lined with curated books, offering cozy reading nooks and a peaceful environment for study or relaxation.',
        image: '/PORTFOLIOPAGES/03-00-westhaven/WESTHAVEN/RENDERINGS/library1-1.png'
      },
      {
        title: 'Multipurpose Room',
        description: 'A highly flexible social space capable of hosting community events, fitness classes, guest speakers, or private gatherings.',
        image: '/PORTFOLIOPAGES/03-00-westhaven/WESTHAVEN/RENDERINGS/lounge.png'
      },
      {
        title: 'Salon',
        description: 'A full-service onsite beauty and wellness salon providing haircuts, styling, and spa services in a luxurious, professional setting.',
        image: '/PORTFOLIOPAGES/03-00-westhaven/WESTHAVEN/RENDERINGS/salon05.png'
      },
      {
        title: 'Sun Room',
        description: 'A climate-controlled, glass-enclosed space flooded with natural light, perfect for year-round enjoyment of the surrounding landscape views.',
        image: '/PORTFOLIOPAGES/03-00-westhaven/WESTHAVEN/RENDERINGS/sunroom.png'
      },
      {
        title: 'Theater',
        description: 'A private screening room with plush tiered seating, acoustic treatments, and a premium audiovisual system for movie nights and presentations.',
        image: '/PORTFOLIOPAGES/03-00-westhaven/WESTHAVEN/RENDERINGS/theater01.png'
      },
      {
        title: 'Performance Theater',
        description: 'A larger auditorium space designed for live entertainment, theatrical productions, musical performances, and large-scale community assemblies.',
        image: '/PORTFOLIOPAGES/03-00-westhaven/WESTHAVEN/RENDERINGS/ORIGINALS/theatre-1.jpg'
      },
      {
        title: 'Dining Room',
        description: 'The primary dining venue offering a restaurant-style experience with varied menus, attentive service, and an elegant atmosphere.',
        image: '/PORTFOLIOPAGES/03-00-westhaven/WESTHAVEN/RENDERINGS/dining.png'
      },
      {
        title: 'Private Dining Room',
        description: 'An intimate, reservable dining space ideal for family celebrations, private parties, or special catered events hosted by residents.',
        image: '/PORTFOLIOPAGES/03-00-westhaven/WESTHAVEN/RENDERINGS/privatedining.png'
      },
      {
        title: 'Indoor Pool',
        description: 'A temperature-controlled indoor aquatic center for year-round lap swimming, water aerobics, and low-impact fitness routines.',
        image: '/PORTFOLIOPAGES/03-00-westhaven/WESTHAVEN/RENDERINGS/ORIGINALS/indoor-pool.jpg'
      }
    ],
    commonSpaces: [
      {
        title: 'Grand Entrance',
        image: '/PORTFOLIOPAGES/03-00-westhaven/WESTHAVEN/RENDERINGS/ORIGINALS/ORIG/entrance.jpg',
        details: 'Arrival Sequence to Main Building - Building 1'
      },
      {
        title: 'Living Room - Main Lounge',
        image: '/PORTFOLIOPAGES/03-00-westhaven/WESTHAVEN/RENDERINGS/ORIGINALS/ORIG/Entry.jpg',
        details: 'Natural Stone Tile Floor with Brass Details/ Inlays and Neutural Plaid Carpet'
      },
      {
        title: 'Terrace',
        image: '/PORTFOLIOPAGES/03-00-westhaven/WESTHAVEN/RENDERINGS/ORIGINALS/3.jpg',
        details: 'Custom Firepits, social lounges, community herb garden, games, pergolas, and outdoor kitchens for meaningful social interactions and active lifestyle activities.'
      },
      {
        title: 'Resident Corridors',
        image: '/PORTFOLIOPAGES/03-00-westhaven/WESTHAVEN/RENDERINGS/corridor.png',
        details: 'Neutural Plaid Wallcovering accents with Light Grey colored paint and Dark Grey Accent Trim Along with Brass and black lighting accents, curated framed gallery styled artwork and contemporary accessories to enhance the everyday experience.'
      },
      {
        title: 'Pet Wash',
        image: '/PORTFOLIOPAGES/03-00-westhaven/WESTHAVEN/RENDERINGS/pet.png',
        details: 'Custom pet wash station with tile flooring and wall accents, grooming station with elevated platform, and storage for pet supplies.'
      }
    ],
    technicalDocuments: [
      {
        title: 'Floor Plans & Layouts',
        description: 'Detailed architectural floor plans including spatial organization and dimensions.',
        size: '12.4 MB',
        pages: 24
      },
      {
        title: 'Lighting Specifications',
        description: 'Comprehensive lighting design plan, fixture selections, and electrical layouts.',
        size: '8.2 MB',
        pages: 15
      },
      {
        title: 'Millwork Details',
        description: 'Custom cabinetry, shelving, and architectural millwork shop drawings.',
        size: '15.6 MB',
        pages: 42
      },
      {
        title: 'Finish Schedules',
        description: 'Complete index of all specified materials, paints, and wallcoverings.',
        size: '4.1 MB',
        pages: 8
      },
      {
        title: 'FF&E Package',
        description: 'Furniture, Fixtures, and Equipment specifications with tear sheets.',
        size: '22.8 MB',
        pages: 64
      },
      {
        title: 'Plumbing & Hardware',
        description: 'Scheduled plumbing fixtures, sanitary ware, and architectural hardware.',
        size: '6.5 MB',
        pages: 12
      }
    ],
    moodBoards: [
      {
        title: 'Site',
        description: 'As part of the broader 1,500-acre Westhaven community, the neighborhood benefits from a mature network of parks, trails, and civic spaces that foster a strong sense of community and intergenerational connection while providing residents with convenient access to the cultural and commercial offerings of nearby Franklin and the greater Nashville region.',
        image: '/PORTFOLIOPAGES/03-00-westhaven/WESTHAVEN/HERO/site.png',
        tags: ['Building 1 - 5 Stories', 'Building 2 - 4 Stories', 'Building 3 - 3 Stories']
      },
      {
        title: 'Accent Elements & Styling',
        description: 'The design direction draws inspiration from the timeless charm within the community while introducing a refined, hospitality-influenced atmosphere. The interiors, layer natural materials, warm wood tones, and soft neutral palettes with pops of jewel tones for added interest, creating spaces that feel both sophisticated and comfortable. The result is a design language rooted in Southern architecture and modern comfort, supporting the active, social, and wellness-focused living experience envisioned.',
        image: '/PORTFOLIOPAGES/03-00-westhaven/WESTHAVEN/MB/OVERALL/concept.jpg',
        tags: ['Jewel Tones', 'Walnut Veneer', 'Sculptural Forms', 'Textured Glass']
      }
    ],
    beforeAfter: [
      {
        title: 'Floor Plan',
        before: '/PORTFOLIOPAGES/03-00-westhaven/WESTHAVEN/TECHDRAWINGS/02.png',
        after: '/PORTFOLIOPAGES/03-00-westhaven/WESTHAVEN/TECHDRAWINGS/03.png',
        description: 'The dark, dated lobby was reimagined into a bright, welcoming space with double-height ceilings, Italian marble flooring, and custom acoustic paneling.'
      },
      {
        title: 'Executive Lounge',
        before: '/PORTFOLIOPAGES/03-00-westhaven/WESTHAVEN/TECHDRAWINGS/05.png',
        after: '/PORTFOLIOPAGES/03-00-westhaven/WESTHAVEN/TECHDRAWINGS/04.png',
        description: 'An underutilized hallway was expanded to create this sophisticated executive lounge featuring bespoke walnut millwork and curated art.'
      }
    ],
    materials: [
      {
        name: 'Graphic Wall Covering',
        category: 'Wallcovering',
        application: 'Main Dining Room',
        image: '/PORTFOLIOPAGES/03-00-westhaven/WESTHAVEN/MATERIALS_SKETCHES/MAT1.png'
      },
      {
        name: 'Sage Green Wall Tile',
        category: 'Tile',
        application: 'Snack Bar and Coffee Station',
        image: '/PORTFOLIOPAGES/03-00-westhaven/WESTHAVEN/MATERIALS_SKETCHES/MAT2.png'
      },
      {
        name: 'Cammel Leather',
        category: 'Upholstry',
        application: 'Furniture Throughout',
        image: '/PORTFOLIOPAGES/03-00-westhaven/WESTHAVEN/MATERIALS_SKETCHES/MAT3.png'
      },
      {
        name: 'Cararra Marble',
        category: 'Stone',
        application: 'Countertops and Backsplash',
        image: '/PORTFOLIOPAGES/03-00-westhaven/WESTHAVEN/MATERIALS_SKETCHES/MAT4.png'
      },
      {
        name: 'White Wall Tile',
        category: 'Tile',
        application: 'Wall tile - Basketweave',
        image: '/PORTFOLIOPAGES/03-00-westhaven/WESTHAVEN/MATERIALS_SKETCHES/MAT5.png'
      },
      {
        name: 'Navy Houndstooth Wallcovering',
        category: 'Wallcovering',
        application: 'Community Restrooms',
        image: '/PORTFOLIOPAGES/03-00-westhaven/WESTHAVEN/MATERIALS_SKETCHES/MAT6.png'
      },
      {
        name: 'Textured Wallcovering',
        category: 'Wallcovering',
        application: 'Living room wall covering',
        image: '/PORTFOLIOPAGES/03-00-westhaven/WESTHAVEN/MATERIALS_SKETCHES/MAT7.png'
      },
      {
        name: 'Custom Carpet',
        category: 'Carpet',
        application: 'Carpet Inlay',
        image: '/PORTFOLIOPAGES/03-00-westhaven/WESTHAVEN/MATERIALS_SKETCHES/MAT8.png'
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
    year: '2024',
    image: '/PORTFOLIOPAGES/04-00-afterapplause/HEROS/01.png',
    link: '/work/AftertheApplause',
    amenities: [
      {
        title: 'Main Dining Room',
        description: 'The main dining room is a grand space with high ceilings and large windows that flood the room with natural light. The room is decorated with a mix of modern and traditional furniture, creating a unique and stylish atmosphere.',
        image: '/PORTFOLIOPAGES/04-00-afterapplause/HEROS/02.png'
      },
      {
        title: 'Arrival Sequence - Entry',
        description: 'Updated fitness center with new equipment and finishes.',
        image: '/PORTFOLIOPAGES/04-00-afterapplause/RENDERINGS/01.png'
      },
      {
        title: 'Private Dining Room',
        description: 'An exclusive area for residents to unwind, featuring comfortable seating, and a premium beverage station.',
        image: '/PORTFOLIOPAGES/04-00-afterapplause/RENDERINGS/07.png'
      },
      {
        title: 'Private Dining Room - Wine',
        description: 'Panoramic city views complemented by landscaped gardens, fire pits, and comfortable lounging areas perfect for evening gatherings.',
        image: '/PORTFOLIOPAGES/04-00-afterapplause/RENDERINGS/08.png'
      },
      {
        title: 'Public Rest Rooms - Women',
        description: 'Panoramic city views complemented by landscaped gardens, fire pits, and comfortable lounging areas perfect for evening gatherings.',
        image: '/PORTFOLIOPAGES/04-00-afterapplause/RENDERINGS/04.png'
      },
      {
        title: 'Bar / Night Club',
        description: 'A modern business center equipped with high-speed internet, printing facilities, and comfortable workspaces.',
        image: '/PORTFOLIOPAGES/04-00-afterapplause/RENDERINGS/09-01.png'
      }
    ],
    commonSpaces: [
      {
        title: 'Floor Plan',
        image: '/PORTFOLIOPAGES/04-00-afterapplause/fp00.png',
        details: 'Double-height ceiling with custom chandelier'
      },
      {
        title: 'Entry',
        image: '/PORTFOLIOPAGES/04-00-afterapplause/RENDERINGS/00.png',
        details: 'Italian marble flooring and bespoke seating'
      },
      {
        title: 'Restrooms - Mens',
        image: '/PORTFOLIOPAGES/04-00-afterapplause/RENDERINGS/03.png',
        details: 'Bronze accents and custom paneled walls'
      },
      {
        title: 'Coorridor / Gallery',
        image: '/PORTFOLIOPAGES/04-00-afterapplause/RENDERINGS/02.png',
        details: 'Walnut and brass custom reception desk'
      },
      {
        title: 'Private Booths',
        image: '/PORTFOLIOPAGES/04-00-afterapplause/RENDERINGS/10.png',
        details: 'Curated art gallery and library'
      }
    ],
    technicalDocuments: [
      {
        title: 'Floor Plans & Layouts',
        description: 'Detailed architectural floor plans including spatial organization and dimensions.',
        size: '12.4 MB',
        pages: 24
      },
      {
        title: 'Lighting Specifications',
        description: 'Comprehensive lighting design plan, fixture selections, and electrical layouts.',
        size: '8.2 MB',
        pages: 15
      },
      {
        title: 'Millwork Details',
        description: 'Custom cabinetry, shelving, and architectural millwork shop drawings.',
        size: '15.6 MB',
        pages: 42
      },
      {
        title: 'Finish Schedules',
        description: 'Complete index of all specified materials, paints, and wallcoverings.',
        size: '4.1 MB',
        pages: 8
      },
      {
        title: 'FF&E Package',
        description: 'Furniture, Fixtures, and Equipment specifications with tear sheets.',
        size: '22.8 MB',
        pages: 64
      },
      {
        title: 'Plumbing & Hardware',
        description: 'Scheduled plumbing fixtures, sanitary ware, and architectural hardware.',
        size: '6.5 MB',
        pages: 12
      }
    ],
    moodBoards: [
      {
        title: 'Primary Palette & Textures',
        description: 'The foundation of the design features warm neutrals, natural stone, and brushed brass. This direction establishes a timeless and sophisticated atmosphere that flows throughout the space.',
        image: '/PORTFOLIOPAGES/04-00-afterapplause/02.png',
        tags: ['Art Deco', 'Holywood Glam', 'Brass']
      },
      {
        title: 'Accent Elements & Styling',
        description: 'Layering depth through deep jewel tones, rich wood veneers, and sculptural lighting. These elements provide contrast and visual interest while maintaining elegance.',
        image: '/PORTFOLIOPAGES/04-00-afterapplause/MATERIALS-SKETCHES/sketch05.png',
        tags: ['Deep Reds and Burgandy', 'Walnut Veneer', 'Brass Inlays', 'Patterned Floor Tile']
      }
    ],
    materials: [
      {
        name: 'Brushed Brass',
        category: 'Metal',
        application: 'Hardware and Trim',
        image: '/PORTFOLIOPAGES/04-00-afterapplause/MATERIALS-SKETCHES/mat00.png'
      },
      {
        name: 'Red Velvet',
        category: 'Upholstry',
        application: 'Dining Room Seating',
        image: '/PORTFOLIOPAGES/04-00-afterapplause/MATERIALS-SKETCHES/mat04.png'
      },
      {
        name: 'Natural Stone',
        category: 'Stone',
        application: 'Bar Countertop',
        image: '/PORTFOLIOPAGES/04-00-afterapplause/MATERIALS-SKETCHES/mat02.png'
      },
      {
        name: 'Pink Velvet',
        category: 'Upholstry',
        application: 'Dinning Room Seating',
        image: '/PORTFOLIOPAGES/04-00-afterapplause/MATERIALS-SKETCHES/mat03.png'
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
    image: '/PORTFOLIOPAGES/04-01-serpent&silk/HEROS/8a3163196343515.661e7b82742ee-1.png',
    link: '/work/Serpent&Silk',
    amenities: [
      {
        title: 'Main Dining Room',
        description: 'An expansive seating area enveloped in dark, moody hues and illuminated by custom statement lighting, setting an intimate yet vibrant tone.',
        image: '/PORTFOLIOPAGES/04-01-serpent&silk/RENDERINGS/056074196343515.661e7b827751e 1.png',
        gallery: [
          '/PORTFOLIOPAGES/04-01-serpent&silk/RENDERINGS/44444449ec5a196343515.661e7b8275214 2.png',
          '/PORTFOLIOPAGES/04-01-serpent&silk/RENDERINGS/aba4d8196343515.661e7b82759dd 1.png'
        ]
      },
      {
        title: 'Lounge Bar',
        description: 'A striking focal point featuring a monolithic bar front, premium spirits display, and plush velvet seating tailored for late-night socializing.',
        image: '/PORTFOLIOPAGES/04-01-serpent&silk/RENDERINGS/55edb8196343515.661e7b8276b8d 1.png'
      },
      {
        title: 'Private Dining Enclave',
        description: 'Secluded booths masked by architectural arches and decorative screens, offering VIP guests a highly exclusive dining experience.',
        image: '/PORTFOLIOPAGES/04-01-serpent&silk/RENDERINGS/bb64ea196343515.661e7b8273de8 1.png'
      }
    ],
    commonSpaces: [
      {
        title: 'Entry Corridor',
        image: '/PORTFOLIOPAGES/04-01-serpent&silk/RENDERINGS/rewoif4e6a3196343515.661e7b8277adb 1.png',
        details: 'A dramatic, dimly interior-lit sequence preparing guests for the space.'
      },
      {
        title: 'Mezzanine Overview',
        image: '/PORTFOLIOPAGES/04-01-serpent&silk/RENDERINGS/fewsef9e65a196343515.661e7b8274a8b 1.png',
        details: 'Overlooking the bustling main floor with bronze metalwork details.'
      }
    ],
    technicalDocuments: [
      {
        title: 'Rendered Floor Plan',
        description: 'A fully rendered architectural floor plan detailing dining capacities, spatial zones, and the bar layout.',
        size: '6.4 MB',
        pages: 1
      },
      {
        title: 'Furniture Plan (B&W)',
        description: 'Monochrome schematics identifying specific FF&E locations and clear pathways for service flow.',
        size: '2.2 MB',
        pages: 1
      },
      {
        title: 'FF&E Seating Details',
        description: 'Technical cut sheets and dimensional data for custom booth seating and loose chairs.',
        size: '3.1 MB',
        pages: 8
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
        title: 'Lighting Concept',
        description: 'Explorations in low-level, warm-toned illumination strategies to create intimacy within the expansive venue.',
        image: '/PORTFOLIOPAGES/04-01-serpent&silk/MATERIALS-SKETCHES/lighting.png',
        tags: ['Sconces', 'Pendants', 'Warmth', 'Ambiance']
      }
    ],
    materials: [
      {
        name: 'Plush Seating Fabrics',
        category: 'Textile',
        application: 'Chairs & Booths',
        image: '/PORTFOLIOPAGES/04-01-serpent&silk/MATERIALS-SKETCHES/CHAIRS.png'
      },
      {
        name: 'Dark Emerald Tile',
        category: 'Tile',
        application: 'Bar Front & Columns',
        image: '/PORTFOLIOPAGES/04-01-serpent&silk/MATERIALS-SKETCHES/image 4.png'
      },
      {
        name: 'Gold Veined Nero Marquina',
        category: 'Stone',
        application: 'Tabletops & Surfaces',
        image: '/PORTFOLIOPAGES/04-01-serpent&silk/MATERIALS-SKETCHES/image 49.png'
      },
      {
        name: 'Textured Bronze Metal',
        category: 'Metal',
        application: 'Screens & Hardware',
        image: '/PORTFOLIOPAGES/04-01-serpent&silk/MATERIALS-SKETCHES/image 51.png'
      }
    ],
    colors: [
      { name: 'Onyx', hex: '#111111' },
      { name: 'Serpent Green', hex: '#1C352D' },
      { name: 'Brushed Brass', hex: '#B89B65' },
      { name: 'Crimson Velvet', hex: '#631320' }
    ]
  },
  {
    id: 'TheEyrieHotel',
    title: 'Eyrie Hotel',
    subtitle: 'A transformative hospitality project redefining guest experiences.',
    category: 'Hospitality',
    location: 'Pittsburgh, Pennsylvania',
    year: '2022',
    image: '/PORTFOLIOPAGES/05-00-Eyriehotel/HERO/01.png',
    link: '/work/TheEyrieHotel',
    amenities: [
      {
        title: 'Resort Style Pool',
        description: 'A tranquil retreat designed to create a resort-style living experience, enhance the unique appeal of the property while creating a statement to increase visability and drive occupancy rates.',
        image: '/PORTFOLIOPAGES/05-00-Eyriehotel/OLD/pool.png'
      },
      {
        title: 'Fitness Center',
        description: 'Updated fitness center with new equipment and finishes.',
        image: '/PORTFOLIOPAGES/05-00-Eyriehotel/fit01.png'
      },
      {
        title: 'Community Room / Salone',
        description: 'An exclusive area for residents to unwind, featuring comfortable seating, and a premium beverage station.',
        image: '/PORTFOLIOPAGES/05-00-Eyriehotel/AMENITIES/communityroom/01.png'
      },
      {
        title: 'Spa',
        description: 'Panoramic city views complemented by landscaped gardens, fire pits, and comfortable lounging areas perfect for evening gatherings.',
        image: '/PORTFOLIOPAGES/05-00-Eyriehotel/spa01.png'
      },
      {
        title: 'Suite',
        description: 'Panoramic city views complemented by landscaped gardens, fire pits, and comfortable lounging areas perfect for evening gatherings.',
        image: '/PORTFOLIOPAGES/05-00-Eyriehotel/ROOMS/bedroom rendering 0.png'
      },
      {
        title: 'Presidential Suite',
        description: 'A modern business center equipped with high-speed internet, printing facilities, and comfortable workspaces.',
        image: '/PORTFOLIOPAGES/05-00-Eyriehotel/ROOMS/bedroom rendering.png'
      }
    ],
    commonSpaces: [
      {
        title: 'Reception / Lobby',
        image: '/PORTFOLIOPAGES/05-00-Eyriehotel/AMENITIES/lobby/01.png',
        details: 'Double-height ceiling with custom chandelier'
      },
      {
        title: 'Lobby Lounge',
        image: '/PORTFOLIOPAGES/05-00-Eyriehotel/AMENITIES/lobby/02.png',
        details: 'Italian marble flooring and bespoke seating'
      },
      {
        title: 'Elevator Lobby',
        image: '/PORTFOLIOPAGES/05-00-Eyriehotel/CORRIDORS/01.png',
        details: 'Bronze accents and custom paneled walls'
      },
      {
        title: 'Concierge Desk',
        image: '/PORTFOLIOPAGES/05-00-Eyriehotel/TECHNICALDRAWINGS/0_3.png',
        details: 'Walnut and brass custom reception desk'
      },
      {
        title: 'Corridors',
        image: '/PORTFOLIOPAGES/05-00-Eyriehotel/CORRIDORS/09.png',
        details: 'Curated art gallery and library'
      }
    ],
    technicalDocuments: [
      {
        title: 'Floor Plans & Layouts',
        description: 'Detailed architectural floor plans including spatial organization and dimensions.',
        size: '12.4 MB',
        pages: 24
      },
      {
        title: 'Lighting Specifications',
        description: 'Comprehensive lighting design plan, fixture selections, and electrical layouts.',
        size: '8.2 MB',
        pages: 15
      },
      {
        title: 'Millwork Details',
        description: 'Custom cabinetry, shelving, and architectural millwork shop drawings.',
        size: '15.6 MB',
        pages: 42
      },
      {
        title: 'Finish Schedules',
        description: 'Complete index of all specified materials, paints, and wallcoverings.',
        size: '4.1 MB',
        pages: 8
      },
      {
        title: 'FF&E Package',
        description: 'Furniture, Fixtures, and Equipment specifications with tear sheets.',
        size: '22.8 MB',
        pages: 64
      },
      {
        title: 'Plumbing & Hardware',
        description: 'Scheduled plumbing fixtures, sanitary ware, and architectural hardware.',
        size: '6.5 MB',
        pages: 12
      }
    ],
    moodBoards: [
      {
        title: 'Exterior Sketches',
        description: 'The foundation of the design features warm neutrals, natural stone, and brushed brass. This direction establishes a timeless and sophisticated atmosphere that flows throughout the space.',
        image: '/PORTFOLIOPAGES/05-00-Eyriehotel/MATERIALS-SKETCHES/sketches/01.png',
        tags: ['Warm Neutrals', 'Natural Stone', 'Brushed Brass', 'Organic Textures']
      },
      {
        title: 'Mood Boards',
        description: 'Layering depth through deep jewel tones, rich wood veneers, and sculptural lighting. These elements provide contrast and visual interest while maintaining elegance.',
        image: '/PORTFOLIOPAGES/05-00-Eyriehotel/MATERIALS-SKETCHES/moodboards/01.png',
        tags: ['Jewel Tones', 'Walnut Veneer', 'Sculptural Forms', 'Textured Glass']
      }
    ],
    beforeAfter: [
      {
        title: 'Event Space - Warhol Ballroom',
        before: '/PORTFOLIOPAGES/05-00-Eyriehotel/AMENITIES/EventSpaces/01.png',
        after: '/PORTFOLIOPAGES/05-00-Eyriehotel/AMENITIES/EventSpaces/02.png',
        description: 'The dark, dated lobby was reimagined into a bright, welcoming space with double-height ceilings, Italian marble flooring, and custom acoustic paneling.'
      },
      {
        title: 'Event Space - Steel Ballroom',
        before: '/PORTFOLIOPAGES/05-00-Eyriehotel/AMENITIES/EventSpaces/10.png',
        after: '/PORTFOLIOPAGES/05-00-Eyriehotel/AMENITIES/EventSpaces/11.png',
        description: 'An underutilized hallway was expanded to create this sophisticated executive lounge featuring bespoke walnut millwork and curated art.'
      }
    ],
    materials: [
      {
        name: 'Stained Oak',
        category: 'Wood',
        application: 'Flooring and Stain Color',
        image: '/PORTFOLIOPAGES/05-00-Eyriehotel/mat01.png',
      },
      {
        name: ' Natural Stone - Marble',
        category: 'Stone',
        application: 'Accent Cladding for Fireplace',
        image: '/PORTFOLIOPAGES/05-00-Eyriehotel/mat02.png'
      },
      {
        name: 'Natural Stone Tile',
        category: 'Tile',
        application: 'Floor Tile',
        image: '/PORTFOLIOPAGES/05-00-Eyriehotel/mat03.png'
      },
      {
        name: 'Teal Velvet',
        category: 'Upholstry',
        application: 'Accent Seating Upholstry',
        image: '/PORTFOLIOPAGES/05-00-Eyriehotel/mat04.jpg'
      }
    ],
    colors: [
      { name: 'Navy', hex: '#0C2429' },
      { name: 'Black Magic', hex: '#1C1B1A' },
      { name: 'Raspberry Wine', hex: '#7A2D59' },
      { name: 'Rust', hex: '#A93729' },
      { name: 'Taupe', hex: '#8C8778' },
      { name: 'Oats', hex: '#C4BFB5' }
    ]
  },
];
