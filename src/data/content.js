// Portfolio content, updated from the CV and October 2026 impact record.

export const profile = {
  "name": "Luca Obis",
  "role": "Software Development Engineer",
  "tagline": "Reliable systems. Useful products. Measurable impact.",
  "blurb": "Software engineer at Amazon, working on a platform that moves around 100 PB of data a day. I turn complex production problems into lower costs, safer systems, and automation that gives teams their time back.",
  "location": "Iași, Romania",
  "email": "luca.obis@gmail.com",
  "phone": "+40 725 209 026",
  "links": {
    "github": "https://github.com/Obis-Luca",
    "linkedin": "https://www.linkedin.com/in/luca-obis-849351201",
    "email": "mailto:luca.obis@gmail.com"
  }
}

export const stats = [
  {
    "value": 50,
    "suffix": "K",
    "prefix": "~$",
    "label": "Monthly infrastructure savings",
    "sub": "USD · data aggregation at Amazon"
  },
  {
    "value": 58,
    "suffix": "%",
    "label": "Applications safely retired",
    "sub": "4,246 safely retired at Amazon"
  },
  {
    "value": 80,
    "suffix": "%+",
    "label": "Faster data validation",
    "sub": "PySpark on AWS EMR · Dapter"
  },
  {
    "value": 150,
    "suffix": "+",
    "label": "Active extension users",
    "sub": "Better Spotify Shuffle"
  }
]

export const experience = [
  {
    "company": "Amazon",
    "role": "Software Development Engineer",
    "team": "Customer Business Analytics",
    "period": "11/2025 — Present",
    "current": true,
    "summary": "Own production changes from design through rollout, with a focus on cost, reliability, and removing recurring operational work.",
    "points": [
      "Built a data aggregation service that reduced downstream API calls and saved approximately $50,000 per month in AWS infrastructure costs.",
      "Designed and launched automated cleanup of 4,246 unused applications: 30% less configuration across roughly 56,000 hosts, with zero incorrect deletions.",
      "Replaced manual quota management with automatic traffic tiering for roughly 1,700 priority applications. None were throttled during Prime Day, Prime Big Deal Days, or Diwali 2026.",
      "Restored TLS hostname verification across 25,000+ environments through a staged, telemetry-driven rollout, closing a high-severity security finding with zero incidents or data loss."
    ],
    "stack": [
      "Java",
      "Python",
      "AWS Lambda",
      "Step Functions",
      "AWS CDK",
      "Distributed Systems"
    ]
  },
  {
    "company": "Dapter",
    "role": "Python Engineer",
    "period": "02/2025 — 10/2025",
    "summary": "Made large-scale data validation faster, cheaper, and easier to extend.",
    "points": [
      "Rebuilt a dataset-validation platform with PySpark on AWS EMR, reducing verification time by over 80%.",
      "Cut compute costs by approximately 70% using Spot Instances with checkpointing to recover safely from interruptions.",
      "Extended validation with agentic workflows that generate, review, and refine checks against deterministic tests."
    ],
    "stack": [
      "Python",
      "PySpark",
      "SQL",
      "AWS EMR",
      "Agentic Workflows"
    ]
  },
  {
    "company": "Raiffeisen Bank",
    "role": "Full-Stack Developer · Internship Team Lead",
    "period": "01/2024 — 04/2024",
    "summary": "Led a five-person team building a scheduling app for 5,000+ university students, then carried it through to launch.",
    "points": [
      "Contributed across the backend and mobile app while coordinating a cross-functional team of five.",
      "Continued development independently after the internship and launched the app on the App Store in October 2024."
    ],
    "stack": [
      "Spring Boot",
      "React Native",
      "JavaScript",
      "PostgreSQL"
    ]
  }
]

export const education = {
  "degree": "B.Sc. Computer Science",
  "school": "Babeș-Bolyai University",
  "location": "Cluj-Napoca, Romania",
  "period": "10/2022 — 07/2025"
}

export const projects = [
  {
    "name": "Velia",
    "blurb": "AI support, built into a business",
    "featured": true,
    "category": "AI · SaaS",
    "description": "Built a multi-tenant AI customer-support platform serving 50 paying customers, from the agent architecture and knowledge retrieval to self-service onboarding.",
    "highlights": [
      "Agentic RAG with AWS Bedrock AgentCore and Strands",
      "Concurrent AI agents evaluate grounding, retrieval quality, and adversarial robustness",
      "Benchmarked models and retrieval approaches for answer quality, latency, and cost"
    ],
    "metrics": [
      "50 paying customers",
      "Production platform"
    ],
    "stack": [
      "Python",
      "TypeScript",
      "AWS Bedrock",
      "Strands",
      "AWS CDK"
    ],
    "link": "https://velia-ai.com",
    "linkLabel": "Visit Velia"
  },
  {
    "name": "SafeBites",
    "blurb": "AI Meal Planning for Parents",
    "featured": true,
    "category": "AI · SaaS",
    "description": "Took an AI meal-planning assistant from concept to launch, reaching 10+ paying users through direct feedback and rapid iteration.",
    "highlights": [
      "Multi-step agents manage dietary profiles and create personalized meal plans",
      "Tool use, persistent context, and structured outputs turn requests into actions",
      "Built subscriptions and premium usage limits with Stripe and Supabase"
    ],
    "metrics": [
      "10+ paying users",
      "Launched"
    ],
    "stack": [
      "React",
      "Python",
      "Supabase",
      "Stripe",
      "OpenAI API"
    ],
    "link": null
  },
  {
    "name": "Better Spotify Shuffle",
    "blurb": "Shuffle with a better memory",
    "featured": true,
    "category": "Chrome Extension",
    "description": "Built a Spotify extension used by 150+ people that learns from skips and replays to make playlist shuffles more personal. Your skip button finally has a long-term memory.",
    "highlights": [
      "Adaptive weighting from listening behavior",
      "Controls integrated directly into Spotify’s web interface"
    ],
    "metrics": [
      "150+ active users",
      "Published"
    ],
    "stack": [
      "JavaScript",
      "Chrome MV3",
      "Spotify Web API",
      "Supabase"
    ],
    "link": null
  },
  {
    "name": "GitCloud",
    "blurb": "A GitHub-like platform (bachelor’s thesis)",
    "featured": false,
    "category": "Distributed Systems",
    "description": "Built a Git-hosting platform with five microservices, implementing Git’s smart-HTTP protocol rather than wrapping an existing server.",
    "highlights": [
      "S3-backed repositories support stateless services",
      "Collaborative editing with Monaco and Socket.io",
      "Sandboxed JavaScript and Python execution on Lambda"
    ],
    "metrics": [
      "5 microservices",
      "AWS S3 + Lambda"
    ],
    "stack": [
      "Node.js",
      "React",
      "Redux",
      "AWS S3",
      "AWS Lambda",
      "Socket.io",
      "MySQL"
    ],
    "link": "https://github.com/Obis-Luca/GitCloud"
  },
  {
    "name": "Redis From Scratch",
    "blurb": "A Redis server in Go",
    "featured": false,
    "category": "Systems",
    "description": "Implemented a Redis-compatible server in Go to understand the trade-offs behind persistence, protocols, and concurrency.",
    "highlights": [
      "RESP parsing and core string/hash commands",
      "Append-only persistence with recovery on startup"
    ],
    "metrics": [
      "RESP protocol",
      "AOF persistence"
    ],
    "stack": [
      "Go",
      "TCP",
      "Concurrency"
    ],
    "link": "https://github.com/Obis-Luca/Redis-From-Scratch"
  },
  {
    "name": "Toy Language",
    "blurb": "A concurrent interpreter in Java",
    "featured": false,
    "category": "Language / Runtime",
    "description": "Built a typed interpreter with shared-memory concurrency and garbage collection, making language-runtime concepts concrete.",
    "highlights": [
      "Static type checking and reference-based heap",
      "Forks, locks, semaphores, and mark-sweep collection"
    ],
    "metrics": [
      "GC",
      "Concurrency primitives"
    ],
    "stack": [
      "Java",
      "JavaFX",
      "Concurrency"
    ],
    "link": "https://github.com/Obis-Luca/Toy-Language"
  }
]

export const skillGroups = [
  {
    "title": "Languages",
    "skills": [
      {
        "name": "Python",
        "level": 95
      },
      {
        "name": "Java",
        "level": 92
      },
      {
        "name": "JavaScript",
        "level": 90
      },
      {
        "name": "Go",
        "level": 78
      },
      {
        "name": "Ruby",
        "level": 70
      },
      {
        "name": "Swift",
        "level": 68
      },
      {
        "name": "SQL",
        "level": 85
      }
    ]
  },
  {
    "title": "Cloud & Data",
    "skills": [
      {
        "name": "AWS Lambda",
        "level": 90
      },
      {
        "name": "S3",
        "level": 90
      },
      {
        "name": "DynamoDB",
        "level": 82
      },
      {
        "name": "SQS",
        "level": 82
      },
      {
        "name": "AWS CDK",
        "level": 78
      },
      {
        "name": "EMR",
        "level": 85
      },
      {
        "name": "PySpark",
        "level": 88
      },
      {
        "name": "Step Functions",
        "level": 75
      }
    ]
  },
  {
    "title": "Frameworks & AI",
    "skills": [
      {
        "name": "Spring Boot",
        "level": 90
      },
      {
        "name": "React",
        "level": 90
      },
      {
        "name": "React Native",
        "level": 80
      },
      {
        "name": "Node.js",
        "level": 85
      },
      {
        "name": "Agentic AI",
        "level": 88
      },
      {
        "name": "AWS Bedrock",
        "level": 85
      }
    ]
  },
  {
    "title": "Foundations",
    "skills": [
      {
        "name": "Distributed Systems",
        "level": 88
      },
      {
        "name": "Concurrency",
        "level": 85
      },
      {
        "name": "System Design",
        "level": 84
      },
      {
        "name": "Data Engineering",
        "level": 86
      },
      {
        "name": "Machine Learning",
        "level": 75
      }
    ]
  }
]

export const sections = [
  {
    "id": "hero",
    "label": "Home"
  },
  {
    "id": "about",
    "label": "About"
  },
  {
    "id": "experience",
    "label": "Experience"
  },
  {
    "id": "projects",
    "label": "Projects"
  },
  {
    "id": "skills",
    "label": "Skills"
  },
  {
    "id": "contact",
    "label": "Contact"
  }
]
