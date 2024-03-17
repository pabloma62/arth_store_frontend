import React from 'react'
import { Flex, Text, useColorMode, Box } from '@chakra-ui/react'
import { useLanguage } from '../../contexts/LanguageContext' // Asegúrate de que la ruta sea correcta
import SvgMoonLogo from './Icon/Svg_moon_logo' // Importa tu SVG
import SvgMoonLogoD from './Icon/Svg_moon_logo_D'
import SvgEsFlag from './Icon/Svg_es_flag'
import SvgEnFlag from './Icon/Svg_en_flag'

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const { language, toggleLanguage } = useLanguage() // Utiliza el hook para acceder a toggleLanguage

  return (
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
      paddingY={4}
      paddingX={6}
      bg='#B20040'
      color='white'
      opacity='0.8'
    >
      <Text as='h1' fontSize='xl'>Arth Urban Clothing</Text>
      <Flex>
        <Box
          as='button'
          onClick={toggleColorMode}
          variant='ghost' // Esto añade un poco de padding alrededor de tu SVG para que el hover se vea mejor.
          _hover={{ // Cambia el color de fondo al pasar el mouse sobre el botón. Ajusta según el tema de color.
            transform: 'scale(1.05)' // Opcional: Añade un efecto de escala al hacer hover para darle un toque dinámico.
          }}
          transition='background 0.2s, transform 0.2s'
        >
          {
            colorMode === 'light' ? <SvgMoonLogo width='40' height='40' /> : <SvgMoonLogoD width='40' height='40' />
          }
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
          {
            language === 'es' ? <SvgEnFlag width='40' height='40' /> : <SvgEsFlag width='40' height='40' />
          }
        </Box>
      </Flex>
    </Flex>
  )
}

export default Navbar
