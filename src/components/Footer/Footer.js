import React from 'react'
import { Box, Text, VStack, useColorMode } from '@chakra-ui/react'
import SvgLogoD from './Icon/Svg_footer_logo_D'
import SvgLogo from './Icon/Svg_footer_logo'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { colorMode } = useColorMode()
  const { t } = useTranslation()

  const textColor = colorMode === 'light' ? '#545454' : '#D80953'

  return (
    <Box as='footer' width='full' display='flex' flexDirection='column' alignItems='center' justifyContent='center' opacity={0.4} fontSize='sm'>
      <VStack>
        {
          colorMode === 'light' ? <SvgLogo width='28' height='28' /> : <SvgLogoD width='28' height='28' />
        }
        <Text textAlign='center' fontSize='xs' color={textColor}>{t('layout.footer_text', { year: new Date().getFullYear() })}</Text>
      </VStack>
    </Box>
  )
}

export default Footer
