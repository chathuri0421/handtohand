import React, { useState } from "react";
import { Compass, Zap, Heart, BookOpen, Users, ChevronRight, X } from "lucide-react";
import boyImage from "../Assests/boyImage.jpg";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "About Us", href: "#about" },
];

const missionFeatures = [
  { icon: Heart, title: "Bridge Donors", description: "Connect caring individuals directly with verified educational needs." },
  { icon: BookOpen, title: "Support Education", description: "Provide resources like books, tech, and school supplies for students." },
  { icon: Users, title: "Empower Communities", description: "Facilitate educational support and mentorship sessions." },
];

const successStories = [
  {
    emoji: "😊",
    title: "Jane's Journey",
    subtitle: "From Struggling to Thriving",
    text: "With community help, Jane graduated and is now pursuing her dream of becoming a teacher.",
    cta: "Read Story",
  },
  {
    emoji: "🎓",
    title: "Mark's Experience",
    subtitle: "Scholarship Success",
    text: "Mark secured full funding through our platform to continue his education at a top university.",
    cta: "Read Story",
  },
];

// Reusable button
interface ButtonProps {
  children: React.ReactNode;
  primary?: boolean;
  onClick?: () => void;
}

const Button = ({ children, primary = false, onClick = () => {} }: ButtonProps) => (
  <button
    onClick={onClick}
    style={{
      padding: "12px 24px",
      fontWeight: "600",
      fontSize: "16px",
      borderRadius: "8px",
      border: primary ? "none" : "1px solid #d1d5db",
      backgroundColor: primary ? "#f97316" : "white",
      color: primary ? "white" : "#1f2937",
      cursor: "pointer",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      transition: "0.3s",
    }}
    onMouseOver={(e) =>
      (e.currentTarget.style.backgroundColor = primary ? "#ea580c" : "#f9fafb")
    }
    onMouseOut={(e) =>
      (e.currentTarget.style.backgroundColor = primary ? "#f97316" : "white")
    }
  >
    {children}
  </button>
);

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      style={{
        position: "fixed",
        width: "100%",
        zIndex: 20,
        backgroundColor: "rgba(255,255,255,0.95)",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        backdropFilter: "blur(5px)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "10px 20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <a
            href="#home"
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              color: "#f97316",
              textDecoration: "none",
            }}
          >
            HelpConnect
          </a>

          <div style={{ display: "flex", gap: "20px" }}>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                style={{
                  color: "#374151",
                  fontWeight: "500",
                  textDecoration: "none",
                  fontSize: "14px",
                }}
                onMouseOver={(e) => (e.currentTarget.style.color = "#f97316")}
                onMouseOut={(e) => (e.currentTarget.style.color = "#374151")}
              >
                {item.name}
              </a>
            ))}
          </div>

          <Button primary={true}>Donate / Login</Button>
        </div>
      </div>
    </nav>
  );
};

interface HeroSectionProps {
  imageUrl: string;
}

const HeroSection = ({ imageUrl }: HeroSectionProps) => (
  <section
    id="home"
    style={{
      position: "relative",
      height: "720px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      textAlign: "center",
      width: "100vw",
      backgroundImage: `url(${imageUrl})`,
      backgroundSize: "cover",
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
    }}
  >
    {/* Overlay */}
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to bottom, rgba(17,17,17,0.75), rgba(17,17,17,0.55), rgba(17,17,17,0.3))",
        zIndex: 1,
      }}
    />
    <div style={{ position: "relative", zIndex: 2, color: "white", padding: "20px" }}>
      <h1 style={{ fontSize: "48px", fontWeight: "900", marginBottom: "20px" }}>
        Welcome to <span style={{ color: "#f97316" }}>HelpConnect</span>
      </h1>
      <p
        style={{
          fontSize: "18px",
          maxWidth: "600px",
          margin: "0 auto 32px",
          lineHeight: "1.6",
          color: "#e5e7eb",
        }}
      >
        Connecting willing hearts with students in need for a global education.
      </p>
      <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
        <Button primary={true}>
          Find Help <Compass size={18} style={{ marginLeft: "8px" }} />
        </Button>
        <Button>
          Offer Help <Zap size={18} style={{ marginLeft: "8px" }} />
        </Button>
      </div>
    </div>
  </section>
);

const MissionSection = () => (
  <section id="about" style={{ padding: "80px 20px", backgroundColor: "#f9fafb" }}>
    <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
      <h2 style={{ color: "#f97316", textTransform: "uppercase", fontWeight: "600" }}>
        Our Core Purpose
      </h2>
      <p style={{ fontSize: "32px", fontWeight: "800", margin: "10px 0" }}>
        Our Mission: Bridging the Educational Gap
      </p>
      <p
        style={{
          fontSize: "18px",
          color: "#4b5563",
          maxWidth: "800px",
          margin: "0 auto 60px",
        }}
      >
        We aim to create a supportive, transparent community that facilitates direct resource
        sharing for students and schools facing challenges.
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "40px", justifyContent: "center" }}>
        <div style={{ flex: "1 1 45%", minWidth: "300px" }}>
          {missionFeatures.map((item, i) => (
            <div key={i} style={{ display: "flex", marginBottom: "24px" }}>
              <div
                style={{
                  padding: "10px",
                  borderRadius: "50%",
                  backgroundColor: "#ffedd5",
                }}
              >
                <item.icon size={36} color="#f97316" />
              </div>
              <div style={{ marginLeft: "16px", textAlign: "left" }}>
                <h3 style={{ fontSize: "20px", fontWeight: "600", marginBottom: "6px" }}>
                  {item.title}
                </h3>
                <p style={{ color: "#6b7280" }}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            backgroundColor: "white",
            padding: "32px",
            borderRadius: "16px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            textAlign: "left",
            flex: "1 1 45%",
            minWidth: "300px",
          }}
        >
          <h3 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "16px" }}>
            Empowering Education
          </h3>
          <p style={{ color: "#6b7280", marginBottom: "24px" }}>
            Our platform goes beyond donations; we track impact, facilitate mentorship, and ensure
            every contribution directly leads to educational success.
          </p>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            <span style={tagStyle("green")}>Verified Needs</span>
            <span style={tagStyle("blue")}>Direct Impact</span>
            <span style={tagStyle("yellow")}>Global Reach</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const tagStyle = (color: "green" | "blue" | "yellow") => {
  const colors: Record<"green" | "blue" | "yellow", { bg: string; text: string }> = {
    green: { bg: "#dcfce7", text: "#166534" },
    blue: { bg: "#dbeafe", text: "#1e40af" },
    yellow: { bg: "#fef9c3", text: "#92400e" },
  };
  const selected = colors[color];
  return {
    backgroundColor: selected.bg,
    color: selected.text,
    padding: "6px 12px",
    borderRadius: "12px",
    fontSize: "14px",
    fontWeight: "500",
  } as React.CSSProperties;
};

const StoriesSection = () => (
  <section style={{ padding: "80px 20px", backgroundColor: "white" }}>
    <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
      <h2 style={{ color: "#2563eb", textTransform: "uppercase", fontWeight: "600" }}>
        Real Change
      </h2>
      <p style={{ fontSize: "32px", fontWeight: "800", margin: "10px 0" }}>
        Success Stories That Inspire
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "32px", justifyContent: "center" }}>
        {successStories.map((story, i) => (
          <div
            key={i}
            style={{
              flex: "1 1 45%",
              display: "flex",
              padding: "24px",
              borderRadius: "12px",
              border: "1px solid #f3f4f6",
              boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
              textAlign: "left",
              minWidth: "300px",
            }}
          >
            <div
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                backgroundColor: "#ffedd5",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "32px",
                marginRight: "16px",
              }}
            >
              {story.emoji}
            </div>
            <div>
              <p style={{ color: "#6b7280", fontSize: "14px", textTransform: "uppercase" }}>
                {story.subtitle}
              </p>
              <h3 style={{ fontSize: "22px", fontWeight: "700" }}>{story.title}</h3>
              <p style={{ color: "#374151", marginBottom: "12px" }}>{story.text}</p>
              <a
                href="#"
                style={{
                  color: "#f97316",
                  textDecoration: "none",
                  fontWeight: "600",
                  display: "inline-flex",
                  alignItems: "center",
                }}
              >
                {story.cta} <ChevronRight size={16} style={{ marginLeft: "4px" }} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer style={{ backgroundColor: '#111827', color: '#e5e7eb', marginTop: '40px' }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '32px 20px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', alignItems: 'start' }}>
        <div>
          <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#f97316', marginBottom: '8px' }}>HelpConnect</h3>
          <p style={{ fontSize: '14px', color: '#9ca3af', marginBottom: '8px' }}>Bringing donors and students for a brighter tomorrow.</p>
          <p style={{ fontSize: '13px', color: '#9ca3af' }}>Contact us: info@helpconnect.org</p>
        </div>

        <div>
          <h4 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '10px' }}>Quick Links</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#9ca3af' }}>
            {['Browse Projects', 'How It Works', 'Impact Stories', 'Privacy Policy'].map((item) => (
              <li key={item} style={{ marginBottom: '8px' }}>
                <a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>{item}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '10px' }}>Follow Us</h4>
          <div style={{ display: 'flex', gap: '12px' }}>
            <a href="#" aria-label="Twitter" style={{ color: '#9ca3af' }}>
              <svg className="w-6 h-6" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22 4.01c-.88.39-1.83.65-2.82.77.99-.59 1.76-1.54 2.12-2.66-.93.55-1.97.94-3.07 1.15C17.18 2.5 15.93 2 14.5 2c-2.65 0-4.8 2.15-4.8 4.8 0 .38.04.75.12 1.11C6.18 7.6 3.2 5.07 1.25 1.13c-.42.72-.66 1.56-.66 2.47 0 1.66.85 3.13 2.15 4-.79-.02-1.54-.25-2.19-.6V8.6c0 2.34 1.66 4.3 3.86 4.74-.4.11-.8.17-1.21.17-.3 0-.59-.03-.87-.08.62 1.95 2.4 3.37 4.52 3.41-1.6 1.26-3.62 2.01-5.83 2.01-.38 0-.76-.02-1.13-.07 2.08 1.34 4.56 2.13 7.22 2.13 8.66 0 13.4-7.15 13.4-13.38 0-.2-.01-.4-.02-.6.92-.66 1.72-1.49 2.35-2.44z" /></svg>
            </a>
            <a href="#" aria-label="Facebook" style={{ color: '#9ca3af' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M14 13.5h2.5l1-4H14V7.5c0-.85.11-1.28 1.28-1.28H18V3.08c-.4-.05-1.77-.17-3.32-.17C12.43 2.91 11 4.33 11 7.15V9.5H8.5v4H11V22h4v-8.5z" /></svg>
            </a>
            <a href="#" aria-label="Instagram" style={{ color: '#9ca3af' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c2.72 0 3.06.01 4.12.06 1.06.05 1.76.2 2.43.47.74.29 1.34.7 1.94 1.3.6.6.99 1.2 1.3 1.94.27.67.42 1.37.47 2.43.05 1.06.06 1.4.06 4.12s-.01 3.06-.06 4.12c-.05 1.06-.2 1.76-.47 2.43-.29.74-.7 1.34-1.3 1.94-.6.6-.99 1-1.94 1.3-.67.27-1.37.42-2.43.47-1.06.05-1.4.06-4.12.06s-3.06-.01-4.12-.06c-1.06-.05-1.76-.2-2.43-.47-.74-.29-1.34-.7-1.94-1.3-.6-.6-.99-1.2-1.3-1.94-.27-.67-.42-1.37-.47-2.43-.05-1.06-.06-1.4-.06-4.12s.01-3.06.06-4.12c.05-1.06.19-1.57.35 1.98.17.41.42.77.77 1.12.35.35.6.71.77 1.12.41.16.96.3 1.98.35 1.02.05 1.36.06 3.96.06s2.94-.01 3.96-.06c1.02-.05 1.57-.19 1.98-.35.41-.17.77-.42 1.12-.77.35-.35.6-.71.77-1.12.16-.41.3-1.96.35-1.98.05-1.02.06-1.36.06-3.96s-.01-2.94-.06-3.96c-.05-1.02-.19-1.57-.35-1.98-.17-.41-.42-.77-.77-1.12-.35-.35-.71-.6-1.12-.77-.41-.16-.96-.3-1.98-.35C14.94 4.21 14.6 4.2 12 4.2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 8.2a3.2 3.2 0 110-6.4 3.2 3.2 0 010 6.4zm5.5-8.2a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z" /></svg>
            </a>
          </div>
        </div>

        <div>
          <h4 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '10px' }}>Stay Updated</h4>
          <p style={{ color: '#9ca3af', marginBottom: '10px', fontSize: '14px' }}>Subscribe to our newsletter for the latest impact stories.</p>
          <div style={{ display: 'flex', gap: '8px' }}>
            <input type="email" placeholder="Your email" style={{ flex: 1, padding: '10px', borderRadius: '6px', border: '1px solid #374151', background: '#0b1220', color: '#e5e7eb' }} />
            <button style={{ background: '#f97316', border: 'none', color: 'white', padding: '10px 14px', borderRadius: '6px', cursor: 'pointer' }}>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
      <div style={{ marginTop: '20px', borderTop: '1px solid #1f2937', paddingTop: '12px', textAlign: 'center', color: '#6b7280', fontSize: '13px' }}>
        &copy; {new Date().getFullYear()} HelpConnect. All rights reserved.
      </div>
    </div>
  </footer>
);

const App = () => (
  <div style={{ fontFamily: "Inter, sans-serif", color: "#111827" }}>
    <NavigationBar />
    <HeroSection imageUrl={boyImage} />
    <MissionSection />
    <StoriesSection />
    <Footer />
  </div>
);

export default App;
