import React from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App'
import './i18n'
import theme from './layout/Theme'
import { LanguageProvider } from './contexts/LanguageContext'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </ChakraProvider>
  </React.StrictMode>
)
