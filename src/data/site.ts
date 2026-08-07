// Single source of truth for all portfolio content.
// Edit this file to update the site — components render from here.

export const profile = {
  name: "Wen Xuan (Alex)",
  role: "Machine Learning Data Scientist",
  headline:
    "From consulting decks to production pipelines, with the same respect for evidence",
  tagline: "Applied ML & Agentic Workflows",
  intro:
    "I build machine learning systems end to end — the pipeline, the registry, and the monitoring around the model, not just the notebook.",
  resumeUrl: "/resume.pdf",
  links: {
    linkedin: "https://www.linkedin.com/in/wenxuanalex/",
    github: "https://github.com/wenxuanalex",
    email: "mailto:wenxuanalex@gmail.com",
  },
};

export const navItems = [
  { label: "My Story", href: "/#story" },
  { label: "Work", href: "/#work" },
  { label: "Skills", href: "/#skills" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
];

export const story = {
  heading: "From consulting to machine learning",
  paragraphs: [
    "I spent my first four years in strategy and technology consulting — Accenture, McKinsey, then Tri-Sector Associates — building the models that decide where money goes. Market sizing, pricing, cost structures. The work taught me that a number is only as useful as the argument around it.",
    "I moved into machine learning because I wanted to build the systems that produce those numbers, not just the slides that present them. Now I'm reading for a Master of IT in Business on the AI track at SMU, and running technical discovery for enterprise Generative AI products at HTX.",
    "What carried over is a bias toward evidence. I care about out-of-time validation, calibration, and drift — the parts that decide whether a model survives contact with production. Most of what I build ships as a pipeline with a registry and a monitoring story attached, because that's what makes a model trustworthy rather than merely accurate.",
  ],
};

export type ProjectSection = {
  heading: string;
  body: string[];
  todo?: boolean;
};

export type Project = {
  slug: string;
  title: string;
  blurb: string;
  context: string;
  tags: string[];
  repo?: string;
  featured?: boolean;
  sections: ProjectSection[];
};

export const projects: Project[] = [
  {
    slug: "agentic-frameworks-sec",
    title: "Agentic Frameworks for Financial Q&A",
    blurb:
      "A controlled comparison of LangGraph, CrewAI and LlamaIndex answering questions over SEC 10-K and 10-Q filings — same corpus, same retriever, same evaluation set, so the framework is the only variable.",
    context: "Solo · Generative AI with LLMs, SMU MITB · 2026",
    tags: ["LangGraph", "CrewAI", "LlamaIndex", "RAG", "Chroma"],
    repo: "https://github.com/wenxuanalex/GenAI-with-LLMs",
    featured: true,
    sections: [
      {
        heading: "Problem",
        body: [
          "Agentic frameworks are marketed on capability, not evidence. LangGraph, CrewAI and LlamaIndex all claim to handle multi-step reasoning over documents, but published comparisons rarely hold the data constant — different corpora, different retrievers, different prompts. The result is a choice made on vibes.",
          "SEC filings make the question concrete. A 10-K is long, densely cross-referenced, and full of numbers that must be retrieved exactly rather than paraphrased. If a framework is going to break, financial question-answering is where it shows.",
        ],
      },
      {
        heading: "Approach",
        body: [
          "I built a shared substrate first: a common SEC corpus, cleaned and chunked into sec_chunks.jsonl, persisted into a Chroma vector store, with config.py and shared_retriever.py centralising every setting the frameworks would otherwise each define differently.",
          "On top of that I ran a four-stage progression. Baseline RAG established the floor with straightforward dense retrieval. Advanced RAG added metadata extraction, query rewriting, hybrid retrieval and reranking. Then the same task was implemented three times over — once each in LangGraph, LlamaIndex and CrewAI — with multi-step reasoning and tool use.",
          "Because every implementation drew from the same retriever and the same evaluation set, differences in the results are attributable to orchestration rather than to data or retrieval luck.",
        ],
      },
      {
        heading: "Outcome",
        body: [
          "LangGraph achieved the highest correctness at 0.665 on the shared evaluation set. More useful than the ranking was the shape of the failures: the graph-based model made control flow explicit, which made wrong answers traceable to a specific node rather than lost inside an agent conversation.",
          "The parity harness is the durable artifact. Swapping in a fourth framework is a matter of implementing one notebook against the existing retriever, not rebuilding the experiment.",
        ],
      },
    ],
  },
  {
    slug: "customer-churn-mlops",
    title: "Customer Churn MLOps Pipeline",
    blurb:
      "A weekly churn classifier for a UK online retailer, shipped as a full MLOps system: medallion data flow, Optuna-tuned models in an MLflow registry, gated promotion, and drift monitoring in production.",
    context: "Group project · Machine Learning Engineering, SMU MITB · 2026",
    tags: ["Airflow", "MLflow", "Docker", "Optuna", "PySpark"],
    repo: "https://github.com/wenxuanalex/machine-learning-engineering",
    sections: [
      {
        heading: "Problem",
        body: [
          "Flagging at-risk customers is only valuable if it happens on a schedule the business can act on, with a model someone is willing to trust. A one-off notebook that scores 0.8 AUC answers neither requirement.",
          "The dataset was UCI Online Retail: 541,000 transactions across December 2010 to December 2011, which reduced to 3,309 customers with enough history to model. Small enough to overfit easily, messy enough to leak if the pipeline is careless.",
        ],
      },
      {
        heading: "Approach",
        body: [
          "The data flows through a Bronze/Silver/Gold medallion architecture — raw parquet, then cleaned, then a Gold feature store with train/validation/test splits. Every transformer fits on training data only, so the split boundary is enforced structurally rather than by discipline.",
          "Training compares logistic regression, random forest and gradient boosting with Optuna hyperparameter search, logging every run to MLflow. The best run is registered, and promote.py moves it Staging → Production only if AUC improves on the incumbent — a champion/challenger gate rather than a manual decision.",
          "Two Airflow DAGs run the system: churn_data_pipeline monthly for the data refresh, churn_weekly_inference weekly for scoring. Batch inference writes CSV and parquet; an optional MLflow serving container exposes the same Production model over REST at /invocations.",
        ],
      },
      {
        heading: "Challenges",
        body: [
          "The hard part was not accuracy but knowing when the model had gone stale. Monitoring computes PSI across features, plus bias drift, fairness metrics and SHAP attribution summaries, so a degrading model surfaces as a drift signal rather than as a quiet decline in business outcomes months later.",
          "Reproducibility across a group also meant containerising everything — the entire stack, including MLflow and Airflow, comes up through Docker Compose so a teammate reproduces the pipeline with one command rather than a README of environment fixes.",
        ],
      },
      {
        heading: "Outcome",
        body: [
          "The result is a system with a retraining path, a promotion gate, a serving surface and a monitoring story — the parts that usually get deferred. It is the closest thing in my portfolio to how a model actually lives in production.",
        ],
      },
    ],
  },
  {
    slug: "redacted-late-delivery",
    title: "[redacted] Late-Delivery Prediction",
    blurb:
      "A config-driven pipeline predicting late deliveries from logistics and feedback data, built for the [redacted] Batch 24 technical assessment — calibrated XGBoost, Optuna tuning, and leakage prevention enforced by the architecture.",
    context: "Solo · [redacted], Batch 24 assessment · 2026",
    tags: ["XGBoost", "Optuna", "scikit-learn", "SQLite"],
    repo: "https://github.com/wenxuanalex/[redacted]",
    sections: [
      {
        heading: "Problem",
        body: [
          "The brief was to predict late deliveries from a SQLite database of delivery records and customer feedback, and to deliver it as a runnable pipeline rather than a notebook — assessed on engineering judgement as much as on model performance.",
        ],
      },
      {
        heading: "Approach",
        body: [
          "Everything is driven by config.yaml: paths, split ratios, model parameters, feature thresholds. No constant is buried in a module, so the whole pipeline is re-runnable against a different configuration without editing code.",
          "The medallion structure maps one layer to one module. bronze_layer.py ingests the deliveries and feedback tables with zero transformation. silver_layer.py handles type casting, sentinel removal, deduplication, normalisation, imputation and timestamp filtering. gold_layer.py derives the target, engineers features, and applies a stratified 70/15/15 split.",
          "Model training runs Optuna over XGBoost, then calibrates the output probabilities — for a late-delivery flag the ranking matters less than whether a predicted 0.7 actually means 70%, since the threshold drives an operational decision.",
        ],
      },
      {
        heading: "Challenges",
        body: [
          "The leakage risk sits in the Gold layer, where feature engineering and splitting meet. Both the one-hot encoder and the high-value-parcel threshold are fitted exclusively on the training split and then serialised alongside the model, so inference cannot see statistics derived from validation or test data.",
          "Making that structural rather than procedural was the point: the split happens inside the same module that fits the transformers, so there is no ordering a future contributor can get wrong.",
        ],
      },
      {
        heading: "Outcome",
        body: [
          "The pipeline runs end to end from bash run.sh, writing a serialised calibrated model, the fitted encoder, and test-set metrics to results/evaluation.json. A decision log documents each modelling choice against the alternatives considered.",
        ],
      },
    ],
  },
  {
    slug: "credit-default-pipeline",
    title: "Automated Credit-Default Prediction Pipeline",
    blurb:
      "An end-to-end PySpark and Airflow pipeline on a medallion architecture, training a LightGBM credit-default model to 0.817 out-of-time AUC with a versioned MLflow model registry.",
    context: "Machine Learning Engineering, SMU MITB · 2026 · private repository",
    tags: ["PySpark", "Airflow", "LightGBM", "MLflow"],
    sections: [
      {
        heading: "Problem",
        body: [
          "Credit-default models are judged on how they behave on customers the model has never seen, in a period it was never trained on. Out-of-time validation, not a random test split, is the honest measure.",
        ],
      },
      {
        heading: "Approach",
        body: [
          "The pipeline runs on PySpark over a medallion architecture, orchestrated in Airflow, training LightGBM with the resulting models versioned in an MLflow registry.",
        ],
      },
      {
        heading: "Outcome",
        body: [
          "The model reached 0.817 out-of-time AUC, a 63% lift over the baseline, with the selected version registered and versioned in MLflow.",
        ],
      },
      {
        heading: "Notes",
        todo: true,
        body: [
          "This project lives in a private repository, so this page is written from summary detail only. Worth adding: the feature engineering approach, how the out-of-time window was chosen, what the 63% lift is measured against, and why LightGBM over the alternatives.",
        ],
      },
    ],
  },
  {
    slug: "credit-card-optimiser",
    title: "Credit Card Optimiser",
    blurb:
      "A RESTful FastAPI service managing user wallet states with modular CRUD logic, integrating the OpenAI API for recommendation synthesis and Pytest for CI/CD readiness.",
    context: "Modern Software Solutions, SMU MITB · 2026 · private repository",
    tags: ["FastAPI", "OpenAI", "Pytest", "Git"],
    sections: [
      {
        heading: "Problem",
        body: [
          "Choosing which card to use for a given purchase is a small optimisation problem that nobody wants to solve manually at the counter. The service models a user's wallet and reasons over it.",
        ],
      },
      {
        heading: "Approach",
        body: [
          "A RESTful API built with FastAPI manages wallet state through CRUD operations over a modular Python architecture, with the OpenAI API integrated for recommendation synthesis. Automated unit tests in Pytest and Git-based version control keep the service CI/CD-ready.",
        ],
      },
      {
        heading: "Notes",
        todo: true,
        body: [
          "This project lives in a private repository, so this page is written from summary detail only. Worth adding: what the recommendation logic actually optimises for, how the LLM output is constrained or validated, and the data model behind wallet state.",
        ],
      },
    ],
  },
];

export const skills = [
  {
    category: "Languages & Data",
    items: ["Python", "SQL", "PySpark", "Pandas", "NumPy"],
  },
  {
    category: "Machine Learning",
    items: ["Applied ML", "XGBoost / LightGBM", "Optuna", "Calibration", "SHAP"],
  },
  {
    category: "GenAI & Agents",
    items: [
      "Agentic Workflows",
      "RAG",
      "Fine-tuning",
      "LLM-as-a-Judge",
      "LangGraph · CrewAI",
    ],
  },
  {
    category: "Pipelines & MLOps",
    items: ["Airflow", "MLflow", "Medallion", "Docker", "Drift Monitoring"],
  },
  {
    category: "Engineering",
    items: ["FastAPI", "REST APIs", "Pytest", "Git", "CI/CD"],
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

export const education = [
  {
    school: "Singapore Management University",
    degree: "Master of IT in Business (AI Track)",
    period: "Aug 2025 – Mar 2027",
    detail:
      "CGPA 3.83/4.00. Applied Machine Learning, Generative AI with Large Language Models, Machine Learning Engineering, Modern Software Solutions.",
  },
  {
    school: "Nanyang Technological University",
    degree: "B. Communication Studies",
    period: "Aug 2017 – May 2021",
    detail: "Communications Research · Honours with Distinction.",
  },
];
