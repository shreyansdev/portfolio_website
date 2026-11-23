export interface ChapterMeta {
  number: string;
  seal: string;
  eyebrow: string;
  title: string;
  verticalJp: string;
}

export interface HeroSummaryPanel {
  title: string;
  skills: string;
}

export interface StatItem {
  label: string;
  value: string;
}

export interface SiteContent {
  nav: {
    logo: string;
  };
  buttons: {
    downloadResume: string;
    viewProjects: string;
    viewRepository: string;
    sendEmail: string;
    copyEmail: string;
    copiedEmail: string;
    backToTop: string;
  };
  hero: {
    chapter: ChapterMeta;
    chips: string[];
    titlePrefix: string;
    sfx: {
      one: string;
      two: string;
    };
    kanji: string;
    figureAriaLabel: string;
    statBubble: StatItem;
    summaryPanels: HeroSummaryPanel[];
  };
  about: {
    chapter: ChapterMeta;
    kicker: string;
    subheading: string;
    paragraphs: string[];
    courseworkHeading: string;
    stats: {
      cgpa: StatItem;
      graduationYear: StatItem;
    };
  };
  skills: {
    chapter: ChapterMeta;
    cybersecurityBanner: {
      kicker: string;
      heading: string;
      body: string;
      chibiAriaLabel: string;
    };
  };
  education: {
    chapter: ChapterMeta;
    quote: {
      text: string;
      attribution: string;
    };
    stamp: string;
  };
  projects: {
    chapter: ChapterMeta;
    kicker: string;
    volumePrefix: string;
    filterAll: string;
    volumeAriaLabels: Record<string, string>;
    chibiAriaLabel: string;
  };
  contact: {
    chapter: ChapterMeta;
    calloutHeading: string;
    calloutText: string;
    labels: {
      email: string;
      phone: string;
      location: string;
    };
    chibiAriaLabel: string;
  };
  footer: {
    endWord: string;
    copyright: string;
    chibiAriaLabel: string;
  };
}

export const siteContent: SiteContent = {
  nav: {
    logo: "SHREYANSDEV",
  },
  buttons: {
    downloadResume: "Download Resume",
    viewProjects: "View Projects",
    viewRepository: "View Repository",
    sendEmail: "Send Email",
    copyEmail: "Copy Email",
    copiedEmail: "Copied",
    backToTop: "Back to top ↑",
  },
  hero: {
    chapter: {
      number: "01",
      seal: "一",
      eyebrow: "CHAPTER 一",
      title: "HOME",
      verticalJp: "第一章 · 開発者",
    },
    chips: ["Available for hire", "Bengaluru, India", "BE CS 2023-2027"],
    titlePrefix: "HI, I'M",
    sfx: {
      one: "ドン",
      two: "ゴゴゴ",
    },
    kanji: "開発",
    figureAriaLabel: "Original manga illustration of a hooded young developer working at a laptop",
    statBubble: {
      label: "CURRENT DEGREE CGPA:",
      value: "8.45 / 10.0",
    },
    summaryPanels: [
      { title: "Full-Stack", skills: "React / Node / FastAPI" },
      { title: "Cybersecurity", skills: "AES / Nmap / Metasploit" },
      { title: "Embedded / IoT", skills: "ESP32 / Arduino / WebSerial" },
    ],
  },
  about: {
    chapter: {
      number: "02",
      seal: "二",
      eyebrow: "CHAPTER 二",
      title: "ENGINEERING & CODE ARCHITECTURE",
      verticalJp: "学び · 設計",
    },
    kicker: "Acharya Institute of Technology Student",
    subheading: "Building with purpose.",
    paragraphs: [
      "I am a Computer Science & Engineering undergraduate at Acharya Institute of Technology, Bengaluru (2023–2027), holding an active CGPA of 8.45 / 10.0.",
      "My passion lies at the intersection of Full-Stack Web Development, Cybersecurity, Machine Learning, and Embedded Systems / IoT. Whether it's building zero-persistence encrypted chat platforms, fine-tuning neural networks for image authenticity detection, or configuring low-level microcontrollers over Web Serial API, I focus on performance, security, and developer utility.",
    ],
    courseworkHeading: "RELEVANT ACADEMIC SUBJECTS",
    stats: {
      cgpa: {
        label: "Current CGPA",
        value: "8.45 / 10.0",
      },
      graduationYear: {
        label: "Graduation Year",
        value: "2027",
      },
    },
  },
  skills: {
    chapter: {
      number: "03",
      seal: "三",
      eyebrow: "CHAPTER 三",
      title: "TOOLKIT & SPECIALIZATIONS",
      verticalJp: "道具 · 技術",
    },
    cybersecurityBanner: {
      kicker: "SPECIALIZATION",
      heading: "CYBERSECURITY & NETWORKING PROFICIENCY",
      body: "Trained in penetration testing, vulnerability analysis, Nmap, Wireshark, Metasploit & AES zero-knowledge crypto.",
      chibiAriaLabel: "Chibi hooded developer peeking",
    },
  },
  education: {
    chapter: {
      number: "04",
      seal: "四",
      eyebrow: "CHAPTER 四",
      title: "ACADEMIC JOURNEY & MILESTONES",
      verticalJp: "歩み · 学歴",
    },
    quote: {
      text: "Continuous hands-on implementation in algorithms, full-stack security, and IoT embedded design drives my technical progress.",
      attribution: "Shreyans Jain, BE CSE Student.",
    },
    stamp: "認定 · 学習",
  },
  projects: {
    chapter: {
      number: "05",
      seal: "五",
      eyebrow: "CHAPTER 五",
      title: "PROVEN BUILDS & SYSTEMS",
      verticalJp: "作品 · 開発",
    },
    kicker: "4 core projects",
    volumePrefix: "VOL.",
    filterAll: "All",
    volumeAriaLabels: {
      "AI Image Detector": "Magnifying glass over a pixelated face",
      CipherChat: "Two speech bubbles with a padlock between them",
      "Internet Weather Station": "Handheld weather device with clouds and rain",
      "Web Serial Terminal": "Terminal window with a USB cable plugged in",
    },
    chibiAriaLabel: "Chibi hooded developer peeking",
  },
  contact: {
    chapter: {
      number: "06",
      seal: "六",
      eyebrow: "CHAPTER 六",
      title: "CONTACT",
      verticalJp: "連絡 · 次章",
    },
    calloutHeading: "LET'S BUILD SOMETHING BOLD TOGETHER",
    calloutText:
      "Open for software engineering opportunities, full-stack projects, cybersecurity collaborations, or hardware IoT inquiries. Feel free to reach out directly!",
    labels: {
      email: "Email",
      phone: "Phone",
      location: "Location",
    },
    chibiAriaLabel: "Chibi hooded developer peeking",
  },
  footer: {
    endWord: "END",
    copyright: "© 2026 SHREYANS JAIN. BE CSE @ ACHARYA INSTITUTE OF TECHNOLOGY.",
    chibiAriaLabel: "Chibi hooded developer waving",
  },
};
