import { useState } from "react";

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
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;500;700;900&display=swap');

        :root {
          --background: oklch(0.9911 0 0);
          --foreground: oklch(0.2046 0 0);
          --primary: oklch(0.8348 0.1302 160.908);
          --primary-foreground: oklch(0.2626 0.0147 166.4589);
          --border: oklch(0.9037 0 0);
          --muted-foreground: oklch(0.2435 0 0);
          --glass-bg: rgba(255, 255, 255, 0.6);
          --glass-border: oklch(0.9037 0 0);
          --font-sans: 'Outfit', sans-serif;
        }

        .hackathon-schedule {
          position: relative;
          background-color: var(--background);
          color: var(--foreground);
          padding: 100px 20px;
          overflow: hidden;
          min-height: 100vh;
          font-family: var(--font-sans);
        }

        /* Ambient Background Glows - Mint Themed */
        .ambient-glow {
          position: absolute;
          width: 50vw;
          height: 50vw;
          border-radius: 50%;
          filter: blur(120px);
          z-index: 0;
          pointer-events: none;
          opacity: 0.3;
        }
        .glow-1 { top: -10%; left: -10%; background: var(--primary); }
        .glow-2 { bottom: -10%; right: -10%; background: oklch(0.9 0.05 190); }

        /* Decorative Floating Elements (Mint Outline) */
        .schedule-decoration {
          position: absolute;
          opacity: 0.3;
          z-index: 1;
          pointer-events: none;
          animation: float 6s ease-in-out infinite;
        }

        .schedule-triangle {
          width: 0; height: 0;
          border-left: 30px solid transparent;
          border-right: 30px solid transparent;
          border-bottom: 50px solid var(--primary);
          top: 15%; left: 10%;
        }

        .schedule-square-1 {
          width: 40px; height: 40px;
          border: 2px solid var(--primary);
          bottom: 15%; left: 8%;
          transform: rotate(15deg);
        }

        .schedule-square-2 {
          width: 30px; height: 30px;
          border: 2px solid oklch(0.6 0.1 200);
          top: 25%; right: 10%;
          transform: rotate(-20deg);
        }

        .schedule-circle {
          width: 25px; height: 25px;
          border: 2px solid var(--primary);
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
          color: var(--foreground);
        }

        .schedule-highlight {
          color: var(--primary);
          position: relative;
        }

        .schedule-subtitle {
          font-size: 1.1rem;
          color: var(--muted-foreground);
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
          font-weight: 700;
          color: var(--foreground);
          background: oklch(0.96 0.01 160);
          padding: 8px 32px;
          border-radius: 100px;
          display: inline-block;
          border: 1px solid var(--border);
        }

        /* Tab Buttons */
        .schedule-tabs {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-bottom: 60px;
          padding: 6px;
          background: oklch(0.97 0 0);
          width: fit-content;
          margin-left: auto;
          margin-right: auto;
          border-radius: 20px;
          border: 1px solid var(--border);
        }

        .schedule-tab {
          padding: 12px 32px;
          border: none;
          border-radius: 14px;
          font-size: 0.95rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          background-color: transparent;
          color: var(--muted-foreground);
        }

        .schedule-tab.active {
          background-color: var(--primary);
          color: var(--primary-foreground);
          box-shadow: 0 4px 20px oklch(0.83 0.13 160 / 0.3);
        }

        .schedule-tab:hover:not(.active) {
          color: var(--foreground);
          background-color: oklch(0.94 0 0);
        }

        /* Schedule Items */
        .schedule-items {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .schedule-item {
          display: flex;
          gap: 40px;
          background: var(--glass-bg);
          backdrop-filter: blur(16px);
          padding: 40px;
          border-radius: 28px;
          border: 1px solid var(--border);
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.02);
        }

        .schedule-item::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 6px;
          background: var(--primary);
          opacity: 0;
          transition: opacity 0.3s;
        }

        .schedule-item:hover {
          background: white;
          border-color: var(--primary);
          transform: translateX(12px);
          box-shadow: 0 20px 50px rgba(0,0,0,0.06);
        }

        .schedule-item:hover::before {
          opacity: 1;
        }

        .schedule-time {
          min-width: 160px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
        }

        .schedule-time span {
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--foreground);
          letter-spacing: -0.5px;
          border-left: 4px solid var(--primary);
          padding-left: 20px;
        }

        .schedule-content {
          flex: 1;
        }

        .schedule-phase {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--foreground);
          margin: 0 0 10px 0;
        }

        .schedule-description {
          font-size: 1rem;
          color: var(--muted-foreground);
          margin: 0;
          line-height: 1.7;
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .schedule-item {
            flex-direction: column;
            gap: 20px;
            padding: 30px;
          }
          .schedule-time {
            min-width: auto;
          }
          .schedule-time span {
            border-left: none;
            border-bottom: 3px solid var(--primary);
            padding-left: 0;
            padding-bottom: 8px;
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
            The architect's roadmap to success. Mark your progress as we build the future together over the next 48 hours.
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
            Online Phase
          </button>
          <button
            className={`schedule-tab ${activeTab === "offline" ? "active" : ""}`}
            onClick={() => setActiveTab("offline")}
          >
            Offline Finale
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