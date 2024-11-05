'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Header from '@/app/components/Header'
import Hero from '@/app/components/Hero'
import Skills from '@/app/components/Skills'
import Experience from '@/app/components/Experience'
import Projects from '@/app/components/Projects'
import Education from '@/app/components/Education'
import Achievements from '@/app/components/Achievements'
import Footer from '@/app/components/Footer'

export default function Home() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"])

  return (
    <motion.main 
      ref={ref} 
      className="relative min-h-screen overflow-hidden bg-black text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <motion.div
        className="fixed inset-0 z-[-1]"
        style={{
          backgroundImage: "url('/aurora-bg.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          y: backgroundY
        }}
        aria-hidden="true"
      />
      <Hero />
      <motion.div style={{ y: textY }}>
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Achievements />
      </motion.div>
      <Footer />
    </motion.main>
  )
}