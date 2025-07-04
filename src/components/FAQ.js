import React, { useState } from "react";

const QUESTIONS = [
  {
    q: "How do online therapy sessions work?",
    a: "Online therapy sessions are conducted via secure video or chat platforms, allowing you to connect with your therapist from anywhere."
  },
  {
    q: "Is my information confidential?",
    a: "Yes, all your information and conversations are kept strictly confidential and secure."
  },
  {
    q: "Can I choose my own therapist?",
    a: "Absolutely! You can browse profiles and select a therapist who best fits your needs."
  },
  {
    q: "What if I don't feel comfortable with my therapist?",
    a: "You can switch therapists at any time, no questions asked. Your comfort is our priority."
  },
  {
    q: "How long is each session?",
    a: "Each session typically lasts 50 minutes, but you can discuss timing with your therapist."
  },
  {
    q: "Are video sessions mandatory?",
    a: "No, you can choose between chat, audio, or video sessions based on your preference."
  },
  {
    q: "How do I book a session?",
    a: "Simply click the 'Book a Session' button and follow the prompts to schedule your appointment."
  },
  {
    q: "What payment methods are accepted?",
    a: "We accept all major credit/debit cards and digital wallets."
  },
  {
    q: "Can I reschedule or cancel a session?",
    a: "Yes, you can easily reschedule or cancel up to 24 hours before your session."
  },
  {
    q: "Is therapy suitable for children or teens?",
    a: "Yes, we have therapists who specialize in working with children and adolescents."
  },
  {
    q: "How soon can I start after signing up?",
    a: "You can usually start within 24 hours of signing up."
  },
  {
    q: "Can I attend therapy anonymously?",
    a: "Yes, you can use a nickname and keep your camera off if you prefer anonymity."
  },
  {
    q: "What if I need urgent help?",
    a: "For urgent mental health support, we recommend contacting a local helpline or emergency services."
  },
  {
    q: "Do you offer group therapy sessions?",
    a: "Yes, we offer group sessions on various topics. Check our schedule for upcoming groups."
  }
];

const FAQ = (props) => (
  <section style={{ width: "100vw", minHeight: "100vh", background: "#fff", display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 64, position: "relative" }}>
    <h2 style={{ fontSize: 40, fontWeight: 800, color: "#1a1a1a", textAlign: "center", marginBottom: 36, letterSpacing: "-0.01em", lineHeight: 1.15 }}>
      Stuff you're probably wondering<br/>
      <span style={{ fontWeight: 500, fontSize: 28, color: "#27ae60" }}>(that we can definitely help with)</span>
    </h2>
    <style>{`
      .faq-bubble {
        min-width: 180px;
        max-width: 270px;
        padding: 28px 18px 28px 18px;
        border-radius: 52px;
        color: #1a1a1a;
        font-size: 1.18rem;
        font-weight: 600;
        box-shadow: 0 4px 24px rgba(39,174,200,0.10), 0 1.5px 6px rgba(0,0,0,0.08);
        cursor: pointer;
        transition: transform 0.22s cubic-bezier(.4,2,.6,1), box-shadow 0.18s, z-index 0.18s;
        z-index: 2;
        user-select: none;
        border: none;
        display: flex;
        align-items: center;
        gap: 16px;
        margin: 0 6px 18px 6px;
        position: relative;
      }
      .faq-bubble:hover {
        transform: scale(1.13) rotate(0deg) !important;
        z-index: 99 !important;
        box-shadow: 0 8px 48px rgba(39,174,200,0.18), 0 2px 12px rgba(0,0,0,0.13);
      }
      .faq-dropdown {
        margin-top: 12px;
        background: #e3f2fd;
        border-radius: 0 0 18px 18px;
        padding: 16px 24px;
        font-size: 1.05rem;
        color: #222;
        box-shadow: 0 2px 12px rgba(39,174,200,0.08);
        animation: fadeInFaq 0.18s;
      }
      @keyframes fadeInFaq {
        from { opacity: 0; transform: translateY(-10px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .faq-dropdown-icon {
        font-size: 1.5rem;
        margin-left: auto;
        color: #1976d2;
        transition: transform 0.18s;
        cursor: pointer;
        user-select: none;
      }
      .faq-dropdown-icon.open {
        transform: rotate(180deg);
      }
      .faq-bubble-row {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        width: 100%;
        margin-bottom: 0;
        position: relative;
      }
    `}</style>
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 80, paddingLeft: 80, paddingRight: 80, boxSizing: 'border-box' }}>
      {[0, 1, 2].map(row => (
        <div className="faq-bubble-row" key={row}>
          {QUESTIONS.filter((_, i) => i % 3 === row).map((item, idx) => {
            const angle = [-12, 8, -6, 14, -16, 10, -8, 18, -10, 12, -14][(row * 5 + idx) % 11];
            const blueShades = [
              "#e3f2fd", "#bbdefb", "#b3e5fc", "#b2ebf2", "#b2dfdb", "#c8e6c9", "#dcedc8", "#f0f4c3", "#ffe0b2", "#ffccbc", "#d1c4e9"
            ];
            return (
              <FAQBubble
                key={row + '-' + idx}
                question={item.q}
                answer={item.a}
                style={{
                  background: blueShades[idx % blueShades.length],
                  transform: `rotate(${angle}deg)`
                }}
              />
            );
          })}
        </div>
      ))}
    </div>
  </section>
);

function FAQBubble({ question, answer, style }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="faq-bubble"
      style={{ ...style, zIndex: open ? 100 : style.zIndex }}
      tabIndex={0}
    >
      <span style={{ whiteSpace: 'normal', wordBreak: 'break-word', lineHeight: 1.22, fontSize: '1.08rem', fontWeight: 600, flex: 1, display: 'block', textAlign: 'center' }}>{question}</span>
      <span
        className={`faq-dropdown-icon${open ? " open" : ""}`}
        onClick={e => {
          e.stopPropagation();
          setOpen(v => !v);
        }}
        title={open ? "Hide answer" : "Show answer"}
        style={{ display: 'flex', alignItems: 'center', marginLeft: 8 }}
      >
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transition: 'transform 0.18s', transform: open ? 'rotate(180deg)' : 'none' }}>
          <path d="M6 9l5 5 5-5" stroke="#1976d2" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
      {open && (
        <div className="faq-dropdown" style={{ position: 'absolute', left: 0, right: 0, top: '100%', marginTop: 4, zIndex: 100 }}>
          {answer}
        </div>
      )}
    </div>
  );
}

export default FAQ; 