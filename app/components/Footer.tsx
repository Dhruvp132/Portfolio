export default function Footer() {
    return (
      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Dhruv Patel. All rights reserved.</p>
          <p className="mt-2">
            <a href="mailto:dhruvpatel13210@gmail.com" className="text-blue-400 hover:underline">dhruvpatel13210@gmail.com</a> | +91-9589482345
          </p>
        </div>
      </footer>
    )
  }