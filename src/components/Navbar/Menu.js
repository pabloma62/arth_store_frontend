import React from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useBreakpointValue
} from '@chakra-ui/react'

const Menu = ({ isOpen, onClose }) => {
  // Aquí determinamos el tamaño del drawer basado en el breakpoint actual
  // 'full' para dispositivos móviles y 'md' (o el tamaño que prefieras) para pantallas más grandes
  const drawerSize = useBreakpointValue({ base: 'full', md: 'sm' })

  return (
    <Drawer isOpen={isOpen} placement='left' onClose={onClose} size={drawerSize}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerBody>
          {/* Aquí puedes añadir el contenido del drawer */}
          <Button onClick={onClose}>Cerrar Drawer</Button>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}

export default Menu
