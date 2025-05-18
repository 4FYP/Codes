import React from "react";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <main style={{ minHeight: '100vh', padding: '2rem', fontFamily: 'sans-serif', background: 'linear-gradient(to bottom right, #e0f7ff, #f0f5ff)', color: '#000' }}>
      <section style={{ textAlign: 'center', marginBottom: '5rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Ehsan Ul Haq</h1>
        <h2 style={{ fontSize: '1.25rem', color: '#555', marginTop: '0.5rem' }}>Software Engineer & RPA Consultant</h2>
        <p style={{ marginTop: '1rem', fontSize: '1rem', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' }}>
          I’m eager to bring my expertise in Robotic Process Automation (RPA), Python, and Machine Learning to forward-thinking teams. With a strong foundation in workflow automation, intelligent bot development, and full-stack solutions, I specialize in building systems that increase efficiency, accuracy, and data insight. From healthcare EMRs to financial audits to AI-driven bots, I provide full-fledged consulting tailored to complex automation needs.
        </p>
        <div style={{ marginTop: '1.5rem' }}>
          <a href="mailto:ehsanulhaq77865@gmail.com" style={{ backgroundColor: '#007bff', padding: '0.75rem 1.5rem', color: '#fff', borderRadius: '5px', textDecoration: 'none' }}>Contact Me</a>
        </div>
      </section>

      <section style={{ marginBottom: '4rem' }}>
        <h3 style={{ fontSize: '1.5rem', fontWeight: '600', textAlign: 'center', marginBottom: '2rem' }}>Projects</h3>
        <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          {["EMR/EHR Automation", "PDF Automations", "Insurance & Audit Automations", "Database Development & Automation", "AI/ML Chatbots & Bots"].map((title) => (
            <motion.div key={title} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} style={{ backgroundColor: '#fff', padding: '1.5rem', borderRadius: '10px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{title}</h4>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.5' }}>
                {title.includes("EMR") && "Automated medical records using Epic, Cerner, ECW, and more to streamline healthcare workflows."}
                {title.includes("PDF") && "Built robust RPA workflows to extract, classify, and process data from complex PDF documents."}
                {title.includes("Insurance") && "Developed automations to validate audit trails, reconcile data, and reduce manual work in insurance audits."}
                {title.includes("Database") && "Designed and automated relational databases (MySQL, PostgreSQL) for backend efficiency."}
                {title.includes("Chatbots") && "Engineered intelligent chatbots using ML and NLP to solve client queries and automate operations."}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: '4rem' }}>
        <h3 style={{ fontSize: '1.5rem', fontWeight: '600', textAlign: 'center', marginBottom: '2rem' }}>Skills & Technologies</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.5rem' }}>
          {["Python", "API", "AI/ML", "UiPath", "n8n", "Power Automate", "MySQL", "PostgreSQL", "JavaScript", "PHP", "MERN", "C/C++", "C#"].map(skill => (
            <span key={skill} style={{ backgroundColor: '#cce5ff', color: '#004085', padding: '0.4rem 1rem', borderRadius: '20px', fontSize: '0.85rem' }}>{skill}</span>
          ))}
        </div>
      </section>

      <section style={{ textAlign: 'center' }}>
        <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Connect</h3>
        <p style={{ marginBottom: '0.5rem' }}>Email: <a href="mailto:ehsanulhaq77865@gmail.com" style={{ color: '#007bff', textDecoration: 'underline' }}>ehsanulhaq77865@gmail.com</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/ehsan-ul-haq786" style={{ color: '#007bff', textDecoration: 'underline' }}>ehsan-ul-haq786</a></p>
      </section>
    </main>
  );
}
