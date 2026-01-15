---
sidebar_label: Existing Projects
---

# 1. KCC Agent Interface – AI Assisted Expert Support System

  

### Problem Statement

  

Kisan Call Center (KCC) experts handle thousands of farmer calls every day and must provide accurate agricultural advice in real time. During live conversations, experts largely depend on memory and personal experience, which can vary between agents. Even trained experts may find it difficult to recall the most accurate or up-to-date recommendations instantly. Currently, there is no real-time support system that assists experts during calls using verified agricultural knowledge. Incorrect or incomplete advice can directly affect farmer yield and income, highlighting the need for a real-time decision support mechanism that enhances expert responses without disrupting call flow.

  

### Objective

  

To provide real-time AI assistance to KCC experts during live farmer calls by converting speech to text, understanding agricultural intent, and suggesting expert-verified answers from a trusted knowledge base.

  

### Work Done So Far

  

* Live audio capture from expert–farmer calls.

* Real-time speech-to-text using Sarvam API (supports Malayalam, Hindi, and regional languages).

* Continuous transcription with 15-second rolling analysis.

* Semantic understanding of farmer queries (crop, symptom, issue, stage).

* Similarity search over a Golden Knowledge Database of expert-verified Q&A.

* Display of relevant, pre-approved answers on the expert dashboard.

* Human-in-the-loop system where the expert decides the final response.

  

### Key Features

  

* Real-time transcription during live calls.

* Semantic similarity search (not keyword-based).

* Only expert-verified answers shown.

* Low-latency decision support for agents.

* Improves accuracy, consistency, and confidence of expert responses.

  

### Technologies Used

  

* **Speech Recognition:** Sarvam Speech-to-Text API

* **NLP:** Embedding models for semantic understanding

* **Vector Database:** Similarity search on Golden Q&A

* **Backend:** AI processing engine (Python)

* **Frontend:** Web-based expert dashboard

  

### Future Scopes

  

* Regional language translation.

* Crop-specific dashboards.

* Auto-highlighting of diseases and nutrients.

* Call quality scoring and expert performance analytics.

* AI-flagging of risky or incorrect advice.

* Predictive alerts for outbreaks and weather-linked risks.

* Voice-based AI co-pilot for experts.

  

### Impact

  

This system transforms every KCC agent into a knowledge-augmented expert, reduces errors in agricultural advice, standardizes service quality, and improves outcomes for farmers at scale.

  

---

  

# 2. Ajrasakha AI-Assisted Expert Review & Moderation System

  

### Problem Statement

  

Agricultural advisory platforms must provide farmers with accurate, region-specific, and expert-validated guidance. However, existing AI-based systems often generate generic or unreliable answers, while human-only advisory models face scalability, delay, and quality inconsistency issues. There is currently no structured review, validation, and accountability framework that ensures every response shared with farmers is accurate, traceable, and continuously improved. Incorrect or unverified advice can directly impact crop health, yield, and farmer trust.

  

### Objective

  

To build a quality-driven agricultural advisory system that combines AI-assisted drafting with multi-level expert review and moderation, ensuring that only verified, region-aware, and accountable answers are delivered to farmers.

  

### Work Done So Far

  

* Designed a multi-level expert review workflow for farmer queries.

* Implemented AI-assisted draft generation to support experts (AI as co-pilot).

* Built a Smart Allocation Engine based on region, crop, and availability.

* Enabled three-level expert validation before publishing.

* Integrated moderator-controlled final approval.

* Created a Golden Database (GDB) of verified agricultural answers.

* Implemented expert performance, reputation, and incentive tracking.

* Added turnaround time and quality monitoring mechanisms.

  

### Key Features

  

* AI-assisted answer drafting with full human control.

* Region- and crop-aware expert assignment.

* Mandatory multi-level expert validation.

* Moderator oversight and governance.

* Golden Database of trusted, reusable answers.

* Expert reputation, incentive, and penalty scoring.

* End-to-end traceability and accountability.

  

### System Flow

  

`Farmer Question` → `Smart Allocation Engine` → `Expert Author (AI-assisted)` → `Expert Review 2` → `Expert Review 3` → `Moderator Approval` → `Golden Database` → `Published Answer to Farmer`

  

### Technologies Used

  

* **Backend & Logic:** Python-based workflow orchestration

* **AI / NLP:** Large Language Models for draft assistance

* **Data Layer:** Structured databases for Q&A and expert actions

* **Dashboards:** Expert and Moderator interfaces

* **Analytics:** Performance and turnaround monitoring

  

### Future Scopes

  

* Crop-specific AI models and local language support.

* ML-based detection of low-quality or risky answers.

* AI-driven expert routing and load balancing.

* Farmer feedback integration into expert reputation.

* Compliance checks and explainable moderation decisions.

* Predictive alerts for crop risks and regional issues.

  

### Impact

  

Ajrasakha ensures that farmers receive accurate, trustworthy, and region-relevant agricultural advice while maintaining scalability through AI assistance and reliability through structured human validation. The system improves answer quality, expert accountability, and farmer confidence at scale.

  

---

  

# 3. Voice Services Backend (Ajrasakha Chatbot)

  

### Problem Statement

  

India’s linguistic diversity makes voice-based chatbot interaction challenging. Most voice-enabled systems primarily support English and require users to manually select languages, resulting in poor user experience. Generic speech-to-text models struggle with Indian accents, regional phonetics, and code-mixed speech (e.g., Hinglish), leading to inaccurate transcriptions. Additionally, raw transcriptions often lack punctuation, reducing readability and downstream NLP performance. A scalable, low-latency, multilingual voice processing system is required to enable seamless voice interaction for Indian users without manual language selection.

  

### Objective

  

To provide a high-performance, multilingual voice-to-text backend for the Ajrasakha Chatbot that automatically detects spoken language, accurately transcribes Indian and English speech, and returns readable, punctuated text in real time.

  

### Work Done So Far

  

* Built a GPU-accelerated voice processing microservice.

* Implemented automatic language detection using a hybrid Whisper + MMS-LID pipeline.

* Enabled multilingual transcription:

* Whisper for English.

* IndicConformer for 22+ Indian languages.

  
  

* Integrated AI-based punctuation restoration using Cadence.

* Exposed an OpenAI-compatible transcription API.

* Containerized the service using Docker with NVIDIA runtime.

* Integrated the service with the Ajrasakha chatbot voice interface.

* Achieved low-latency, production-ready inference.

  

### Key Features

  

* Automatic language detection (no manual selection).

* Support for 22+ Indian languages and English.

* Robust handling of code-mixed speech.

* GPU-accelerated, low-latency transcription.

* AI-based punctuation for improved readability.

* OpenAI-compatible API for easy integration.

* Production-ready containerized deployment.

  

### System Flow

  

`User Voice Input` → `Language Detection` → `Model Selection (Whisper / IndicConformer)` → `Speech-to-Text` → `Punctuation Restoration` → `Formatted Text Returned to Ajrasakha Chat Interface`

  

### Technologies Used

  

* **Speech Models:** OpenAI Whisper, AI4Bharat IndicConformer

* **Language Detection:** Whisper + MMS-LID-126

* **Text Processing:** AI4Bharat Cadence (punctuation)

* **Backend:** FastAPI, Python

* **Deployment:** Docker, NVIDIA GPU Runtime

* **Orchestration:** Supervisord

  

### Future Scopes

  

* Improved language detection accuracy for similar languages and dialects.

* Expansion to additional Indian languages (Tulu, Bhojpuri, Rajasthani, etc.).

* Real-time streaming transcription via WebSockets.

* Speaker diarization for multi-speaker audio.

* Domain-specific vocabulary injection (agriculture-focused terms).

* Voice-based command detection for chatbot actions.

* Latency and inference optimization.

* Edge or on-device transcription support.

  

### Impact

  

This backend enables inclusive, voice-first access to the Ajrasakha Chatbot for Indian users across languages. By removing language barriers and improving transcription quality, it enhances accessibility, usability, and trust—especially for users more comfortable speaking than typing—while providing a scalable foundation for multilingual conversational AI.

  

---

  

# 4. Plant Leaf Disease Detection using Vision Model

  

### Problem Statement

  

Plant leaf diseases severely impact plant health and crop yield. Early detection is crucial, but manual inspection is time-consuming, requires expert knowledge, and is prone to errors.

  

**Key challenges addressed:**

  

* Visual similarity between different leaf diseases.

* Highly imbalanced class distributions.

* Large number of disease categories.

* Need for an automated and scalable image-based diagnosis system.

  

The goal is to accurately classify plant leaf diseases using only leaf images, without relying on environmental or crop-level information.

  

### Objective

  

To develop a deep learning–based vision model that can accurately identify plant leaf diseases from images, enabling early detection and actionable insights for farmers and plant specialists.

  

### Work Done So Far

  

* Developed an EfficientNet-based CNN model (variants B4–B7) for leaf disease classification.

* Preprocessed images (resize, crop, normalize) for model input.

* Trained and evaluated models on:

* Rice Plant Leaf Disease Dataset (19 classes).

* Potato–Tomato Plant Leaf Disease Dataset (13 classes).

  
  

* Handled class imbalance during training.

* Selected model based on accuracy and precision metrics.

* EfficientNet-B4 identified as best balance between performance and computational efficiency.

  

### System Flow

  

`Plant Leaf Image` → `Image Preprocessing (Resize, Crop, Normalize)` → `EfficientNet CNN Model (B4 / B5 / B6 / B7)` → `Plant Leaf Disease Prediction (Accuracy, Precision)`

  

### Key Features

  

* Multi-class classification for plant leaf diseases.

* Handles imbalanced datasets.

* Works across multiple crops (rice, potato, tomato).

* Provides actionable disease identification to users.

* Supports scalable automated detection.

  

### Technologies Used

  

* **Frameworks:** PyTorch, TIMM, TorchVision

* **Models:** EfficientNet (B4–B7 variants)

* **Datasets:** Rice Plant Leaf Disease (19 classes), Potato–Tomato Plant Leaf Disease (13 classes)

* **Training Techniques:** Transfer learning, class imbalance handling, precision-accuracy-based model selection

  

### Future Scopes

  

* **Expand Dataset:** Include more plant species, field images, and additional diseases.

* **Improve Model Robustness:** Handle variations in lighting, image quality, and leaf orientation.

* **Multi-Modal Inputs:** Combine leaf images with environmental data (temperature, humidity) to improve predictions.

* **Continuous Model Updates:** Retrain periodically with new data to track evolving disease patterns.

* **Edge Deployment:** Optimize model for mobile and IoT devices.

* **Integration with Advisory Systems:** Connect predictions with automated notifications and guidance for farmers.

  

### Impact

  

This vision model enables fast, accurate, and scalable plant disease detection directly from leaf images. It helps farmers and plant specialists take timely action, improves crop management, and reduces losses due to undetected diseases.

  

---

  

# 5. AjraSakha: AI-Powered Agricultural Advisory Platform

  

## 5.1. POP Processing Pipeline

  

**Project Name:** Agricultural Package of Practices (POP) PDF Processing Pipeline

  

### Problem Statement

  

565 POP PDF documents across 26 Indian states, in English and 22 Indic languages, are scattered, unstructured, and partially garbled (283 PDFs, 50%). Farmers and advisors cannot access or search this knowledge efficiently.

  

### Solution Overview

  

Automated multi-phase pipeline to classify, extract, translate, and convert PDFs into structured JSON/Markdown for RAG-powered AjraSakha chatbot.

  

### Work Done So Far

  

* Phase 1 & 2 complete: 215 PDFs processed (English & Indic).

* OCR, translation, Docling extraction implemented.

* Garbled text (Phase 6) preparation: character encoding detection, text reconstruction, font normalization.

  

### Key Features

  

* Multilingual PDF extraction (English + 22 Indic languages).

* OCR with quality validation.

* Automated JSON/Markdown output for chatbot ingestion.

  

### Technologies Used

  

* **Extraction/OCR:** Docling, PyMuPDF, Tesseract OCR, Google Cloud Vision

* **Translation:** Google Translate API, IndicTrans2

* **Orchestration:** Python CLI pipeline for automated processing

  

### Future Scope

  

* Garbled text recovery for remaining 283 PDFs.

* Automated Q&A generation.

* Semantic search across all 565 PDFs.

* Integration with state agricultural portals.

  

---

  

## 5.2. MCP Servers for AjraSakha

  

**Project Name:** AjraSakha MCP (Model Context Protocol) Server Suite

  

### Problem Statement

  

Monolithic backend cannot efficiently integrate FAQs, golden datasets, market data, or POP documents. Challenges include scalability, security, maintainability, and performance.

  

### Solution Overview

  

Modular MCP server suite built on FastMCP framework, enabling specialized capabilities for chatbot integration.

  

### MCP Servers Implemented

  

* **FAQ MCP Server:** Semantic search over agricultural FAQs.

* **Golden Dataset MCP Server:** Crop & state-specific Q&A retrieval.

* **Market Data MCP Server:** Real-time commodity prices from eNAM.

* **Shared Functions & Constants:** Utilities, configuration.

  

### Work Done So Far

  

* 4 production MCP servers deployed.

* Vector search integrated with MongoDB Atlas (BAAI/bge-large-en embeddings).

* Dockerized, CI/CD pipeline, systemd service management.

  

### Key Features

  

* Modular, secure, scalable backend.

* Semantic search with vector embeddings.

* Real-time market data integration.

* Standardized MCP protocol for easy expansion.

  

### Technologies Used

  

* **Backend:** Python, FastAPI, FastMCP

* **Database:** MongoDB Atlas + Vector Search

* **Infrastructure:** Docker, Docker Compose, Systemd

* **LLMs:** deepseek-r1:70b, qwen3:1.7b, Osmosis

  

### Future Scope

  

* Caching and query optimization.

* Horizontal scaling & database sharding.

* Real-time updates, WebSocket integration.

* Additional MCP servers for weather, schemes, analytics.

  

---

  

## Impact (Overall Platform)

  

* Democratizes agricultural knowledge across languages.

* Enables scalable, modular chatbot architecture.

* Lays foundation for RAG-powered, AI-assisted advisory.

* Reduces time to access verified agricultural guidance.

* Facilitates rapid feature development and platform scalability.
