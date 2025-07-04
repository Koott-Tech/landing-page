import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";
import OnboardingModal from './OnboardingModal';

const PickYourGuide = () => {
  const sectionRef = useRef(null);
  const cardRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];
  const navigate = useNavigate();
  const [showOnboarding, setShowOnboarding] = React.useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;
    const cards = cardRefs.map(r => r.current);
    // Set initial state
    gsap.set(cards, { opacity: 0, y: 60 });
    let lastInView = false;
    const onScroll = () => {
      const rect = sectionRef.current.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (inView && !lastInView) {
        gsap.to(cards, {
          opacity: 1,
          y: 0,
          duration: 3.5,
          stagger: 0.28,
          ease: "power4.out"
        });
      }
      lastInView = inView;
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [cardRefs]);

  return (
    <section ref={sectionRef} style={{ width: "100vw", height: "100vh", background: "#fff", display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "4.5rem" }}>
      <h1 style={{ fontSize: "3.2rem", fontWeight: 800, color: "#1a1a1a", textAlign: "center", letterSpacing: "-0.01em", lineHeight: 1.1, maxWidth: 900, marginBottom: "2.5rem" }}>
        Meet Your Guide to Wellness
      </h1>
      <p style={{ fontSize: "1.18rem", color: "#444", textAlign: "center", maxWidth: 600, fontWeight: 500, margin: 0 }}>
        Skilled, supportive mental health professionals offering 1-on-1 guidance that leads to quick, thoughtful progress.
      </p>
      <div style={{ marginTop: "2.2rem" }}>
        <style>{`
          .meet-them-btn {
            position: relative;
            overflow: hidden;
            padding: 0.85rem 2.2rem;
            border-radius: 2rem;
            border: none;
            background: #fff;
            color: #27ae60;
            font-weight: 700;
            font-size: 1.1rem;
            cursor: pointer;
            box-shadow: 0 6px 24px rgba(0,0,0,0.18), 0 2px 12px rgba(0,0,0,0.12);
            transition: color 0.2s, border 0.2s;
            z-index: 1;
          }
          .meet-them-btn::before {
            content: "";
            position: absolute;
            left: 0;
            bottom: -100%;
            width: 100%;
            height: 100%;
            background: #27ae60;
            z-index: 0;
            transition: bottom 0.4s cubic-bezier(.4,2,.6,1), opacity 0.2s;
            opacity: 0.95;
          }
          .meet-them-btn:hover::before {
            bottom: 0;
          }
          .meet-them-btn:hover {
            color: #fff;
            border: none;
          }
          .meet-them-btn span {
            position: relative;
            z-index: 1;
          }
        `}</style>
        <button className="meet-them-btn" onClick={() => navigate("/guide")}>
          <span>Meet Them All</span>
        </button>
      </div>
      {/* Guide cards row */}
      <div style={{
        width: "100%",
        marginTop: "3.2rem",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        position: "relative",
        height: 320,
        gap: 20,
      }}>
        <style>{`
          .guide-card {
            cursor: pointer;
            will-change: transform;
            transition: transform 0.25s cubic-bezier(.4,2,.6,1), box-shadow 0.2s;
            margin-left: -40px;
            z-index: 1;
            width: 200px;
            height: 300px;
            border-radius: 24px;
            overflow: hidden;
            box-shadow: 0 8px 32px rgba(0,0,0,0.18), 0 2px 8px rgba(0,0,0,0.10);
            background: #fff;
            border: 2px solid #e0e7ef;
            position: relative;
          }
          .guide-card:first-child {
            margin-left: 0;
          }
          .guide-card:hover {
            transform: scale(1.13) translateY(-18px);
            z-index: 99 !important;
            box-shadow: 0 16px 48px rgba(39,174,96,0.22), 0 4px 16px rgba(0,0,0,0.12);
          }
        `}</style>
        {[1,2,3,4,5,6].map((num, idx) => (
          <div
            className="guide-card"
            key={num}
            ref={cardRefs[idx]}
            style={{ zIndex: idx+1 }}
          >
            <video
              src={process.env.PUBLIC_URL + `/intro_${idx === 5 ? 1 : num}.mp4`}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        ))}
      </div>
      <div style={{ marginTop: '4.5rem' }}>
        <style>{`
          .find-therapist-btn {
            position: relative;
            overflow: hidden;
            padding: 0.85rem 2.2rem;
            border-radius: 2rem;
            border: none;
            background: #27ae60;
            color: #fff;
            font-weight: 700;
            font-size: 1.1rem;
            cursor: pointer;
            box-shadow: 0 6px 24px rgba(0,0,0,0.18), 0 2px 12px rgba(0,0,0,0.12);
            transition: color 0.2s, border 0.2s;
            z-index: 1;
          }
          .find-therapist-btn::before {
            content: "";
            position: absolute;
            left: 0;
            bottom: -100%;
            width: 100%;
            height: 100%;
            background: #fff;
            z-index: 0;
            transition: bottom 0.4s cubic-bezier(.4,2,.6,1), opacity 0.2s;
            opacity: 0.95;
          }
          .find-therapist-btn:hover::before {
            bottom: 0;
          }
          .find-therapist-btn:hover {
            color: #27ae60;
            border: none;
          }
          .find-therapist-btn span {
            position: relative;
            z-index: 1;
          }
        `}</style>
        <button className="find-therapist-btn" onClick={() => setShowOnboarding(true)}>
          <span>Find My Therapist</span>
        </button>
        <OnboardingModal open={showOnboarding} onClose={() => setShowOnboarding(false)} onComplete={() => { setShowOnboarding(false); navigate('/guide'); }} />
      </div>
    </section>
  );
};

export default PickYourGuide; 