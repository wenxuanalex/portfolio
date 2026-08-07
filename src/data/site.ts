// Single source of truth for all portfolio content.
// Edit this file to update the site — components render from here.

export const profile = {
  name: "Wen Xuan (Alex)",
  role: "Machine Learning Data Scientist",
  tagline: "Applied ML & Agentic Workflows",
  intro:
    "Passionate about extracting actionable insights from complex datasets. Experienced in evaluating agentic frameworks and conducting technical discovery for enterprise Generative AI products.",
  resumeUrl: "/resume.pdf",
  links: {
    linkedin: "https://www.linkedin.com/in/wenxuanalex/",
    github: "https://github.com/wenxuanalex",
    email: "mailto:wenxuanalex@gmail.com",
  },
};

export const skills = [
  {
    category: "Programming",
    items: ["Python", "SQL", "PySpark"],
  },
  {
    category: "AI / ML",
    items: ["Agentic Workflows", "GenAI Engineering", "Applied ML"],
  },
  {
    category: "Software / Infra",
    items: ["FastAPI", "CI/CD", "Airflow"],
  },
];

export const education = [
  {
    school: "Singapore Management University",
    short: "SMU",
    degree: "Master of IT in Business (AI Track)",
    period: "Aug 2025 – Mar 2027",
    detail:
      "CGPA 3.83/4.00. Modules: Applied Machine Learning, Generative AI with Large Language Models, Modern Software Solutions.",
  },
  {
    school: "Nanyang Technological University",
    short: "NTU",
    degree: "B. Communication Studies",
    period: "Aug 2017 – May 2021",
    detail: "Communications Research · Honours with Distinction.",
  },
];

export const projects = [
  {
    title: "Agentic Frameworks for Financial Q&A",
    blurb:
      "Evaluated the performance of agentic frameworks (LangGraph, CrewAI, LlamaIndex) for financial question-answering on SEC filings, identifying that LangGraph achieved the highest correctness (0.665).",
    tags: ["LangGraph", "CrewAI", "LlamaIndex"],
    href: "https://github.com/wenxuanalex/GenAI-with-LLMs",
  },
  {
    title: "Customer Churn MLOps Pipeline",
    blurb:
      "End-to-end churn pipeline over 541K retail transactions: a Bronze/Silver/Gold medallion flow orchestrated in Airflow, Optuna-tuned models versioned in an MLflow registry, and automated Staging→Production promotion gated on AUC.",
    tags: ["Airflow", "MLflow", "Docker"],
    href: "https://github.com/wenxuanalex/machine-learning-engineering",
  },
  {
    title: "[redacted] Late-Delivery Prediction",
    blurb:
      "[redacted] technical assessment: a config-driven medallion pipeline predicting late deliveries, with a calibrated XGBoost model, Optuna tuning, and transformers fitted only on the training split to prevent leakage.",
    tags: ["XGBoost", "Optuna", "scikit-learn"],
    href: "https://github.com/wenxuanalex/[redacted]",
  },
];

export const experience = [
  {
    role: "Enterprise AI Products Intern",
    company: "HTX",
    period: "May 2026 – Present",
    detail:
      "Conducting technical discovery and capability evaluation for an enterprise Speech-to-Text and Generative AI product for Ministry of Home Affairs (MHA) agencies.",
  },
  {
    role: "Associate",
    company: "Tri-Sector Associates",
    period: "Jul 2023 – Nov 2024",
    detail:
      "Built a market-sizing model by synthesizing educational and salary data for a financial startup, contributing to a US$1M award from a global bank; secured $500K in funding for a government-supported program through outcomes-based pricing.",
  },
  {
    role: "Project Analyst",
    company: "McKinsey & Company",
    period: "Jun 2022 – Feb 2023",
    detail:
      "Synthesized cost-saving analytics and cannibalization risks into a $20M pricing model to secure stakeholder alignment for a digital product launch; built the equity story for a US$150M IPO.",
  },
  {
    role: "Technology Analyst",
    company: "Accenture",
    period: "Jul 2021 – Jun 2022",
    detail:
      "Designed a national healthcare billing system by centralizing business processes across 3 healthcare clusters, reducing maintenance costs by 25%.",
  },
];

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
