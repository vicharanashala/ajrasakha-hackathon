### "Mitti-Scan" - Soil Health Card Digitizer + Actionizer

**Focus:** OCR (Optical Character Recognition) | Agricultural Chemistry | Product Recommendations | Marketplace Integration

#### 1. Background:

Government has distributed **25+ crore Soil Health Cards** to farmers. These cards contain critical NPK values (Nitrogen: 140, Phosphorus: 12, pH: 5.5), but **farmers can't interpret the numbers**. Data remains on paper, doesn't translate to action or better yields.

#### 2. Current Problem:

**1. Chemical Jargon**

-   Numbers like "N: 140, P: 12, K: 180" are meaningless to farmers
-   No context on what's low/medium/high
-   **Impact**: Cards sit unused in drawers

**2. No Actionable Advice**

-   Card doesn't say which fertilizer to buy
-   Can't connect deficiency to market products
-   **Impact**: Farmers buy wrong inputs, waste money

**3. Manual Data Entry**

-   Government data stays on paper, not digitized
-   Can't track soil health trends over years
-   **Impact**: Miss patterns in soil degradation

#### 3. Goal:

**Build an app that converts paper Soil Health Cards into shopping lists with fertilizer recommendations.**

Beyond digitization → Create a platform that:

1.  **Scans** paper cards using OCR
2.  **Interprets** chemistry values for crop-specific needs
3.  **Recommends** specific fertilizer products
4.  **Calculates** quantities and costs per farm size

#### 4. Expected Solution (MVP Requirements):

##### **1. Scanner Module (OCR)**

Digitize paper cards:

-   **Image Upload**: Camera or gallery photo
-   **OCR Engine**: Tesseract / Google Cloud Vision / Azure Vision
-   **Data Extracted**: N, P, K, OC (Organic Carbon), pH values
-   **Table Recognition**: Parse standard Soil Health Card format

**Output**: Structured JSON {N: 140, P: 12, K: 180, pH: 5.5}

##### **2. Verify & Edit Screen**

Quality control:

-   **Display Detected Values**: Show OCR results in editable form
-   **Manual Corrections**: Allow farmers to fix misreads
-   **Crop Selection**: Choose target crop (Wheat, Rice, Cotton)

**Demo Goal**: Upload card → See extracted values → Edit if needed in 30 seconds

##### **3. Logic Engine (Deficiency Analysis)**

Analyze soil health:

-   **Ideal Standards**: Compare against crop-specific requirements (Wheat needs N > 150)
-   **Deficiency Detection**: Flag "Nitrogen is Low by 20%"
-   **Priority Ranking**: Order deficiencies by severity

**Output**: List of {nutrient, status, deficiency_percentage}

##### **4. Marketplace Recommendations**

Generate shopping advice:

-   **Product Mapping**:
    -   Low Nitrogen → "Neem Coated Urea"
    -   Low pH (Acidic) → "Agricultural Lime"
    -   Low Phosphorus → "Single Super Phosphate (SSP)"
-   **Product Cards**: Display with images, approximate prices
-   **Retailer Links**: Connect to local agri-shops or e-commerce

**Validation**: Test with 5 real Soil Health Cards, verify recommendations match agricultural guidelines

##### **5. Impact Dashboard**

**Real-time visualizations**:

-   **Health Speedometers**: Red/Yellow/Green gauges for N, P, K
-   **Deficiency List**: Prioritized issues with severity
-   **Shopping Cart**: Recommended products with quantities
-   **Impact Metrics**:
    -   Cards scanned
    -   Deficiencies identified
    -   Estimated cost of corrections

#### 5. "Level Up" Features:

**Advanced Features (Choose 2-3)**

-   **Cost Calculator**: Input farm size → Get exact bags needed + total cost
-   **Visual Graphs**: Bar charts comparing current vs ideal values
-   **Trend Tracking**: Compare cards from Year 1 vs Year 2
-   **Organic Alternatives**: Suggest vermicompost instead of chemical fertilizers
-   **Crop Yield Predictor**: Estimate yield improvement after corrections

#### 6. Tech Stack:

**Core**

-   **Backend**: Node.js/Express
-   **Database**: MongoDB (scan history, recommendations)

**AI/ML**

-   **OCR**: Google Cloud Vision API / Tesseract.js
-   **Text Parsing**: Regex for extracting numbers

**Frontend**

-   **Framework**: React.js
-   **Camera**: React Webcam / Native camera API
-   **Visualization**: Recharts (gauges, bars)

**External APIs**

-   Fertilizer product databases, agricultural reference standards (ICAR guidelines)
