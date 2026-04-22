export interface SkillGroup {
  category: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'ML & AI',
    skills: [
      'Machine Learning', 'Deep Learning', 'XGBoost', 'LightGBM', 'PyTorch',
      'scikit-learn', 'Time Series', 'NLP', 'LLM Integration', 'Claude API',
      'LangChain', 'Hugging Face', 'RAG', 'Multi-agent Systems', 'Anomaly Detection',
    ],
  },
  {
    category: 'Languages & Frameworks',
    skills: [
      'Python', 'R', 'SQL', 'TypeScript', 'STATA',
      'FastAPI', 'Pydantic', 'Pandas', 'NumPy', 'Flask', 'Next.js',
    ],
  },
  {
    category: 'Data Engineering',
    skills: [
      'PySpark', 'Airflow', 'ETL / ELT', 'PostgreSQL', 'SQLite',
      'Feature Engineering', 'Data Quality', 'Data Pipelines',
    ],
  },
  {
    category: 'MLOps & DevOps',
    skills: [
      'MLflow', 'DVC', 'Evidently AI', 'Docker', 'GitHub Actions',
      'CI/CD', 'Azure DevOps', 'Databricks', 'REST APIs',
    ],
  },
  {
    category: 'Visualization & BI',
    skills: [
      'Power BI', 'Streamlit', 'Plotly', 'Tableau', 'Matplotlib', 'ggplot2',
    ],
  },
];
