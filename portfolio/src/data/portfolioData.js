import brandIcon from "../assets/brand-icon.jpg";
import profilePhoto from "../assets/profile-aulia-diaz.png";
import cvFile from "../assets/aulia-brahmantio-diaz-cv-fixed.pdf";
import ibmLogo from "../assets/logo-ibm.png";
import xsisLogo from "../assets/logo-xsis.jpg";
import xsisAcademyLogo from "../assets/logo-xsis-academy.jpg";
import omindLogo from "../assets/logo-omind.jpg";
import joburakuLogo from "../assets/logo-joburaku.webp";
import signbanLogo from "../assets/logo-signban.png";

export const profile = {
	name: "Aulia Brahmantio Diaz",
	shortName: "Diaz",
	role: "Software Engineer",
	headline:
		"Hello, I'm Aulia Brahmantio Diaz — a Software Engineer building clean, scalable, and business-driven web applications.",
	summary:
		"Full Stack Developer and Software Engineer with 5+ years of experience delivering web applications, backend services, enterprise systems, and CRM-based solutions. Experienced in transforming user requirements into reliable, maintainable systems that support both user experience and business operations.",
	location: "Jakarta, Indonesia",
	email: "auliabrahmantio@gmail.com",
	phone: "+62 812 9526 4627",
	github: "https://github.com/brahmantiodiaz",
	linkedin: "https://www.linkedin.com/in/auliabrahmantiodiaz/",
	cvFile,
	brandIcon,
	profilePhoto,
};

export const navItems = [
	{ label: "Home", href: "#home" },
	{ label: "About", href: "#about" },
	{ label: "Experience", href: "#experience" },
	{ label: "Projects", href: "#projects" },
	{ label: "Skills", href: "#skills" },
	{ label: "Contact", href: "#contact" },
];

export const stats = [
	{ value: "5+", label: "Years Experience" },
	{ value: "12+", label: "Business Modules" },
	{ value: "8+", label: "Certifications" },
	{ value: "2", label: "Featured Products" },
];

export const experiences = [
	{
		company: "PT IBM Delivery Indonesia",
		role: "Oracle Fusion Technical Developer",
		period: "Nov 2025 — Present",
		location: "Jakarta",
		project: "Hino CRM",
		logo: ibmLogo,
		theme: "Oracle Fusion CRM",
		overview:
			"Oracle Fusion Cloud CRM system supporting sales operations, dealer management, lead management, contact registration, opportunity tracking, quotation generation, and customer data processing across multiple dealers and outlets.",
		points: [
			"Developed custom business logic using Groovy scripting inside Oracle Fusion CRM.",
			"Implemented duplicate customer validation for contact names and phone numbers.",
			"Designed Opportunity-to-Quotation automation and CRM object customizations.",
			"Built SQL queries and BI Publisher reports for operational validation and reporting.",
		],
		stack: [
			"Oracle Fusion CRM",
			"Groovy",
			"SQL",
			"BI Publisher",
			"Sandbox Deployment",
		],
	},
	{
		company: "PT IBM Delivery Indonesia",
		role: "Backend Developer",
		period: "May 2025 — Oct 2025",
		location: "Jakarta",
		project: "Pinang Maksima",
		logo: ibmLogo,
		theme: "Backend Services",
		overview:
			"Digital end-to-end credit application platform for PT Bank Raya Indonesia, supporting productive retail loan workflows from application, approval, disbursement, and monitoring.",
		points: [
			"Maintained backend services with NestJS for credit initiation and monitoring workflows.",
			"Optimized PostgreSQL structures and queries for transactional consistency.",
			"Used Redis caching for lookup data and dashboard information.",
			"Handled debugging, issue resolution, and production support activities.",
		],
		stack: ["NestJS", "PostgreSQL", "Redis", "REST API", "Production Support"],
	},
	{
		company: "PT Xsis Mitra Utama",
		role: "Front End Developer",
		period: "Jan 2022 — May 2025",
		location: "Jakarta",
		project: "Xsis 2.0",
		logo: xsisLogo,
		theme: "Enterprise Frontend",
		overview:
			"Centralized enterprise application supporting business process management and recruitment workflows across Presales, HRA, Sales, Finance, and Talent departments.",
		points: [
			"Built responsive enterprise web applications using Blazor WebAssembly.",
			"Implemented Fluxor for predictable state management across modules.",
			"Enhanced existing applications based on user and business requirements.",
			"Integrated REST APIs and contributed to UI/UX planning, testing, and code reviews.",
		],
		stack: ["Blazor WebAssembly", "Fluxor", "MudBlazor", "REST API", "C#"],
	},
	{
		company: "PT Xsis Mitra Utama",
		role: "Web Developer",
		period: "Jan 2022 — Dec 2022",
		location: "Jakarta",
		project: "Company Group Website Management",
		logo: xsisLogo,
		theme: "Web Performance",
		overview:
			"WordPress-based corporate website project focused on maintaining, optimizing, and improving the digital presence of the company and its group subsidiaries.",
		points: [
			"Maintained and optimized company group websites using WordPress.",
			"Implemented Google Tag Manager and JavaScript tracking.",
			"Created SEO-focused articles and tutorials to improve organic visibility.",
			"Improved page speed by 70% and generated monthly performance reports.",
		],
		stack: ["WordPress", "JavaScript", "GTM", "SEO", "Performance"],
	},
	{
		company: "PT Xsis Mitra Utama",
		role: "Full Stack Developer",
		period: "Jul 2021 — Jan 2022",
		location: "Jakarta",
		project: "MOTTO",
		logo: xsisLogo,
		theme: "Internal Assessment System",
		overview:
			"Internal application for QC Bootcamp to streamline applicant filtering, online tests, result scoring, and assessment monitoring.",
		points: [
			"Developed backend web applications using Laravel.",
			"Built responsive frontend interfaces using React component architecture.",
			"Integrated React frontend with Laravel APIs for test and monitoring features.",
			"Implemented ERD, RBAC, authentication flows, debugging, and code refactoring.",
		],
		stack: ["Laravel", "React.js", "REST API", "RBAC", "ERD"],
	},
	{
		company: "PT Omind Muda Berkarya Indonesia",
		role: "Backend Developer — Freelance",
		period: "Aug 2021 — Nov 2021",
		location: "Depok",
		project: "Udadi",
		logo: omindLogo,
		theme: "Marketplace Backend",
		overview:
			"Marketplace application designed to support online ordering for fresh fish and daily grocery products with product browsing, checkout, order processing, and transaction tracking.",
		points: [
			"Developed scalable backend services using Laravel.",
			"Designed RESTful APIs for products, categories, orders, promotions, transactions, and users.",
			"Implemented authentication, authorization, and business logic for order validation.",
			"Designed database models and created technical API documentation.",
		],
		stack: ["Laravel", "REST API", "MySQL", "Authentication", "Documentation"],
	},
	{
		company: "Xsis Academy",
		role: "Full Stack Developer",
		period: "Feb 2021 — Jun 2021",
		location: "Jakarta",
		project: "Candidate Assessment System",
		logo: xsisAcademyLogo,
		theme: "Assessment Platform",
		overview:
			"Internal web application used to manage programming questions, example test cases, candidate data, and assessment APIs for Xsis Academy training and evaluation processes.",
		points: [
			"Developed frontend features using React.js.",
			"Built RESTful APIs using Node.js and Express.js.",
			"Used Firebase Storage for uploaded images.",
			"Implemented CRUD, authentication, API integration, RBAC, deployment, and documentation.",
		],
		stack: ["React.js", "Node.js", "Express.js", "Firebase Storage", "RBAC"],
	},
];

export const projects = [
	{
		title: "Joburaku",
		subtitle: "AI-Powered Job Application Assistant",
		type: "Full Stack Project",
		logo: joburakuLogo,
		url: "https://joburaku.taulikha.site/",
		description:
			"A full-stack platform helping job seekers manage applications, job search, career profiles, AI-generated ATS-friendly CVs, CV match scoring, and interview preparation based on selected job descriptions.",
		highlights: [
			"Job application tracker with status monitoring.",
			"Gemini AI-powered ATS CV generation and interview question preparation.",
			"JWT authentication, Google Sign-In, Redux, Cloudinary, Jest, and Supertest.",
		],
		stack: [
			"React.js",
			"Express.js",
			"PostgreSQL",
			"Sequelize",
			"Redux",
			"Gemini AI",
		],
	},
	{
		title: "Signban",
		subtitle: "Real-Time Kanban Collaboration App",
		type: "Full Stack Project",
		logo: signbanLogo,
		url: "https://signban.taulikha.site/",
		description:
			"A Trello-like real-time Kanban app for managing tasks, boards, members, checklists, comments, activity updates, and AI-assisted task planning in a collaborative workspace.",
		highlights: [
			"Real-time board, card, comment, activity log, and notification updates using Socket.IO.",
			"Drag-and-drop card movement with visual updates.",
			"AI checklist generation and AI priority suggestion.",
		],
		stack: [
			"React.js",
			"Express.js",
			"Socket.IO",
			"PostgreSQL",
			"Redux",
			"AI Features",
		],
	},
];

export const skillGroups = [
	{
		title: "Front-End",
		skills: [
			"React.js",
			"Next.js",
			"Blazor WebAssembly",
			"PWA",
			"Tailwind CSS",
			"Material UI",
			"Redux",
			"Fluxor",
			"Responsive UI",
		],
	},
	{
		title: "Back-End",
		skills: [
			"Node.js",
			"Express.js",
			"NestJS",
			"Laravel",
			"REST API",
			"GraphQL",
			".NET Core",
			"Authentication",
			"RBAC",
		],
	},
	{
		title: "Database & Messaging",
		skills: [
			"PostgreSQL",
			"MySQL",
			"MongoDB",
			"Redis",
			"Kafka",
			"SQL Optimization",
			"ERD",
			"Database Design",
		],
	},
	{
		title: "Enterprise & Oracle",
		skills: [
			"Oracle Fusion CRM",
			"Groovy Scripting",
			"BI Publisher",
			"CRM Customization",
			"Business Logic Validation",
		],
	},
	{
		title: "Deployment & Infra",
		skills: [
			"Docker",
			"AWS",
			"Nginx Reverse Proxy",
			"CI/CD",
			"Git",
			"Production Support",
		],
	},
	{
		title: "Other",
		skills: [
			"Figma",
			"Google Tag Manager",
			"SEO Optimization",
			"Technical Documentation",
			"Debugging",
		],
	},
];

export const certificates = [
	"Software Engineer — HackerRank",
	"JavaScript Intermediate — HackerRank",
	"Frontend Developer React — HackerRank",
	"REST API Intermediate — HackerRank",
	"Node.js Intermediate — HackerRank",
	"SQL Advanced — HackerRank",
	"Google Analytics Certification — Google Digital Academy",
	"Web Development Fundamentals — IBM",
];

export const education = {
	school: "Gunadarma University",
	degree: "Bachelor's Degree in Informatics Engineering",
	period: "Sep 2016 — Sep 2020",
	gpa: "GPA 3.54 / 4.00",
};
