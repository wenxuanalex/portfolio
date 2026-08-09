// Single source of truth for all portfolio content.
// Edit this file to update the site — components render from here.

export const profile = {
  name: "Wen Xuan (Alex)",
  role: "AI Engineer",
  location: "Singapore",
  headline: "I build GenAI systems, and the evidence that they work",
  // Used by the social card (scripts/og.mjs), where keywords earn their place.
  tagline: "Agentic Workflows · RAG · Evaluation",
  intro:
    "At HTX I run technical discovery on an enterprise speech-to-text and GenAI product for Ministry of Home Affairs agencies — mostly working out what these systems can really do before anyone commits to them. Before that, four years in consulting at Accenture, McKinsey and Tri-Sector. I build agentic workflows and retrieval pipelines, and I'd sooner show you an evaluation than a demo.",
  status: "SMU MITB (AI track), graduating Mar 2027 · Open to AI Engineer roles",
  resumeUrl: "/resume.pdf",
  links: {
    linkedin: "https://www.linkedin.com/in/wenxuanalex/",
    github: "https://github.com/wenxuanalex",
    email: "mailto:wenxuanalex@gmail.com",
  },
};

export const navItems = [
  { label: "Work", href: "/#work" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
];

// Not rendered — the My Story section is off the homepage for now. Kept here,
// along with Story.astro, so it can be restored by re-adding <Story /> to
// src/pages/index.astro and its nav entry above.
export const story = {
  heading: "Why I build this way",
  paragraphs: [
    "I spent four years in strategy and technology consulting — Accenture, McKinsey, then Tri-Sector Associates — building the models that decided where money went. Pricing, market sizing, cost structures. The work taught me that a number is only worth what the argument behind it can survive, and that the person presenting it is accountable when it's wrong.",
    "That's the instinct I brought to AI engineering. A language model is a superb interface and an unreliable authority, so I keep it away from decisions that have to be right: deterministic logic computes the answer, the model explains it, and something measurable proves the arrangement works. Most of what's below is an argument about where that line belongs — and the evaluation harness or fallback path that holds it there.",
  ],
};

export type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
  /** Light-background artwork needs a pale plate to sit on the dark canvas. */
  plate?: boolean;
};

export type ProjectSection = {
  heading: string;
  body: string[];
  image?: ProjectImage;
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
  /** Doubles as the Work card thumbnail and the project page hero. */
  hero?: ProjectImage;
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
    slug: "cardtrack",
    title: "CardTrack",
    blurb:
      "A credit-card rewards optimiser for Singapore: log a purchase, get the card that earns you the most, and an explanation of why. Deterministic reward logic decides; the LLM only explains.",
    context:
      "Lead developer · seven-person team · Modern Software Solutions, SMU MITB · 2026",
    tags: ["FastAPI", "AWS EC2", "Docker", "GitHub Actions", "OpenAI"],
    repo: "https://github.com/SMU-MITB-IS631-Project/IS631-group-project",
    hero: {
      src: "/images/cardtrack-hero.webp",
      alt: "Four CardTrack app screens: new transaction entry, recommended card with explanation, spending dashboard, and card bonus detail",
    },
    sections: [
      {
        heading: "Problem",
        body: [
          "Singaporean cardholders routinely carry three or four cards with overlapping reward structures — base rates, bonus categories, minimum spend thresholds, reward caps, each changing without notice. Working out which card to use for a given purchase is a small optimisation problem, and nobody wants to solve it at the counter.",
          "The team built a web app that maintains a live catalogue of card terms, lets a user assemble their own wallet from it, and answers one question well: for this amount, in this category, on this channel — which card, and how much do I earn?",
        ],
      },
      {
        heading: "What I owned",
        body: [
          "Seven of us built CardTrack across fourteen epics of one-week sprints. I was one of the lead developers and the repository manager, and closed the most code of anyone on the team — 62 commits, +7,679 and −2,450 lines.",
          "My scope was four things: the Card Wallet Management APIs, the AI-driven recommendation engine API, the CI/CD pipeline, and the deployment onto AWS. Teammates owned the database design and SQLAlchemy models, Cognito authentication and security logging, the reward-calculation rules, the AI explanation service, and the React frontend — the sections below stay inside my half of that line.",
          "I also set up and configured Git for the team: branch strategy, protected main, and the pull-request flow that the CI pipeline later hooked into.",
        ],
        image: {
          src: "/images/cardtrack-architecture.webp",
          alt: "CardTrack architecture: web UI calling a FastAPI backend split into authentication, core services and recommendation engine over a SQLite database",
          caption:
            "The team's system architecture. I built the recommendation engine and the wallet APIs inside Core Services.",
          plate: true,
        },
      },
      {
        heading: "The recommendation API",
        body: [
          "The wallet APIs were the foundation: create a profile, add cards from the catalogue into a personal wallet, log transactions against them. Straightforward CRUD, but it defines the state everything else reasons over, so the contracts had to be right before any recommendation logic could sit on top.",
          "The recommendation engine is the API I'm most attached to, and the reason is an ordering constraint rather than a clever model. It computes ranked recommendations from database-verified card rules first — rates, bonus categories, minimum spend, caps — and only passes those verified results to the AI service for explanation. The language model never picks the card.",
          "That ordering is what makes the feature defensible: a wrong answer can only come from rules a teammate wrote tests against, never from a model inventing a reward rate. My teammates supplied the reward-calculation and bonus-eligibility logic the engine calls, and built the explanation service it hands off to; my part was the API that enforces the sequence between them.",
        ],
      },
      {
        heading: "Shipping it",
        body: [
          "This is the part I owned end to end. Continuous integration runs on every pull request — clean environment, dependencies installed, the full suite with coverage checks before anything merges. It doesn't write the tests, but it means nobody merges past them.",
          "Continuous deployment picks up from there: a multi-stage Docker build containerises the frontend assets and backend runtime together, pushes the image to Docker Hub, and redeploys onto AWS EC2. Configuration and secrets are injected from GitHub Secrets, persistent storage is mounted on the host, and migrations apply at service startup so schema and code never drift apart.",
          "Automated deployment straight to production isn't normally wise, and we knew it. With no live users the trade was worth taking: it bought the team same-day iteration and gave me real practice with secret management and rollback-aware container operations, which a staging gate would have deferred to someone else.",
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
    slug: "redacted-late-delivery",
    title: "[redacted] Late-Delivery Prediction",
    blurb:
      "A config-driven pipeline predicting late deliveries from logistics and feedback data, built for the [redacted] Batch 24 technical assessment — calibrated XGBoost, Optuna tuning, and leakage prevention enforced by the architecture.",
    context: "Solo · [redacted], Batch 24 assessment · 2026",
    tags: ["XGBoost", "Optuna", "scikit-learn", "SQLite"],
    repo: "https://github.com/wenxuanalex/[redacted]",
    hero: {
      src: "/images/redacted-hero.webp",
      alt: "Stacked bar chart of deliveries by booking month split into late and on-time, with a late-rate line rising from about 9% to 14% against a mean of 11%",
    },
    sections: [
      {
        heading: "Problem",
        body: [
          "The brief was to predict late deliveries from a SQLite database of delivery records and customer feedback, and to deliver it as a runnable pipeline rather than a notebook — assessed on engineering judgement as much as on model performance.",
          "The class balance above sets the difficulty. Late deliveries average 11% of volume and the rate climbs steadily across the six booking months in the data, so accuracy is a useless metric here — a model that predicts \"on time\" every time scores 89%.",
        ],
      },
      {
        heading: "Approach",
        body: [
          "Everything is driven by config.yaml: paths, split ratios, model parameters, feature thresholds. No constant is buried in a module, so the whole pipeline is re-runnable against a different configuration without editing code.",
          "The medallion structure maps one layer to one module. bronze_layer.py ingests the deliveries and feedback tables with zero transformation — [redacted] records across 18 raw columns. silver_layer.py handles type casting, sentinel removal, deduplication, normalisation, imputation and timestamp filtering, leaving roughly [redacted] rows. gold_layer.py derives the target, engineers 22 model-ready features, and applies a stratified 70/15/15 split.",
          "Model training runs Optuna over XGBoost, then calibrates the output probabilities — for a late-delivery flag the ranking matters less than whether a predicted 0.7 actually means 70%, since the threshold drives an operational decision.",
        ],
        image: {
          src: "/images/redacted-pipeline.webp",
          alt: "Medallion pipeline diagram: SQLite source, Bronze raw snapshot, ETL clean and validate, Silver cleaned data, ETL engineer and split, Gold model-ready features",
          caption:
            "One layer, one module — [redacted] raw records to 22 model-ready features.",
          plate: true,
        },
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
          "The honest result is that the tuned XGBoost did not beat the linear baseline. On the test set it reached 0.254 average precision against logistic regression's 0.269, both well clear of the 0.11 no-skill floor. On a signal this weak and this imbalanced, gradient boosting bought nothing over a well-specified linear model — worth knowing before anyone spends compute on it.",
        ],
        image: {
          src: "/images/redacted-pr-curve.webp",
          alt: "Precision-recall curve on the test set comparing XGBoost at 0.254 average precision with logistic regression at 0.269, against a no-skill baseline of 0.11",
          caption:
            "Precision–recall, test set. The linear baseline edges the tuned model.",
          plate: true,
        },
      },
    ],
  },
];

export const skills = [
  {
    category: "GenAI & Agents",
    items: [
      "LangGraph · CrewAI",
      "LlamaIndex",
      "Agentic Workflows",
      "Fine-tuning",
      "Prompt Guardrails",
    ],
  },
  {
    category: "Retrieval & Eval",
    items: [
      "RAG",
      "Chroma",
      "Hybrid Retrieval",
      "Reranking",
      "LLM-as-a-Judge",
    ],
  },
  {
    category: "Engineering",
    items: ["FastAPI", "REST APIs", "Docker", "CI/CD", "AWS"],
  },
  {
    category: "Pipelines & MLOps",
    items: ["Airflow", "MLflow", "Medallion", "PySpark", "Drift Monitoring"],
  },
  {
    category: "ML & Data",
    items: ["Python", "SQL", "XGBoost / LightGBM", "Optuna", "SHAP"],
  },
];

// Retained for résumé parity. Not rendered on the homepage — the site leads with
// projects — but kept here so the section can be re-surfaced without retyping it.
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
