import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === 'dark' ? '#282C34' : '#F1F1F1'
      }
    })
  }
})

export default theme
