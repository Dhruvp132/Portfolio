import { motion } from 'framer-motion'

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-4xl font-bold mb-8 text-center">Education</h2>
        <div className="bg-gray-800 rounded-lg p-6">
          <h3 className="text-2xl font-bold mb-2">Bachelor of Technology (BTech)</h3>
          <p className="text-gray-400 mb-4">Silver Oak University, Ahmedabad, Gujarat | Computer Science Engineering | CGPA: 9.28</p>
          <p className="mb-4">Grad&apos; 2024</p>
          <h4 className="text-xl font-semibold mb-2">Relevant Coursework:</h4>
          <ul className="list-disc list-inside space-y-1">
            <li>Data Structures & Algorithms</li>
            <li>Object-Oriented Programming System (OOPs)</li>
            <li>Software Engineering Principles</li>
            <li>Database Management Systems (DBMS)</li>
            <li>Operating System</li>
            <li>Computer Networks</li>
            <li>Engineering Mathematics</li>
          </ul>
          <p className="mt-4 font-semibold">Honors: Top 5% of the class, achieving a CGPA of 9.28</p>
        </div>
      </motion.div>
    </section>
  )
}