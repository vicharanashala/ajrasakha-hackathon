---
title: Problem Statement 3
sidebar_label: Problem Statement 3
sidebar_position: 3
---

### "Satellite-Based Crop Health & Resource Advisory System"

**Focus:** Satellite Data Processing | Vegetation Monitoring | Temporal Analysis | Geospatial Insights

#### 1. Background:

Free satellite data (Sentinel-2, Landsat, MODIS) provides **10m-resolution imagery globally**—a resource for monitoring crop health. However, **farmers can't interpret raw satellite data**, and even with available imagery, three critical problems remain unsolved.

#### 2. Current Problem:

**1. Data Accessibility Gap**

-   Satellite imagery exists but requires GIS expertise to use
-   Farmers can't translate NDVI/NDWI values into actionable insights
-   **Impact**: Valuable monitoring data stays unused

**2. Manual Inspection Limitations**

-   Field surveys are slow, expensive, and don't scale
-   Crop stress detected only after visible damage
-   **Impact**: Late interventions, reduced yields

**3. No Trend Monitoring**

-   Single-point observations miss seasonal patterns
-   Can't compare current season vs historical averages
-   **Impact**: Miss early warning signs of drought or stress

#### 3. Goal:

**Build a system that converts satellite imagery into simple crop health advisories.**

Transform raw data → Create a platform that:

1.  **Processes** satellite imagery to compute health indices
2.  **Analyzes** temporal trends (weekly/monthly)
3.  **Generates** interpretable insights (not just maps)
4.  **Visualizes** crop conditions through farmer-friendly dashboards

#### 4. Expected Solution (MVP Requirements):

##### **1. Satellite Data Pipeline**

Auto-fetch and process imagery:

-   **Data Sources**: Sentinel-2, Landsat-8, MODIS
-   **Preprocessing**: Cloud removal, resampling
-   **Coverage**: District/block-level analysis (no farm-level shapefiles needed)

**Output**: Clean, analysis-ready satellite imagery

##### **2. Health Index Computation**

Calculate key indicators:

-   **NDVI**: Crop vigor, growth monitoring
-   **NDWI**: Water stress detection
-   **LST**: Heat stress identification
-   **Anomaly Detection**: Current vs historical comparison

**Output**: Numerical scores + color-coded severity (healthy/stressed/critical)

##### **3. Temporal Trend Analysis**

Track changes over time:

-   **Weekly/Monthly Trends**: Growth progression monitoring
-   **Seasonal Comparison**: 2024 vs 2023 same period
-   **Alert Generation**: Flag sudden drops in vegetation health (>20% decline)

**Validation**: Show a real crop stress event detected 2-3 weeks before field reports

##### **4. Advisory Dashboard**

**Real-time visualizations**:

-   **Health Heatmap**: Color-coded crop condition maps
-   **Trend Charts**: NDVI/NDWI changes over 90 days
-   **Alert Panel**: Active stress zones with severity
-   **Impact Metrics**:
    -   Area monitored (hectares)
    -   Stress zones identified
    -   Temporal coverage (weeks of data)

#### 5. "Level Up" Features:

**Advanced Features (Choose 2-3)**

-   **Drought Forecasting**: Predict water stress 2-4 weeks ahead using trends
-   **Crop Type Classification**: Auto-identify rice/wheat/cotton from imagery
-   **Radar Integration**: Use Sentinel-1 for cloud-independent monitoring
-   **Mobile Alerts**: SMS notifications for detected crop stress
-   **Multi-Crop Support**: Handle 5+ crop types with specific thresholds

#### 6. Tech Stack:

**Core**

-   **Backend**: Node.js/Express + Python/FastAPI (geospatial processing)
-   **Database**: MongoDB (metadata) + PostGIS (spatial data)
-   **Storage**: Cloud storage for satellite imagery

**Geospatial**

-   **Processing**: Google Earth Engine API or rasterio/GDAL
-   **Analysis**: NumPy, SciPy (index computation)
-   **Visualization**: Leaflet.js, Deck.gl (maps)

**Frontend**

-   **Framework**: React.js
-   **Charts**: Recharts (trend analysis)

**External APIs**

-   Copernicus Dataspace (Sentinel), USGS EarthExplorer (Landsat), NASA LPDAAC (MODIS)


