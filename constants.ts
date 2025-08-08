


import type { Project, ExperienceItem, Achievement, BlogPost } from './types';

export const NAV_LINKS = [
  { name: 'Projects', href: 'projects' },
  { name: 'Skills', href: 'skills' },
  { name: 'Experience', href: 'experience' },
  { name: 'Contact', href: 'contact' },
];

export const PROJECTS: Project[] = [
  {
    title: 'RoadSafe',
    description: 'A real-time crash detection and alert system using OpenCV and FastAPI to improve emergency response times.',
    codeUrl: 'https://github.com/Srinidhi-070',
  },
  {
    title: 'LeafMedic',
    description: 'Plant disease detection system built with Streamlit and powered by a fine-tuned MobileNetV2 model.',
    codeUrl: 'https://github.com/Srinidhi-070',
  },
  {
    title: 'Campus Hub',
    description: 'A comprehensive mobile app designed to be the digital heartbeat of a college campus, uniting students, faculty, and administrators.',
    codeUrl: 'https://github.com/Srinidhi-070/Campus-Hub',
  },
  {
    title: 'AI for Health',
    description: 'Predictive disease analysis leveraging SVM and Naive Bayes classifiers for early-stage diagnosis.',
    codeUrl: 'https://github.com/Srinidhi-070',
  },
];

export const SKILLS = [
  {
    title: 'Programming Languages',
    skills: ['Python', 'JavaScript', 'Java', 'C', 'SQL'],
  },
  {
    title: 'AI & Machine Learning',
    skills: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'NLP', 'Artificial Intelligence', 'Prompt Engineering'],
  },
  {
    title: 'Frameworks & Libraries',
    skills: ['TensorFlow/Keras', 'scikit-learn', 'OpenCV', 'Streamlit', 'FastAPI', 'Plotly'],
  },
  {
    title: 'Web & App Development',
    skills: ['React', 'React Native', 'Tailwind CSS', 'MongoDB', 'GitHub Copilot', 'Cursor'],
  },
  {
    title: 'Data & Visualization',
    skills: ['Data Analysis', 'Data Visualization', 'Google Maps API'],
  },
  {
    title: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'Postman', 'Vibe Coding', 'AI Image Generation', 'AI Video Generation'],
  },
  {
    title: 'Soft Skills & Extras',
    skills: ['Problem Solving', 'UI/UX Design Thinking', 'Team Collaboration', 'Technical Mentoring', 'Research & Presentation'],
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    year: '2023',
    role: 'Intern',
    company: 'Schneider Electric',
    description: 'Contributed to automation projects and gained experience in an industrial technology environment.'
  },
  {
    year: '2023',
    role: 'Customer Service Associate',
    company: 'Landmark Group',
    description: 'Developed communication and problem-solving skills in a fast-paced retail setting.'
  },
];

export const ACHIEVEMENTS: Achievement[] = [
    {
        title: 'Technical Blog',
        description: 'Author of the Unplugged Scholar blog, sharing insights on technology and learning.',
        url: 'https://unplugged-scholar.blogspot.com/'
    },
    {
        title: 'Printify Store Owner',
        description: 'Launched and manage "SomethingElse", a creative outlet on the Printify platform.',
    },
    {
        title: 'Hackathon & Ideathon Participant',
        description: 'Actively compete in innovation challenges to solve complex problems under pressure.'
    },
    {
        title: 'Open Source Contributor',
        description: 'Contribute to various open-source projects, focusing on AI and developer tools.'
    },
    {
        title: 'Poster Presenter & Technical Mentor',
        description: 'Presented research posters at academic events and mentored peers in technical subjects.'
    }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Harnessing the Power of React',
    description: 'A deep dive into building a dynamic personal portfolio from scratch using React, Tailwind CSS, and Framer Motion.',
    url: 'https://unplugged-scholar.blogspot.com/',
  },
  {
    title: 'Unveiling the Magic of Computer Vision',
    description: 'Exploring the fundamentals of computer vision and how machines are being taught to interpret the visual world around us.',
    url: 'https://unplugged-scholar.blogspot.com/',
  },
  {
    title: 'The Rise of AI in Everyday Life',
    description: 'From personalized recommendations to smart assistants, a look at how AI is seamlessly integrating into our daily routines.',
    url: 'https://unplugged-scholar.blogspot.com/',
  }
];

export const CONTACT_INFO = {
    email: 'nssrinidhi72884@gmail.com',
    github: 'https://github.com/Srinidhi-070',
    blog: 'https://unplugged-scholar.blogspot.com/',
};