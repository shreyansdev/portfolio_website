export interface EducationItem {
  degree: string;
  institution: string;
  location?: string;
  period: string;
  score: string;
  details?: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
  color: string;
}

export interface ProjectItem {
  title: string;
  year: string;
  techStack: string[];
  description: string[];
  category: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  year: string;
  distinction?: string;
  score?: string;
  details: string;
}

export interface ResumeData {
  personalInfo: {
    name: string;
    tagline: string;
    bio: string;
    phone: string;
    email: string;
    location: string;
    linkedin: string;
    github: string;
    resumePath: string;
  };
  education: EducationItem[];
  skillCategories: SkillCategory[];
  projects: ProjectItem[];
  certifications: CertificationItem[];
  coursework: string[];
}

export const resumeData: ResumeData = {
  personalInfo: {
    name: "Shreyans Jain",
    tagline: "Full-Stack Developer & Cybersecurity Enthusiast",
    bio: "Computer Science & Engineering student passionate about building scalable full-stack applications, real-time secure web systems, machine learning solutions, and IoT devices. Experienced in Java, Python, Node.js, React, and Ethical Hacking.",
    phone: "+91 6299617062",
    email: "shreyans048@gmail.com",
    location: "Bengaluru, Karnataka, India",
    linkedin: "https://linkedin.com/in/shreyansdev",
    github: "https://github.com/shreyansdev",
    resumePath: "/resume.pdf",
  },
  education: [
    {
      degree: "Bachelor of Engineering in Computer Science & Engineering",
      institution: "Acharya Institute of Technology",
      location: "Bengaluru, Karnataka",
      period: "2023 – 2027",
      score: "CGPA: 8.45 / 10.0",
      details: [
        "Focused on Core Computer Science principles, Software Engineering, and Network Security.",
        "Active member of tech clubs and open-source project development.",
      ],
    },
    {
      degree: "Class XII (ISC) — Higher Secondary Certificate",
      institution: "Higher Secondary Board",
      period: "2022",
      score: "Percentage: 87%",
      details: ["Mathematics, Physics, Chemistry, and Computer Science concentration."],
    },
    {
      degree: "Class X (ICSE) — Secondary School Certificate",
      institution: "Secondary School Board",
      period: "2020",
      score: "Percentage: 90%",
      details: ["Achieved distinction with top performance in Science and Mathematics."],
    },
  ],
  skillCategories: [
    {
      category: "Programming Languages",
      skills: ["Java", "C++", "Python", "JavaScript", "SQL"],
      color: "bg-neo-yellow",
    },
    {
      category: "Web & Backend",
      skills: ["Node.js", "Express.js", "Socket.io", "FastAPI", "React", "Tailwind CSS", "HTML/CSS"],
      color: "bg-neo-cyan",
    },
    {
      category: "Machine Learning",
      skills: ["EfficientNet-B0", "Image Classification", "Model Fine-Tuning", "Python Data Science"],
      color: "bg-neo-pink",
    },
    {
      category: "Embedded Systems & IoT",
      skills: ["Arduino", "ESP32", "ESP8266", "Web Serial API", "Hardware I/O"],
      color: "bg-neo-lime",
    },
    {
      category: "Databases & Security",
      skills: ["MySQL", "Network Security", "Ethical Hacking", "AES Encryption", "WebSockets"],
      color: "bg-neo-purple",
    },
    {
      category: "Tools & Cyber Forensics",
      skills: ["Git", "GitHub", "Linux", "Kali Linux", "Nmap", "Wireshark", "Metasploit"],
      color: "bg-neo-orange",
    },
  ],
  projects: [
    {
      title: "AI Image Detector",
      year: "2026",
      techStack: ["Python", "FastAPI", "EfficientNet-B0", "React", "Vite", "Tailwind CSS"],
      description: [
        "Built a full-stack AI image detector that lets users upload an image and instantly get an AI-generated vs. authentic classification with a confidence score, requiring zero sign-up.",
        "Fine-tuned an EfficientNet-B0 model on two curated Kaggle datasets for high-accuracy detection, wrapped in a FastAPI backend with image preprocessing behind a cyber-forensics investigation UI.",
      ],
      category: "AI / Machine Learning",
      githubUrl: "https://github.com/shreyansdev",
      liveUrl: "#",
      featured: true,
    },
    {
      title: "CipherChat",
      year: "2025",
      techStack: ["Node.js", "Express.js", "Socket.io", "CryptoJS", "HTML/CSS/JS"],
      description: [
        "Built a real-time anonymous chat app where two users create or join a private room and communicate securely over low-latency WebSockets with zero account creation.",
        "Implemented client-side AES encryption via CryptoJS with a zero-persistence architecture — messages are never stored or logged on the server and all session data is purged on exit.",
      ],
      category: "Web & Security",
      githubUrl: "https://github.com/shreyansdev",
      liveUrl: "#",
      featured: true,
    },
    {
      title: "Internet Weather Station",
      year: "2025",
      techStack: ["ESP32", "Arduino", "C++", "OpenWeather API", "HTML/CSS"],
      description: [
        "Designed and built a portable handheld IoT device displaying real-time weather via OpenWeather API, with a built-in web portal for Wi-Fi setup without re-flashing firmware.",
        "Engineered a 15-minute auto-refresh mechanism and optimized power/memory usage on the ESP32 for stable, continuous operation in a compact form factor.",
      ],
      category: "IoT / Hardware",
      githubUrl: "https://github.com/shreyansdev/esp32_weather_station",
      liveUrl: "#",
      featured: true,
    },
    {
      title: "Web Serial Terminal",
      year: "2024",
      techStack: ["JavaScript", "HTML/CSS", "Web Serial API"],
      description: [
        "Developed a browser-based serial terminal enabling direct communication with USB-connected microcontrollers (Arduino, ESP8266, ESP32) without desktop software like PuTTY or Serial Monitor.",
        "Designed a classic terminal-style UI with configurable baud rates and clean real-time output rendering, streamlining embedded systems debugging.",
      ],
      category: "Embedded & Tools",
      githubUrl: "https://github.com/shreyansdev/web_serial_terminal",
      liveUrl: "#",
      featured: true,
    },
  ],
  certifications: [
    {
      title: "Programming in Java",
      issuer: "NPTEL (Indian Institute of Technology)",
      year: "2025",
      distinction: "Silver Elite",
      score: "88%",
      details: "Demonstrated strong proficiency in core Java programming concepts including OOP, exception handling, multithreading, and collections framework.",
    },
    {
      title: "Ethical Hacking",
      issuer: "NPTEL (Indian Institute of Technology)",
      year: "2024",
      score: "60%",
      details: "Completed structured course covering network reconnaissance, vulnerability assessment, web application security, network attacks, and penetration testing.",
    },
  ],
  coursework: [
    "Data Structures and Algorithms",
    "Object-Oriented Programming",
    "Database Management Systems",
    "Operating Systems",
    "Computer Networks",
    "Embedded Systems & IoT",
    "Network Security & Ethical Hacking",
    "Machine Learning",
    "Web Development",
  ],
};
