import { motion } from 'framer-motion'

const skills = [
  "TypeScript", "JavaScript", "Java", "Python", "Next.js", "ReactJS", "Recoil", "MERN", "Prisma", "Django",
  "AWS", "Cloudflare", "Firebase", "MongoDB", "PostgreSQL", "MySQL", "Git", "Docker", "Agile & Scrum"
]

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-4xl font-bold mb-8 text-center">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg p-4 text-center hover:bg-gray-700 transition-colors"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}