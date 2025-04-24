import React from 'react';

const Projects = () => {
  return (
    // Section styling within the main content card
    // Removed outer section tag and title
    <div className="w-full max-w-none px-4"> {/* Use div instead of section, removed padding/title */}
      {/* Added PROJECTS Title */}
      <h2 className="text-5xl font-bold text-center text-gray-200 mb-12">
        PROJECTS
      </h2>
      {/* Container for generated project items */}
      <div className="space-y-10">
        

    <div className="group relative border-b border-gray-200 pb-6 last:border-b-0">
      <h2 className="text-4xl font-semibold text-gray-100 mb-2 group-hover:text-indigo-000 transition-colors duration-150">
      LLM RAG Pipeline
      </h2>
      <h3 className="text-2xl font-medium text-gray-100 mt-4 mb-1">Use Case</h3>
      <p className="text-xl text-gray-200 leading-relaxed mb-3" dangerouslySetInnerHTML={{__html: `This project involved building a production-grade Retrieval-Augmented Generation (RAG) system for insurance document summarization and intelligent question answering. It was designed to support real-time and batch inference using modular components deployed across a cloud-native architecture.`}}></p>
      <p className="text-xl text-gray-200 leading-relaxed mb-3" dangerouslySetInnerHTML={{__html: `The system leveraged LangChain, LlamaIndex, and LangGraph to orchestrate QA and summarization tasks with LLM-as-a-Service capabilities. Content from third-party sources was parsed, chunked, and embedded along with metadata such as page number, topic, and document ID into both Qdrant and Azure Vector Search, as well as a graph database. A stacked retriever architecture was implemented combining transformer-based semantic search with FAISS, supported by multi-query expansion, context filtering, and deduplication logic to optimize precision.`}}></p>
      <p className="text-xl text-gray-200 leading-relaxed mb-3" dangerouslySetInnerHTML={{__html: `Dynamic routing logic directed different query types and content to specialized LLMs based on metadata, enabling efficient load balancing and accuracy gains. The system utilized Chain-of-Thought prompting and RAGAS for answer generation and evaluation, while LLM-as-a-judge techniques ensured hallucination detection, reranking, and response groundedness. A real-time user feedback system captured corrections and scores, which were automatically funneled into an online fine-tuning loop for continual learning. The full stack was deployed on Azure with Kubernetes, FastAPI, and Streamlit, integrating monitoring via Langfuse, Datadog, and Azure Monitor.`}}></p>
    </div>


    <div className="group relative border-b border-gray-200 pb-6 last:border-b-0">
      <h2 className="text-4xl font-semibold text-gray-100 mb-2 group-hover:text-indigo-000 transition-colors duration-150">
      Document Classifier
      </h2>
      <h3 className="text-2xl font-medium text-gray-100 mt-4 mb-1">Use Case</h3>
      <p className="text-xl text-gray-200 leading-relaxed mb-3" dangerouslySetInnerHTML={{__html: `This system was designed to classify 30 types of insurance and business documents in real-time, balancing accuracy, speed, and cost efficiency. A custom fine-tuned EfficientNet model performed image-based classification using RGB-rendered inputs. For cases with lower vision confidence, an NLP fallback based on a RoBERTa model (trained on OCR-extracted text) provided a secondary decision layer. Regex-based rules served as a final check to reinforce classification logic for edge cases.`}}></p>
      <p className="text-xl text-gray-200 leading-relaxed mb-3" dangerouslySetInnerHTML={{__html: `Documents were routed dynamically through this layered pipeline — vision, NLP, then regex — depending on confidence scores. The system achieved 97% accuracy in production and supported both real-time and batch uploads. Deployed on Azure, it used FastAPI, Blob Storage, App Service, and Redis queues managed under AKS. A client-facing dashboard allowed for file uploads, OCR correction, and retriggering classification in real-time. Periodic retraining was driven by corrected user labels collected through the interface, integrated into the training loop using Hugging Face and FastAPI Cron jobs. The system supported long-term model improvement via continual learning and adaptive retraining.`}}></p>
    </div>


    <div className="group relative border-b border-gray-200 pb-6 last:border-b-0">
      <h2 className="text-4xl font-semibold text-gray-100 mb-2 group-hover:text-indigo-000 transition-colors duration-150">
      Impairment Extractor
      </h2>
      <h3 className="text-2xl font-medium text-gray-100 mt-4 mb-1">Use Case</h3>
      <p className="text-xl text-gray-200 leading-relaxed mb-3" dangerouslySetInnerHTML={{__html: `Built to automate the extraction of impairment-related data fields from varied insurance documents, this system combined OCR, NLP, and rule-based logic for robust, production-ready field extraction. The pipeline handled multiple formats including scanned forms, digital PDFs, and Word documents.`}}></p>
      <p className="text-xl text-gray-200 leading-relaxed mb-3" dangerouslySetInnerHTML={{__html: `Text and positional metadata were extracted using Tesseract, PyMuPDF, PDFMiner, and bounding box libraries. Handwritten regex rules seeded the initial pipeline and were later augmented by a RoBERTa model fine-tuned to identify and extract target fields. The system achieved 96% extraction accuracy across formats. A real-time dashboard enabled uploads, correction of OCR errors, and rerunning classification dynamically.`}}></p>
      <p className="text-xl text-gray-200 leading-relaxed mb-3" dangerouslySetInnerHTML={{__html: `The entire system was containerized with Docker and deployed to Azure Kubernetes Service (AKS), supported by Redis for queueing and Azure Functions for triggering. File management was handled via Blob Storage, and a responsive web UI was served through Azure App Service. Designed with modularity and extensibility in mind, the system supports both real-time and batch modes, and enables hybrid rule/ML-based extraction.`}}></p>
    </div>


    <div className="group relative border-b border-gray-200 pb-6 last:border-b-0">
      <h2 className="text-4xl font-semibold text-gray-100 mb-2 group-hover:text-indigo-000 transition-colors duration-150">
      Pricing Analytics
      </h2>
      <h3 className="text-2xl font-medium text-gray-100 mt-4 mb-1">Use Case</h3>
      <p className="text-xl text-gray-200 leading-relaxed mb-3" dangerouslySetInnerHTML={{__html: `This project focused on forecasting future healthcare-related costs based on insurance claim data and macroeconomic indicators. Working with a healthcare insurer, I built and deployed predictive models using ARIMA, SARIMA, LSTM, and rolling average ensembles to model future client spending.`}}></p>
      <p className="text-xl text-gray-200 leading-relaxed mb-3" dangerouslySetInnerHTML={{__html: `External data such as CPI and inflation rates were ingested via APIs and feature-engineered alongside lag windows, seasonality markers, and demographic features. A fully automated ETL pipeline was developed using SQL, Airflow, Pandas, and dbt to ensure consistent delivery of clean, model-ready datasets.`}}></p>
      <p className="text-xl text-gray-200 leading-relaxed mb-3" dangerouslySetInnerHTML={{__html: `Model predictions and SHAP-based explainability were delivered via interactive dashboards built in Power BI, Streamlit, and Plotly Dash, supporting executive-level pricing decisions. The MLOps framework included retraining schedules, CI/CD (GitHub Actions), and containerized model serving. The final product delivered real-time insights, enabled scenario planning, and reduced forecast error across multiple regions.`}}></p>
    </div>


    <div className="group relative border-b border-gray-200 pb-6 last:border-b-0">
      <h2 className="text-4xl font-semibold text-gray-100 mb-2 group-hover:text-indigo-000 transition-colors duration-150">
      Data Anonymization
      </h2>
      <h3 className="text-2xl font-medium text-gray-100 mt-4 mb-1">Use Case</h3>
      <p className="text-xl text-gray-200 leading-relaxed mb-3" dangerouslySetInnerHTML={{__html: `This system anonymized semi-structured medical JSON documents by detecting and redacting personal identifiable information (PII) across both keys and values, preserving document structure and supporting auditability.`}}></p>
      <p className="text-xl text-gray-200 leading-relaxed mb-3" dangerouslySetInnerHTML={{__html: `A custom-built recursive parser traversed deeply nested JSON objects using BFS/DFS to create analyzable trees. Regex-based rules captured basic PII types, while a BERT classifier trained on path-to-value contexts handled nuanced redaction cases. Redacted values were substituted using per-file randomized mapping to ensure referential consistency, with mappings stored for versioned audit recovery.`}}></p>
      <p className="text-xl text-gray-200 leading-relaxed mb-3" dangerouslySetInnerHTML={{__html: `Processed documents were reconstructed into fully valid JSON, maintaining formatting integrity. Users could upload documents in real time via a dashboard, where anonymization occurred instantly or via batch processing depending on workload. The system was deployed on Azure with support for high-throughput processing, leveraging Docker, Azure Functions, Redis, and Blob Storage. It was validated across complex schemas and edge cases, with built-in support for feedback, fine-tuning, and compliance audits.`}}></p>
    </div>

      </div>
    </div>
  );
};

export default Projects;
