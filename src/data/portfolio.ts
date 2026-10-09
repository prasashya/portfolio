/**
 * Central portfolio data — generated from Anshul Prasashya's resume.
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 * Nothing here should be added unless it appears on the resume.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Anshul Prasashya',
  displayName: 'Anshul Prasashya',
  firstName: 'ANSHUL',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'AN ANSHUL ORIGINAL',
  role: 'ML Engineer & Full-Stack Developer',
  tagline: ['Machine Learning', 'Full-Stack Dev', 'Data Engineering'],
  intro:
    'A B.E. Electronics and Computer Engineering student at Thapar Institute of Engineering and Technology. Amazon ML Summer School 2026 Mentee (top 3,000 of 134,000+ applicants). Builds ML research pipelines, real-time data systems, and RAG-powered full-stack applications.',
  location: 'Patiala, Punjab',
  email: 'prasashyaanshul@gmail.com',
  phone: '+91 9508266641',
  links: {
    linkedin: 'https://linkedin.com/in/Anshul',
    github: 'https://github.com/Prasashya',
  },
  resumePdf: '/assets/Anshul_Prasashya_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Anshul Prasashya',
  },
  interests: ['System Design', 'MLOps', 'Explainable AI'],
};

export const education = [
  {
    school: 'Thapar Institute of Engineering and Technology',
    place: 'Patiala, Punjab',
    degree: 'Bachelor of Engineering — Electronics and Computer Engineering',
    period: 'August 2023 – Present',
    score: 'B.E. ECE',
  },
];

export const experience = [
  {
    company: 'Amazon',
    role: 'Amazon ML Summer School 2026 Mentee',
    place: 'Remote',
    period: 'June 2026 – August 2026',
    points: [
      'Selected among the top 3,000 participants from over 134,000 applicants across India for Amazon ML Summer School 2026.',
    ],
  },
  {
    company: 'Thapar School of Liberal Arts and Sciences',
    role: 'Machine Learning Research Intern',
    place: 'Patiala, Punjab',
    period: 'April 2026 – Present',
    points: [
      'Developed reproducible EEG time-series preprocessing and feature engineering pipelines utilizing 190+ statistical, spectral, and nonlinear features for behavioral analysis.',
      'Applied Graph Fourier Transform (GFT)-based EEG analysis to study graph-domain neural representations and functional connectivity patterns.',
      'Applied EMD and CEEMDAN-based decomposition to improve EEG signal representation, integrating decomposed EEG features with eye-tracking data in a hybrid stacking ensemble (Random Forest, Gradient Boosting, XGBoost) for neuromarketing-driven buy/no-buy prediction, achieving Cohen\'s κ = 0.41 and F1 = 0.56 under LOOCV—a ~17% improvement in κ over a comparable GFT-based baseline (κ = 0.35, F1 = 0.54).',
      'Conducted IMF-level SHAP ablation, identifying mid-range IMFs (5–6) as dominant contributors to model decisions and guiding feature-set reduction.',
      'Implemented SHAP-based explainable AI techniques for feature selection and interpretation of neural decision-making behavior.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'realtime-telecom-pipeline',
    title: 'Real-Time Telecom Pipeline',
    year: '2026',
    genre: 'Data Engineering • Streaming • Analytics',
    logline: 'An end-to-end streaming pipeline ingesting telecom CDRs via Kafka into PostgreSQL with an interactive analytics dashboard.',
    stack: ['Python', 'Apache Kafka', 'SQL', 'PostgreSQL', 'Supabase', 'Streamlit', 'Plotly', 'Docker'],
    build: [
      'Built an end-to-end streaming pipeline to ingest telecom Call Detail Records via Kafka, validate them, and load them into PostgreSQL locally and through Supabase in the cloud.',
      'Implemented data validation and quality checks and developed SQL aggregations for KPIs, including total calls, revenue, and average duration by provider and hour.',
      'Designed an interactive Streamlit and Plotly dashboard featuring trend analysis, duration distributions, and box-plot-based outlier and anomaly detection across providers.',
      'Deployed the dashboard on Streamlit Cloud with a Supabase backend and documented it for non-technical users.',
    ],
    features: [
      'Real-time Kafka ingestion of telecom CDRs',
      'PostgreSQL + Supabase cloud backend',
      'SQL KPI aggregations (calls, revenue, duration)',
      'Interactive Streamlit + Plotly dashboard',
      'Outlier & anomaly detection via box plots',
    ],
    metrics: [
      { value: 'Real-time', label: 'streaming pipeline' },
      { value: 'KPI', label: 'aggregations via SQL' },
      { value: 'Cloud', label: 'deployed on Streamlit' },
      { value: 'Multi-provider', label: 'anomaly detection' },
    ],
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'flow',
  },
  {
    id: 'rag-pipeline-hybrid-retrieval',
    title: 'RAG Pipeline — Hybrid Retrieval',
    year: '2026',
    genre: 'AI • NLP • Full-Stack',
    logline: 'A full-stack Retrieval-Augmented Generation system combining BM25 keyword matching and semantic vector search with Reciprocal Rank Fusion.',
    stack: ['Python', 'React.js', 'FastAPI', 'ChromaDB', 'Sentence Transformers', 'BM25', 'Gemini API', 'Docker', 'NGINX'],
    build: [
      'Built a full-stack Retrieval-Augmented Generation (RAG) system combining BM25 keyword matching and semantic vector search using Sentence Transformers and ChromaDB.',
      'Implemented Reciprocal Rank Fusion (RRF) to merge and rerank results from both retrieval methods, improving relevance over single-method search.',
      'Engineered an automated ingestion pipeline for parsing, chunking, embedding, and indexing PDF, DOCX, TXT, CSV, and Markdown files, with post-retrieval filtering by source, type, and confidence score.',
      'Designed a decoupled React frontend and FastAPI backend with an NGINX reverse proxy, containerized using Docker Compose for reproducible deployment.',
    ],
    features: [
      'BM25 keyword + semantic vector hybrid search',
      'Reciprocal Rank Fusion (RRF) reranking',
      'Automated PDF, DOCX, CSV, Markdown ingestion',
      'Post-retrieval filtering by source & confidence',
      'React + FastAPI + NGINX + Docker Compose',
    ],
    metrics: [
      { value: 'Hybrid', label: 'BM25 + semantic search' },
      { value: 'RRF', label: 'reranking for relevance' },
      { value: '5+', label: 'document formats supported' },
      { value: 'Docker', label: 'reproducible deployment' },
    ],
    github: 'https://github.com/Prasashya',
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'shield',
  },
  {
    id: 'facial-expression-recognition',
    title: 'Facial Expression Recognition',
    year: '2025',
    genre: 'Deep Learning • Computer Vision',
    logline: 'CNN-based deep learning models for real-time facial expression classification from webcam streams and static images.',
    stack: ['Python', 'TensorFlow/Keras', 'OpenCV', 'CNN', 'NumPy'],
    build: [
      'Designed and trained CNN-based deep learning models for real-time facial expression classification.',
      'Developed OpenCV preprocessing pipelines for face detection, normalization, and data augmentation to improve robustness.',
      'Implemented a real-time inference pipeline for facial expression classification using live webcam streams and static images.',
    ],
    features: [
      'CNN-based expression classification',
      'OpenCV face detection & normalization',
      'Data augmentation for robustness',
      'Live webcam real-time inference',
      'Static image inference pipeline',
    ],
    metrics: [
      { value: 'Real-time', label: 'webcam inference' },
      { value: 'CNN', label: 'deep learning model' },
      { value: 'OpenCV', label: 'preprocessing pipeline' },
      { value: 'Multi-class', label: 'expression recognition' },
    ],
    palette: { from: '#04120d', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' },
    motif: 'tenants',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'amazon-ml',
    title: 'ML Summer School Mentee',
    org: 'Amazon',
    detail: 'Selected among the top 3,000 participants from over 134,000 applicants across India for Amazon ML Summer School 2026.',
    laurel: 'Top 3,000 of 134K+',
  },
  {
    id: 'ml-research-intern',
    title: 'ML Research Intern',
    org: 'Thapar School of Liberal Arts & Sciences',
    detail: "Achieved Cohen's κ = 0.41 and F1 = 0.56 in neuromarketing buy/no-buy prediction — a ~17% improvement over GFT-based baseline.",
    laurel: '~17% κ improvement',
  },
  {
    id: 'eeg-research',
    title: '190+ Feature EEG Pipeline',
    org: 'ML Research',
    detail: 'Developed reproducible EEG time-series preprocessing pipelines utilizing 190+ statistical, spectral, and nonlinear features.',
    laurel: 'Research Pipeline',
  },
  {
    id: 'shap-ablation',
    title: 'SHAP Ablation Study',
    org: 'Explainable AI',
    detail: 'Conducted IMF-level SHAP ablation, identifying mid-range IMFs (5–6) as dominant contributors to model decisions.',
    laurel: 'Explainable AI',
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  {
    issuer: 'DeepLearning.AI & Stanford',
    name: 'Supervised Machine Learning: Regression and Classification',
    link: 'https://coursera.org',
  },
  {
    issuer: 'DeepLearning.AI & Stanford',
    name: 'Unsupervised Learning, Recommenders, Reinforcement Learning',
    link: 'https://coursera.org',
  },
  {
    issuer: 'NVIDIA',
    name: 'Getting Started with AI on Jetson Nano',
    link: 'https://courses.nvidia.com',
  },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'Python is the primary language',
    skills: [
      { name: 'Python', mono: 'Py', note: 'Primary' },
      { name: 'SQL', mono: 'Sq' },
      { name: 'C/C++', mono: 'C+' },
      { name: 'JavaScript', mono: 'Js' },
      { name: 'HTML/CSS', mono: 'Ht' },
    ],
  },
  {
    id: 'ml-ai',
    title: 'ML & AI',
    subtitle: 'Research-grade ML stack',
    skills: [
      { name: 'Scikit-learn', mono: 'Sk' },
      { name: 'TensorFlow', mono: 'Tf' },
      { name: 'Keras', mono: 'Ke' },
      { name: 'XGBoost', mono: 'Xg' },
      { name: 'SHAP', mono: 'Sh' },
      { name: 'OpenCV', mono: 'Cv' },
      { name: 'CNNs', mono: 'Cn' },
      { name: 'Feature Engineering', mono: 'Fe' },
      { name: 'Time-Series Analysis', mono: 'Ts' },
      { name: 'Explainable AI', mono: 'Xa' },
    ],
  },
  {
    id: 'data',
    title: 'Data & Analytics',
    subtitle: 'End-to-end data pipelines',
    skills: [
      { name: 'PostgreSQL', mono: 'Pg' },
      { name: 'Supabase', mono: 'Sb' },
      { name: 'Pandas', mono: 'Pd' },
      { name: 'NumPy', mono: 'Np' },
      { name: 'EDA', mono: 'Ed' },
      { name: 'Statistical Analysis', mono: 'St' },
    ],
  },
  {
    id: 'frameworks',
    title: 'Frameworks & Tools',
    subtitle: 'Full-stack & infra',
    skills: [
      { name: 'Apache Kafka', mono: 'Kf' },
      { name: 'React.js', mono: 'Re' },
      { name: 'Node.js', mono: 'No' },
      { name: 'FastAPI', mono: 'Fa' },
      { name: 'Streamlit', mono: 'Sl' },
      { name: 'Plotly', mono: 'Pl' },
      { name: 'ChromaDB', mono: 'Ch' },
      { name: 'Docker', mono: 'Dk' },
      { name: 'NGINX', mono: 'Ng' },
      { name: 'Git / GitHub', mono: 'Gt' },
    ],
  },
  {
    id: 'fundamentals',
    title: 'CS Fundamentals',
    subtitle: 'The foundations',
    skills: [
      { name: 'DSA', mono: 'Ds' },
      { name: 'OOP', mono: 'Oo' },
      { name: 'Operating Systems', mono: 'Os' },
      { name: 'DBMS', mono: 'Db' },
    ],
  },
  {
    id: 'interests',
    title: 'Interests',
    subtitle: 'Next chapters',
    skills: [
      { name: 'MLOps', mono: 'Mo' },
      { name: 'System Design', mono: 'Sd' },
      { name: 'Explainable AI', mono: 'Xa' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, certifications or achievements on the resume.
 */
export const skillEvidence: Record<string, string[]> = {
  Python: ['Real-Time Telecom Pipeline', 'RAG Pipeline', 'Facial Expression Recognition', 'ML Research Intern'],
  SQL: ['Real-Time Telecom Pipeline', 'Telecom KPI aggregations'],
  'C/C++': ['B.E. ECE — Thapar Institute'],
  JavaScript: ['RAG Pipeline — React frontend'],
  'HTML/CSS': ['RAG Pipeline — React frontend'],
  'Scikit-learn': ['ML Research — Stacking Ensemble'],
  TensorFlow: ['Facial Expression Recognition'],
  Keras: ['Facial Expression Recognition'],
  XGBoost: ['ML Research — Stacking Ensemble'],
  SHAP: ['SHAP Ablation Study', 'ML Research Intern'],
  OpenCV: ['Facial Expression Recognition'],
  CNNs: ['Facial Expression Recognition'],
  'Feature Engineering': ['190+ Feature EEG Pipeline', 'ML Research'],
  'Time-Series Analysis': ['EEG Research', 'Telecom CDR Pipeline'],
  'Explainable AI': ['SHAP Ablation Study', 'ML Research Intern'],
  PostgreSQL: ['Real-Time Telecom Pipeline'],
  Supabase: ['Real-Time Telecom Pipeline'],
  Pandas: ['ML Research', 'Telecom Pipeline'],
  NumPy: ['Facial Expression Recognition', 'ML Research'],
  'Apache Kafka': ['Real-Time Telecom Pipeline'],
  'React.js': ['RAG Pipeline — Hybrid Retrieval'],
  'Node.js': ['RAG Pipeline Backend'],
  FastAPI: ['RAG Pipeline — Hybrid Retrieval'],
  Streamlit: ['Real-Time Telecom Pipeline'],
  Plotly: ['Real-Time Telecom Pipeline'],
  ChromaDB: ['RAG Pipeline — Hybrid Retrieval'],
  Docker: ['Real-Time Telecom Pipeline', 'RAG Pipeline'],
  NGINX: ['RAG Pipeline — Hybrid Retrieval'],
  DSA: ['B.E. ECE — Thapar Institute'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Beginning',
    period: '2023 – Present',
    synopsis: 'Bachelor of Engineering in Electronics and Computer Engineering at Thapar Institute of Engineering and Technology, Patiala.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Engineer',
        description: 'B.E. Electronics and Computer Engineering at Thapar Institute of Engineering and Technology — building a strong CS foundation.',
        tags: ['B.E.', 'ECE', 'TIET'],
        runtime: 'Aug 2023 – Present',
        palette: ocean,
      },
    ],
  },
  {
    number: 2,
    title: 'Into Machine Learning',
    period: '2025 – Present',
    synopsis: "From coursework to real research — diving deep into ML, EEG signal processing, and explainable AI at Thapar's research lab.",
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Researcher',
        description: 'Machine Learning Research Intern at Thapar School of Liberal Arts and Sciences — EEG pipelines, GFT analysis, and neuromarketing ML.',
        tags: ['EEG', 'ML', 'Research', 'SHAP'],
        runtime: 'Apr 2026 – Present',
        palette: violet,
      },
      {
        code: 'S02 E02',
        title: 'The Breakthrough',
        description: 'Achieved Cohen\'s κ = 0.41 and F1 = 0.56 in neuromarketing buy/no-buy prediction — a ~17% improvement over GFT-based baseline.',
        tags: ['XGBoost', 'EMD', 'CEEMDAN', 'LOOCV'],
        runtime: '~17% improvement',
        palette: crimson,
      },
      {
        code: 'S02 E03',
        title: 'The Explainer',
        description: 'IMF-level SHAP ablation identified mid-range IMFs (5–6) as dominant contributors, guiding feature-set reduction.',
        tags: ['SHAP', 'Explainable AI', 'Feature Selection'],
        runtime: 'IMF 5–6 dominant',
        palette: jade,
      },
    ],
  },
  {
    number: 3,
    title: 'Amazon & The National Stage',
    period: '2026',
    synopsis: 'Selected for Amazon ML Summer School 2026 — top 3,000 of 134,000+ applicants across India.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Mentee',
        description: 'Chosen for Amazon ML Summer School 2026, a highly competitive national program with less than 2.3% selection rate.',
        tags: ['Amazon', 'ML Summer School', 'National'],
        runtime: 'Jun–Aug 2026',
        palette: amber,
      },
    ],
  },
  {
    number: 4,
    title: 'Building Real Products',
    period: '2025 – 2026',
    synopsis: 'Three Originals — a real-time data pipeline, a hybrid RAG system, and a deep learning vision model.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The Data Engineer',
        description: 'Real-Time Telecom Data Pipeline — Kafka, PostgreSQL, Supabase, Streamlit dashboard with anomaly detection.',
        tags: ['Kafka', 'PostgreSQL', 'Streamlit', 'Docker'],
        runtime: '2026',
        palette: ocean,
      },
      {
        code: 'S04 E02',
        title: 'The AI Architect',
        description: 'RAG Pipeline — Hybrid Retrieval: BM25 + semantic search, Reciprocal Rank Fusion, React + FastAPI + NGINX + Docker.',
        tags: ['RAG', 'ChromaDB', 'FastAPI', 'React'],
        runtime: '2026',
        palette: crimson,
      },
      {
        code: 'S04 E03',
        title: 'The Vision Builder',
        description: 'Facial Expression Recognition — CNN trained with TensorFlow/Keras, OpenCV preprocessing, real-time webcam inference.',
        tags: ['CNN', 'TensorFlow', 'OpenCV'],
        runtime: '2025',
        palette: jade,
      },
    ],
  },
  {
    number: 5,
    title: "What's Next",
    period: 'Now streaming',
    synopsis: 'MLOps, System Design, and deeper Explainable AI — the next arc of the story.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Next Chapter',
        description: 'Exploring MLOps pipelines, large-scale System Design, and pushing the boundaries of Explainable AI.',
        tags: ['MLOps', 'System Design', 'Explainable AI'],
        runtime: 'In production',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Primary language', title: 'Python', detail: 'ML research, data pipelines, full-stack backends', palette: amber },
  { label: 'Biggest stage', title: 'Amazon ML Summer School', detail: 'Top 3,000 of 134,000+ applicants', palette: crimson },
  { label: 'Research highlight', title: 'EEG + Eye-Tracking ML', detail: 'κ = 0.41, F1 = 0.56 — ~17% improvement', palette: ocean },
  { label: 'AI original', title: 'RAG Hybrid Retrieval', detail: 'BM25 + Semantic + RRF reranking', palette: violet },
  { label: 'Data original', title: 'Telecom Pipeline', detail: 'Kafka → PostgreSQL → Streamlit Dashboard', palette: jade },
  { label: 'XAI work', title: 'SHAP Ablation Study', detail: 'IMF 5–6 dominant contributors identified', palette: amber },
  { label: 'Deep learning', title: 'Facial Expression CNN', detail: 'TensorFlow/Keras + OpenCV real-time', palette: crimson },
  { label: 'ML credential', title: 'DeepLearning.AI × Stanford', detail: 'Supervised + Unsupervised ML (2 certs)', palette: ocean },
  { label: 'Research pipeline', title: '190+ EEG Features', detail: 'Statistical, spectral, nonlinear features', palette: jade },
  { label: 'Current focus', title: 'MLOps & System Design', detail: 'with Explainable AI', palette: violet },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.E. · ECE',
    lines: ['Thapar Institute of Engineering and Technology, Patiala', 'August 2023 – Present'],
    chips: ['Electronics & Computer Engineering'],
  },
  {
    kicker: 'Amazon',
    title: 'ML Summer School',
    lines: ['Top 3,000 of 134,000+ applicants across India', 'Amazon ML Summer School 2026 Mentee'],
    chips: ['Top 2.3%'],
  },
  {
    kicker: 'Research',
    title: 'EEG × Neuromarketing',
    lines: ['190+ statistical, spectral & nonlinear features', 'κ = 0.41, F1 = 0.56 — ~17% over GFT baseline', 'XGBoost · SHAP · EMD · CEEMDAN · LOOCV'],
  },
  {
    kicker: 'Skills',
    title: 'Python first.',
    lines: ['SQL, C/C++, JavaScript, HTML/CSS', 'TensorFlow, Keras, XGBoost, SHAP, OpenCV', 'Kafka, FastAPI, React, Docker, ChromaDB'],
    chips: ['Python', 'TensorFlow', 'FastAPI', 'React', 'Kafka', 'Docker'],
  },
  {
    kicker: 'Projects',
    title: 'Three Originals',
    lines: ['Telecom Pipeline — Kafka → PostgreSQL → Streamlit', 'RAG System — BM25 + Semantic + RRF reranking', 'Facial Expression CNN — Real-time webcam inference'],
  },
  {
    kicker: 'Certified',
    title: '3 Certifications',
    lines: ['DeepLearning.AI & Stanford University (×2)', 'NVIDIA — Getting Started with AI on Jetson Nano'],
  },
  {
    kicker: 'Current mission',
    title: 'Now exploring',
    lines: ['MLOps · System Design · Explainable AI'],
  },
];

export type ProfileId = 'anshul' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'anshul',
    name: 'Anshul',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & Research', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2025–2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
