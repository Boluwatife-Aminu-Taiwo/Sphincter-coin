import { useState, useEffect } from 'react'
import { ArrowUpCircle } from 'lucide-react'


export function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = document.documentElement.scrollTop
      const scrollHeight = document.documentElement.scrollHeight
      const clientHeight = document.documentElement.clientHeight
      
      if (scrolled + clientHeight >= scrollHeight - 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  if (!isVisible) {
    return null
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-4 right-4 bg-gray-800 text-white p-2 rounded-full shadow-lg transition-opacity hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
      aria-label="Back to top"
    >
      <ArrowUpCircle size={20} />
    </button>
  )
}

