export interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: 'data-observability-agent',
    description:
      'AI agent that connects to any SQL database and automatically runs the 5 observability pillars (freshness, volume, distribution, schema, lineage) with statistical anomaly detection. RCA agent powered by Claude Sonnet delivers root-cause analysis in under 30 seconds.',
    tags: ['Python', 'Agno', 'Claude API', 'SQLAlchemy', 'Streamlit', 'SQLite'],
    github: 'https://github.com/akhadirdia/data-observability-agent',
    featured: true,
  },
  {
    title: 'responsible-ai-toolkit',
    description:
      'Modular responsible-AI framework covering bias detection (Fairlearn), LLM red teaming (40+ attack categories, OWASP LLM Top 10), AI Act / Loi 25 compliance checker, automatic model card generation, and cryptographic decision audit trail.',
    tags: ['Python', 'Fairlearn', 'Giskard', 'MLflow', 'Claude API', 'Presidio'],
    github: 'https://github.com/akhadirdia/responsible-ai-toolkit',
    featured: true,
  },
  {
    title: 'prodml-monitor',
    description:
      'Production ML monitoring system with automatic data drift and concept drift detection via Evidently AI (KS, PSI, Wasserstein). Graduated alert system (ok / warning / critical) and interactive Streamlit dashboard with 30-day drift timeline.',
    tags: ['Python', 'Evidently AI', 'scikit-learn', 'Streamlit', 'Plotly', 'SQLite'],
    github: 'https://github.com/akhadirdia/prodml-monitor',
    featured: false,
  },
  {
    title: 'findata-dq-engine',
    description:
      'Financial data quality framework across 12 dimensions (completeness, conformity, privacy, business rules…) with Isolation Forest anomaly detection (≥85% recall), LLM-driven remediation via Claude API, FastAPI endpoint, and Streamlit heatmap dashboard.',
    tags: ['Python', 'scikit-learn', 'FastAPI', 'Claude API', 'Streamlit', 'Pydantic'],
    github: 'https://github.com/akhadirdia/findata-dq-engine',
    featured: false,
  },
  {
    title: 'NexusAgents',
    description:
      'Full-stack bilingual SaaS marketplace for AI agent systems — multi-agent orchestration, memory management, task chaining, and external tool integration. Built with Next.js 15 App Router, PostgreSQL via Prisma, Supabase Auth, and Stripe.',
    tags: ['Next.js', 'TypeScript', 'Claude API', 'PostgreSQL', 'Stripe', 'Supabase'],
    github: 'https://github.com/akhadirdia',
    featured: false,
  },
];
