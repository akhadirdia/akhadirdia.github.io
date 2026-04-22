export interface Publication {
  title: string;
  authors: string;
  journal: string;
  year: number;
  doi: string;
  url: string;
}

export const publications: Publication[] = [
  {
    title: 'Computational image analysis of whole slide images predicts PD-L1 and PFS in immunotherapy-treated non-small cell lung cancer patients',
    authors: 'Dia AK, Ebrahimpour L, Yolchuyeva S, Tonneau M, Lamaze FC, Orain M, et al.',
    journal: 'Journal of Translational Medicine',
    year: 2025,
    doi: '10.1186/s12967-025-06487-2',
    url: 'https://doi.org/10.1186/s12967-025-06487-2',
  },
  {
    title: 'The Cross-Scale Association between Pathomics and Radiomics Features in Immunotherapy-Treated NSCLC Patients: A Preliminary Study',
    authors: 'Dia AK, Ebrahimpour L, Yolchuyeva S, Tonneau M, Lamaze FC, Orain M, et al.',
    journal: 'Cancers',
    year: 2024,
    doi: '10.3390/cancers16020348',
    url: 'https://doi.org/10.3390/cancers16020348',
  },
  {
    title: 'Walk-Through Corrosion Assessment of Slurry Pipeline Using Machine Learning',
    authors: 'Dia AK, Bosca AG, Ghazzali N.',
    journal: 'International Journal of Corrosion',
    year: 2024,
    doi: '10.1155/2024/9427747',
    url: 'https://doi.org/10.1155/2024/9427747',
  },
  {
    title: 'Unsupervised neural network for data-driven corrosion detection of a mining pipeline',
    authors: 'Dia AK, Ghazzali N, Bosca AG.',
    journal: 'The International FLAIRS Conference Proceedings',
    year: 2022,
    doi: '10.32473/flairs.v35i.130688',
    url: 'https://doi.org/10.32473/flairs.v35i.130688',
  },
];
