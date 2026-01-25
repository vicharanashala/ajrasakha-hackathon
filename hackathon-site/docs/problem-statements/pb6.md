---
sidebar_position: 6
---

### "Krishi-Route" - Profit & Logistics Optimizer

**Focus:** Geospatial Analysis | Market Intelligence | Route Optimization | Profit Maximization

#### 1. Background:

India has **7,000+ Agricultural Produce Market Committees (APMCs)**, yet **70% of farmers sell at the nearest mandi** without checking prices elsewhere. A farmer selling onions 10km away might earn ₹20,000, while traveling 50km could yield ₹24,000 profit after transport costs.

#### 2. Current Problem:

**1. Fear of Transport Costs**

-   Farmers assume longer distance = lower profit
-   Don't calculate net profit (revenue - transport cost)
-   **Impact**: Leave ₹5,000-10,000 on the table per trip

**2. No Price Comparison Tools**

-   Agmarknet shows prices but not profitability
-   Can't see which mandi maximizes earnings
-   **Impact**: Sell at suboptimal markets

**3. Logistics Blind Spot**

-   Don't know truck rental rates per km
-   Miss pooling opportunities with neighboring farmers
-   **Impact**: Pay 40% more on transport than necessary

#### 3. Goal:

**Build "Google Maps for Farmers" that shows most profitable routes, not just fastest routes.**

Beyond navigation → Create a platform that:

1.  **Fetches** real-time market prices across mandis
2.  **Calculates** net profit (price - transport - handling)
3.  **Recommends** optimal selling location
4.  **Visualizes** routes and profit comparisons

#### 4. Expected Solution (MVP Requirements):

##### **1. Input Module**

Capture trip details:

-   **Crop Type**: Dropdown (Onion, Wheat, Tomato, etc.)
-   **Quantity**: Input in tons/quintals
-   **Vehicle**: Select (Tata Ace, Tractor, Truck)
-   **Location**: Auto-detect or manual pin drop

**Output**: Structured trip query

##### **2. Market Data Fetcher**

Analyze nearby markets:

-   **Price Source**: Agmarknet API or mock dataset
-   **Coverage**: 3-4 mandis within 100km radius
-   **Distance Calc**: Google Maps API / Mapbox for km distance

**Output**: List of `{mandi, price, distance}`

##### **3. Net Profit Algorithm**

Calculate profitability:

-   **Revenue** = Market Price × Quantity
-   **Transport Cost** = Distance × Vehicle Rate/km
-   **Other Costs** = Loading/unloading charges
-   **Net Profit** = Revenue - Total Cost

**Demo Goal**: Show side-by-side comparison where farther mandi yields higher net profit

##### **4. Decision Dashboard**

**Real-time visualizations**:

-   **Profit Cards**:
    -   Mandi A (10km): ₹20,000 profit
    -   Mandi B (50km): ₹24,000 profit ⭐ Winner
-   **Route Map**: Visual path on interactive map
-   **Breakdown**: Revenue, costs, profit margin displayed
-   **Impact Metrics**:
    -   Markets compared
    -   Best profit margin identified
    -   Potential savings shown

#### 5. "Level Up" Features:

**Advanced Features (Choose 2-3)**

-   **Ride Share**: Pool 2 farmers with 1-ton each → Save 40% on truck
-   **Price Volatility Alerts**: Warn if mandi price dropped 3 days straight
-   **Perishability Factor**: Flag risk for tomatoes on 200km trips
-   **Historical Trends**: "Mandi B usually peaks on Wednesdays"
-   **Fuel Price Integration**: Adjust transport costs based on diesel rates

#### 6. Tech Stack:

**Core**

-   **Backend**: Node.js/Express
-   **Database**: MongoDB (market prices, historical data)

**Geospatial**

-   **Maps**: Google Maps API / Mapbox (distance, routing)
-   **Visualization**: Leaflet.js, Deck.gl

**Frontend**

-   **Framework**: React.js
-   **Charts**: Recharts (profit comparisons)

**External APIs**

-   Agmarknet (market prices) 

