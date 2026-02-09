
## Frequently Asked Questions

### Registration & Eligibility

**Q: Can I participate if I'm not in the Winternship/Pinternship cohort?**  
A: No, this is an internal event exclusively for current Winternship cohort members.

**Q: Can I participate solo or with a team of 3?**  
A: No, teams must have exactly 4 members. No exceptions.

**Q: Can I be on multiple teams?**  
A: No, you can only register as a member of one team.

**Q: What if one team member drops out?**  
A: Contact organizers immediately. This will be handled case-by-case.

**Q: Is this hackathon conducted throughout the year?**  
A: The hackathon is conducted multiple times, every 30 days.

**Q: Can students participate more than once?**  
A: No, students cannot participate multiple times; they can only participate once. This rule may change in the future.
 
**Q: How many problem statements does a team need to resolve?**  
A: Each team can work on either one problem statement or one existing project, not multiple.

### Technical

**Q: What technology stack must we use?**  
A: Core MERN stack (MongoDB, Express.js, React, Node.js) with Typescript is required. You may add Python and AI models, but final solution must integrate with the MERN application.

**Q: Can we use existing Ajrasakha code?**  
A: Yes, you're building features that integrate into Ajrasakha, so you'll work with the existing codebase.

**Q: Do we need to deploy our solution?**  
A: Yes, a live demo URL is required. Use Vercel, Netlify, Heroku, or similar.

**Q: What if we need GPU access?**  
A: Request it from organizers. GPU access will be provided selectively based on project merit, evaluated after Phase 1.

**Q: Can we use paid APIs like GPT-4?**  
A: Yes, but you must ensure costs are low.

**Q: Must we support mobile?**  
A: No, mobile support is not mandatory. But it is recommended since most farmers use smartphones.

**Q: How many languages must we support?**  
A: At minimum, English plus one regional language (Hindi, Tamil, Telugu, Marathi, etc.).

### Phases & Timeline

**Q: What if we don't finish in Phase 1?**  
A: Document your planned Phase 2 work. All teams proceed to Phase 2 automatically. However, partial work is discouraged.

**Q: Will we get feedback after Phase 1?**  
A: Maybe. Organizers may provide feedback at their discretion, but it's not guaranteed for all teams.

**Q: What if we don't have all features by Phase 2 deadline?**  
A: Submit what works. Missing features will lower your score, but a working MVP is better than nothing.

**Q: Can we work during the break between phases?**  
A: No. The break is for organizers to review and for teams to rest. No development during the break.

### Submission

**Q: What format should the demo video be?**  
A: MP4 format, 2-5 minutes, under 100MB. Upload to YouTube (unlisted) or Google Drive.

**Q: Is the MIT License requirement strict?**  
A: Yes, your GitHub repository must be public with MIT License and remain public after the competition.

**Q: What happens if we submit late?**  
A: Late submissions will NOT be accepted. No exceptions. Submit 15-30 minutes early to be safe.

**Q: Can we update our submission after the deadline?**  
A: No. Once submitted, no changes allowed.

### Evaluation & Prizes

**Q: How are submissions judged?**  
A: Based on Ajrasakha integration (25%), cost-effectiveness (20%), technical quality (20%), innovation (15%), completeness (10%), and resource efficiency (10%).

**Q: Will all prize categories be awarded?**  
A: Not necessarily. annam.ai may withhold prizes if submissions don't meet quality standards.

**Q: When will winners be announced?**  
A: This is a recurring hackathon, winners will be announced every month based on submissions.

**Q: What if we disagree with judging?**  
A: Judges' decisions are final and binding. No appeals.

**Q: Can we continue working on the project after the hackathon?**  
A: Yes, you own your IP and can continue development.

### Mentorship

**Q: How many mentorship sessions will we have?**  
A: Please check the [mentorship](https://vicharanashala.github.io/ajrasakha-hackathon/docs/session) tab for updated schedule.

**Q: Is attending mentorship sessions mandatory?**  
A: Engagement with mentors is encouraged, but not mandatory.

**Q: Can we contact mentors outside scheduled times?**  
A: Use Cliq/Email for async questions. Scheduled sessions are for in-depth guidance.

### Misc

**Q: What if we face technical issues during demo?**  
A: Have a backup demo video ready. Judges will give you time to explain and show what works.

**Q: Can we use pre-built templates or libraries?**  
A: Yes, with proper attribution. But majority of work should be original.

**Q: What if we have a health emergency?**  
A: Contact organizers immediately. Your health is the priority.

### Participant FAQs
**Q: Will any mentorship or guidance be provided for the participating teams?**

A: Yes, participating teams will receive mentorship and guidance throughout the program to support their progress and development. At least one mentorship session will be conducted each week, giving teams the opportunity to join, interact with mentors, ask questions, and receive valuable advice.

**Q: Can you provide Soil Health Cards for use in this project?**

A: Real farmers’ official Soil Health Card records cannot be shared due to data privacy and access limitations. However, realistic sample Soil Health Card data based on standard formats can be used for development, OCR testing, and feature validation. Teams are encouraged to design their solutions to work with typical Soil Health Card structures and values.

---

### Sample Soil Health Card (Demo Data)

**Farmer Name:** Ramesh Patel  
**Village:** Rampur  
**District:** Sehore  
**State:** Madhya Pradesh  
**Land Area:** 2.0 ha  

| Parameter | Value | Unit | Rating |
|-----------|-------|------|--------|
| Nitrogen (N) | 140 | kg/ha | Low |
| Phosphorus (P) | 12 | kg/ha | Low |
| Potassium (K) | 180 | kg/ha | Medium |
| Organic Carbon (OC) | 0.42 | % | Low |
| pH | 5.5 | — | Acidic |
| EC | 0.3 | dS/m | Normal |
| Sulphur (S) | 8 | ppm | Low |
| Zinc (Zn) | 0.5 | ppm | Deficient |
| Iron (Fe) | 4.2 | ppm | Sufficient |
| Copper (Cu) | 0.6 | ppm | Sufficient |
| Manganese (Mn) | 2.1 | ppm | Sufficient |
| Boron (B) | 0.3 | ppm | Low |

**Q: Are there recommended data sources or best practices the jury expects teams to follow for mandi price and transport cost integration?**

A: Teams are encouraged to use reliable and publicly available data sources wherever possible. For mandi prices, platforms such as Agmarknet or other government/open agriculture market datasets are recommended. If live integration is not feasible, teams may use well-structured mock datasets that realistically simulate market price variations.

For transport cost calculations, teams should base estimates on practical per-kilometer vehicle operating costs (fuel, rental, driver charges, etc.). Clearly stating assumptions (e.g., ₹/km rate per vehicle type) is considered good practice.

The jury will primarily evaluate:
- Logical accuracy of the profit calculation model  
- Realistic and well-justified data assumptions  
- Clear methodology for combining price, distance, and transport cost  

Live APIs are a bonus, but a well-designed, transparent, and scalable data model is more important than perfect real-time integration.

**Q: In the Tech Stack section of Problem Statement 5 – Niti-Setu, LLMs like OpenAI, Gemini, and Llama are mentioned. Can we also use open-source models such as GPT-OSS for better cost-effectiveness, or is it mandatory to use the specified LLMs?**

A: Yes, teams are free to use open-source or alternative LLMs, including GPT-OSS or other comparable models, especially if it improves cost-effectiveness and feasibility. The listed LLMs are suggestions, not strict requirements. The focus will be on how effectively the AI component solves the problem, rather than on the specific model used.

**Q: Can you provide links to recommended data sources for eNAM-integrated and non-integrated APMCs, including market prices and historical data?**

**A:** Yes — below are reliable official and public sources teams can use for mandi price data, APMC lists, and historical information:

###  Official Government Sources
- **eNAM – National Agriculture Market Portal**  
  https://www.enam.gov.in/web :contentReference[oaicite:0]{index=0}

- **eNAM Historical Trade & Price Data Dashboard**  
  https://www.enam.gov.in/web/dashboard/Historical :contentReference[oaicite:1]{index=1}

- **eNAM Mandis Online (list of mandis doing online trading)**  
  https://www.enam.gov.in/web/mandis-online :contentReference[oaicite:2]{index=2}



---

Teams can combine these sources for **real-time prices**, **historical trends**, and **APMC lists** to build data feeds and analytics pipelines. Using the government APIs and datasets as anchors ensures accuracy and credibility, while third-party sites help with broader coverage and ease of access.
::contentReference[oaicite:7]{index=7}

**Q: Could you please provide us with Agmarknet and eNAM API links or official data sources we can use for the “Krishi-Route” Profit & Logistics Optimizer?**

A: While official API access keys won’t be directly provided by the organizers, the following official and public resources are available for mandi price and APMC data. Teams can integrate these into their solutions or use them to build mock/sandbox APIs:

###  eNAM (National Agriculture Market) – Official Government Portal
- **eNAM Official Portal (APMC listings & prices)**  
  https://www.enam.gov.in/web/ (Official eNAM market platform) :contentReference[oaicite:0]{index=0}

- **eNAM Trade Details & Price Dashboard**  
  https://enam.gov.in/web/dashboard/trade-data (Commodity prices and trade info) :contentReference[oaicite:1]{index=1}

###  Agmarknet – Government Market Price Data
- **AGMARKNET Official Portal (daily mandi prices & arrivals)**  
  http://www.agmarknet.gov.in/ (Government price data platform) :contentReference[oaicite:2]{index=2}

- **Data.gov.in – Agmarknet Daily Price Data & API Export**  
  https://data.gov.in/resources/current-daily-price-various-commodities-various-markets-mandi/api (Official API export for daily mandi price data) :contentReference[oaicite:3]{index=3}

###  Developer / Community Resources (Unofficial APIs & Tools)
- **GitHub – Agmarknet API (community project)**  
  https://github.com/Prajwal-Shrimali/agmarknetAPI (Unofficial API via scraping, useful for prototyping) :contentReference[oaicite:4]{index=4}

---

Teams should refer to the **official eNAM and Agmarknet portals for authoritative data** and use the data.gov.in API endpoint to access structured historical and current price datasets. Unofficial APIs and GitHub projects can help bootstrap integration during prototyping.

**Q: This is our first hackathon and we didn’t see any information about Git repository naming. Is there any issue with how we’ve named it?**

A: Thank you for checking. There is no strict naming convention required for the Git repository unless it is specifically mentioned in the submission guidelines. You may keep your current repository name.

However, please make sure your **project title, team name, and problem statement number** are clearly mentioned in the README file so evaluators can easily identify your submission. If any specific naming format becomes necessary, it will be communicated in advance.

**Q: We are currently in the planning and MVP scoping phase. Could you please provide guidance on recommended data sources and best practices for integrating multi-source mandi data into the Ajrasakha ecosystem while keeping costs low?**

A: For planning your MVP and integrating multi-source mandi data in a cost-effective way, consider the following recommended sources and best practices:

###  Best Practices for Integration
1. **Start with Structured Public APIs:**  
   Use eNAM and data.gov.in APIs for the backbone of price and APMC lists. This reduces development overhead and ensures government-verified data.

2. **Design for Multiple Formats:**  
   Mandis and state portals may provide CSV, Excel, or HTML tables. Build flexible connectors (scrapers/parsers) that can normalize diverse formats into a single schema.

3. **Normalize Data Early:**  
   Standardize:
   - Crop names and units (e.g., kg, quintal)
   - Mandi identifiers (state, district, mandi name)
   - Date formats  
   This simplifies analytics downstream.

4. **Caching and Incremental Updates:**  
   Avoid frequent heavy requests by:
   - Caching fetched data
   - Using incremental updates (only new/changed records)

5. **Mock or Sandbox First:**  
   If live APIs are limited or rate-restricted, start with well-structured mock datasets for MVP testing.

6. **Monitor Data Quality:**  
   Track missing values, stale sources, or conflicting prices with quality flags so your ecosystem handles real-world data noise.

7. **Leverage Open-Source Tools:**  
   Use open-source scraping tools (e.g., Cheerio, Puppeteer) and lightweight cloud functions (to run cron jobs) to reduce operational cost.

###  Cost-Saving Tips
- Avoid heavy paid APIs unless critical; start with free government sources.
- Use serverless functions (AWS Lambda / Cloud Functions) for scheduled data pulls to reduce infrastructure cost.
- Store normalized data in a lightweight database (MongoDB Atlas free tier or similar) during MVP phase.

By focusing on structured public sources first and building robust normalization pipelines, your MVP can deliver strong multi-source mandi data integration while keeping costs low and scaling later as needed.







