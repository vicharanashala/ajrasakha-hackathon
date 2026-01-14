// "use client"

// import { useState } from "react"
// import './Landing2.css'

// export default function HackathonSchedule() {
//   const [activeTab, setActiveTab] = useState("online")

//   const scheduleData = {
//     online: [
//       {
//         id: 1,
//         time: "10:00-10:00",
//         phase: "Phase - I",
//         description:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis quam malesuada scelerisque ultrices gravida",
//       },
//       {
//         id: 2,
//         time: "12:00-02:00",
//         phase: "Phase - II",
//         description:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis quam malesuada scelerisque ultrices gravida",
//       },
//     ],
//     offline: [
//       {
//         id: 1,
//         time: "09:00-11:00",
//         phase: "Opening Ceremony",
//         description:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis quam malesuada scelerisque ultrices gravida",
//       },
//       {
//         id: 2,
//         time: "11:00-23:00",
//         phase: "Coding Marathon",
//         description:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis quam malesuada scelerisque ultrices gravida",
//       },
//     ],
//   }

//   const currentSchedule = activeTab === "online" ? scheduleData.online : scheduleData.offline

//   return (
//     <section className="hackathon-schedule">
//       {/* Decorative elements */}
//       <div className="schedule-decoration schedule-triangle"></div>
//       <div className="schedule-decoration schedule-square-1"></div>
//       <div className="schedule-decoration schedule-square-2"></div>
//       <div className="schedule-decoration schedule-circle"></div>

//       <div className="schedule-container">
//         {/* Header */}
//         <div className="schedule-header">
//           <h2 className="schedule-title">
//             Hackathon <span className="schedule-highlight">Schedule</span>
//           </h2>
//           <p className="schedule-subtitle">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis quam malesuada scelerisque ultrices gravida
//           </p>
//         </div>

//         {/* Date */}
//         <div className="schedule-date">
//           <h3>Friday, 10 January 2023</h3>
//         </div>

//         {/* Tab Buttons */}
//         <div className="schedule-tabs">
//           <button
//             className={`schedule-tab ${activeTab === "online" ? "active" : ""}`}
//             onClick={() => setActiveTab("online")}
//           >
//             CipherWeek (Online)
//           </button>
//           <button
//             className={`schedule-tab ${activeTab === "offline" ? "active" : ""}`}
//             onClick={() => setActiveTab("offline")}
//           >
//             Offline 24 hrs Hackathon
//           </button>
//         </div>

//         {/* Schedule Items */}
//         <div className="schedule-items">
//           {currentSchedule.map((item) => (
//             <div key={item.id} className="schedule-item">
//               <div className="schedule-time">
//                 <span>{item.time}</span>
//               </div>
//               <div className="schedule-content">
//                 <h4 className="schedule-phase">{item.phase}</h4>
//                 <p className="schedule-description">{item.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

import React, { useState } from 'react';

/**
 * HackathonSchedule Component
 * Enhanced version of the original design with:
 * 1. Almost-black (#050505) theme with ambient neon glows.
 * 2. Glassmorphism schedule cards with hover states.
 * 3. Animated decorative floating shapes.
 * 4. Premium typography and gradient highlights.
 */
export default function HackathonSchedule() {
  const [activeTab, setActiveTab] = useState("online");

  const scheduleData = {
    online: [
      {
        id: 1,
        time: "10:00 - 12:00",
        phase: "Phase - I: Opening",
        description:
          "Official kickoff event. Join us for the opening ceremony and team formation sessions.",
      },
      {
        id: 2,
        time: "14:00 - 18:00",
        phase: "Phase - II: Mentoring",
        description:
          "Exclusive sessions with industry experts to refine your project architecture and strategy.",
      },
    ],
    offline: [
      {
        id: 1,
        time: "09:00 - 11:00",
        phase: "Opening Ceremony",
        description:
          "Welcome to the physical venue. Grab your swag kits and find your designated workspace.",
      },
      {
        id: 2,
        time: "11:00 - 23:00",
        phase: "Coding Marathon",
        description:
          "A non-stop 12-hour build session. Food and refreshments served at 3-hour intervals.",
      },
    ],
  };

  const currentSchedule = activeTab === "online" ? scheduleData.online : scheduleData.offline;

  return (
    <section className="hackathon-schedule">
      <style>{`
        :root {
          --bg-black: #050505;
          --accent-orange: #f59e0b;
          --accent-purple: #a855f7;
          --text-main: #ffffff;
          --text-dim: #94a3b8;
          --glass: rgba(255, 255, 255, 0.03);
          --glass-hover: rgba(255, 255, 255, 0.06);
        }

        .hackathon-schedule {
          position: relative;
          background-color: var(--bg-black);
          color: var(--text-main);
          padding: 100px 20px;
          overflow: hidden;
          min-height: 100vh;
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
        }

        /* Ambient Background Glows */
        .ambient-glow {
          position: absolute;
          width: 50vw;
          height: 50vw;
          border-radius: 50%;
          filter: blur(120px);
          z-index: 0;
          pointer-events: none;
          opacity: 0.15;
        }
        .glow-1 { top: -10%; left: -10%; background: var(--accent-purple); }
        .glow-2 { bottom: -10%; right: -10%; background: var(--accent-orange); }

        /* Decorative Floating Elements */
        .schedule-decoration {
          position: absolute;
          opacity: 0.4;
          z-index: 1;
          pointer-events: none;
          animation: float 6s ease-in-out infinite;
        }

        .schedule-triangle {
          width: 0; height: 0;
          border-left: 30px solid transparent;
          border-right: 30px solid transparent;
          border-bottom: 50px solid rgba(168, 85, 247, 0.3);
          top: 15%; left: 10%;
        }

        .schedule-square-1 {
          width: 40px; height: 40px;
          border: 2px solid var(--accent-orange);
          bottom: 15%; left: 8%;
          transform: rotate(15deg);
        }

        .schedule-square-2 {
          width: 30px; height: 30px;
          border: 2px solid var(--accent-purple);
          top: 25%; right: 10%;
          transform: rotate(-20deg);
        }

        .schedule-circle {
          width: 25px; height: 25px;
          border: 2px solid var(--accent-orange);
          border-radius: 50%;
          bottom: 20%; right: 12%;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }

        .schedule-container {
          max-width: 1000px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        /* Header */
        .schedule-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .schedule-title {
          font-size: clamp(2.5rem, 8vw, 4rem);
          font-weight: 900;
          margin-bottom: 20px;
          letter-spacing: -2px;
          background: linear-gradient(to bottom, #fff, #94a3b8);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .schedule-highlight {
          color: var(--accent-orange);
          text-shadow: 0 0 20px rgba(245, 158, 11, 0.4);
        }

        .schedule-subtitle {
          font-size: 1.1rem;
          color: var(--text-dim);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Date Section */
        .schedule-date {
          text-align: center;
          margin: 40px 0;
        }

        .schedule-date h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: white;
          background: rgba(255, 255, 255, 0.05);
          padding: 8px 24px;
          border-radius: 100px;
          display: inline-block;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        /* Tab Buttons */
        .schedule-tabs {
          display: flex;
          justify-content: center;
          gap: 15px;
          margin-bottom: 60px;
          padding: 6px;
          background: rgba(255, 255, 255, 0.03);
          width: fit-content;
          margin-left: auto;
          margin-right: auto;
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .schedule-tab {
          padding: 12px 30px;
          border: none;
          border-radius: 12px;
          font-size: 0.95rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          background-color: transparent;
          color: var(--text-dim);
        }

        .schedule-tab.active {
          background-color: var(--accent-orange);
          color: #000;
          box-shadow: 0 4px 20px rgba(245, 158, 11, 0.3);
        }

        .schedule-tab:hover:not(.active) {
          color: white;
          background-color: rgba(255, 255, 255, 0.05);
        }

        /* Schedule Items */
        .schedule-items {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .schedule-item {
          display: flex;
          gap: 40px;
          background: var(--glass);
          backdrop-filter: blur(10px);
          padding: 40px;
          border-radius: 24px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }

        .schedule-item::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 4px;
          background: var(--accent-orange);
          opacity: 0;
          transition: opacity 0.3s;
        }

        .schedule-item:hover {
          background: var(--glass-hover);
          border-color: rgba(245, 158, 11, 0.2);
          transform: translateX(10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
        }

        .schedule-item:hover::before {
          opacity: 1;
        }

        .schedule-time {
          min-width: 140px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .schedule-time span {
          font-size: 1.25rem;
          font-weight: 800;
          color: white;
          letter-spacing: -0.5px;
          border-right: 2px solid rgba(245, 158, 11, 0.3);
          padding-right: 30px;
        }

        .schedule-content {
          flex: 1;
        }

        .schedule-phase {
          font-size: 1.5rem;
          font-weight: 700;
          color: white;
          margin: 0 0 10px 0;
        }

        .schedule-description {
          font-size: 1rem;
          color: var(--text-dim);
          margin: 0;
          line-height: 1.6;
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .schedule-item {
            flex-direction: column;
            gap: 15px;
            padding: 30px;
          }
          .schedule-time {
            justify-content: flex-start;
            min-width: auto;
          }
          .schedule-time span {
            border-right: none;
            border-bottom: 2px solid var(--accent-orange);
            padding-right: 0;
            padding-bottom: 10px;
            display: inline-block;
          }
          .schedule-title { font-size: 2.5rem; }
        }
      `}</style>

      {/* Visual Enhancements */}
      <div className="ambient-glow glow-1"></div>
      <div className="ambient-glow glow-2"></div>

      <div className="schedule-decoration schedule-triangle"></div>
      <div className="schedule-decoration schedule-square-1"></div>
      <div className="schedule-decoration schedule-square-2"></div>
      <div className="schedule-decoration schedule-circle"></div>

      <div className="schedule-container">
        {/* Header */}
        <header className="schedule-header">
          <h2 className="schedule-title">
            Hackathon <span className="schedule-highlight">Schedule</span>
          </h2>
          <p className="schedule-subtitle">
            Explore the journey from initial ideation to the final presentation. Mark your calendars for these key milestones.
          </p>
        </header>

        {/* Date Display */}
        <div className="schedule-date">
          <h3>Friday, 10 January 2026</h3>
        </div>

        {/* Tabs */}
        <div className="schedule-tabs">
          <button
            className={`schedule-tab ${activeTab === "online" ? "active" : ""}`}
            onClick={() => setActiveTab("online")}
          >
            CipherWeek (Online)
          </button>
          <button
            className={`schedule-tab ${activeTab === "offline" ? "active" : ""}`}
            onClick={() => setActiveTab("offline")}
          >
            Offline 24 hrs Hackathon
          </button>
        </div>

        {/* List of items */}
        <div className="schedule-items">
          {currentSchedule.map((item) => (
            <div key={item.id} className="schedule-item">
              <div className="schedule-time">
                <span>{item.time}</span>
              </div>
              <div className="schedule-content">
                <h4 className="schedule-phase">{item.phase}</h4>
                <p className="schedule-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}