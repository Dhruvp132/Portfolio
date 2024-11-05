import { motion } from 'framer-motion'

const projects = [
  {
    title: "Muzique",
    description: "A collaborative SaaS music platform enabling real-time playlist voting, supporting hundreds to thousands of concurrent users through scalable architecture.",
    technologies: "NextJS, Tailwind, Prisma, Postgres, Typescript",
    link: "https://muzique-project.com"
  },
  {
    title: "Progressify",
    description: "A task management system with an intuitive admin dashboard, managing hundreds to thousands of active tasks to improve speed and efficiency for large teams.",
    technologies: "MongoDB, React, Express, Node & Mongoose",
    link: "https://progressify-project.com"
  },
  {
    title: "AlgoViz",
    description: "An educational tool for visualizing sorting and pathfinding algorithms, which can be used by thousands of users to learn algorithmic concepts interactively.",
    technologies: "ReactJS, JavaScript, JQuery, HTML & CSS",
    link: "https://algoviz-project.com"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-4xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <p className="text-sm text-gray-500 mb-4">{project.technologies}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">View Project</a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}