import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Wuling Dealership Website",
    description: "Promotional website for a Wuling car dealership in Semarang.",
    techStack: ["Next.js", "React", "Tailwind CSS", "Prisma", "MySQL"],
    problem:
      "The dealership had no digital presence to showcase its catalog, promos, and events to potential customers.",
    solution:
      "Built a public-facing website with a vehicle catalog, promo & event pages, WhatsApp consultation, and a rule-based chatbot for common questions.",
    result:
      "Thesis project — evaluated with a System Usability Scale score of 85.56 (Excellent) from 31 respondents.",
    image: "/projects/wuling.jpeg",
    codeLink: "https://github.com/AdrianRafli/web-wuling",
    demoLink: "https://wuling-rafli.vercel.app/",
  },
  {
    title: "URL Shortener with Analytics",
    description: "A URL shortener with click analytics dashboard.",
    techStack: ["Next.js", "Go", "Gin", "GORM", "MySQL"],
    problem:
      "Needed a lightweight tool to shorten links while tracking how they perform over time.",
    solution:
      "Built a Next.js frontend paired with a Go (Gin + GORM) backend, storing click data in MySQL and visualizing it with charts.",
    result: "Personal portfolio project demonstrating a full-stack setup with a separate Go backend.",
    image: "/projects/url-shortener.jpeg",
    codeLink: "https://github.com/AdrianRafli/url-shortener",
  },
  {
    title: "HealthTrack",
    description: "Mobile app for tracking daily activity and calorie intake.",
    techStack: ["React Native", "Expo", "Firebase"],
    problem: "Wanted a simple way to log daily activity and calories without a bulky app.",
    solution:
      "Built with React Native (Expo), using Firebase Auth and Firestore for data storage and sync.",
    result: "Fully functional personal app, tested via Expo Web.",
    image: "/projects/healthtrack.png",
    codeLink: "",
  },
  {
    title: "SmartFinance",
    description: "Personal finance tracker mobile app.",
    techStack: ["React Native", "Expo", "AsyncStorage"],
    problem: "Needed an easy way to track personal expenses in Rupiah.",
    solution: "Built with React Native (Expo) and local storage via AsyncStorage.",
    result: "Fully functional personal finance tracking app.",
    image: "/projects/smartfinance.png",
    codeLink: "",
  },
  {
    title: "Pemilos",
    description: "Online voting platform for OSIS chair election at SMK N 8 Semarang.",
    techStack: ["PHP", "MySQL"],
    problem:
      "Manual vote counting for the OSIS chair election was slow and prone to error, involving around 1,000 students.",
    solution:
      "Built a web-based voting platform allowing students to vote online, with secure, real-time vote tracking.",
    result: "Reduced manual counting time and improved the efficiency and security of the election process.",
    image: "/projects/pemilos.jpeg",
  },
  {
    title: "Tokoku",
    description: "Simple e-commerce website with registration, login, search, cart, and admin features.",
    techStack: ["PHP", "MySQL"],
    problem: "Needed to practice building a functional e-commerce flow from product listing to checkout.",
    solution:
      "Built a simple e-commerce platform with user registration, login, product search, shopping cart, and an admin panel for managing products.",
    result: "A fully functional simple e-commerce site covering the core shopping flow.",
    image: "/projects/tokoku.jpeg",
    codeLink: "https://github.com/AdrianRafli/website-tokoku",
  },
  {
    title: "CosplayRent",
    description: "Online cosplay costume rental platform.",
    techStack: ["Laravel", "MySQL"],
    problem: "Cosplayers needed an easier way to find and rent costumes online instead of relying on informal channels.",
    solution: "Built a web platform for browsing and renting cosplay costumes online using Laravel and MySQL.",
    result: "A working rental platform connecting costume owners with renters.",
    image: "/projects/cosplayrent.jpeg",
    codeLink: "https://github.com/AdrianRafli/cosplayrent",
  },
  {
    title: "Chery Pusat Semarang",
    description: "Promotional website for the Chery car dealership in Semarang.",
    techStack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    problem: "The dealership needed an online presence to promote its cars to potential customers.",
    solution: "Built a promotional website showcasing the dealership's car lineup using HTML, CSS, JavaScript, and Bootstrap.",
    result: "Live promotional site used by the dealership.",
    image: "/projects/cherypusatsemarang.jpeg",
    codeLink:"https://github.com/AdrianRafli/web-inti",
    demoLink: "https://cherypusatsemarang.com/",
  },
];