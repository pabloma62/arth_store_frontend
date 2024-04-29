import React, { useState } from 'react'
import MainLayout from '../src/layout/MainLayout'
import { Box, Text, Flex, IconButton } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

function App () {
  const { t } = useTranslation()
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = [
    {
      title: 'Slide 1',
      content: 'Contenido del Slide 1'
    },
    {
      title: 'Slide 2',
      content: 'Contenido del Slide 2'
    }
  ]

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1)
  }

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1)
  }

  return (
    <MainLayout>
      <Box textAlign='center' fontSize='xl'>
        <Text
          fontSize={['2xl', '3xl', '5xl']}
          fontWeight='bold'
          bgGradient='linear(to-l, #B20040, #C2495D, #D2727E, #E2959E)'
          color='transparent'
          bgClip='text'
          textAlign='center'
        >
          {t('landing_page.introduction')}
        </Text>
      </Box>
      <Box mt={8}>
        <Flex alignItems='center' justifyContent='center'>
          <IconButton
            bg='red'
            onClick={prevSlide}
            aria-label='Slide anterior'
            variant='ghost'
            mr={4}
          />
          <Box maxW='md' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <Box p='6'>
              <Box mt='1' fontWeight='semibold' as='h4' lineHeight='tight' isTruncated>
                {slides[currentSlide].title}
              </Box>
              <Box>
                {slides[currentSlide].content}
              </Box>
            </Box>
          </Box>
          <IconButton
            bg='red'
            onClick={nextSlide}
            aria-label='Siguiente slide'
            variant='ghost'
            ml={4}
          />
        </Flex>
      </Box>
    </MainLayout>
  )
}

export default App
