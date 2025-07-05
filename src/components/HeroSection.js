import React, { useEffect, useRef } from "react";
import Navbar from "./Navbar";
import { gsap } from "gsap";
import OnboardingModal from './OnboardingModal';
import { useNavigate } from 'react-router-dom';
import { createPortal } from 'react-dom';

const HeroSection = () => {
  const heroRef = useRef(null);
  const companyRef = useRef(null);
  const navbarRef = useRef(null);
  const loginBtnRef = useRef(null);
  const getStartedBtnRef = useRef(null);
  const [showOnboarding, setShowOnboarding] = React.useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Prevent horizontal scroll on body
    document.body.style.overflowX = 'hidden';
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Clamp scrollY for smoothness
      const clamp = (num, min, max) => Math.min(Math.max(num, min), max);
      const progress = clamp(scrollY / window.innerHeight, 0, 1);

      // Shrink hero section (height and maxWidth)
      gsap.to(heroRef.current, {
        height: `${100 - 60 * progress}vh`,
        maxWidth: `${100 - 20 * progress}vw`,
        duration: 0.3,
        ease: "power2.out",
      });

      // Fade out company name, navbar center, and login button
      gsap.to(companyRef.current, {
        opacity: 1 - progress * 1.2,
        y: -40 * progress,
        duration: 0.3,
        ease: "power2.out",
        pointerEvents: progress < 0.8 ? "auto" : "none",
      });
      gsap.to(navbarRef.current, {
        opacity: 1 - progress * 1.2,
        y: -40 * progress,
        duration: 0.3,
        ease: "power2.out",
        pointerEvents: progress < 0.8 ? "auto" : "none",
      });
      gsap.to(loginBtnRef.current, {
        opacity: 1 - progress * 1.2,
        y: -40 * progress,
        duration: 0.3,
        ease: "power2.out",
        pointerEvents: progress < 0.8 ? "auto" : "none",
      });
      // Keep Get Started button visible
      gsap.to(getStartedBtnRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.3,
        ease: "power2.out",
        pointerEvents: "auto",
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={heroRef}
      className="her-section"
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "100vw",
        height: "100vh",
        overflow: "hidden",
        transition: "height 0.3s, max-width 0.3s",
        background: "#fff", // fallback background for when width shrinks
        display: "block",
        margin: "0 auto",
        borderBottomLeftRadius: "18px",
        borderBottomRightRadius: "18px",
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
          pointerEvents: "none"
        }}
        src={process.env.PUBLIC_URL + "/hero_intro.mp4"}
      />
      {/* Center-left hero content */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "5vw",
          transform: "translateY(-50%)",
          zIndex: 2,
          color: "#fff",
          fontWeight: 600,
          fontSize: "5.2rem",
          lineHeight: 1.08,
          letterSpacing: "-0.01em",
          textShadow: "0 4px 24px rgba(0,0,0,0.35)",
          maxWidth: 850,
          userSelect: "none",
        }}
      >
        No more stress,<br />
        just progress
        <div style={{ marginTop: 36 }}>
          <style>{`
            .hero-getstarted-btn {
              position: relative;
              overflow: hidden;
              padding: 1.25rem 2.4rem;
              border-radius: 15px;
              border: none;
              background: #fff;
              color: #1a237e;
              font-weight: 700;
              font-size: 1.25rem;
              cursor: pointer;
              box-shadow: 0 6px 24px rgba(0,0,0,0.18), 0 2px 12px rgba(0,0,0,0.12);
              transition: color 0.2s, border 0.2s;
              z-index: 1;
            }
            .hero-getstarted-btn::before {
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
            .hero-getstarted-btn:hover::before {
              bottom: 0;
            }
            .hero-getstarted-btn:hover {
              color: #fff;
              border: none;
            }
            .hero-getstarted-btn span {
              position: relative;
              z-index: 1;
            }
          `}</style>
          <button className="hero-getstarted-btn">
            <span>Get Started</span>
          </button>
        </div>
      </div>
      {/* Company name at left, aligned with navbar */}
      <div
        ref={companyRef}
        style={{
          position: "absolute",
          top: "3rem",
          left: "5vw",
          zIndex: 2,
          fontWeight: 900,
          fontSize: "2.5rem",
          color: "#fff",
          letterSpacing: "0.05em",
          textShadow: "0 2px 12px rgba(0,0,0,0.35)",
          userSelect: "none",
          transition: "opacity 0.3s, transform 0.3s",
        }}
      >
        CureMinds
      </div>
      {/* Login and Get Started buttons at right */}
      <div
        style={{
          position: "fixed",
          top: "2.2rem",
          right: "2.2rem",
          zIndex: 100,
          display: "flex",
          gap: "1rem",
        }}
      >
        <style>{`
          .cureminds-btn {
            position: relative;
            overflow: hidden;
            padding: 0.75rem 2rem;
            border-radius: 15px;
            border: none;
            background: rgba(255,255,255,0.25);
            color: #222;
            font-weight: 600;
            font-size: 1.1rem;
            cursor: pointer;
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            box-shadow: 0 6px 24px rgba(0,0,0,0.18), 0 2px 12px rgba(0,0,0,0.12);
            transition: color 0.2s;
            z-index: 1;
          }
          .cureminds-btn::before {
            content: "";
            position: absolute;
            left: 0;
            bottom: -100%;
            width: 100%;
            height: 100%;
            background: #27ae60;
            z-index: 0;
            transition: bottom 0.4s cubic-bezier(.4,2,.6,1), opacity 0.2s;
            opacity: 0.9;
          }
          .cureminds-btn:hover::before {
            bottom: 0;
          }
          .cureminds-btn:hover {
            color: #fff;
            border: none;
          }
          .cureminds-btn span {
            position: relative;
            z-index: 1;
          }

          .getstarted-btn {
            position: relative;
            overflow: hidden;
            padding: 0.75rem 2rem;
            border-radius: 15px;
            border: none;
            background: #27ae60;
            color: #fff;
            font-weight: 700;
            font-size: 1.1rem;
            cursor: pointer;
            box-shadow: 0 6px 24px rgba(0,0,0,0.18), 0 2px 12px rgba(0,0,0,0.12);
            transition: color 0.2s;
            z-index: 1;
          }
          .getstarted-btn::before {
            content: "";
            position: absolute;
            left: 0;
            bottom: -100%;
            width: 100%;
            height: 100%;
            background: #fff;
            z-index: 0;
            transition: bottom 0.4s cubic-bezier(.4,2,.6,1), opacity 0.2s;
            opacity: 0.9;
          }
          .getstarted-btn:hover::before {
            bottom: 0;
          }
          .getstarted-btn:hover {
            color: #27ae60;
            border: none;
          }
          .getstarted-btn span {
            position: relative;
            z-index: 1;
          }
        `}</style>
        <button ref={loginBtnRef} className="cureminds-btn" onClick={() => window.location.href = 'https://mind-connect-therapy-hub.lovable.app'}>
          <span>Login</span>
        </button>
        <button ref={getStartedBtnRef} className="getstarted-btn" onClick={() => window.location.href = 'https://mind-connect-therapy-hub.lovable.app'}>
          <span>Get Started</span>
        </button>
      </div>
      {/* Center menu (navbar) */}
      <div ref={navbarRef} style={{ transition: "opacity 0.3s, transform 0.3s" }}>
        <Navbar />
      </div>
      {/* Right-bottom offer box */}
      <div
        style={{
          position: "absolute",
          right: "3.5rem",
          bottom: "3.5rem",
          zIndex: 3,
          background: "rgba(255,255,255,0.25)",
          borderRadius: 20,
          boxShadow: "0 6px 24px rgba(0,0,0,0.18), 0 2px 12px rgba(0,0,0,0.12)",
          padding: "1.2rem 1.5rem 1.2rem 1.5rem",
          minWidth: 220,
          maxWidth: 270,
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 12,
        }}
      >
        <div style={{ fontSize: "1.05rem", fontWeight: 700, color: "#222", marginBottom: 4, display: "flex", alignItems: "center", gap: 6, justifyContent: "center", width: "100%", textAlign: "center" }}>
          <span style={{ fontSize: "1.3rem" }}>🏷️</span> Limited Time Offer
        </div>
        <div style={{ fontSize: "0.98rem", color: "#222", fontWeight: 500, marginBottom: 12, lineHeight: 1.5, textAlign: "center", width: "100%" }}>
          Save <span style={{ color: "#27ae60", fontWeight: 700 }}>$50</span> on your first month of CureMinds!  Start your mental wellness journey today.
        </div>
        <style>{`
          .find-therapist-btn {
            position: relative;
            overflow: hidden;
            padding: 0.85rem 2.2rem;
            border-radius: 15px;
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
        <button className="find-therapist-btn" style={{ display: "block", margin: "0 auto" }} onClick={() => setShowOnboarding(true)}>
          <span>Find My Therapist</span>
        </button>
        {createPortal(
          <OnboardingModal open={showOnboarding} onClose={() => setShowOnboarding(false)} onComplete={() => { setShowOnboarding(false); navigate('/guide'); }} />,
          document.body
        )}
      </div>
    </div>
  );
};

export default HeroSection; 