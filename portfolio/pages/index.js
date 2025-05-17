import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#e0f7ff] via-white to-[#f0f5ff] text-black px-8 py-10 font-sans relative overflow-hidden">
      {/* Animated background bubbles */}
      <div className="absolute top-0 left-0 w-full h-full -z-20 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#4c7bff] opacity-20"
            initial={{ opacity: 0, y: 600, scale: 0.3 }}
            animate={{
              y: [-100, -300, -600],
              opacity: [0.2, 0.3, 0],
              x: [Math.random() * -300, 0, Math.random() * 300],
              scale: [0.5, 1.5, 0.8]
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 10
            }}
            style={{
              width: `${20 + Math.random() * 60}px`,
              height: `${20 + Math.random() * 60}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`
            }}
          ></motion.div>
        ))}
      </div>

      {/* Robot/Universe background image */}
      <div className="absolute top-0 left-0 w-full h-full -z-30 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('/animated-robot-universe.jpg')" }}></div>

      <section className="text-center mb-20">
        <h1 className="text-4xl font-bold">Ehsan Ul Haq</h1>
        <h2 className="text-xl text-gray-600 mt-2">Software Engineer & RPA Consultant</h2>
        <p className="mt-4 text-md max-w-2xl mx-auto">
          I’m eager to bring my expertise in Robotic Process Automation (RPA), Python, and Machine Learning to forward-thinking teams. With a strong foundation in workflow automation, intelligent bot development, and full-stack solutions, I specialize in building systems that increase efficiency, accuracy, and data insight. From healthcare EMRs to financial audits to AI-driven bots, I provide full-fledged consulting tailored to complex automation needs.
        </p>
        <div className="mt-6">
          <Button asChild>
            <a href="mailto:ehsanulhaq77865@gmail.com">Contact Me</a>
          </Button>
        </div>
      </section>

      <section className="mb-20">
        <h3 className="text-2xl font-semibold mb-6 text-center">Projects</h3>
        <div className="grid gap-6 md:grid-cols-2">
          {["EMR/EHR Automation", "PDF Automations", "Insurance & Audit Automations", "Database Development & Automation", "AI/ML Chatbots & Bots"].map((title) => (
            <motion.div key={title} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Card>
                <CardContent className="p-6">
                  <h4 className="text-lg font-bold mb-2">{title}</h4>
                  <p>
                    {title.includes("EMR") && "Automated medical records using Epic, Cerner, ECW, and more to streamline healthcare workflows."}
                    {title.includes("PDF") && "Built robust RPA workflows to extract, classify, and process data from complex PDF documents."}
                    {title.includes("Insurance") && "Developed automations to validate audit trails, reconcile data, and reduce manual work in insurance audits."}
                    {title.includes("Database") && "Designed and automated relational databases (MySQL, PostgreSQL) for backend efficiency."}
                    {title.includes("Chatbots") && "Engineered intelligent chatbots using ML and NLP to solve client queries and automate operations."}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mb-20">
        <h3 className="text-2xl font-semibold mb-6 text-center">Skills & Technologies</h3>
        <div className="flex flex-wrap justify-center gap-3 text-sm">
          {["Python", "API", "AI/ML", "UiPath", "n8n", "Power Automate", "MySQL", "PostgreSQL", "JavaScript", "PHP", "MERN", "C/C++", "C#"].map(skill => (
            <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full shadow-sm">{skill}</span>
          ))}
        </div>
      </section>

      <section className="text-center">
        <h3 className="text-2xl font-semibold mb-4">Connect</h3>
        <p className="mb-2">Email: <a href="mailto:ehsanulhaq77865@gmail.com" className="text-blue-600 underline">ehsanulhaq77865@gmail.com</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/ehsan-ul-haq786" className="text-blue-600 underline">ehsan-ul-haq786</a></p>
      </section>
    </main>
  );
}