import { Box,SimpleGrid } from '@chakra-ui/react'

export const GridComponent =()=>{
    return(
        <div>
            <SimpleGrid columns={{
                base:1,
              
                md:2,
                lg:3
            }}>
  <Box bg={['#0072bb','#0072bb','#0072bb']} 
  height='200px' 
  fontSize={50} 
  color='white'
   p={10}> NAV</Box>
  <Box bg={['#f7941d','#f7941d','#f7941d']} height='200px'
   fontSize={50} 
   color='white'
   p={10} >Content</Box>
  <Box bg={['#ee1c25','#ee1c25','#ee1c25']} height='200px'
   fontSize={50} 
   color='white'
   p={10} >Widget</Box>
  {/* <Box bg={['tomato','purple','sky']} height='80px'></Box>
  <Box bg={['tomato','purple','sky']} height='80px'></Box> */}
</SimpleGrid>
        </div>
    )
}