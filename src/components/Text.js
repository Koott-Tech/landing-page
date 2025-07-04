import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const text =
  "Empowering your mental wellness journey with expert support, real conversations, and therapy that fits your life—anytime, anywhere.\n\nAvailable in multiple languages, so you can connect in the language you're most comfortable with.";

const Text = () => {
  const lettersRef = useRef([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!lettersRef.current) return;
    gsap.set(lettersRef.current, { color: "#bbb" });
    gsap.to(lettersRef.current, {
      color: "#111",
      stagger: {
        each: 0.008,
        ease: "power1.inOut",
      },
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "top top",
        scrub: 1,
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        width: "100vw",
        height: "100vh",
        background: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          fontWeight: 500,
          textAlign: "center",
          maxWidth: "900px",
          lineHeight: 1.2,
          letterSpacing: "0.01em",
          wordBreak: "break-word",
        }}
      >
        {text.split("").map((char, i) => (
          <span
            key={i}
            ref={el => (lettersRef.current[i] = el)}
            style={{ display: char === " " ? "inline-block" : "inline", minWidth: char === " " ? "0.3em" : undefined }}
          >
            {char}
          </span>
        ))}
      </h1>
    </section>
  );
};

export default Text; 