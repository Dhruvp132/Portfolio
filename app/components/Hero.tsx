import { motion } from 'framer-motion'
import Image from 'next/image'

<Image
  src="/logo.png"
  alt="Logo"
  width={200}
  height={200}
  className="animate-pulse"
/>

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center z-10"
      >
        <h1 className="text-6xl font-bold mb-4">Dhruv Patel</h1>
        <p className="text-2xl mb-8">Software Engineer & DSA Instructor</p>
        <div className="flex space-x-4 justify-center">
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">LinkedIn</a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white px-6 py-2 rounded-full hover:bg-gray-900 transition-colors">GitHub</a>
        </div>
      </motion.div>
      <motion.div
        className="absolute inset-0 z-0"
        animate={{
          background: [
            "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
            "radial-gradient(circle, rgba(174,238,225,1) 0%, rgba(148,187,233,1) 100%)",
            "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)"
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, -20, 0],
        }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <Image
          src="/logo.png"
          alt="Logo"
          width={200}
          height={200}
          className="animate-pulse"
        />
      </motion.div>
    </section>
  )
}