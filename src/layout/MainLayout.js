import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { Box } from '@chakra-ui/react'

const MainLayout = ({ children }) => {
  return (
    <Box minHeight='100vh' display='flex' flexDirection='column' justifyContent='space-between'>
      <Navbar />
      <Box as='main' width='full' flex='1' pt='80px'>
        {children}
      </Box>
      <Footer />
    </Box>
  )
}

export default MainLayout
