---
sidebar_label: Ajrasakha Chatbot
---

  

# Voice Services Backend (Ajrasakha Chatbot)

  

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