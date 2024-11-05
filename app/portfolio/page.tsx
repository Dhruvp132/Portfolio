'use client'

import Link from 'next/link';
import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Github, Linkedin, Mail, Phone } from 'lucide-react'

const colors = [
  "#ffb56b", "#fdaf69", "#f89d63", "#f59761", "#ef865e", "#ec805d", "#e36e5c",
  "#df685c", "#d5585c", "#d1525c", "#c5415d", "#c03b5d", "#b22c5e", "#ac265e",
  "#9c155f", "#950f5f", "#830060", "#7c0060", "#680060", "#60005f", "#48005f", "#3d005e"
]

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null)
  const circlesRef = useRef<(HTMLDivElement | null)[]>([])
  const coordsRef = useRef({ x: 0, y: 0 })
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  useEffect(() => {
    const circles = circlesRef.current.filter((circle): circle is HTMLDivElement => circle !== null)

    circles.forEach((circle, index) => {
      circle.x = 0
      circle.y = 0
      circle.style.backgroundColor = colors[index % colors.length]
    })

    const handleMouseMove = (e: MouseEvent) => {
      coordsRef.current = { x: e.clientX, y: e.clientY }
    }

    window.addEventListener("mousemove", handleMouseMove)

    function animateCircles() {
      let x = coordsRef.current.x
      let y = coordsRef.current.y

      circles.forEach((circle, index) => {
        circle.style.left = `${x - 12}px`
        circle.style.top = `${y - 12}px`
        circle.style.scale = `${(circles.length - index) / circles.length}`
        circle.x = x
        circle.y = y

        const nextCircle = circles[index + 1] || circles[0]
        x += (nextCircle.x - x) * 0.3
        y += (nextCircle.y - y) * 0.3
      })

      requestAnimationFrame(animateCircles)
    }

    animateCircles()

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden" ref={containerRef}>
      <div className="aurora-bg fixed inset-0 z-0"></div>
      
      <motion.div 
        className="fixed inset-0 flex items-center justify-center text-[20vw] font-bold text-white opacity-10 pointer-events-none z-0"
        style={{ y }}
      >
        Dhruv Patel
      </motion.div>

      {Array.from({ length: 20 }).map((_, index) => (
        <div
          key={index}
          ref={el => circlesRef.current[index] = el}
          className="circle"
        />
      ))}

      <header className="fixed top-0 left-0 right-0 z-50 bg-opacity-80 bg-gray-800 backdrop-blur-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Dhruv Patel</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#skills" className="hover:text-blue-400">Skills</a></li>
              <li><a href="#experience" className="hover:text-blue-400">Experience</a></li>
              <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
              <li><a href="#education" className="hover:text-blue-400">Education</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="pt-16 relative z-10">
        <section className="h-screen flex items-center justify-center relative overflow-hidden">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h2>
            <p className="text-xl">Full-stack Developer | Software Engineer | Problem Solver | Innovator</p>
            <div className="flex mt-7 justify-center space-x-4">
          <a href="https://www.linkedin.com/in/dhruvpatel1310" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://github.com/Dhruvp132" target="_blank" rel="noopener noreferrer">
            <Github className="w-6 h-6" />
          </a>
          <a href="mailto:dhruvpatel13210@gmail.com">
            <Mail className="w-6 h-6" />
          </a>
          <a href="tel:+919589482345">
            <Phone className="w-6 h-6" />
          </a>
        </div>
          </motion.div>
        </section>

        <section id="skills" className="py-16 bg-opacity-80 bg-gray-800 backdrop-blur-md">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8">Skills</h2>
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {['TypeScript', 'JavaScript', 'React', 'Next.js', 'Node.js', 'Python', 'Java', 'AWS'].map((skill) => (
                <motion.div
                  key={skill}
                  className="bg-gray-700 p-4 rounded-lg text-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="experience" className="py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8">Experience</h2>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold">Software Engineering & DSA Instructor (TA Intern)</h3>
              <p className="text-gray-400">Apna College, Delhi, India | June 2024 – Oct 2024</p>
              <ul className="list-disc list-inside mt-4">
                <li>Led 50+ interactive coding sessions on data structures and algorithms</li>
                <li>Streamlined debugging and optimized code in multiple student projects</li>
                <li>Mentored students on advanced algorithmic strategies & techniques</li>
              </ul>
            </motion.div>
          </div>
        </section>

        <section id="projects" className="py-16 bg-opacity-80 bg-gray-800 backdrop-blur-md">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { name: 'Muzique', desc: 'Collaborative SaaS music platform', link : "https://github.com/Dhruvp132/Muzique" },
                { name: 'Progressify', desc: 'Task management system with admin dashboard', link : 'https://dhruvp132.github.io/Progressify/' },
                { name: 'AlgoViz', desc: 'Educational tool for visualizing algorithms', link : 'https://dhruvp132.github.io/Pathfinding-Visualizer/' }
              ].map((project, index) => (
                <Link key={project.name} href={project.link || '#'} passHref>
                <motion.div
                  key={project.name}
                  className="bg-gray-700 p-6 rounded-lg"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
                  <p>{project.desc}</p>
                </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8">Education</h2>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold">Bachelor of Technology (BTech)</h3>
              <p className="text-gray-400">Silver Oak University, Ahmedabad, Gujarat | Grad' 2024</p>
              <p className="mt-2">Computer Science Engineering | CGPA: 9.28</p>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="bg-opacity-80 bg-gray-800 backdrop-blur-md py-8 relative z-10">
        <div className="container mx-auto text-center">
          <p>© 2024 Dhruv Patel. All rights reserved.</p>
          <div className="mt-4">
            <a href="https://www.linkedin.com/in/dhruvpatel1310" className="text-blue-400 hover:underline mx-2">LinkedIn</a>
            <a href="https://github.com/Dhruvp132" className="text-blue-400 hover:underline mx-2">GitHub</a>
            <a href="mailto:dhruvpatel13210@gmail.com" className="text-blue-400 hover:underline mx-2">Email</a>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes aurora {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .aurora-bg {
          background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
          background-size: 400% 400%;
          animation: aurora 15s ease infinite;
        }

        .circle {
          height: 24px;
          width: 24px;
          border-radius: 24px;
          background-color: black;
          position: fixed; 
          top: 0;
          left: 0;
          pointer-events: none;
          z-index: 99999999;
        }
      `}</style>
    </div>
  )
}