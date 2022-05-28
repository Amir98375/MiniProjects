import { Box } from '@chakra-ui/react'
import { useState } from 'react'

export const BoxComponent =()=>{
    const [shrink,setshrink]=useState(false)
    return(
        <div>
          <Box onClick={()=>setshrink(!shrink)} bg='Tomato' w='100%' p={shrink?4:8} color='white'>
  This is the Box
</Box>  
        </div>
    )
}