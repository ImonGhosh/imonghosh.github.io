export const profile = {
  name: "Imon Kalyan Ghosh",
  role: "AI / Full Stack Engineer",
  headline: "I build production-grade AI applications that combine full-stack engineering, LLM integration, automation, observability, and cloud deployment to solve real business problems.",
  location: "Magdeburg, Germany",
  availability: "Open to internships, research collaborations, or full-time roles",
  email: "imonghose@gmail.com",
  phone: "+4915771353412",
  github: "https://github.com/imonghosh",
  linkedin: "https://www.linkedin.com/in/imon-ghose-467a4722a/",
  resumeUrl: "/CV/CV.pdf",
  imageUrl: "/profile.jpg",
};

export const about = {
  title: "About Me",
  paragraphs: [
    "I am a full-stack developer with 4+ years of professional experience and a strong passion for building scalable, reliable systems. My journey into AI began when I moved to Germany to pursue my Master's degree in Data Science. Since then, my focus has shifted toward integrating AI into real-world software systems by combining strong software engineering principles, LLM workflows, automation, and scalable cloud infrastructure.",
    "I currently specialize in designing and building end-to-end AI applications, with expertise across RAG, agentic workflows, AI automation, cloud deployment, observability, and CI/CD.",
    "Alongside my studies, I work as a Software Developer HiWi at Otto von Guericke University and as a Research Assistant at the Leibniz Institute for Resilience Research.",
    "I am looking for Full-Stack AI Engineering and AI Automation roles where I can contribute to a dynamic team and build practical AI systems that solve real business problems.",
  ],
  highlights: [
    { value: "4+", label: "Years Experience" },
    { value: "10+", label: "AI Projects" },
    { value: "3", label: "Certifications" },
  ],
  skillAreas: [
    {
      title: "Full-stack Development",
      description: "4+ years of professional experience in building full-stack web and mobile applications.",
    },
    {
      title: "AI Integration",
      description: "Experienced in integrating Agentic Workflows, RAG Pipelines and AI Automations within existing systems.",
    },
    {
      title: "Cloud Infrastructure, LLMOps & CI/CD",
      description: "Experienced in deploying, monitoring, and operating cloud-based AI systems with automated CI/CD workflows.",
    },
    {
      title: "AI Tools",
      description: "Proficient in using AI tools like Codex and Claude Code to solve complex engineering problems. ",
    }
  ],
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const icon = (slug: string, color = "") =>
  `https://cdn.simpleicons.org/${slug}${color ? `/${color}` : ""}`;
const devicon = (path: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${path}`;
const localIcon = (fileName: string) => `/icons/${fileName}`;

export const skillGroups = [
  {
    title: "Software Development",
    subtitle: "Web & Mobile",
    sections: [
      {
        title: "Backend",
        items: [
          { name: "Spring Boot", iconUrl: icon("springboot") },
          { name: "FastAPI", iconUrl: icon("fastapi") },
        ],
      },
      {
        title: "Frontend",
        items: [
          { name: "React", iconUrl: icon("react") },
          { name: "Vue", iconUrl: icon("vuedotjs") },
          { name: "Flutter", iconUrl: icon("flutter") },
        ],
      },
    ],
  },
  {
    title: "AI Engineering",
    sections: [
      {
        title: "Agentic Frameworks & Providers",
        items: [
          { name: "LangChain", iconUrl: icon("langchain") },
          { name: "LangGraph", iconUrl: localIcon("langgraph.svg"), fallback: "LG" },
          { name: "PydanticAI", iconUrl: icon("pydantic") },
          { name: "CrewAI", iconUrl: localIcon("crewai.svg"), fallback: "CA" },
          { name: "Hugging Face", iconUrl: icon("huggingface") },
          { name: "OpenAI", iconUrl: localIcon("openai.svg"), iconInvert: true },
        ],
      },
      {
        title: "Observability",
        items: [
          { name: "LangFuse", iconUrl: localIcon("langfuse-color.svg"), fallback: "LF" },
          { name: "LangSmith", iconUrl: localIcon("langsmith-color.svg"), fallback: "LS" },
          { name: "AWS CloudWatch", iconUrl: localIcon("cloudwatch.svg"), fallback: "CW" },
        ],
      },
      {
        title: "AI Protocols",
        items: [
          { name: "MCP", iconUrl: localIcon("mcp.svg"), iconInvert: true, fallback: "MCP" },
          { name: "A2A", iconUrl: localIcon("a2a.svg"), iconInvert: true, fallback: "A2A" },
        ],
      },
      {
        title: "LLM Serving",
        items: [{ name: "vLLM", iconUrl: localIcon("vllm.svg"), fallback: "vL" }],
      },
      {
        title: "Automation Tools",
        items: [{ name: "n8n", iconUrl: icon("n8n") }],
      },
      {
        title: "Coding Tools",
        items: [
          { name: "Codex", iconUrl: localIcon("codex.svg") },
          { name: "Claude Code", iconUrl: localIcon("claudecode.svg"), fallback: "CC" },
          { name: "OpenCode", iconUrl: localIcon("opencode.svg"), iconInvert: true, fallback: "OC" },
        ],
      },
    ],
  },
  {
    title: "ML / Data Science",
    sections: [
      {
        title: "Frameworks",
        items: [
          { name: "scikit-learn", iconUrl: icon("scikitlearn") },
          { name: "TensorFlow", iconUrl: icon("tensorflow") },
          { name: "PyTorch", iconUrl: icon("pytorch") },
        ],
      },
      {
        title: "Analysis",
        items: [
          { name: "NumPy", iconUrl: icon("numpy") },
          { name: "Pandas", iconUrl: icon("pandas"), iconBackdrop: "light" },
          { name: "Matplotlib", iconUrl: devicon("matplotlib/matplotlib-original.svg") },
          { name: "Plotly", iconUrl: icon("plotly") },
          { name: "ggplot2", iconUrl: localIcon("ggplot2.svg"), fallback: "gg" },
        ],
      },
    ],
  },
  {
    title: "Databases",
    sections: [
      {
        title: "Relational",
        items: [
          { name: "PostgreSQL", iconUrl: icon("postgresql") },
          { name: "MongoDB", iconUrl: icon("mongodb") },
        ],
      },
      {
        title: "Vector",
        items: [
          {
            name: "Qdrant",
            iconUrl: localIcon("qdrant.svg"),
            iconBackdrop: "light",
            iconWide: true,
            fallback: "QD",
          },
          { name: "Chroma", iconUrl: localIcon("chroma.svg"), fallback: "CH" },
          { name: "Pinecone", iconUrl: localIcon("Pinecone.svg"), iconInvert: true, fallback: "PC" },
        ],
      },
      {
        title: "Graph",
        items: [{ name: "Neo4j", iconUrl: icon("neo4j") }],
      },
    ],
  },
  {
    title: "Cloud, DevOps, LLMOps",
    sections: [
      {
        title: "Version Control",
        items: [{ name: "Git", iconUrl: icon("git") }],
      },
      {
        title: "Quick Prototypes",
        items: [
          { name: "Vercel", iconUrl: icon("vercel", "ffffff") },
          { name: "Render", iconUrl: icon("render", "46e3b7") },
        ],
      },
      {
        title: "Cloud Deployment",
        items: [
          { name: "AWS", iconUrl: localIcon("aws.svg") },
          { name: "GCP", iconUrl: icon("googlecloud") },
        ],
      },
      {
        title: "IaC",
        items: [{ name: "Terraform", iconUrl: icon("terraform") }],
      },
      {
        title: "CI/CD",
        items: [
          { name: "GitHub Actions", iconUrl: icon("githubactions") },
          { name: "Jenkins", iconUrl: icon("jenkins") },
        ],
      },
      {
        title: "Caching & Queuing",
        items: [
          { name: "Redis", iconUrl: icon("redis") },
          { name: "Amazon SQS", iconUrl: localIcon("sqs.svg"), fallback: "SQS" },
          { name: "ActiveMQ", iconUrl: icon("apache") },
        ],
      },
    ],
  },
  {
    title: "Programming Languages",
    sections: [
      {
        title: "Languages",
        items: [
          { name: "Python", iconUrl: icon("python") },
          { name: "Java", iconUrl: devicon("java/java-original.svg") },
          { name: "SQL", iconUrl: localIcon("sql.png"), fallback: "SQL" },
          { name: "JavaScript", iconUrl: icon("javascript") },
          { name: "TypeScript", iconUrl: icon("typescript") },
          { name: "Dart", iconUrl: icon("dart") },
        ],
      },
    ],
  },
];

export const experiences = [
  {
    role: "HiWi Software Developer",
    company: "Otto von Guericke University",
    period: "June 2025 - Current",
    location: "Magdeburg, Germany",
    points: [
      "Developed and enhanced full-stack features for the OVGU university app using Spring Boot/Kotlin, TypeScript, Flutter, and PostgreSQL, improving user engagement by 20%.",
      "Performed Linux-based server migrations and maintained containerized services across multiple environments.",
      "Managed Android and iOS releases, including packaging, app store submission, and updates.",
      "Handled end-to-end deployment, monitoring, and incident response to ensure high availability and reliable operation.",
    ],
    tags: ["Kotlin","Spring Boot", "TypeScript","Vue", "Flutter", "PostgreSQL", "Linux", "Docker"],
  },
  {
    role: "Research Assistant",
    company: "Leibniz Institute for Resilience Research",
    period: "April 2025 - Dec 2025",
    location: "Mainz, Germany",
    points: [
      "Built a Python signal-processing pipeline to ingest, quality-check, and extract ECG/EMG features from physiological data streams.",
      "Performed data pre-processing, statistical analysis, and data visualization in R to derive actionable insights.",
    ],
    tags: ["Python", "R", "Signal Processing"],
  },
  {
    role: "Software Engineer",
    company: "Nomura Research Institute Financial Technologies India Pvt. Ltd.",
    period: "Aug 2020 - Feb 2024",
    location: "Kolkata, India",
    points: [
      "Developed critical features for a multi-tenant trade back-office system, processing over A$4.7 billion in trades per day on the Australian Stock Exchange.",
      "Developed real-time trading dashboards and 25+ end-to-end modules using Java, Spring Boot, SQL, and JavaScript.",
      "Actively participated in Agile-based sprint planning and code reviews, prepared impact analysis reports, and maintained technical documentation to support development and release activities.",
      "Automated AWS-based deployment workflows with Jenkins, cutting manual effort by 50%.",
      "Fixed high-priority bugs and enhanced overall system reliability.",
    ],
    tags: ["Java", "Spring Boot", "SQL", "JavaScript", "AWS", "Jenkins", "Agile"],
  },
];

export const projectGroups = [
  {
    title: "Personal Projects",
    variant: "vertical",
    projects: [
      {
        name: "AI-Powered SQL & Visual Analytics Platform",
        date: "April 2026",
        points: [
          "Built an AI-powered analytics platform that converts natural-language input into optimized SQL, KPI insights, and data visualizations across connected Supabase environments using MCP-based schema and query access.",
          "Orchestrated a multi-agent backend for metadata-aware SQL generation, chart creation, and KPI recommendations, with Redis caching and SQS-based asynchronous processing for scalable workloads.",
          "Deployed a serverless AWS architecture using Lambda, API Gateway, S3, and CloudFront, with infrastructure and releases automated through Terraform and GitHub Actions CI/CD.",
        ],
        links: [
          {
            label: "View Project",
            href: "https://github.com/ImonGhosh/saas-nl2sql-analytics-app",
          },
          {
            label: "Live Demo",
            href: "https://d3bgm1sor0pojd.cloudfront.net/",
          },
        ],
        tags: ["FastAPI", "React", "NL2SQL", "Supabase", "Redis", "SQS", "AWS", "Terraform", "GitHub Actions"],
      },
      {
        name: "Multimodal RAG Chatbot",
        date: "March 2026",
        points: [
          "Built a multimodal RAG application for querying websites, documents, audio, and embedded images, with ingestion powered by Crawl4AI and Docling.",
          "Developed a PydanticAI RAG agent with adaptive tool routing and hybrid retrieval, backed by PostgreSQL for embeddings, metadata, and semantic search.",
          "Achieved >90% on critical DeepEval metrics, added observability with Langfuse and CloudWatch, and deployed the Dockerized application to AWS App Runner via Amazon ECR.",
        ],
        links: [
          {
            label: "View Project",
            href: "https://github.com/ImonGhosh/saas-multimodal-rag-app",
          },
        ],
        tags: ["FastAPI", "React", "Multimodal RAG", "Agentic RAG", "DeepEval", "Langfuse", "Docker", "AWS"],
      },
      {
        name: "Job Search Automation Pipeline Using n8n",
        date: "Jan 2026",
        points: [
          "Built a job-search automation workflow using n8n, integrating LinkedIn data ingestion, AI-based relevance scoring, and automated resume tailoring.",
          "Utilized Apify and Google API to scrape and log structured job data to a personal Google Sheets repository.",
          "Created a chatbot as a n8n webhook trigger that captures a LinkedIn job URL and triggers the entire automation workflow.",
        ],
        links: [
          {
            label: "View Project",
            href: "https://github.com/ImonGhosh/n8n-job-search-automation",
          },
        ],
        tags: ["n8n", "AI Automation", "Web Scraping", "Apify", "Google API"],
      },
      {
        name: "Automated Multi-Agent Trading Simulator",
        date: "November 2025",
        points: [
          "A fully automated multi-agent trading simulation platform that ingests real-time market data and runs autonomous execution cycles with configurable scheduling and dynamic strategy optimization to maximise profit.",
        ],
        links: [
          {
            label: "View Project",
            href: "https://github.com/ImonGhosh/automated-multi-agent-trading-simulator",
          },
        ],
        tags: ["Python", "FastMCP", "Gradio"],
      },
      {
        name: "AI-powered Deal Discovery & Pricing Platform",
        date: "TBD",
        points: [
          "An LLM & RAG based agentic system for real-time deal discovery and price estimation. It ranks opportunities by estimated discount and triggers a real-time notification when high value opportunities are detected.",
        ],
        links: [
          {
            label: "View Project",
            href: "https://github.com/ImonGhosh/ai-powered-multi-agent-deal-finder",
          },
        ],
        tags: ["Vector DB", "RAG"],
      },
      {
        name: "Fine-tuned Llama 3.1 8B for price forecasting with QLoRA",
        date: "TBD",
        points: [
          "Fine-tuned a Llama-3.1-8B model with QLoRA on 20k Amazon marketplace samples, outperforming GPT-4o by 5% while reducing average prediction error by 16.1%, and deployed it as a scalable serverless API.",
        ],
        links: [
          {
            label: "View Project",
            href: "https://github.com/ImonGhosh/fine-tuned-llama-product-pricer",
          },
        ],
        tags: ["LLM Fine-tuning", "PEFT", "QLoRA"],
      },
    ],
  },
  {
    title: "Research Projects",
    variant: "horizontal",
    projects: [
      {
        name: "Decentralized Multi-Agent Swarm Reasoning for Constrained Planning Tasks",
        date: "Feb 2026",
        points: [
          "Designed and implemented a decentralized multi-agent reasoning framework using LangGraph, combining Tree-of-Thought search and Ant Colony Optimization for constrained planning tasks.",
          "Built a task-aware scoring pipeline to validate scheduling constraints, rank candidate reasoning traces, and support iterative pheromone-guided search across agents.",
          "Evaluated the system on the NaturalPlanner benchmark, improving solve rate from 24.75% for a single-agent baseline to 40.00% with the full multi-agent framework.",
        ],
        links: [
          {
            label: "View Project",
            href: "https://github.com/ImonGhosh/Swarm-Planner-Agent",
          },
          {
            label: "Academic Paper",
            href: "https://github.com/ImonGhosh/Swarm-Planner-Agent/blob/main/decentralized_slm_swarm_planning.pdf",
          },
        ],
        tags: ["LangGraph", "Agentic Swarm Intelligence", "Tree-of-Thought-Reasoning"],
      },
      {
        name: "Fine-Tuned OpenAI's Whisper ASR Model on Low Resource Language",
        date: "April 2025",
        points: [
          "Fine-tuned OpenAI Whisper model for low-resource Indian languages, achieving improved transcription quality and 100% WER reduction compared to baseline.",
          "Performed comparative analysis of 3 major PEFT techniques, with QLoRA consistently delivering the best performance.",
          "Developed a configurable CLI-based fine-tuning pipeline that automates the full ML workflow, from data preparation and training to evaluation and model publishing.",
        ],
        links: [
          {
            label: "View Project",
            href: "https://github.com/ImonGhosh/whisper-fine-tune-low-resource-language",
          },
          {
            label: "Academic Paper",
            href: "https://github.com/ImonGhosh/whisper-fine-tune-low-resource-language/blob/main/paper/Research_Paper.pdf",
          },
        ],
        tags: ["LLM Fine-tuning", "PEFT", "QLoRA", "Quantization", "Audio Processing"],
      },
    ],
  },
];

export const mastersThesis = {
  title: "Ongoing Master's Thesis - Context-Aware GenAI System for Data Science Project Management",
  description:
    "Currently, I am working on building a Context-Aware GenAI System for facilitating Data Science Project Management by providing AI-powered support across requirement understanding, project planning, skill-based task allocation, and personalized task-level guidance, under human-in-the-loop review.",
  impact:
    "This work aims to alleviate several reported challenges that current Data Science teams face during execution of collaborative projects and further cement the effectiveness of Generative AI in solving real-world problems.",
};

export const education = [
  {
    degree: "Master of Science in Data and Knowledge Engineering",
    school: "Otto-von-Guericke-University Magdeburg",
    period: "Apr 2024 - Present",
    scoreLabel: "Current GPA",
    score: "1.4 (German scale)",
    location: "Magdeburg, Germany",
  },
  {
    degree: "Bachelor of Technology in Information Technology",
    school: "Techno India Saltlake",
    period: "Aug 2016 - Jul 2020",
    scoreLabel: "CGPA",
    score: "8.35/10",
    location: "Kolkata, India",
  },
];

export const certifications = [
  {
    name: "LLM Engineering certification",
    issuer: "Udemy",
    credentialUrl:
      "https://www.udemy.com/certificate/UC-883c5271-3891-49ac-80b4-1b3a621a7f70/",
  },
  {
    name: "Agentic AI certification",
    issuer: "Udemy",
    credentialUrl:
      "https://www.udemy.com/certificate/UC-c8b0fcdf-c3c2-47cf-b659-c47990e35c17/",
  },
  {
    name: "LLMOps: Building Production-Ready LLM Systems",
    issuer: "Educative",
    credentialUrl: "https://www.educative.io/verify-certificate/5TYHC3JS87",
  },
];
