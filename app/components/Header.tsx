import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 bg-black bg-opacity-50 backdrop-blur-md"
    >
      <Link href="/" className="text-2xl font-bold">Dhruv Patel</Link>
      <nav>
        <ul className="flex space-x-4">
          <li><Link href="#skills">Skills</Link></li>
          <li><Link href="#experience">Experience</Link></li>
          <li><Link href="#projects">Projects</Link></li>
          <li><Link href="#education">Education</Link></li>
          <li><Link href="#achievements">Achievements</Link></li>
        </ul>
      </nav>
    </motion.header>
  )
}