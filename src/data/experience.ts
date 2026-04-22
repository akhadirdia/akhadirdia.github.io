export type ExperienceType = 'industry' | 'research' | 'policy';

export interface Experience {
  title: string;
  org: string;
  period: string;
  location: string;
  type: ExperienceType;
  bullets: string[];
  stack?: string[];
}

export const experiences: Experience[] = [
  {
    title: 'Data Scientist',
    org: 'Bornes Québec',
    period: 'Feb. 2022 – Present',
    location: 'Québec, Canada',
    type: 'industry',
    bullets: [
      'Built an energy consumption forecasting model (LSTM + XGBoost + Prophet) enabling optimal battery sizing — saving an average of <strong>$25,000/year</strong> per client across 100+ municipalities, reducing peak consumption by <strong>28%</strong>.',
      'Designed an EV adoption forecasting model (time series + socioeconomic variables) guiding the strategic deployment of 150+ charging stations, cutting infrastructure over/under-sizing risk by <strong>40%</strong>.',
      'Developed an EV recommendation model (multi-class XGBoost) reaching <strong>89% accuracy</strong>, integrated into a web platform for fleet electrification planning.',
      'Deployed 4 ML models to production via REST APIs (FastAPI, Docker) with continuous drift monitoring (Evidently AI) and CI/CD pipelines — maintaining <strong>99.2% uptime</strong> over 12 months.',
      'Built end-to-end data pipelines processing <strong>7M+ energy data points monthly</strong> in Python and PySpark, cutting data preparation time by 60%.',
    ],
    stack: ['Python', 'XGBoost', 'PyTorch', 'FastAPI', 'Docker', 'MLflow', 'PySpark', 'Evidently AI', 'LangChain', 'Claude API', 'Power BI', 'Streamlit'],
  },
  {
    title: 'AI Research Professional',
    org: 'CHUL & UQTR',
    period: 'Mar. 2023 – Sep. 2024',
    location: 'Québec, Canada',
    type: 'research',
    bullets: [
      'Developed ML models on clinical and biological data: computational pathology (whole slide image analysis), RNA-seq, scRNA-seq, and spatial transcriptomics.',
      'Applied deep learning to identify cellular phenotypes and molecular signatures predictive of immunotherapy response in NSCLC patients.',
      'Collaborated with oncologists, biologists, and bioinformaticians — contributed to <strong>3 peer-reviewed publications</strong> including in the Journal of Translational Medicine.',
    ],
    stack: ['Python', 'PyTorch', 'scikit-learn', 'R', 'Pandas', 'NumPy'],
  },
  {
    title: 'Statistician / Data Analyst',
    org: 'LAPD — Université Cheikh Anta Diop',
    period: '2019 – 2022',
    location: 'Dakar, Senegal',
    type: 'policy',
    bullets: [
      'Conducted advanced statistical analyses (multivariate regression, factor analysis, clustering, econometrics) on 200,000+ observation datasets from projects funded by ECOWAS, IDRC, and the World Bank — producing macroeconomic indicators used in 8 public policy reports.',
      'Automated quality controls on multimodal databases with R and Python scripts, cutting validation time by <strong>65%</strong>.',
      'Applied ML methods (clustering, dimensionality reduction, classification) to build composite socioeconomic indicators for 3 international organisations.',
    ],
    stack: ['STATA', 'Python', 'R', 'Pandas', 'scikit-learn'],
  },
  {
    title: 'Statistician / Data Analyst',
    org: 'OQSF — Observatoire de la Qualité des Services Financiers',
    period: 'Apr. – Dec. 2019',
    location: 'Dakar, Senegal',
    type: 'policy',
    bullets: [
      'Processed and analysed data from 3 national surveys on financial service quality covering 10,000+ respondents, cutting deliverable production time by <strong>50%</strong>.',
      'Built an interactive web dashboard for tracking the financial price index, adopted as the reference tool by OQSF teams for quarterly reporting.',
    ],
    stack: ['Python', 'STATA', 'SQL', 'Flask', 'Matplotlib'],
  },
];
