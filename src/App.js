import React from 'react'
import MainLayout from '../src/layout/MainLayout' // Asegúrate de que la ruta sea correcta
import { Box, Text, Button } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

function App () {
  const { t } = useTranslation()

  return (
    <MainLayout>
      <Box textAlign='center' fontSize='xl'>
        <Text mb={4}>{t('landing_page.introduction')}</Text>
        <Button colorScheme='blue'>Haz clic aquí</Button>
      </Box>
    </MainLayout>
  )
}

export default App
