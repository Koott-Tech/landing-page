import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ClientReview from "./ClientReview";

const HowItWorks = () => {
  const sectionRef = useRef(null);
  const divRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Wait for refs to be available
    const timeoutId = setTimeout(() => {
      if (sectionRef.current && divRefs.every(ref => ref.current)) {
        // Initial state - all divs visible and positioned normally
        gsap.set(divRefs.map(ref => ref.current), {
          y: 0,
          opacity: 1,
          scale: 1
        });

        // Create timeline for stacking effect
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "+=1500",
            scrub: 1,
            pin: false,
            pinSpacing: false
          }
        });

        // First phase: Wait for first div to be fully in viewport, then hover effect for divs 2, 3, 4
        tl.to([divRefs[1].current, divRefs[2].current, divRefs[3].current], {
          y: -15,
          scale: 1.03,
          duration: 1.2,
          ease: "power3.out"
        }, 0.5);

        // Second phase: Move 2nd div above 1st and blur the first div
        tl.to(divRefs[1].current, {
          y: -400,
          scale: 1.08,
          duration: 1.5,
          ease: "power3.out"
        }, 1.8);
        tl.to(divRefs[0].current, {
          filter: "blur(10px)",
          opacity: 0.3,
          duration: 1.5,
          ease: "power3.out"
        }, 1.8);

        // Third phase: Move 3rd div above 2nd and blur the second div
        tl.to(divRefs[2].current, {
          y: -800,
          scale: 1.08,
          duration: 1.5,
          ease: "power3.out"
        }, 2.3);
        tl.to(divRefs[1].current, {
          filter: "blur(10px)",
          opacity: 0.3,
          duration: 1.5,
          ease: "power3.out"
        }, 2.3);

        // Fourth phase: Move 4th div above 3rd and blur the third div
        tl.to(divRefs[3].current, {
          y: -1200,
          scale: 1.08,
          duration: 1.5,
          ease: "power3.out"
        }, 2.8);
        tl.to(divRefs[2].current, {
          filter: "blur(10px)",
          opacity: 0.3,
          duration: 1.5,
          ease: "power3.out"
        }, 2.8);
      }
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f8faff 0%, #e8f4fd 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "80px 0",
        position: "relative",
        zIndex: 1
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "90vw",
          maxWidth: 1200,
          gap: "3rem"
        }}
      >
        {/* Header */}
        <div
          style={{
            textAlign: "center",
            maxWidth: 600,
            marginBottom: "2rem"
          }}
        >
          <h2
            style={{
              color: "#1a1a1a",
              fontWeight: 700,
              fontSize: "2.5rem",
              marginBottom: "1rem",
              lineHeight: 1.2
            }}
          >
            How It Works
          </h2>
          <p
            style={{
              color: "#666",
              fontSize: "1.1rem",
              lineHeight: 1.6,
              margin: 0
            }}
          >
            Get started with professional therapy in just a few simple steps. 
            Our platform makes mental health support accessible, convenient, and personalized.
          </p>
        </div>

        {/* Rectangular divs */}
        <div
          ref={divRefs[0]}
          style={{
            width: "1100px",
            height: "400px",
            backgroundColor: "#fff",
            borderRadius: "10px",
            boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
            border: "1px solid rgba(39, 174, 96, 0.1)",
            marginBottom: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "40px",
            position: "relative"
          }}
        >
          {/* Top left heading - Guide */}
          <div
            style={{
              position: "absolute",
              top: "60px",
              left: "40px",
              background: "linear-gradient(135deg, #27ae60, #2ecc71)",
              color: "#fff",
              borderRadius: "12px",
              padding: "8px 16px",
              fontWeight: 600,
              fontSize: "0.9rem",
              boxShadow: "0 2px 8px rgba(39, 174, 96, 0.2)"
            }}
          >
            Guide
          </div>
          {/* Left side - Text content */}
          <div
            style={{
              flex: 1,
              paddingRight: "40px"
            }}
          >
            <h3
              style={{
                color: "#1a1a1a",
                fontWeight: 700,
                fontSize: "2rem",
                marginBottom: "1rem",
                lineHeight: 1.2
              }}
            >
              Personalized Therapy Matching
            </h3>
            <p
              style={{
                color: "#666",
                fontSize: "1.1rem",
                lineHeight: 1.6,
                marginBottom: "1.5rem"
              }}
            >
              Our advanced AI system analyzes your unique needs, preferences, and therapy goals to match you with the perfect therapist. We consider factors like specialization, communication style, and availability to ensure the best possible therapeutic relationship.
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                marginTop: "2rem"
              }}
            >
              <div
                style={{
                  background: "linear-gradient(135deg, #27ae60, #2ecc71)",
                  color: "#fff",
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  fontSize: "1.2rem"
                }}
              >
                01
              </div>
              <span
                style={{
                  color: "#27ae60",
                  fontWeight: 600,
                  fontSize: "1rem"
                }}
              >
                Step 1: Complete Assessment
              </span>
            </div>
          </div>

          {/* Right side - Card image */}
          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <div
              style={{
                width: "300px",
                height: "200px",
                borderRadius: "15px",
                overflow: "hidden",
                boxShadow: "0 8px 32px rgba(39, 174, 96, 0.15)",
                border: "2px solid #e0e7ef"
              }}
            >
              <img
                src={process.env.PUBLIC_URL + "/thumb1.png"}
                alt="Therapy Assessment Card"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }}
              />
            </div>
          </div>
        </div>
        <div
          ref={divRefs[1]}
          style={{
            width: "1100px",
            height: "400px",
            backgroundColor: "#fff",
            borderRadius: "10px",
            boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
            border: "1px solid rgba(39, 174, 96, 0.1)",
            marginBottom: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "40px",
            position: "relative"
          }}
        >
          {/* Top left heading - Guide */}
          <div
            style={{
              position: "absolute",
              top: "60px",
              left: "40px",
              background: "linear-gradient(135deg, #27ae60, #2ecc71)",
              color: "#fff",
              borderRadius: "12px",
              padding: "8px 16px",
              fontWeight: 600,
              fontSize: "0.9rem",
              boxShadow: "0 2px 8px rgba(39, 174, 96, 0.2)"
            }}
          >
            Guide
          </div>

          {/* Left side - Text content */}
          <div
            style={{
              flex: 1,
              paddingRight: "40px"
            }}
          >
            <h3
              style={{
                color: "#1a1a1a",
                fontWeight: 700,
                fontSize: "2rem",
                marginBottom: "1rem",
                lineHeight: 1.2
              }}
            >
              Expert Therapist Matching
            </h3>
            <p
              style={{
                color: "#666",
                fontSize: "1.1rem",
                lineHeight: 1.6,
                marginBottom: "1.5rem"
              }}
            >
              Our intelligent matching system connects you with licensed therapists who specialize in your specific needs. Each therapist is carefully vetted and experienced in providing personalized care for your unique situation and goals.
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                marginTop: "2rem"
              }}
            >
              <div
                style={{
                  background: "linear-gradient(135deg, #27ae60, #2ecc71)",
                  color: "#fff",
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  fontSize: "1.2rem"
                }}
              >
                02
              </div>
              <span
                style={{
                  color: "#27ae60",
                  fontWeight: 600,
                  fontSize: "1rem"
                }}
              >
                Step 2: Get Matched
              </span>
            </div>
          </div>

          {/* Right side - Card image */}
          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <div
              style={{
                width: "300px",
                height: "200px",
                borderRadius: "15px",
                overflow: "hidden",
                boxShadow: "0 8px 32px rgba(39, 174, 96, 0.15)",
                border: "2px solid #e0e7ef"
              }}
            >
              <img
                src={process.env.PUBLIC_URL + "/thumb2.png"}
                alt="Therapist Matching Card"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }}
              />
            </div>
          </div>
        </div>

        <div
          ref={divRefs[2]}
          style={{
            width: "1100px",
            height: "400px",
            backgroundColor: "#fff",
            borderRadius: "10px",
            boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
            border: "1px solid rgba(39, 174, 96, 0.1)",
            marginBottom: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "40px",
            position: "relative"
          }}
        >
          {/* Top left heading - Guide */}
          <div
            style={{
              position: "absolute",
              top: "60px",
              left: "40px",
              background: "linear-gradient(135deg, #27ae60, #2ecc71)",
              color: "#fff",
              borderRadius: "12px",
              padding: "8px 16px",
              fontWeight: 600,
              fontSize: "0.9rem",
              boxShadow: "0 2px 8px rgba(39, 174, 96, 0.2)"
            }}
          >
            Guide
          </div>

          {/* Left side - Text content */}
          <div
            style={{
              flex: 1,
              paddingRight: "40px"
            }}
          >
            <h3
              style={{
                color: "#1a1a1a",
                fontWeight: 700,
                fontSize: "2rem",
                marginBottom: "1rem",
                lineHeight: 1.2
              }}
            >
              Choose Your Session Type
            </h3>
            <p
              style={{
                color: "#666",
                fontSize: "1.1rem",
                lineHeight: 1.6,
                marginBottom: "1.5rem"
              }}
            >
              Select between chat therapy for ongoing support and video sessions for face-to-face conversations. Both options provide secure, confidential, and professional mental health support tailored to your comfort level and schedule.
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                marginTop: "2rem"
              }}
            >
              <div
                style={{
                  background: "linear-gradient(135deg, #27ae60, #2ecc71)",
                  color: "#fff",
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  fontSize: "1.2rem"
                }}
              >
                03
              </div>
              <span
                style={{
                  color: "#27ae60",
                  fontWeight: 600,
                  fontSize: "1rem"
                }}
              >
                Step 3: Select Format
              </span>
            </div>
          </div>

          {/* Right side - Card image */}
          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <div
              style={{
                width: "300px",
                height: "200px",
                borderRadius: "15px",
                overflow: "hidden",
                boxShadow: "0 8px 32px rgba(39, 174, 96, 0.15)",
                border: "2px solid #e0e7ef"
              }}
            >
              <img
                src={process.env.PUBLIC_URL + "/chat.png"}
                alt="Session Type Selection"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }}
              />
            </div>
          </div>
        </div>

        <div
          ref={divRefs[3]}
          style={{
            width: "1100px",
            height: "400px",
            backgroundColor: "#fff",
            borderRadius: "10px",
            boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
            border: "1px solid rgba(39, 174, 96, 0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "40px",
            position: "relative"
          }}
        >
          {/* Top left heading - Guide */}
          <div
            style={{
              position: "absolute",
              top: "60px",
              left: "40px",
              background: "linear-gradient(135deg, #27ae60, #2ecc71)",
              color: "#fff",
              borderRadius: "12px",
              padding: "8px 16px",
              fontWeight: 600,
              fontSize: "0.9rem",
              boxShadow: "0 2px 8px rgba(39, 174, 96, 0.2)"
            }}
          >
            Guide
          </div>

          {/* Left side - Text content */}
          <div
            style={{
              flex: 1,
              paddingRight: "40px"
            }}
          >
            <h3
              style={{
                color: "#1a1a1a",
                fontWeight: 700,
                fontSize: "2rem",
                marginBottom: "1rem",
                lineHeight: 1.2
              }}
            >
              Begin Your Healing Journey
            </h3>
            <p
              style={{
                color: "#666",
                fontSize: "1.1rem",
                lineHeight: 1.6,
                marginBottom: "1.5rem"
              }}
            >
              Start your therapy journey with professional support available 24/7. Our platform ensures you have access to mental health care whenever you need it, with ongoing support and progress tracking to help you achieve your wellness goals.
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                marginTop: "2rem"
              }}
            >
              <div
                style={{
                  background: "linear-gradient(135deg, #27ae60, #2ecc71)",
                  color: "#fff",
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  fontSize: "1.2rem"
                }}
              >
                04
              </div>
              <span
                style={{
                  color: "#27ae60",
                  fontWeight: 600,
                  fontSize: "1rem"
                }}
              >
                Step 4: Start Therapy
              </span>
            </div>
          </div>

          {/* Right side - Card image */}
          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <div
              style={{
                width: "300px",
                height: "200px",
                borderRadius: "15px",
                overflow: "hidden",
                boxShadow: "0 8px 32px rgba(39, 174, 96, 0.15)",
                border: "2px solid #e0e7ef"
              }}
            >
              <img
                src={process.env.PUBLIC_URL + "/irene.jpeg"}
                alt="Therapy Session"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }}
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Client Review Section */}
      <ClientReview />
    </section>
  );
};

export default HowItWorks; 