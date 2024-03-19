import { useState, useEffect, useMemo } from 'react'
// import { useRouter } from 'next/router'
import sections from './sections'

export const useCustomDrawerContentLogic = (onClose) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [isSmallScreen, setIsSmallScreen] = useState(false)
  // const router = useRouter()

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768) // Cambia 768 por el breakpoint que necesites
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)

    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  const filteredSections = useMemo(() => {
    if (!searchTerm) return sections
    return sections.filter(section =>
      section.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [searchTerm])

  const handleSectionClick = (sectionLink) => {
    // router.push(sectionLink)
    if (onClose) onClose()
  }

  return {
    searchTerm,
    setSearchTerm,
    isSmallScreen,
    filteredSections,
    handleSectionClick
  }
}
