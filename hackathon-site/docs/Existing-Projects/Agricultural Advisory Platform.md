---
sidebar_label: Agricultural Advisory Platform
---

  

# AjraSakha: AI-Powered Agricultural Advisory Platform

  

## 1. POP Processing Pipeline

  

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

  

## 2. MCP Servers for AjraSakha

  

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