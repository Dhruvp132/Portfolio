import { motion } from 'framer-motion'

const achievements = [
  "Solved 450+ data structure and algorithmic problems on Leetcode and Hackerrank, consistently showcasing problem-solving proficiency while maintaining a strong record and commitment to continuous improvement.",
  "Achieved 25th Rank in Institute on GeeksforGeeks.",
  "Achieved 87.98 percentile in JEE Mains.",
  "Data Structures and Algorithms - Apna College: Intensive DSA curriculum with hands-on sessions in Java.",
  "Python for Data Science - IBM Cognitive Class: Specialized in Python for statistical analysis and machine learning."
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-4xl font-bold mb-8 text-center">Achievements & Certifications</h2>
        <ul className="space-y-4">
          {achievements.map((achievement, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg p-4"
            >
              {achievement}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  )
}