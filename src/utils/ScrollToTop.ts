"use client"
import { useEffect, useState } from 'react'
import { CgChevronUp } from 'react-icons/cg'

const ScrollToTop = () => {
  
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      window.scrollY > 120 ? setIsVisible(true) : setIsVisible(false)
    }
    
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [])

  const scrollToTop = () => {
    isVisible &&
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
  }

  return (
    <button 
      onClick={scrollToTop}
      className={` ${isVisible ? "opacity-100" : "opacity-0"} 
        fixed bottom-0 left-0 m-5 z-10 backdrop-blur-2xl hover:scale-95
        bg-[#10494b]/15 text-[#10494b] w-13 h-13 rounded-full
        flex justify-center items-center duration-500 cursor-pointer
      `}
    >
      <CgChevronUp size={31} />
    </button>
  )
}

export default ScrollToTop