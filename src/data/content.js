// Single source of truth for all portfolio content.
// Derived from Luca Obis's resume + verified GitHub project analysis.

export const profile = {
  name: 'Luca Obis',
  role: 'Software Development Engineer',
  tagline: 'Building systems at petabyte scale.',
  blurb:
    'SDE at Amazon working on a Tier-1 ingestion platform that moves ~100 PB every day. I build across the stack — distributed systems, cloud architecture, data engineering, ML, and full-stack product — and I ship things people actually use.',
  location: 'Iași, Romania',
  email: 'luca.obis@gmail.com',
  phone: '+40 725 209 026',
  links: {
    github: 'https://github.com/Obis-Luca',
    linkedin: 'https://www.linkedin.com/in/luca-obis-849351201',
    email: 'mailto:luca.obis@gmail.com',
  },
}

// Headline metrics for the hero / stats strip.
export const stats = [
  { value: 100, suffix: ' PB', label: 'Data ingested / day', sub: 'Amazon Tier-1 platform' },
  { value: 80, suffix: '%', label: 'Runtime improvement', sub: 'EMR + PySpark rewrite' },
  { value: 5000, suffix: '+', label: 'Users served', sub: 'University scheduling app' },
  { value: 11, suffix: '', label: 'Open-source projects', sub: 'Go · Java · Python · Swift' },
]

export const experience = [
  {
    company: 'Amazon',
    role: 'Software Development Engineer',
    team: 'Customer Business Analytics',
    period: '12/2025 — Present',
    current: true,
    summary:
      "Tier-1 content ingestion platform processing ~100 petabytes/day. Contributing across system engineering, software development, and data engineering.",
    points: [
      'Scaled and configured ingestion fleet services — load balancers and internal networking bridging Amazon’s internal cloud (Apollo) with AWS.',
      'Built AI agent skills for data forecasting and fleet scaling ahead of peak traffic events (Prime Day, Black Friday, Diwali).',
      'Drove fleet granularization, distributing traffic more efficiently across ingestion cells and improving resilience.',
      'Optimized log compression and grouping strategies, cutting AWS read/write operations and overall cost.',
      'On-call rotations safeguarding Tier-1 reliability.',
    ],
    stack: ['Spring', 'Python', 'Java', 'Ruby', 'AWS Lambda', 'SQS', 'S3', 'DynamoDB', 'AWS CDK'],
  },
  {
    company: 'Dapter',
    role: 'Python Engineer',
    period: '03/2025 — 10/2025',
    summary: 'Re-architected a large-scale QA / data-validation platform.',
    points: [
      'Re-architected and deployed a Python QA automation platform for large-scale dataset validation.',
      'Improved runtime performance by 80%+ using AWS EMR and PySpark.',
      'Designed and operated scalable data pipelines on daily and weekly schedules.',
      'Built client-specific datasets by joining and filtering large automotive and demographic tables.',
    ],
    stack: ['PySpark', 'Python', 'SQL', 'AWS EMR', 'Step Functions'],
  },
  {
    company: 'Raiffeisen Bank',
    role: 'Full-Stack Developer (Internship → Team Lead)',
    period: '01/2023 — 04/2023',
    summary: 'Cross-platform scheduling app for 5000+ university students.',
    points: [
      'Worked in a cross-functional 5-person team to design and build a cross-platform scheduling app for 5000+ students.',
      'Took on team-lead responsibilities while contributing full-stack across backend and mobile.',
      'Continued solo after the program and launched it on the App Store in October 2024.',
    ],
    stack: ['Spring Boot', 'React Native', 'JavaScript', 'Mobile'],
  },
]

export const education = {
  degree: "B.Sc. Computer Science",
  school: 'Babeș-Bolyai University',
  location: 'Cluj-Napoca, Romania',
  period: '10/2022 — 07/2025',
}

// Projects: resume products first (traction), then standout GitHub work.
// `featured` controls card emphasis. `metrics` render as chips.
export const projects = [
  {
    name: 'SafeBites',
    blurb: 'AI Meal Planning for Parents',
    featured: true,
    category: 'AI · SaaS',
    description:
      'AI-powered meal-planning platform with paying users. Designed and tuned LLM prompts and behavior from real user interactions, and built the full subscription business around it.',
    highlights: [
      'Subscription billing, usage limits & premium tiers (Stripe + Supabase)',
      'LLM prompt + behavior tuning driven by real usage',
      'Direct customer work to refine UX and AI response quality',
    ],
    metrics: ['Paying users', 'Live product'],
    stack: ['React', 'Python', 'Supabase', 'Stripe', 'OpenAI API'],
    link: null,
  },
  {
    name: 'Better Spotify Shuffle',
    blurb: 'Smarter shuffle, 100+ active users',
    featured: true,
    category: 'Chrome Extension',
    description:
      'Chrome extension that reshuffles Spotify playlists based on listening habits — adaptive weighting from skips, replays, and user-controlled tuning, injected directly into the Spotify web UI.',
    highlights: [
      'Adaptive playlist weighting (skips / replays / tuning)',
      'Custom controls embedded in the Spotify web interface',
      'Grew to 100+ active users',
    ],
    metrics: ['100+ users', 'Published'],
    stack: ['JavaScript', 'Chrome MV3', 'Spotify Web API', 'Supabase'],
    link: null,
  },
  {
    name: 'GitCloud',
    blurb: 'A GitHub-like platform (bachelor’s thesis)',
    featured: true,
    category: 'Distributed Systems',
    description:
      'A full git-hosting platform built as 5 microservices + a React frontend. Manually implements Git’s smart-HTTP protocol (pkt-line, receive-pack / upload-pack), with repos persisted to S3 and a sandboxed Lambda code runner.',
    highlights: [
      'Hand-rolled Git smart-HTTP protocol & pkt-line encoding',
      'S3-backed ephemeral repos for stateless scaling',
      'Real-time collaborative editing over Socket.io + Monaco',
      'Sandboxed JS/Python execution as AWS Lambdas',
    ],
    metrics: ['5 microservices', 'AWS S3 + Lambda'],
    stack: ['Node.js', 'React', 'Redux', 'AWS S3', 'AWS Lambda', 'Socket.io', 'MySQL'],
    link: 'https://github.com/Obis-Luca/GitCloud',
  },
  {
    name: 'Redis From Scratch',
    blurb: 'A Redis server in Go',
    featured: false,
    category: 'Systems',
    description:
      'A Redis implementation in Go: a bidirectional RESP protocol parser, core string/hash commands, and append-only-file persistence with a background fsync loop.',
    highlights: [
      'Full bidirectional RESP protocol parser',
      'SET/GET/HSET/HGET/HGETALL/DEL with RWMutex-guarded maps',
      'AOF persistence + replay-on-startup recovery',
    ],
    metrics: ['RESP protocol', 'AOF persistence'],
    stack: ['Go', 'TCP', 'Concurrency'],
    link: 'https://github.com/Obis-Luca/Redis-From-Scratch',
  },
  {
    name: 'Toy Language',
    blurb: 'A concurrent interpreter in Java',
    featured: true,
    category: 'Language / Runtime',
    description:
      'A full interpreter for an imperative language: reduction-based execution, static type checking, a heap with references, fork-based concurrency with locks & semaphores, and a conservative garbage collector — with a JavaFX GUI.',
    highlights: [
      'Reduction-based execution stack + static type checking',
      'Heap, references & conservative mark-sweep GC',
      'Fork concurrency with locks and N-way semaphores',
    ],
    metrics: ['GC', 'Concurrency primitives'],
    stack: ['Java', 'JavaFX', 'Concurrency'],
    link: 'https://github.com/Obis-Luca/Toy-Language',
  },
  {
    name: 'Evolutionary Platformer',
    blurb: 'A genetic algorithm that learns to play',
    featured: false,
    category: 'AI · Games',
    description:
      'A pygame 2D platformer paired with an evolutionary algorithm that learns to beat the level — chromosomes of (action, duration) genes, tournament selection, two-point crossover, and checkpoint-based fitness shaping.',
    highlights: [
      'GA: tournament selection, 2-point crossover, mutation',
      'Checkpoint reward-penalization fitness shaping',
      'Elitism across 100 generations',
    ],
    metrics: ['Genetic algorithm', 'pygame'],
    stack: ['Python', 'pygame', 'NumPy'],
    link: 'https://github.com/Obis-Luca/Platformer-with-Evolutionary-Algorithm',
  },
  {
    name: 'JWT Tic-Tac-Toe',
    blurb: 'Full-stack multiplayer + auth',
    featured: false,
    category: 'Full-Stack',
    description:
      'Multiplayer Tic-Tac-Toe with stateless JWT auth via Spring Security, a custom logout handler, and shared game state across two browsers.',
    highlights: [
      'Stateless JWT auth + Spring Security filter chain',
      'Real-time multiplayer game state',
      'Custom logout handler & exception handling',
    ],
    metrics: ['JWT + Spring Security'],
    stack: ['Spring Boot', 'React', 'MySQL', 'JWT'],
    link: 'https://github.com/Obis-Luca/JWTSecuredTicTacToe',
  },
]

// Skills grouped for the orbit/grid. `level` (0-100) drives bar/orbit emphasis.
export const skillGroups = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python', level: 95 },
      { name: 'Java', level: 92 },
      { name: 'JavaScript', level: 90 },
      { name: 'Go', level: 78 },
      { name: 'Ruby', level: 70 },
      { name: 'Swift', level: 68 },
      { name: 'SQL', level: 85 },
    ],
  },
  {
    title: 'Cloud & Data',
    skills: [
      { name: 'AWS Lambda', level: 90 },
      { name: 'S3', level: 90 },
      { name: 'DynamoDB', level: 82 },
      { name: 'SQS', level: 82 },
      { name: 'AWS CDK', level: 78 },
      { name: 'EMR', level: 85 },
      { name: 'PySpark', level: 88 },
      { name: 'Step Functions', level: 75 },
    ],
  },
  {
    title: 'Frameworks',
    skills: [
      { name: 'Spring Boot', level: 90 },
      { name: 'React', level: 90 },
      { name: 'React Native', level: 80 },
      { name: 'Node.js', level: 85 },
      { name: 'PyTorch', level: 75 },
    ],
  },
  {
    title: 'Foundations',
    skills: [
      { name: 'Distributed Systems', level: 88 },
      { name: 'Concurrency', level: 85 },
      { name: 'System Design', level: 84 },
      { name: 'Data Engineering', level: 86 },
      { name: 'Machine Learning', level: 75 },
    ],
  },
]

export const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]
