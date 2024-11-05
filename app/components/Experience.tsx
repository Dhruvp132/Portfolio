import { motion } from 'framer-motion'

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-4xl font-bold mb-8 text-center">Experience</h2>
        <div className="bg-gray-800 rounded-lg p-6">
          <h3 className="text-2xl font-bold mb-2">Software Engineering & DSA Instructor (TA Intern)</h3>
          <p className="text-gray-400 mb-4">Apna College, Delhi, India | June 2024 – Oct 2024</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Led 50+ interactive coding sessions on data structures and algorithms, enabling 200+ students to gain hands-on experience with industry-standard coding techniques.</li>
            <li>Streamlined debugging and optimized code in multiple student projects, resulting in measurable improvements in code performance (an estimated 10% improvement).</li>
            <li>Mentored students on advanced algorithmic strategies & techniques, providing targeted feedback that led to significant improvements in coding assessment & interview performance.</li>
          </ul>
        </div>
      </motion.div>
    </section>
  )
}