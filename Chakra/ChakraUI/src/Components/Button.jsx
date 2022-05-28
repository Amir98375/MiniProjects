
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'
export const ButtonComponent =()=>{
    return(
        <div>
            {/* <ChakraProvider> */}
            <Button colorScheme='blue'>Button</Button>

            <Box 
            as ="button" 
            borderRadius="md" 
            bg='Tomato' 
            px={4} 
            h={8}
             color='white'>
              Button  
 
</Box>
            
            {/* </ChakraProvider> */}
             
             </div>
    )
}