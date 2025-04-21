import cms from '../assets/images/cms.png'
import coffee from '../assets/images/coffee-time.png'
import exit from '../assets/images/exit.png'
import organic from '../assets/images/OrganicWeb.png';
import todo from '../assets/images/todo-list.png';
import task from '../assets/images/task.png';
import gfg from '../assets/images/gfg.png';
import alumni from '../assets/images/alumni.png'
 const projects = [
    {
        id:0,
        title:"Alumni360",
        subtitle:"MernStack Porject",
        description:"Connecting Alumni with Students.",
        imageUrl:alumni,
        liveUrl:"https://youtu.be/tFokYCu4cEI?si=H3AXyGDPgVsocC8t",
        githubUrl:"https://github.com/poovarasan13/Construction_Management_System",
        linkText:"Source Code",
        tags: ["React", "Node.js", "Express", "MongoDB"],
        featured: true

    },
    {
      id: 1,
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
        id: 2,
        title: "GFG Profile Fetcher",
        subtitle: "Fontend Project",
        description: "Fteching Gfg Profile using username",
        imageUrl: gfg,
        liveUrl: "https://poovarasan13.github.io/gfg-api/",
        githubUrl: "https://github.com/poovarasan13/gfg-api",
        linkText: "Live Demo",
        tags: ["HTML", "Bootstrap", "CSS", "JavaScript","API"],
        featured: true
      },
    {
      id: 3,
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
      id: 4,
      title: "Organic Hub",
      subtitle: "Frontend Project",
      description: "An online organic store",
      imageUrl: organic,
      liveUrl: "https://poovarasan13.github.io/Organical-Store-Hub/",
      githubUrl: "https://github.com/poovarasan13/Organical-Store-Hub",
      linkText: "    Demo",
      tags: ["HTML", "Bootstrap", "CSS", "JavaScript",],
      featured: false
    },
    {
      id: 5,
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
      id: 6,
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
        id: 7,
        title: "Exit Survey Feedback",
        subtitle: "FullStack Project",
        description: "A feedback survey platform",
        imageUrl: exit,
        liveUrl: "http://121.200.48.27:8081/ExitSurvey/LoginPage.php",
        githubUrl: null,
        linkText: "Live Demo",
        tags: ["HTML", "Bootstrap", "CSS", "JavaScript", "PHP", "SQL"],
        featured: true
      },
  ];
  export default projects;