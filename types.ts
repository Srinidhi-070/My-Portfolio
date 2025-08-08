

export interface Project {
  title: string;
  description: string;
  codeUrl?: string;
  demoUrl?: string;
}

export interface ExperienceItem {
  year: string;
  role: string;
  company: string;
  description?: string;
}

export interface Achievement {
    title: string;
    description: string;
    url?: string;
}

export interface BlogPost {
  title: string;
  description: string;
  url: string;
}