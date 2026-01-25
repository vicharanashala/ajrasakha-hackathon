---
title: Problem Statement 1
sidebar_label: Problem Statement 1
sidebar_position: 1
---

### "Mandi-Insights" - The Unified Market Data Aggregator & Analytics Engine

**Focus:** Multi-source Data Aggregation, Time-series Analysis, Market Intelligence, Predictive Analytics

#### 1. Background:

Indian agricultural market data is **severely fragmented**:

-   **eNAM integration covers only 1,522 APMCs** out of 7,021 total APMCs nationwide
-   **5,499 APMCs (78%) remain unintegrated** with eNAM and operate independently with data scattered across state-specific portals (Punjab Mandi Board, Maharashtra Agri Dept, Karnataka APMC, etc.)
-   Each source has different formats, update frequencies, and data structures

#### **2. Current Problem:** Farmers, traders, and researchers must manually:

-   Visit 10-15 different websites daily to get complete market coverage
-   Reconcile conflicting data formats and missing information
-   Lack access to **78% of India's APMCs** not covered by eNAM
-   Have no tool for historical trend analysis or predictive insights

**The Gap:** No unified platform exists that consolidates **all 7,021 APMCs** (eNAM-integrated + state portals) and provides actionable market intelligence.

#### 3. The Problem:

Build a **"One-Stop Market Data Hub"** that aggregates daily mandi prices from **eNAM, Agmarknet, AND state-specific portals** into a unified database, covering India's complete APMC network of 7,021 markets, and provides **advanced analytics, trend visualizations, and predictive insights** to enable data-driven decisions.

#### 4. Expected Solution (MVP Requirements):

##### **1. Multi-Source Data Aggregation**

-   **eNAM-Integrated Sources:** eNAM API, Agmarknet API (1,522 APMCs)
-   **State Portals:** Web scraping for Punjab, Maharashtra, Karnataka, Tamil Nadu, etc. (5,499 APMCs)
-   **Daily Sync:** Scheduled cron jobs for each source
-   **Normalization:** Standardize crop names, units (kg/quintal), date formats across all sources
-   **Schema:** Date | State | District | Mandi | Crop | Variety | Min_Price | Max_Price | Modal_Price | Source
-   **Coverage Tracker:** Dashboard showing "1,522 APMCs from eNAM, 3,500+ from state portals = 5,000+ total coverage (targeting all 7,021)"

##### **2. Advanced Analytics Dashboard**

###### **A. Real-time Market View:**

-   Today's prices across **all APMCs** (searchable/filterable table)
-   Source indicator: Show whether data is from eNAM/Agmarknet/State portal
-   Coverage map: Highlight which APMCs have fresh data vs. missing updates

###### **B. Time-series Analysis:**

-   **Price Trends:** Line graphs (7 days/1 month/6 months/1 year)
-   **Seasonal Patterns:** Identify harvest dips, festival spikes
-   **Volatility Index:** Highlight high-fluctuation crops

###### **C. Geographic Insights:**

-   **Heatmaps:** State-wise + district-wise price distribution for any crop
-   **Interstate Comparison:** Price gaps between regions
-   **APMC Coverage Map:** Visual representation of 7,021 APMCs with data availability status (eNAM-integrated vs. non-integrated)

###### **D. Market Intelligence:**

-   **Arbitrage Alerts:** "Tomatoes: ₹40/kg in Mandi A, ₹65/kg in Mandi B (150km away)"
-   **Top Gainers/Losers:** Weekly price movers
-   **Price Alerts:** Notify when thresholds crossed
-   **Data Completeness Score:** Show % of APMCs reporting for each crop
-   **Integration Gap Analysis:** Visualize the 78% of APMCs not on eNAM

##### **3. Data Export & Reports**

-   Download CSV/Excel with filters (date range, crop, state, source)
-   Generate PDF reports with charts and summary insights
-   Summary cards: "Average potato price up 12% this month across 450 APMCs"

#### **5. "Level Up" Features:**

-   **Price Forecasting:** ML models predict next 7/15/30 days prices
-   **MSP Comparison:** Show Minimum Support Price vs Market Price
-   **Mobile Alerts:** SMS/WhatsApp notifications for price changes
-   **Developer API:** GET /api/prices?crop=wheat&state=punjab&date=2025-01-15
-   **Data Quality Flags:** Mark missing data, outliers, stale sources
-   **Crowdsourced Updates:** Allow traders to report prices from uncovered APMCs
-   **eNAM Integration Tracker:** Monitor which of the 5,499 non-integrated APMCs get added to eNAM over time

#### **6. Tech Stack (MERN):**

-   **Frontend:** React.js, Recharts/Chart.js, Leaflet (maps)
-   **Backend:** Node.js + Express.js, MongoDB, Node-cron
-   **Data:** Axios (API calls), Cheerio/Puppeteer (web scraping state portals)
-   **Analytics:** MongoDB Aggregation Pipeline, Prophet/SARIMAX (forecasting)
-   **Deploy:** Docker, MongoDB Atlas
