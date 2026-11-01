import cms from '../assets/images/cms.png';
import coffee from '../assets/images/coffee-time.png';
import exit from '../assets/images/exit.png';
import organic from '../assets/images/OrganicWeb.png';
import todo from '../assets/images/todo-list.png';
import task from '../assets/images/task.png';
import gfg from '../assets/images/gfg.png';
import alumni from '../assets/images/alumni.png';

const projects = [
  {
    id: 0,
    title: "Meenakshi Pharma",
    subtitle: "Web Development",
    category: "Web Development",
    credit: "DK Creative Solution",
    role: "Team Contributor",
    description: "Contributed as part of the development team at DK Creative Solution to build the website for Meenakshi Pharma, a pharmaceutical distribution company based in Trichy, Tamil Nadu. The website showcases the company's services, healthcare brands, achievements, stock and sales information, and partnership opportunities through a clean, user-friendly interface.",
    imageUrl: "https://nlovricxjcgthsxkaolq.supabase.co/storage/v1/object/public/project-images/1793353551964-Meenakshi_Pharma_Website_Showcase.png",
    liveUrl: "https://www.meenakshipharma.com",
    githubUrl: null,
    linkText: "Live Demo",
    tags: ["React Js", "Tailwind CSS", "Resend", "Email Js"],
    featured: true,
    accent: "gold",
    icon: "Code2"
  },
  {
    id: 1,
    title: "PFX Fitness Expo India",
    subtitle: "Web Development",
    category: "Web Development",
    credit: "DK Creative Solution",
    role: "Team Contributor",
    description: "Contributed as part of the development team at DK Creative Solution to develop the website for PFX Fitness Expo India, a multi-sport fitness event platform. The website showcases sports events, schedules, athlete registration, visitor ticket booking, and event information through a modern, user-friendly interface.",
    imageUrl: "https://nlovricxjcgthsxkaolq.supabase.co/storage/v1/object/public/project-images/1793350653782-PFX_Fitness_Expo_Website_Showcase.png",
    liveUrl: "https://pfx-fe.vercel.app/",
    githubUrl: null,
    linkText: "Live Demo",
    tags: ["React Js", "Bootstrap", "Express Js", "MongoDB", "Email Js"],
    featured: true,
    accent: "gold",
    icon: "Sparkles"
  },
  {
    id: 2,
    title: "DHRUVA 2025",
    subtitle: "Web Development",
    category: "Web Development",
    credit: "DK Creative Solution",
    role: "Team Contributor",
    description: "Contributed as part of the development team at DK Creative Solution to develop the website for DHRUVA 2025, a national-level techno-management and cultural fest organized by Karpagam College of Engineering. The website showcases event details, cultural and technical events, sports activities, concert information, and registration options through a user-friendly interface.",
    imageUrl: "https://nlovricxjcgthsxkaolq.supabase.co/storage/v1/object/public/project-images/1793353229852-Dhruva_2025_Website_Showcase-2.png",
    liveUrl: "https://dhruva-ashen-six.vercel.app/",
    githubUrl: null,
    linkText: "Live Demo",
    tags: ["React Js", "Bootstrap"],
    featured: true,
    accent: "silver",
    icon: "CloudSun"
  },
  {
    id: 3,
    title: "Alumni360",
    subtitle: "MernStack Porject",
    description: "Connecting Alumni with Students.",
    imageUrl: alumni,
    liveUrl: "https://youtu.be/tFokYCu4cEI?si=H3AXyGDPgVsocC8t",
    githubUrl: "https://github.com/poovarasan13/Construction_Management_System",
    linkText: "Source Code",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    featured: true
  },
  {
    id: 4,
    title: "CMS",
    subtitle: "MernStack Project",
    description: "Multi-service platform for construction management.",
    imageUrl: cms,
    liveUrl: "https://youtu.be/19ICTAOvS68",
    githubUrl: "https://github.com/poovarasan13/Construction_Management_System",
    linkText: "Source Code",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    featured: true
  },
  {
    id: 5,
    title: "GFG Profile Fetcher",
    subtitle: "Fontend Project",
    description: "Fteching Gfg Profile using username",
    imageUrl: gfg,
    liveUrl: "https://poovarasan13.github.io/gfg-api/",
    githubUrl: "https://github.com/poovarasan13/gfg-api",
    linkText: "Live Demo",
    tags: ["HTML", "Bootstrap", "CSS", "JavaScript", "API"],
    featured: true
  },
  {
    id: 6,
    title: "Coffee Time",
    subtitle: "Frontend Project",
    description: "A website for a coffee shop",
    imageUrl: coffee,
    liveUrl: "https://poovarasan13.github.io/CafeProject/",
    githubUrl: "https://github.com/poovarasan13/CafeProject",
    linkText: "Live Demo",
    tags: ["HTML", "Bootstrap", "CSS", "JavaScript"],
    featured: false
  },
  {
    id: 7,
    title: "Organic Hub",
    subtitle: "Frontend Project",
    description: "An online organic store",
    imageUrl: organic,
    liveUrl: "https://poovarasan13.github.io/Organical-Store-Hub/",
    githubUrl: "https://github.com/poovarasan13/Organical-Store-Hub",
    linkText: "    Demo",
    tags: ["HTML", "Bootstrap", "CSS", "JavaScript"],
    featured: false
  },
  {
    id: 8,
    title: "Todo List",
    subtitle: "React Project",
    description: "A simple todo list application",
    imageUrl: todo,
    liveUrl: "https://todo-list-70fc5.web.app/",
    githubUrl: "https://github.com/poovarasan13/Todo-App",
    linkText: "Live Demo",
    tags: ["React"],
    featured: true
  },
  {
    id: 9,
    title: "Task Management",
    subtitle: "FullStack Project",
    description: "A task management application",
    imageUrl: task,
    liveUrl: "https://youtu.be/yV5SLXe8KI0?si=fL40lpY6y6DAoEaL",
    githubUrl: "https://github.com/poovarasan13/Task-Management",
    linkText: "Source Code",
    tags: ["HTML", "CSS", "Bootstrap", "SpringBoot", "SQL"],
    featured: false
  },
  {
    id: 10,
    title: "Exit Survey Feedback",
    subtitle: "FullStack Project",
    description: "A feedback survey platform",
    imageUrl: exit,
    liveUrl: "http://121.200.48.27:8081/ExitSurvey/LoginPage.php",
    githubUrl: null,
    linkText: "Live Demo",
    tags: ["HTML", "Bootstrap", "CSS", "JavaScript", "PHP", "SQL"],
    featured: true
  }
];

export default projects;
