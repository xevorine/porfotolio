export interface Tool {
  name: string;
}

export interface ToolGroup {
  category: string;
  items: string[];
}

export const toolGroups: ToolGroup[] = [
  {
    category: "Web",
    items: ["Laravel", "PHP", "MySQL", "JavaScript", "Tailwind"]
  },
  {
    category: "Automation",
    items: ["n8n", "WAHA", "Gemini", "WhatsApp API"]
  },
  {
    category: "Machine Learning",
    items: ["Python", "TensorFlow", "Keras", "CNN"]
  },
  {
    category: "Database",
    items: ["SQL", "ERD", "PlantUML", "Mermaid"]
  }
];
