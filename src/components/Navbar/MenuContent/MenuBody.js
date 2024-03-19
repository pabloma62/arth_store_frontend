import React from 'react'
import { DrawerBody, Input, VStack, Text, Box } from '@chakra-ui/react'

const DrawerBodyContent = ({ searchTerm, setSearchTerm, filteredSections, handleSectionClick }) => {
  return (
    <DrawerBody overflowY='auto'>
      <Input
        placeholder='Buscar sección...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <VStack align='start' mt={4} spacing={2}>
        {filteredSections.map((section, index) => (
          <Box
            as='button'
            key={index}
            p={2}
            w='100%'
            borderRadius='md'
            borderWidth='1px'
            borderColor='gray.200'
            d='flex'
            alignItems='center'
            _hover={{ borderColor: '#B20040', bg: '#B2004020' }}
            _focus={{ outline: 'none', borderColor: '#B20040', boxShadow: '0 0 0 2px #B2004040' }}
            onClick={() => handleSectionClick(section.link)}
          >
            <Text fontWeight='bold' letterSpacing='wider'>{section.name}</Text>
          </Box>
        ))}
      </VStack>
    </DrawerBody>
  )
}

export default DrawerBodyContent
