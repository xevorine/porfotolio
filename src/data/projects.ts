export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  link: string;
}

export const projects: Project[] = [
  {
    id: "whatsapp-bot",
    number: "01",
    title: "WhatsApp Moderation Bot",
    category: "AI Automation",
    description: "AI-powered WhatsApp moderation system that detects toxic messages, gives progressive warnings, stores violation data, shows leaderboard rankings, and supports auto-kick after repeated violations.",
    tech: ["n8n", "WAHA", "Gemini", "MySQL", "WhatsApp API"],
    link: "https://github.com/username"
  },
  {
    id: "web-kasir",
    number: "02",
    title: "Web Kasir Mebel Aluminium & Kaca",
    category: "Web Application",
    description: "Laravel-based cashier and financial management system for an aluminium and glass furniture business. It calculates prices, records transactions, tracks income and expenses, and calculates profit automatically.",
    tech: ["Laravel", "PHP", "MySQL", "JavaScript"],
    link: "https://github.com/username"
  },
  {
    id: "image-classification",
    number: "03",
    title: "Machine Learning Image Classification",
    category: "Machine Learning",
    description: "Image classification project comparing conventional machine learning and deep learning using preprocessing, augmentation, CNN training, and model evaluation.",
    tech: ["Python", "TensorFlow", "Keras", "CNN"],
    link: "https://github.com/username"
  },
  {
    id: "game-database",
    number: "04",
    title: "Game Database / ERD Farming RPG",
    category: "Database Design",
    description: "Relational database design for a farming RPG game system with item dictionaries, player data, inventory, quests, mini-games, NPC relationships, and progression structures.",
    tech: ["SQL", "MySQL", "ERD", "PlantUML", "Mermaid"],
    link: "https://github.com/username"
  },
  {
    id: "cc-studio",
    number: "05",
    title: "C&C Studio Landing Page",
    category: "Frontend / UI Design",
    description: "Clean landing page concept for a creative studio with service sections, project showcase, responsive layout, and polished visual hierarchy.",
    tech: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
    link: "https://github.com/username"
  }
];
