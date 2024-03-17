import React from 'react'
import {
  Flex,
  useColorMode,
  Box,
  useDisclosure
} from '@chakra-ui/react'
import { useLanguage } from '../../contexts/LanguageContext'
import SvgMoonLogo from './Icon/Svg_moon_logo'
import SvgMoonLogoD from './Icon/Svg_moon_logo_D'
import SvgEsFlag from './Icon/Svg_es_flag'
import SvgEnFlag from './Icon/Svg_en_flag'
import Menu from './Menu'
import SvgMenuLogo from './Icon/Svg_menu_logo'

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const { language, toggleLanguage } = useLanguage()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const boxShadowColor = colorMode === 'light'
    ? '0px 3px 8px rgba(0, 0, 0, 0.5)'
    : '0px 6px 10px rgba(178, 0, 64, 0.5)'

  return (
    <>
      <Flex
        as='nav'
        position='fixed'
        top={0}
        left={0}
        right={0}
        zIndex='banner'
        align='center'
        justify='space-between'
        wrap='wrap'
        paddingY={2}
        paddingX={6}
        bg='#B20040'
        color='white'
        opacity='0.8'
        boxShadow={boxShadowColor}
      >
        <Box
          as='button'
          onClick={onOpen} // Abre el drawer
          ml={4}
          variant='ghost'
          _hover={{
            transform: 'scale(1.05)'
          }}
          transition='background 0.2s, transform 0.2s'
        >
          <SvgMenuLogo width='40' height='40' />
        </Box>
        <Flex>
          <Box
            as='button'
            onClick={toggleColorMode}
            variant='ghost'
            _hover={{
              transform: 'scale(1.05)'
            }}
            transition='background 0.2s, transform 0.2s'
          >
            {colorMode === 'light' ? <SvgMoonLogo width='40' height='40' /> : <SvgMoonLogoD width='40' height='40' />}
          </Box>
          <Box
            as='button'
            onClick={toggleLanguage}
            ml={4}
            variant='ghost'
            _hover={{
              transform: 'scale(1.05)'
            }}
            transition='background 0.2s, transform 0.2s'
          >
            {language === 'es' ? <SvgEnFlag width='40' height='40' /> : <SvgEsFlag width='40' height='40' />}
          </Box>
        </Flex>
      </Flex>
      <Menu isOpen={isOpen} onClose={onClose} />
    </>
  )
}

export default Navbar
