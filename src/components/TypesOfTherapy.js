import React, { useRef } from "react";

const TypesOfTherapy = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const sectionRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      style={{
        width: "100%",
        minHeight: "200vh",
        background: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 0 80px 0",
        position: "relative",
        zIndex: 1
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2.5rem",
          width: "90vw",
          maxWidth: 1600,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Left Card */}
        <div
          ref={leftRef}
          style={{
            width: 1100,
            minWidth: 1100,
            background: "#f5faff", // lighter blue
            borderRadius: 40,
            height: 550,
            margin: "1rem",
            boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
            position: "relative",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 40,
              left: 32,
              background: "#e0e7ef",
              color: "#222",
              borderRadius: 20,
              padding: "0.5rem 1.25rem",
              fontWeight: 600,
              fontSize: "1.1rem",
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              letterSpacing: "0.01em",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              zIndex: 2
            }}
          >
            {/* Chat Icon */}
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 15.46V6.5A2.5 2.5 0 0 0 18.5 4h-13A2.5 2.5 0 0 0 3 6.5v8A2.5 2.5 0 0 0 5.5 17H6v3l4.5-3h8A2.5 2.5 0 0 0 21 15.46Z" stroke="#27ae60" strokeWidth="2" strokeLinejoin="round"/></svg>
            Chat Therapy
          </div>
          <div style={{ display: "flex", flex: 1, alignItems: "center", justifyContent: "space-between", width: "100%", height: "100%" }}>
            <h2
              style={{
                marginTop: 120,
                marginLeft: 64,
                paddingLeft: 12,
                marginRight: 2,
                color: "#1a1a1a",
                fontWeight: 700,
                fontSize: "2.1rem",
                textAlign: "left",
                lineHeight: 1.3,
                flex: 1,
                maxWidth: 350
              }}
            >
              Real-time, supportive chat with expert therapists—anytime, anywhere.
            </h2>
            {/* Chat interface layout */}
            <div
              style={{
                width: 260,
                minWidth: 220,
                minHeight: 400,
                marginRight: 160,
                paddingRight: 12,
                background: "#fff",
                borderRadius: 16,
                boxShadow: "0 6px 24px rgba(39,174,96,0.10), 0 2px 12px rgba(0,0,0,0.08)",
                padding: 16,
                display: "flex",
                flexDirection: "column",
                gap: 12,
                position: "relative",
                transition: "transform 0.2s, box-shadow 0.2s",
                cursor: "pointer"
              }}
              className="chat-window-anim"
            >
              <style>{`
                .chat-window-anim:hover {
                  transform: scale(1.05);
                  box-shadow: 0 12px 36px rgba(39,174,96,0.18), 0 4px 16px rgba(0,0,0,0.12);
                }
              `}</style>
              {/* Profile header */}
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12, borderBottom: "1px solid #e0e7ef", paddingBottom: 10 }}>
                <img
                  src={process.env.PUBLIC_URL + "/irene.jpeg"}
                  alt="Doctor"
                  style={{ width: 38, height: 38, borderRadius: "50%", objectFit: "cover", border: "2px solid #27ae60" }}
                />
                <div style={{ fontWeight: 700, color: "#222", fontSize: 16 }}>Dr. Irene Cheriyan</div>
              </div>
              {/* Patient message */}
              <div className="bubble-anim-1" style={{ display: "flex", alignItems: "flex-end", gap: 8, justifyContent: "flex-end" }}>
                <div
                  style={{
                    background: "#e3f0ff",
                    color: "#222",
                    borderRadius: "16px 16px 4px 16px",
                    padding: "5px 10px",
                    fontSize: 12,
                    maxWidth: 120,
                    boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                  }}
                >
                  Hi Doctor, I'm feeling anxious lately. What should I do?
                </div>
                <img
                  src={process.env.PUBLIC_URL + "/patient.jpg"}
                  alt="Patient"
                  style={{ width: 32, height: 32, borderRadius: "50%", objectFit: "cover", border: "2px solid #e0e7ef" }}
                />
              </div>
              {/* Doctor message */}
              <div className="bubble-anim-2" style={{ display: "flex", alignItems: "flex-end", gap: 8 }}>
                <img
                  src={process.env.PUBLIC_URL + "/irene.jpeg"}
                  alt="Doctor"
                  style={{ width: 32, height: 32, borderRadius: "50%", objectFit: "cover", border: "2px solid #e0e7ef" }}
                />
                <div
                  style={{
                    background: "#27ae60",
                    color: "#fff",
                    borderRadius: "16px 16px 16px 4px",
                    padding: "5px 10px",
                    fontSize: 12,
                    maxWidth: 120,
                    boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                  }}
                >
                  Hi! It's normal to feel anxious sometimes. Let's talk about some relaxation techniques.
                </div>
              </div>
              {/* Patient message */}
              <div className="bubble-anim-3" style={{ display: "flex", alignItems: "flex-end", gap: 8, justifyContent: "flex-end" }}>
                <div
                  style={{
                    background: "#e3f0ff",
                    color: "#222",
                    borderRadius: "16px 16px 4px 16px",
                    padding: "5px 10px",
                    fontSize: 12,
                    maxWidth: 120,
                    boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                  }}
                >
                  Thank you, that would be helpful!
                </div>
                <img
                  src={process.env.PUBLIC_URL + "/patient.jpg"}
                  alt="Patient"
                  style={{ width: 32, height: 32, borderRadius: "50%", objectFit: "cover", border: "2px solid #e0e7ef" }}
                />
              </div>
              {/* Doctor voice message with animation */}
              <div className="bubble-anim-4" style={{ display: "flex", alignItems: "flex-end", gap: 8 }}>
                <img
                  src={process.env.PUBLIC_URL + "/irene.jpeg"}
                  alt="Doctor"
                  style={{ width: 32, height: 32, borderRadius: "50%", objectFit: "cover", border: "2px solid #e0e7ef" }}
                />
                <div
                  style={{
                    background: "#27ae60",
                    color: "#fff",
                    borderRadius: "16px 16px 16px 4px",
                    padding: "5px 10px",
                    fontSize: 12,
                    maxWidth: 120,
                    boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  {/* Play icon */}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="#fff" fillOpacity="0.18"/><path d="M10 9v6l5-3-5-3z" fill="#fff"/></svg>
                  {/* Voice waveform icon */}
                  <svg width="36" height="18" viewBox="0 0 36 18" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginRight: 4}}>
                    <rect x="2" y="8" width="2" height="6" rx="1" fill="#fff" fillOpacity="0.7"/>
                    <rect x="6" y="4" width="2" height="10" rx="1" fill="#fff" fillOpacity="0.7"/>
                    <rect x="10" y="2" width="2" height="14" rx="1" fill="#fff" fillOpacity="0.7"/>
                    <rect x="14" y="6" width="2" height="6" rx="1" fill="#fff" fillOpacity="0.7"/>
                    <rect x="18" y="8" width="2" height="6" rx="1" fill="#fff" fillOpacity="0.7"/>
                    <rect x="22" y="4" width="2" height="10" rx="1" fill="#fff" fillOpacity="0.7"/>
                    <rect x="26" y="2" width="2" height="14" rx="1" fill="#fff" fillOpacity="0.7"/>
                    <rect x="30" y="6" width="2" height="6" rx="1" fill="#fff" fillOpacity="0.7"/>
                  </svg>
                  <span>0:12</span>
                </div>
              </div>
              {/* User emoji sticker message with animation */}
              <div className="bubble-anim-5" style={{ display: "flex", alignItems: "flex-end", gap: 8, justifyContent: "flex-end" }}>
                <div
                  style={{
                    background: "#e3f0ff",
                    borderRadius: "16px 16px 4px 16px",
                    padding: "5px 10px",
                    fontSize: 22,
                    maxWidth: 60,
                    boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span role="img" aria-label="happy">😊</span>
                </div>
                <img
                  src={process.env.PUBLIC_URL + "/patient.jpg"}
                  alt="Patient"
                  style={{ width: 32, height: 32, borderRadius: "50%", objectFit: "cover", border: "2px solid #e0e7ef" }}
                />
              </div>
            </div>
          </div>
        </div>
        {/* Right Card */}
        <div
          ref={rightRef}
          style={{
            width: 1100,
            minWidth: 1100,
            background: "#f5faff", // lighter blue
            borderRadius: 40,
            height: 550,
            margin: "1rem",
            boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
            position: "relative",
          }}
        >
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center", height: "100%", width: "100%", justifyContent: "space-between" }}>
            {/* Cards section on the left */}
            <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "flex-start", height: "100%" }}>
              <div
                style={{
                  width: "100%",
                  marginTop: 104,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  position: "relative",
                  height: 180,
                  marginLeft: 40
                }}
              >
                <style>{`
                  .therapy-card {
                    cursor: pointer;
                    will-change: transform;
                    transition: transform 0.25s cubic-bezier(.4,2,.6,1), box-shadow 0.2s;
                  }
                  .therapy-card:hover {
                    transform: scale(1.12) !important;
                    z-index: 20 !important;
                    box-shadow: 0 12px 36px rgba(39,174,96,0.22), 0 4px 16px rgba(0,0,0,0.12) !important;
                  }
                `}</style>
                {[1, 2, 3].map((num, idx) => {
                  // Center card effect
                  const isCenter = idx === 1;
                  // Tilt angles for playing card effect
                  const angles = [-15, 0, 15];
                  return (
                    <div
                      key={num}
                      className="therapy-card"
                      style={{
                        marginLeft: idx === 0 ? 0 : 20,
                        zIndex: isCenter ? 10 : 3 - idx,
                        width: isCenter ? 140 : 120,
                        height: isCenter ? 220 : 180,
                        borderRadius: 20,
                        overflow: "hidden",
                        boxShadow: isCenter
                          ? "0 8px 32px rgba(39,174,96,0.18), 0 2px 8px rgba(0,0,0,0.10)"
                          : "0 4px 16px rgba(0,0,0,0.10)",
                        background: "#fff",
                        border: "2px solid #e0e7ef",
                        transition: "transform 0.2s, box-shadow 0.2s, width 0.2s, height 0.2s",
                        position: "relative",
                        transform: `rotate(${angles[idx]}deg)` + (isCenter ? " translateY(-24px) scale(1.08)" : ""),
                      }}
                    >
                      <video
                        src={process.env.PUBLIC_URL + `/intro_${num}.mp4`}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        autoPlay
                        loop
                        muted
                        playsInline
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            {/* Text section on the right */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "flex-end", justifyContent: "center", height: "100%", paddingRight: 64 }}>
              <h2
                style={{
                  marginTop: 120,
                  paddingLeft: 32,
                  paddingRight: 0,
                  color: "#1a1a1a",
                  fontWeight: 700,
                  fontSize: "2.1rem",
                  textAlign: "left",
                  lineHeight: 1.3,
                  maxWidth: 400
                }}
              >
                Connect face-to-face with licensed therapists in secure, private video sessions—personalized for your needs, from the comfort of your space.
              </h2>
            </div>
            {/* Video Sessions bubble on the left, above the cards */}
            <div
              style={{
                position: "absolute",
                top: 40,
                left: 32,
                background: "#e0e7ef",
                color: "#222",
                borderRadius: 20,
                padding: "0.5rem 1.25rem",
                fontWeight: 600,
                fontSize: "1.1rem",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                letterSpacing: "0.01em",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                zIndex: 2
              }}
            >
              {/* Video Icon */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="7" width="13" height="10" rx="2" stroke="#27ae60" strokeWidth="2"/><path d="M21 9.5v5l-4-2.5 4-2.5Z" stroke="#27ae60" strokeWidth="2" strokeLinejoin="round"/></svg>
              Video Sessions
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TypesOfTherapy; 