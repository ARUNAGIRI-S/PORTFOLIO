export interface ProjectItem {
  id: string;
  title: string;
  slug: string;
  category: string;
  valueProp: string;
  highlights: string[];
  techStack: string[];
  badge: string;
  borderStyle?: string;
  glowColor?: string;
  github?: string;
  liveDemo?: string;
  featured: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface ExperienceItem {
  role: string;
  organization: string;
  location: string;
  period: string;
  category: string;
  bullets: string[];
  badgeColor?: string;
  startDate?: string;
  endDate?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface CertificateItem {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  image?: string;
  createdAt?: string;
  updatedAt?: string;
}

export const INITIAL_PROJECTS: ProjectItem[] = [
  {
    id: 'ecommerce-app',
    title: 'Full-Stack E-Commerce Web Application',
    slug: 'ecommerce-app',
    category: 'Web Engineering & E-Commerce',
    valueProp: 'A full-stack e-commerce platform with product catalog browsing, cart management, and user shopping workflows.',
    highlights: [
      'Engineered interactive product catalog, shopping cart state management, and user checkout flows.',
      'Implemented clean component architecture, responsive styling, and fast asset loading.',
      'Deployed live on Vercel with seamless user interaction and browser navigation.',
    ],
    techStack: ['HTML/CSS/JS', 'Node.js', 'REST APIs', 'Vercel Deployment'],
    badge: 'Deployed on Vercel',
    borderStyle: 'border-[#61DDF2]/60 hover:border-[#00F0FF]',
    glowColor: 'shadow-[0_0_25px_rgba(97,221,242,0.25)]',
    liveDemo: 'https://e-commers-webapp-axjfdgxb1-arun26.vercel.app/index.html',
    github: 'https://github.com/ARUNAGIRI-S/E-Commers-webapp',
    featured: true,
  },
  {
    id: 'blog-platform',
    title: 'Blog Platform with Interactive Comments',
    slug: 'blog-platform',
    category: 'Web Engineering & Content Systems',
    valueProp: 'A dynamic blogging platform supporting article publishing, post rendering, and interactive user comment threads.',
    highlights: [
      'Developed post listing views, full article rendering, and real-time comment submission processing.',
      'Structured clean user interface controls, responsive layouts, and backend data handling.',
      'Deployed live on Vercel for public content creation and reading.',
    ],
    techStack: ['HTML/CSS/JS', 'Node.js', 'MongoDB', 'Vercel Deployment'],
    badge: 'Deployed on Vercel',
    borderStyle: 'border-[#D7A84B]/60 hover:border-[#F5C542]',
    glowColor: 'shadow-[0_0_25px_rgba(215,168,75,0.25)]',
    liveDemo: 'https://blog-platform-with-comments-theta.vercel.app/',
    github: 'https://github.com/ARUNAGIRI-S/Blog-Platform-with-comments',
    featured: true,
  },
  {
    id: 'task-manager',
    title: 'Task Manager Web Application',
    slug: 'task-manager',
    category: 'Web Engineering & Productivity',
    valueProp: 'A task management web app enabling users to organize, track, filter, and complete daily tasks efficiently.',
    highlights: [
      'Created task creation, status updates, priority filtering, and completion tracking functionality.',
      'Designed intuitive HUD-style controls with responsive interaction across mobile and desktop devices.',
      'Deployed live on Vercel for productivity management.',
    ],
    techStack: ['HTML/CSS/JS', 'Node.js', 'CRUD Operations', 'Vercel Deployment'],
    badge: 'Deployed on Vercel',
    borderStyle: 'border-[#61DDF2]/60 hover:border-[#00F0FF]',
    glowColor: 'shadow-[0_0_25px_rgba(97,221,242,0.25)]',
    liveDemo: 'https://task-mnnager-app.vercel.app/',
    github: 'https://github.com/ARUNAGIRI-S/Task-Mannager-Webapp',
    featured: true,
  },
  {
    id: 'personal-portfolio',
    title: 'Personal Portfolio Website (JARVIS HUD)',
    slug: 'personal-portfolio',
    category: 'Web Engineering & Developer Showcase',
    valueProp: 'A production-ready portfolio featuring an Iron Man / JARVIS HUD design system, serverless Vercel API, and MongoDB Atlas database.',
    highlights: [
      'Built with React 19, TypeScript, Tailwind CSS v4, Framer Motion, and Vercel serverless API routes.',
      'Features interactive Arc Reactor visual console, live contact dispatch, and MongoDB database integration.',
      'Deployed live on Vercel for professional engineering showcase.',
    ],
    techStack: ['React 19', 'TypeScript', 'Tailwind CSS v4', 'MongoDB Atlas', 'Vercel API'],
    badge: 'Deployed on Vercel',
    borderStyle: 'border-[#A61C24]/60 hover:border-[#E62429]',
    glowColor: 'shadow-[0_0_25px_rgba(166,28,36,0.25)]',
    liveDemo: 'https://personal-portfolio-web-jade.vercel.app/',
    github: 'https://github.com/ARUNAGIRI-S/PORTFOLIO',
    featured: true,
  },
  {
    id: 'careloop',
    title: 'CareLoop — Federated Learning-Based AIoT Smart Elder Care System',
    slug: 'careloop',
    category: 'AIoT & Healthcare',
    valueProp: 'A privacy-focused elder-care system connecting sensor networks with a mobile app for real-time monitoring and caregiver support.',
    highlights: [
      'Led the project architecture, integrating ESP32 sensor networks with a Flutter mobile app.',
      'Built a Firebase-backed data pipeline using MQTT/Wi-Fi, Firebase Realtime Database, and Cloud Functions for caregiver notifications and remote device control.',
      'Implemented federated learning-based anomaly detection on edge devices. Research findings are being prepared for an IEEE conference publication on AIoT architecture, federated learning, and privacy-preserving healthcare systems.',
    ],
    techStack: ['ESP32', 'Flutter', 'Firebase Realtime DB', 'Cloud Functions', 'MQTT', 'Federated Learning', 'AIoT'],
    badge: 'IEEE Paper in Preparation',
    borderStyle: 'border-[#A61C24]/60 hover:border-[#E62429]',
    glowColor: 'shadow-[0_0_25px_rgba(166,28,36,0.25)]',
    github: 'https://github.com/ARUNAGIRI-S',
    featured: false,
  },
  {
    id: 'sih-transport',
    title: 'Smart Transportation Management System — Smart India Hackathon 2025',
    slug: 'sih-transport',
    category: 'Smart Mobility & Safety',
    valueProp: 'A smart transportation monitoring platform for vehicle health, seat availability, and emergency support.',
    highlights: [
      'Led development using ESP32, TPMS, IMU/Gyroscope, impact sensors, and AI-based seat occupancy detection.',
      'Built a Firebase Realtime Database and Cloud Messaging alert pipeline for near real-time emergency notifications between drivers and passengers.',
      'Developed a Flutter app for vehicle health monitoring, live seat availability, and SOS emergency services; presented the system as a scalable, low-cost solution for public transit and ride-sharing.',
    ],
    techStack: ['ESP32', 'TPMS Sensors', 'IMU/Gyroscope', 'Flutter', 'Firebase FCM', 'AI Occupancy'],
    badge: 'SIH 2025 Internal Selection',
    borderStyle: 'border-[#D7A84B]/60 hover:border-[#F5C542]',
    glowColor: 'shadow-[0_0_25px_rgba(215,168,75,0.25)]',
    github: 'https://github.com/ARUNAGIRI-S',
    featured: false,
  },
  {
    id: 'home-automation',
    title: 'IoT Smart Home Automation System',
    slug: 'home-automation',
    category: 'Home Automation & Edge Control',
    valueProp: 'A sensor-driven home automation system for appliance control, environmental monitoring, and safety alerts.',
    highlights: [
      'Developed firmware with Arduino IDE and Blynk IoT for real-time monitoring, remote appliance control, and automated decision-making.',
      'Enabled automated lighting, environmental monitoring, and safety alerts through sensor-based workflows.',
      'Won 1st Prize at a national-level IoT & Smart Home Workshop Competition and received ₹1,500.',
    ],
    techStack: ['Arduino IDE', 'Blynk IoT', 'ESP8266/ESP32', 'Sensor Interfacing', 'Relay Controls'],
    badge: '1st Prize & ₹1,500 Cash Award',
    borderStyle: 'border-[#61DDF2]/60 hover:border-[#00F0FF]',
    glowColor: 'shadow-[0_0_25px_rgba(97,221,242,0.25)]',
    github: 'https://github.com/ARUNAGIRI-S',
    featured: false,
  },
];

export const INITIAL_EXPERIENCES: ExperienceItem[] = [
  {
    role: 'Student Representative',
    organization: 'Institution’s Innovation Council (IIC), Ministry of Education initiative',
    location: 'Adhi College of Engineering & Technology',
    period: '2025–Present',
    category: 'Campus Leadership',
    bullets: [
      'Coordinate innovation, entrepreneurship, and project-promotion activities with the IIC executive committee.',
      'Support workshops and student participation in council activities.',
    ],
    badgeColor: 'bg-[#D7A84B]/20 border-[#D7A84B]/50 text-[#D7A84B]',
  },
  {
    role: 'Class Representative',
    organization: 'II & III Year ECE',
    location: 'Adhi College of Engineering & Technology',
    period: '2025–Present',
    category: 'Academic Leadership',
    bullets: [
      'Coordinate academic activities, examination scheduling, and faculty communication for a 60-student cohort.',
      'Help resolve student issues with faculty.',
    ],
    badgeColor: 'bg-[#61DDF2]/20 border-[#61DDF2]/50 text-[#61DDF2]',
  },
  {
    role: 'Team Lead',
    organization: 'Smart India Hackathon (SIH) 2025, MoE/AICTE, ADHI College',
    location: 'Kanchipuram, Tamil Nadu',
    period: 'September 2025',
    category: 'Hackathon Leadership',
    bullets: [
      'Led a cross-functional team through ideation, prototype development, and pitch preparation for the SIH 2025 Internal Round.',
      'Guided the team through the institutional SIH selection process.',
    ],
    badgeColor: 'bg-[#A61C24]/20 border-[#A61C24]/50 text-[#F2F0EA]',
  },
  {
    role: 'Full Stack Development Intern',
    organization: 'Thiranex',
    location: 'Remote / Online',
    period: '22 Jun 2026 – 21 Jul 2026',
    category: 'Software Engineering Internship',
    bullets: [
      'Developed web and mobile applications as part of practical internship assignments and full-stack development activities.',
      'Gained hands-on experience with frontend development, backend integration, database management, authentication, API-based application development, and deployment.',
      'Integrated MongoDB and deployed completed web applications using Vercel.',
      'Used GitHub for source-code management and version control, maintaining and publishing application projects for practical demonstration.',
    ],
    badgeColor: 'bg-[#D7A84B]/20 border-[#D7A84B]/50 text-[#D7A84B]',
  },
  {
    role: 'Embedded Systems & IoT Intern',
    organization: 'NSIC Technical Services Centre',
    location: 'Chennai (On-site)',
    period: '01 Jul 2026 – 14 Jul 2026',
    category: 'Hardware & IoT Internship',
    bullets: [
      'Completed hands-on internship training in Embedded Systems with IoT, gaining practical exposure to electronics and embedded development.',
      'Used Proteus 8 Professional for circuit design, simulation, testing, and virtual validation of embedded electronic systems.',
      'Used Keil uVision5 to program, develop, and test microcontroller-based applications.',
      'Practiced soldering, hardware assembly, circuit development, and hardware testing.',
      'Integrated embedded hardware with programmed control logic and validated system operation through simulation and real-time implementation.',
    ],
    badgeColor: 'bg-[#A61C24]/20 border-[#A61C24]/50 text-[#E62429]',
  },
];

export const INITIAL_CERTIFICATES: CertificateItem[] = [
  {
    title: 'AI Fluency for Small Businesses',
    issuer: 'Anthropic & PayPal',
    date: 'Date not provided',
  },
  {
    title: 'Claude 101: AI Fundamentals & Prompt Engineering',
    issuer: 'Anthropic',
    date: 'Date not provided',
  },
  {
    title: 'Oracle Course (6 Months)',
    issuer: 'Tyro HR India Pvt. Ltd. in association with ADHI College of Engineering & Technology',
    date: 'Date not provided',
  },
  {
    title: 'AI-Enabled MATLAB Applications for Emerging Research & Startup Ventures',
    issuer: 'ADHI College of Engineering & Technology / Inspire Innov Tech',
    date: 'Date not provided',
  },
  {
    title: 'Computing with Printed & Flexible Electronics: Ultra-thin, Sustainable Edge Devices',
    issuer: 'New Technology Technical & Software Training Institute',
    date: 'Date not provided',
  },
  {
    title: 'IoT & Smart Home Applications with Cloud Computing',
    issuer: 'TechKnots Academy LLP',
    date: 'Date not provided',
  },
  {
    title: 'Prompt Engineering Workshop',
    issuer: 'SRM Institute of Science & Technology',
    date: 'Date not provided',
  },
  {
    title: 'EDC Workshop',
    issuer: 'Centre for Entrepreneurship Development, Anna University',
    date: 'Date not provided',
  },
  {
    title: 'Industrial Visit',
    issuer: 'BSNL / Rajiv Gandhi Memorial Telecom Training Centre',
    date: 'Date not provided',
  },
  {
    title: 'Industry Visit',
    issuer: 'Centre for Entrepreneurship Development, Anna University',
    date: 'Date not provided',
  },
];
