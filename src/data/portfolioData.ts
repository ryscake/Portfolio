export interface Project {
  id: string
  number: string
  title: string
  category: string
  shortDescription: string
  overview: string
  problem: string
  features: string[]
  visual: 'rescue' | 'commerce' | 'resort'
  featured?: boolean
  // Add real screenshots under public/projects and set their paths here.
  image?: string
  imageAlt?: string
  technologies?: string[] // Add only technologies confirmed for this project.
  githubUrl?: string
  demoUrl?: string
}

export const portfolio = {
  name: 'Krystal Margareth B. Villanueva',
  displayName: 'Krystal Margareth Villanueva',
  title: 'Aspiring Software Developer',
  roles: ['Aspiring Software Developer', 'IT Student', 'Web & Mobile Development Enthusiast', 'UI/UX Design Enthusiast'],
  email: 'vkrystalmargareth@gmail.com',
  location: 'Cavinti, Laguna, Philippines',
  university: 'Laguna State Polytechnic University',
  degree: 'BS Information Technology',
  expectedGraduation: '2027',
  linkedin: 'https://www.linkedin.com/in/krystal-margareth-villanueva-34174a426',
  github: undefined as string | undefined, // Set your real profile URL to activate GitHub.
  portrait: undefined as string | undefined, // Example: '/images/krystal.webp'. No stock portrait is used.
  resume: '/resume/Villanueva_Krystal_Margareth_Resume.pdf',
  introduction: "I'm a fourth-year BS Information Technology student passionate about creating functional digital solutions, developing web and mobile applications, and designing intuitive user experiences. I enjoy learning new technologies and transforming ideas into practical systems.",
  biography: [
    "I'm a growth-minded fourth-year Bachelor of Science in Information Technology student at Laguna State Polytechnic University – Santa Cruz Campus.",
    'I combine technical aptitude with a disciplined work ethic and a passion for continuous improvement. I enjoy exploring technologies, building functional applications, and creating digital solutions that address real-world challenges.',
    'My interests include software development, web and mobile applications, UI/UX design, and emerging technologies.',
    'I am eager to apply my knowledge in a professional environment, collaborate with experienced developers, and contribute to meaningful technology projects.',
  ],
  contactIntroduction: [
    "I'm always open to internship opportunities, collaborations, and meaningful experiences where I can contribute, learn, and grow as an aspiring IT professional.",
    'Whether you have an opportunity, a project idea, or simply want to connect, feel free to reach out.',
  ],
}

export const navigation = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
]

export const highlights = [
  { title: 'Software Development', description: 'Passionate about creating practical and functional software applications.', icon: 'code' },
  { title: 'UI/UX Design', description: 'Interested in developing accessible, intuitive, and visually appealing user experiences.', icon: 'design' },
  { title: 'Continuous Learning', description: 'Committed to exploring new technologies and strengthening technical capabilities.', icon: 'learn' },
] as const

export const skills = [
  { title: 'Programming Languages', icon: 'code', items: ['Python', 'JavaScript', 'PHP', 'Dart', 'HTML', 'CSS'] },
  { title: 'Frameworks & Technologies', icon: 'layers', items: ['Node.js', 'Flutter'] },
  { title: 'Design & Development Tools', icon: 'design', items: ['Figma', 'Adobe XD', 'Canva', 'GitHub', 'Microsoft PowerPoint'] },
  { title: 'Core Competencies', icon: 'spark', items: ['High-Fidelity Prototyping', 'Design Thinking', 'Web Application Development', 'Mobile Application Development'] },
] as const

export const projects: Project[] = [
  {
    id: 'smart-rescue', number: '01', title: 'Smart Rescue System',
    category: 'Emergency Reporting and Response Management',
    shortDescription: 'Connecting communities with emergency responders, when every second matters.',
    overview: 'Smart Rescue is a web-based and mobile emergency reporting and response management system developed for the Municipal Disaster Risk Reduction and Management Office (MDRRMO) of Santa Cruz, Laguna. The platform allows residents to report emergency incidents while supporting automated incident prioritization, location-based reporting, real-time status tracking, and response coordination.',
    problem: 'Emergency reporting and response coordination require clear incident information, location details, and timely status updates. Smart Rescue brings these needs together in one platform for residents and the MDRRMO.',
    features: ['Emergency Incident Reporting', 'Automated Incident Prioritization', 'GPS-Based Location Reporting', 'Incident Status Tracking', 'Emergency Response Coordination', 'Administrative Dashboard'],
    visual: 'rescue', featured: true,
  },
  {
    id: 'e-commerce', number: '02', title: 'E-Commerce System', category: 'Web and Mobile Application',
    shortDescription: 'A connected shopping experience for customers and sellers.',
    overview: 'A web-based and mobile e-commerce platform that enables customers to browse and purchase products while allowing sellers to manage listings, orders, and transactions through a digital system.',
    problem: 'Buyers need a convenient way to find and order products, while sellers need a place to maintain listings and manage orders. This project brings both workflows into a digital system.',
    features: ['Product Browsing', 'Product Listings', 'Online Ordering', 'Buyer and Seller Functionality', 'Product Management'],
    visual: 'commerce',
  },
  {
    id: 'nissy-resort', number: '03', title: 'Nissy Resort Booking System', category: 'Web-Based Reservation Application',
    shortDescription: 'Making the journey from finding a room to booking a stay feel effortless.',
    overview: 'A resort booking platform designed to simplify room browsing and reservations. The system enables customers to view accommodation information, check room availability, and schedule their stays online.',
    problem: 'Planning a resort stay requires clear room information, availability, and a straightforward reservation process. This platform organizes those steps into an online booking experience.',
    features: ['Room Browsing', 'Availability Viewing', 'Reservation Management', 'Booking Interface'],
    visual: 'resort',
  },
]

export const education = [
  {
    school: 'Laguna State Polytechnic University', campus: 'Santa Cruz Campus', years: '2023 — Expected 2027',
    degree: 'Bachelor of Science in Information Technology', current: true,
    detailLabel: 'CAPSTONE PROJECT',
    detail: 'Smart Rescue: A Web-Based and Mobile Emergency Reporting and Response Management System for MDRRMO in Santa Cruz, Laguna with Automated Incident Prioritization.',
  },
  {
    school: "Philippine Women's University CDCEC", campus: 'Santa Cruz Campus', years: '2021 — 2023',
    degree: 'Accountancy, Business, and Management (ABM) Track', current: false,
    detailLabel: 'RECOGNITION', detail: 'Graduated with Honors',
  },
]

export interface Credential {
  provider: 'Amazon Web Services' | 'Cisco'
  title: string
  date?: string
  type: 'Course' | 'Training badge'
  // Add actual certificate files under public/certificates or a verified credential URL.
  certificate?: string
  url?: string
}

export const credentials: Credential[] = [
  { provider: 'Amazon Web Services', title: 'AWS Cloud Practitioner Essentials', date: 'May 2026', type: 'Course' },
  { provider: 'Amazon Web Services', title: 'Fundamentals of Machine Learning and Artificial Intelligence', date: 'May 2026', type: 'Course' },
  { provider: 'Amazon Web Services', title: 'AWS Cloud Quest: Generative AI Practitioner', date: 'April 2026', type: 'Training badge' },
  { provider: 'Amazon Web Services', title: 'AWS Cloud Quest: Cloud Practitioner', date: 'March 2026', type: 'Training badge' },
  { provider: 'Cisco', title: 'Python Essentials 1', type: 'Course' },
]
