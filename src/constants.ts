export const PERSONAL_INFO = {
  name: 'Subhrajit Behera',
  role: 'Data Engineer',
  tagline: 'Building scalable, reliable, and analytics-ready data solutions',
  title: 'Data Engineer',
  specialization: 'PySpark | Azure Data Factory | Microsoft Fabric',
  location: 'Bengaluru, India',
  email: 'subhrajitbehera6370@gmail.com',
  linkedin: 'https://www.linkedin.com/in/subhrajit-behera',
  github: 'https://github.com/SubhrjiT',
  bio: 'Data Engineer with 3+ years of experience building scalable ETL/ELT pipelines using Azure Data Factory, Databricks (PySpark), and Microsoft Fabric. Skilled in designing data architectures, optimizing workflows, and enabling analytics-ready datasets.',
};

export const SERVICES = [
  {
    title: 'Data Pipeline Development',
    description: 'Scalable ETL/ELT pipelines using ADF & Databricks',
  },
  {
    title: 'Data Architecture',
    description: 'Design Azure-based data platforms (ADLS, Delta Lake)',
  },
  {
    title: 'Data Transformation',
    description: 'Clean, process, and prepare analytics-ready data',
  },
  {
    title: 'Workflow Automation',
    description: 'Scheduling, monitoring, logging, error handling',
  },
  {
    title: 'Performance Optimization',
    description: 'Tune PySpark jobs & pipelines (cost + speed)',
  },
  {
    title: 'Data Modeling',
    description: 'Design fact/dimension models for analytics',
  },
  {
    title: 'Data Integration',
    description: 'Connect APIs, databases, and multiple data sources',
  },
  {
    title: 'Data Quality & Governance',
    description: 'Validation, schema control, audit frameworks',
  },
  {
    title: 'CI/CD for Data Pipelines',
    description: 'Deploy pipelines using Azure DevOps',
  },
  {
    title: 'Analytics Enablement',
    description: 'Prepare datasets for BI dashboards & reporting',
  },
];

export const EXPERIENCE = [
  {
    role: 'Associate Data Engineer',
    company: 'Nexvia Software Technologies',
    period: 'Nov 2023 – Present',
    current: true,
  },
  {
    role: 'Trainee Engineer',
    company: 'Nexvia Software Technologies',
    period: 'May 2023 – Oct 2023',
    current: false,
  },
];

export const EDUCATION = [
  {
    degree: 'B.Tech in Computer Science and Engineering',
    school: 'C. V. Raman Global University, Bhubaneswar',
    year: '2023',
  },
  {
    degree: 'Diploma in Information Technology',
    school: 'Uma Charan Patnaik Engineering School, Berhampur',
    year: '2020',
  },
];

export interface Project {
  id: string;
  title: string;
  period: string;
  description: string;
  techStack: string[];
  impact: string[];
  architecture?: string;
  featured?: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: 'waste-recycling-insights',
    title: 'Waste and Recycling Data Insights',
    period: 'Aug 2024 – Present',
    description: 'Configuration-driven data pipelines for municipal waste and recycling datasets, designed for scalability and ease of maintenance.',
    techStack: ['Azure Data Factory', 'Databricks', 'PySpark', 'Azure Data Lake Storage (ADLS)'],
    architecture: 'Implemented Medallion Architecture (Bronze, Silver, Gold Layers) to ensure data quality and progressive refinement.',
    impact: [
      'Automated ingestion and transformation workflows, reducing manual effort by 80%',
      'Improved data processing performance by 40% using optimized Spark jobs',
      'Enabled real-time-ish reporting for municipal stakeholders'
    ],
    featured: true,
  },
  {
    id: 'multi-source-integration',
    title: 'Multi-Source Data Integration Platform',
    period: '2023 - 2024',
    description: 'A unified data model platform integrating diverse data sources into a single source of truth for enterprise-level reporting.',
    techStack: ['Azure Synapse', 'Azure SQL', 'Control-M', 'Python'],
    impact: [
      'Successfully integrated 15+ disparate data sources',
      'Reduced data inconsistency across departments by 60%',
      'Streamlined monthly reporting cycle from 5 days to 4 hours'
    ],
    featured: true,
  },
  {
    id: 'monitoring-alerting-system',
    title: 'Automated Monitoring and Alerting System',
    period: '2023',
    description: 'A robust monitoring framework designed to proactively detect pipeline failures and data quality issues.',
    techStack: ['Azure Monitor', 'Log Analytics', 'Python', 'Logic Apps'],
    impact: [
      'Reduced pipeline downtime by 50% through proactive alerting',
      'Improved mean-time-to-recovery (MTTR) by 75%',
      'Enhanced system visibility for the operations team'
    ],
    featured: true,
  },
];

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  tags: string[];
  content: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: 'medallion-architecture-best-practices',
    title: 'Best Practices for Medallion Architecture in Azure Databricks',
    excerpt: 'Learn how to structure your Bronze, Silver, and Gold layers for maximum performance and cost efficiency.',
    date: '2024-03-15',
    readingTime: '6 min read',
    tags: ['Data Engineering', 'Azure', 'Databricks'],
    content: `
# Medallion Architecture: A Deep Dive

The Medallion architecture is a data design pattern that aims to incrementally improve the structure and quality of data as it flows through each layer of the lakehouse.

## The Layers

### Bronze (Raw)
The Bronze layer is where we land all the data from external source systems. The data structure in this layer corresponds exactly to the source system.

### Silver (Filtered, Cleaned, Augmented)
In the Silver layer, the data from the Bronze layer is matched, merged, conformed and cleaned (e.g. invalid records are removed) so that the Silver layer can provide an "enterprise view" of all its key entities.

### Gold (Aggregated)
Data in the Gold layer is organized in consumption-ready "project-specific" databases. The Gold layer is for reporting and uses more de-normalized and read-optimized data models.

## Key Benefits
- **Data Integrity**: Schema enforcement and evolution support.
- **Support for Schema-on-Read**: Allows for flexible data exploration.
- **Incremental Processing**: Efficiently process only new data.
    `,
  },
  {
    id: '2',
    slug: 'optimizing-pyspark-shuffling',
    title: 'Optimizing PySpark: Handling the Dreaded Shuffle',
    excerpt: 'Deep dive into shuffle operations in Spark and how to minimize data movement across the cluster.',
    date: '2024-02-28',
    readingTime: '8 min read',
    tags: ['PySpark', 'Performance', 'Big Data'],
    content: `
# Handling Spark Shuffling

Shuffle is the process of redistributing data across partitions (and consequently across nodes) which is necessary when certain transformations require data from other partitions.

## Why is Shuffle Expensive?
- Disk I/O
- Network I/O
- Serialization/Deserialization

## Optimization Techniques
1. **Filter Early**: Reduce data size before a join.
2. **Broadcast Joins**: For small tables, broadcast them to all executors.
3. **Bucketized Joins**: Pre-shuffle data by bucketing it on join keys.
    `,
  },
];
