import React from 'react'
import MainLayout from '../src/layout/MainLayout' // Asegúrate de que la ruta sea correcta
import { Box, Text, Button } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

function App () {
  const { t } = useTranslation()

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
        <Button colorScheme='blue'>Haz clic aquí</Button>
      </Box>
    </MainLayout>
  )
}

export default App
