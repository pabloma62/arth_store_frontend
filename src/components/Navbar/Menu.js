import React from 'react'
import {
  Drawer,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useBreakpointValue
} from '@chakra-ui/react'

import SvgTextLogo from './MenuContent/Icon/Svg_text_logo'
import { useCustomDrawerContentLogic } from './MenuContent/Logic/MenuLogic'
import DrawerBodyContent from './MenuContent/MenuBody'

const Menu = ({ isOpen, onClose }) => {
  const drawerSize = useBreakpointValue({ base: 'full', md: 'sm' })
  const {
    searchTerm,
    setSearchTerm,
    filteredSections,
    handleSectionClick
  } = useCustomDrawerContentLogic(onClose)

  return (
    <Drawer isOpen={isOpen} placement='left' onClose={onClose} size={drawerSize}>
      <DrawerOverlay />
      <DrawerContent bgGradient='linear(to-b, #B20040, #D8586F, #EC9190, #FFC0CB)'>
        <DrawerCloseButton zIndex={1} />
        <DrawerHeader
          display='flex'
          justifyContent='center'
          alignItems='center'
          bgGradient='linear(to-b, #B20040, #EC9190)'
          boxShadow='0px 4px 10px -2px rgba(0, 0, 0, 0.2)'
        >
          <SvgTextLogo width='60' height='24' />
        </DrawerHeader>
        <DrawerBodyContent
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filteredSections={filteredSections}
          handleSectionClick={handleSectionClick}
        />
      </DrawerContent>
    </Drawer>
  )
}

export default Menu
