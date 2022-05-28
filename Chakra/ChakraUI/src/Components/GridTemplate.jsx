
import { Grid, GridItem } from '@chakra-ui/react'
export const GridComTemp=()=>{
    return(
        <div>
            
<Grid templateColumns='repeat(2, 1fr)'
columns={{
    sm:1,
    md:2
}}
templateRows='repeat(1,1fr)'
 gap={3} border='1px solid red'>
  <GridItem   w='100%' h='200' bg='blue.500' 
  />


  <GridItem  rowSpan={2} w='100%' h='100%' bg='blue.500' />
  <GridItem  border="1px solid black" w='100%' h='200' bg='blue.500' />
  
  {/* <GridItem w='100%' h='100' bg='blue.500' /> */}
  {/* <GridItem w='100%' colSpan={2} h='50' bg='blue.500' />
  <GridItem w='100%' h='50' bg='blue.500' /> */}
</Grid>
        </div>
    )
}