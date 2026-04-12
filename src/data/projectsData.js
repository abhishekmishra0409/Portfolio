/**
 * Enhanced Project Data with SEO-optimized content
 * Includes detailed descriptions, features, problems solved, and keywords
 */

import Project_1 from "../assets/projects/Project-1.png";
import Project_2 from "../assets/projects/Project-2.png";
import Project_3 from "../assets/projects/Project-3.jpg";
import Project_4 from "../assets/projects/Project-4.webp";
import Project_5 from "../assets/projects/Project-5.webp";
import Project_6 from "../assets/projects/Project-6.png";
import MedGo from "../assets/projects/MedGo.png";
import ChatApp from "../assets/projects/ChatApp.png";
import JobPortal from "../assets/projects/JobPortal.png";
import VirtualCart1 from "../assets/projects/VirtualCart1.png";
import Medgo1 from "../assets/projects/Medgo1.png";
import ChatApplication from "../assets/projects/ChatApplication.png";
import JobPortal1 from "../assets/projects/JobPortal1.png";
import Taaruntam2k23 from "../assets/projects/Taaruntam2k23.png";
import Taarunyam2k22 from "../assets/projects/Taarunyam2k22.png";
import ERP from "../assets/projects/ERP.png";
import CourseExitSurvey from "../assets/projects/CourseExitSurvey.png";
import MaaFoundation from "../assets/projects/MaaFoundation.png";

export const projectsData = [
    {
        id: 1,
        slug: "virtual-cart-mern-ecommerce",
        title: "VirtualCart",
        subtitle: "MERN Stack E-commerce Platform",
        img: Project_1,
        detailImg: VirtualCart1,
        detailFrameClass: "",
        detailImageClass: "h-auto w-full object-contain",
        desc: "VirtualCart is a production-style e-commerce platform built with the MERN stack, focused on smooth product discovery, organized category browsing, and a polished shopping experience from landing page to checkout flow.",
        longDesc: "VirtualCart is a full-stack e-commerce application built with MongoDB, Express.js, React, and Node.js to simulate a modern online store experience. The project combines storefront design with practical commerce features such as featured collections, category-led navigation, product filtering, wishlist support, cart flow, and payment-ready checkout. It is structured to feel like a real electronics marketplace, with promotional sections, searchable inventory, and responsive layouts that work across devices. On the backend, the project handles product management, user access, order flow, and media handling through Cloudinary, making it a strong demonstration of both frontend polish and full-stack commerce logic.",
        features: [
            "Featured homepage merchandising with promotional banners and collection sections",
            "Product catalog with category browsing, search, and filter support",
            "Shopping cart with add, update, and remove functionality",
            "Wishlist flow for saving products before purchase",
            "User authentication and protected account flow",
            "Order handling and customer purchase management",
            "Payment-ready commerce experience for online transactions",
            "Cloudinary-based image upload and media management",
            "Responsive storefront layout across desktop and smaller screens"
        ],
        problemsSolved: [
            "Made product discovery easier with cleaner category structure and storefront merchandising",
            "Improved the customer buying journey through cart, wishlist, and checkout flow",
            "Reduced manual store-management effort with connected full-stack logic",
            "Created a more modern and engaging online shopping experience"
        ],
        tech: ["JavaScript", "React", "HTML", "CSS", "Node.js", "Express", "MongoDB", "Cloudinary", "Stripe", "Razorpay"],
        stack: "MERN Stack",
        link: "https://virtual-cart-97la.vercel.app/",
        github: "https://github.com/abhishekmishra0409",
        keywords: "VirtualCart, MERN Stack E-commerce, React E-commerce, Node.js Shopping Platform, MongoDB E-commerce, Online Store Project, Stripe, Razorpay, Abhishek Mishra Projects",
        seoTitle: "VirtualCart – MERN Stack E-commerce Project by Abhishek Mishra",
        seoDescription: "VirtualCart is a MERN stack e-commerce project developed by Abhishek Mishra. It includes category browsing, cart and wishlist flow, payment-ready checkout, and full-stack store management with React, Node.js, Express, and MongoDB.",
        category: "E-commerce"
    },
    {
        id: 2,
        slug: "medgo-telemedicine-platform",
        title: "DawaiLink | MedGo",
        subtitle: "Telemedicine Platform",
        img: MedGo,
        detailImg: Medgo1,
        detailFrameClass: "",
        detailImageClass: "h-auto w-full object-contain",
        desc: "MedGo is a telemedicine platform that connects patients with healthcare professionals for online consultations. It offers features like appointment scheduling, communication between patients, doctors, and prescription management, making healthcare more accessible and convenient.",
        longDesc: "MedGo (DawaiLink) revolutionizes healthcare accessibility by providing a comprehensive telemedicine platform. This MERN stack application enables patients to consult with doctors remotely, schedule appointments, receive prescriptions, and manage their health records online. The platform addresses the critical need for accessible healthcare, especially in remote areas. Features include real-time video consultations, secure messaging, appointment management, prescription generation, and patient history tracking. The application uses WebSocket for real-time communication and Cloudinary for medical document storage.",
        features: [
            "Online appointment scheduling system",
            "Real-time video consultations via WebSocket",
            "Secure patient-doctor messaging",
            "Digital prescription generation and management",
            "Patient medical history tracking",
            "Doctor availability management",
            "Notification system for appointments",
            "Secure file storage for medical documents"
        ],
        problemsSolved: [
            "Improved healthcare accessibility in remote areas",
            "Reduced waiting times and travel costs for patients",
            "Streamlined appointment scheduling and management",
            "Enhanced doctor-patient communication"
        ],
        tech: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Cloudinary", "WebSocket"],
        stack: "MERN Stack",
        link: "https://med-go-pi.vercel.app/",
        github: "https://github.com/abhishekmishra0409",
        keywords: "MedGo, Telemedicine Platform, Healthcare App, React Healthcare, Node.js Telemedicine, Abhishek Mishra Healthcare Projects",
        seoTitle: "MedGo – Telemedicine Platform by Abhishek Mishra | MERN Stack Healthcare App",
        seoDescription: "MedGo is a telemedicine platform developed by Abhishek Mishra using MERN stack. Features include online consultations, appointment scheduling, prescription management, and real-time communication. Built with React, Node.js, and MongoDB.",
        category: "Healthcare"
    },
    {
        id: 3,
        slug: "realtime-chat-application-angular",
        title: "Real-Time Chat Application",
        subtitle: "MEAN Stack Chat Platform",
        img: ChatApp,
        detailImg: ChatApplication,
        detailFrameClass: "",
        detailImageClass: "h-auto w-full object-contain",
        desc: "A modern real-time chat application with features like direct messaging, group chats, file sharing, and read receipts. Built with a focus on performance and user experience with secure authentication and responsive design.",
        longDesc: "This real-time chat application demonstrates advanced full-stack development using the MEAN stack (MongoDB, Express, Angular, Node.js). The application provides instant messaging capabilities with real-time updates using Socket.io. Users can create accounts, send direct messages, participate in group chats, share files, and see read receipts. The application features JWT-based authentication, responsive design, and optimized performance for seamless communication. This project showcases expertise in real-time web applications and modern frontend frameworks.",
        features: [
            "Real-time messaging with Socket.io",
            "Direct messaging between users",
            "Group chat functionality",
            "File sharing and media uploads",
            "Read receipts and message status",
            "User authentication with JWT",
            "Online/offline status indicators",
            "Responsive design for mobile and desktop"
        ],
        problemsSolved: [
            "Enabled instant communication without page refreshes",
            "Improved user engagement through real-time features",
            "Simplified file sharing in conversations",
            "Enhanced security with JWT authentication"
        ],
        tech: ["Angular", "Node.js", "Socket.io", "MongoDB", "JWT", "Tailwind CSS", "Express"],
        stack: "MEAN Stack",
        link: "https://chat-applicatio-mean.web.app/",
        github: "https://github.com/abhishekmishra0409",
        keywords: "Real-Time Chat App, Angular Chat Application, MEAN Stack Chat, Socket.io Chat, Abhishek Mishra Chat App",
        seoTitle: "Real-Time Chat Application – MEAN Stack Project by Abhishek Mishra",
        seoDescription: "Real-time chat application built by Abhishek Mishra using MEAN stack. Features include instant messaging, group chats, file sharing, and read receipts. Built with Angular, Node.js, Socket.io, and MongoDB.",
        category: "Communication"
    },
    {
        id: 4,
        slug: "job-portal-application-mern",
        title: "Job Portal Application",
        subtitle: "MERN Stack Job Search Platform",
        img: JobPortal,
        detailImg: JobPortal1,
        detailFrameClass: "",
        detailImageClass: "h-auto w-full object-contain",
        desc: "A comprehensive job search platform connecting employers with job seekers. Features include job postings, resume uploads, application tracking, employer dashboards, and advanced search filters with AI-based job recommendations.",
        longDesc: "This job portal application is a complete recruitment solution built with the MERN stack. The platform serves both job seekers and employers, providing a seamless experience for job searching, application management, and candidate screening. Features include advanced search filters, AI-based job recommendations, resume management, application tracking, employer dashboards, and analytics. The application uses Redux for state management, JWT for authentication, and Cloudinary for document storage. This project demonstrates expertise in building complex, multi-user applications with role-based access control.",
        features: [
            "Job posting and management system",
            "Advanced search and filtering options",
            "Resume upload and management",
            "Application tracking for candidates",
            "Employer dashboard with analytics",
            "AI-based job recommendations",
            "User authentication and role management",
            "Email notifications for applications"
        ],
        problemsSolved: [
            "Streamlined job search process for candidates",
            "Simplified recruitment process for employers",
            "Improved matching between jobs and candidates",
            "Reduced time-to-hire with automated processes"
        ],
        tech: ["React", "Node.js", "Express", "MongoDB", "Redux", "JWT", "Cloudinary"],
        stack: "MERN Stack",
        link: "https://kc-job-portal.vercel.app/",
        github: "https://github.com/abhishekmishra0409",
        keywords: "Job Portal, MERN Stack Job Portal, React Job Portal, Node.js Recruitment Platform, Abhishek Mishra Job Portal",
        seoTitle: "Job Portal Application – MERN Stack Recruitment Platform by Abhishek Mishra",
        seoDescription: "Job portal application developed by Abhishek Mishra using MERN stack. Features include job postings, resume management, application tracking, and AI-based recommendations. Built with React, Node.js, Express, and MongoDB.",
        category: "Recruitment"
    },
    {
        id: 5,
        slug: "taarunyam-2k23-techfest-website",
        title: "Taarunyam 2K23",
        subtitle: "College Techfest Website",
        img: Project_2,
        detailImg: Taaruntam2k23,
        detailFrameClass: "",
        detailImageClass: "h-auto w-full object-contain",
        desc: "Created an interactive website to showcase information about the college's annual techfest, providing details on events, schedules, and participant registration. The platform enhanced the visibility and engagement of the techfest among students.",
        longDesc: "Taarunyam 2K23 is an interactive website created for the college's annual technical festival. The platform serves as a central hub for all techfest-related information, including event schedules, registration, participant information, and live updates. Built with React and modern web technologies, the website features a dynamic event calendar, registration system, and engaging UI/UX design. The platform significantly improved student engagement and streamlined event management for the organizing committee.",
        features: [
            "Event schedule and calendar",
            "Online registration system",
            "Participant information management",
            "Live updates and announcements",
            "Interactive UI/UX design",
            "Responsive design for all devices",
            "Event category browsing",
            "Contact and information pages"
        ],
        problemsSolved: [
            "Centralized information hub for techfest",
            "Simplified registration process",
            "Improved student engagement",
            "Streamlined event management"
        ],
        tech: ["JavaScript", "React", "HTML", "CSS"],
        stack: "React",
        link: "https://taarunyam-cbd2c.web.app/",
        github: "https://github.com/abhishekmishra0409",
        keywords: "Taarunyam 2K23, College Techfest Website, React Techfest Site, Abhishek Mishra Techfest Project",
        seoTitle: "Taarunyam 2K23 – College Techfest Website by Abhishek Mishra",
        seoDescription: "Taarunyam 2K23 is a college techfest website developed by Abhishek Mishra using React. Features include event schedules, registration system, and interactive design. Built for college technical festival management.",
        category: "Education"
    },
    {
        id: 6,
        slug: "taarunyam-2k22-techfest-website",
        title: "Taarunyam 2k22",
        subtitle: "College Techfest Website",
        img: Project_3,
        detailImg: Taarunyam2k22,
        detailFrameClass: "",
        detailImageClass: "h-auto w-full object-contain",
        desc: "An earlier version of the college techfest website showcasing event information and registration. The design is modern and visually appealing with effective navigation and user experience.",
        longDesc: "Taarunyam 2k22 was the first iteration of the college techfest website, built with vanilla JavaScript, HTML, and CSS. This project laid the foundation for the improved 2K23 version. The website provided essential information about the techfest events, schedules, and registration. Despite being built with basic technologies, the website featured modern design principles and responsive layout, demonstrating early web development skills.",
        features: [
            "Event information display",
            "Registration system",
            "Modern and responsive design",
            "Intuitive navigation",
            "Event category organization"
        ],
        problemsSolved: [
            "Digital presence for techfest",
            "Online event information access",
            "Simplified registration process"
        ],
        tech: ["JavaScript", "HTML", "CSS"],
        stack: "Vanilla JavaScript",
        link: "https://taarunyam-8252a.web.app/",
        github: "https://github.com/abhishekmishra0409",
        keywords: "Taarunyam 2k22, Techfest Website, JavaScript Techfest, Abhishek Mishra Techfest",
        seoTitle: "Taarunyam 2k22 – College Techfest Website by Abhishek Mishra",
        seoDescription: "Taarunyam 2k22 is a college techfest website developed by Abhishek Mishra using JavaScript, HTML, and CSS. Features include event information and registration system.",
        category: "Education"
    },
    {
        id: 7,
        slug: "erp-login-interface-react",
        title: "ERP Login",
        subtitle: "College ERP Portal",
        img: Project_4,
        detailImg: ERP,
        detailFrameClass: "",
        detailImageClass: "h-auto w-full object-contain",
        desc: "The College ERP Login Portal provides students with secure access to academic resources, including grades, attendance, timetable, and notification of events. Through interactive features like online assignments and communication channels, students can engage with teachers and peers effectively. The portal streamlines administrative tasks, enhances transparency, and fosters a collaborative learning environment.",
        longDesc: "The College ERP Login Portal is a comprehensive student information system built with the MERN stack. This application provides students with secure access to their academic information, including grades, attendance records, class timetables, and event notifications. The portal features online assignment submission, communication channels between students and teachers, and administrative tools. Built with React for the frontend and Node.js/Express for the backend, the application uses MongoDB for data storage and Cloudinary for document management. This project demonstrates expertise in building secure, role-based applications for educational institutions.",
        features: [
            "Secure student login and authentication",
            "Grade and attendance viewing",
            "Class timetable management",
            "Online assignment submission",
            "Event notifications and announcements",
            "Student-teacher communication",
            "Document upload and management",
            "Administrative dashboard"
        ],
        problemsSolved: [
            "Centralized access to academic information",
            "Reduced administrative workload",
            "Improved communication between students and teachers",
            "Enhanced transparency in academic processes"
        ],
        tech: ["JavaScript", "React", "Express", "MongoDB", "HTML", "CSS", "Cloudinary"],
        stack: "MERN Stack",
        link: "https://erp-login-wheat.vercel.app/",
        github: "https://github.com/abhishekmishra0409",
        keywords: "ERP Login Interface, College ERP Portal, React ERP, MERN Stack ERP, Abhishek Mishra ERP Project",
        seoTitle: "ERP Login Interface – College ERP Portal by Abhishek Mishra | MERN Stack",
        seoDescription: "College ERP Login Portal developed by Abhishek Mishra using MERN stack. Features include grade management, attendance tracking, timetable, and online assignments. Built with React, Node.js, Express, and MongoDB.",
        category: "Education"
    },
    {
        id: 8,
        slug: "course-exit-survey-feedback-form",
        title: "Course Exit Survey & Feedback Form",
        subtitle: "Student Feedback Platform",
        img: Project_5,
        detailImg: CourseExitSurvey,
        detailFrameClass: "",
        detailImageClass: "h-auto w-full object-contain",
        desc: "A platform for students to provide feedback and complete exit surveys for their courses. The application allows students to fill out forms with ease and provides insights into course experiences and areas for improvement.",
        longDesc: "The Course Exit Survey & Feedback Form is a comprehensive feedback collection system built with the MERN stack. This application enables educational institutions to gather valuable feedback from students about their course experiences. The platform features customizable survey forms, data analytics, and reporting tools. Students can easily provide feedback on course content, teaching methods, and overall experience. The application uses React for an intuitive user interface, Node.js/Express for backend processing, and MongoDB for data storage. This project demonstrates expertise in building data collection and analysis applications.",
        features: [
            "Customizable survey forms",
            "Multiple question types",
            "Data collection and storage",
            "Analytics and reporting dashboard",
            "Student-friendly interface",
            "Response tracking",
            "Export functionality for reports",
            "Secure data handling"
        ],
        problemsSolved: [
            "Streamlined feedback collection process",
            "Improved data analysis capabilities",
            "Enhanced course improvement insights",
            "Reduced manual data processing"
        ],
        tech: ["JavaScript", "React", "HTML", "CSS", "Express", "Node.js", "MongoDB"],
        stack: "MERN Stack",
        link: "https://feedback-form-puce.vercel.app/",
        github: "https://github.com/abhishekmishra0409",
        keywords: "Course Exit Survey, Feedback Form, React Survey App, MERN Stack Feedback, Abhishek Mishra Survey Project",
        seoTitle: "Course Exit Survey & Feedback Form – Student Feedback Platform by Abhishek Mishra",
        seoDescription: "Course Exit Survey and Feedback Form platform developed by Abhishek Mishra using MERN stack. Features include customizable surveys, data analytics, and reporting. Built with React, Node.js, Express, and MongoDB.",
        category: "Education"
    },
    {
        id: 9,
        slug: "maa-foundation-ngo-website",
        title: "Maa Foundation",
        subtitle: "NGO Website Platform",
        img: Project_6,
        detailImg: MaaFoundation,
        detailFrameClass: "",
        detailImageClass: "h-auto w-full object-contain",
        desc: "Maa Foundation is an NGO focused on empowering communities through education, healthcare, and sustainable development. Dedicated to creating lasting positive change, the foundation strives to uplift lives across India.",
        longDesc: "Maa Foundation is a comprehensive NGO website platform built with the MERN stack. The website serves as a digital presence for the foundation, showcasing their initiatives in education, healthcare, and sustainable development. The platform features donation integration with RazorPay, project showcases, volunteer registration, event management, and content management. Built with React for the frontend and Node.js/Express for the backend, the application uses MongoDB for data storage and Cloudinary for media management. This project demonstrates expertise in building platforms for social causes and non-profit organizations.",
        features: [
            "Donation system with RazorPay integration",
            "Project showcase and updates",
            "Volunteer registration system",
            "Event management and calendar",
            "Content management system",
            "Image and media gallery",
            "Contact and inquiry forms",
            "Responsive design for all devices"
        ],
        problemsSolved: [
            "Digital presence for NGO",
            "Streamlined donation process",
            "Improved volunteer engagement",
            "Enhanced project visibility"
        ],
        tech: ["JavaScript", "React", "Express", "Node.js", "MongoDB", "HTML", "CSS", "RazorPay", "Cloudinary"],
        stack: "MERN Stack",
        link: "https://maa-foundation-frontend.vercel.app/",
        github: "https://github.com/abhishekmishra0409",
        keywords: "Maa Foundation, NGO Website, React NGO Platform, MERN Stack NGO, Abhishek Mishra NGO Project",
        seoTitle: "Maa Foundation – NGO Website Platform by Abhishek Mishra | MERN Stack",
        seoDescription: "Maa Foundation NGO website developed by Abhishek Mishra using MERN stack. Features include donation system, volunteer registration, project showcase, and event management. Built with React, Node.js, Express, and MongoDB.",
        category: "Non-Profit"
    }
];

// Helper function to get project by slug
export const getProjectBySlug = (slug) => {
    return projectsData.find(project => project.slug === slug);
};

// Helper function to get all project slugs for sitemap
export const getAllProjectSlugs = () => {
    return projectsData.map(project => project.slug);
};
