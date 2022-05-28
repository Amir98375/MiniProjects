import { Center, Square, Circle, Flex, Box, Stack } from '@chakra-ui/react'

export const CenterComponent =()=>{
    return(
        <div>
            <Flex columnGap='1rem'>
                <Center h='50px' flex="1" bg='tomato'  >1</Center>
                <Center flex="1" bg='tomato'>2</Center>
                <Center flex="1" bg='tomato'>3</Center>
                <Center flex="1" bg='tomato'>4</Center>
            </Flex>

            <Stack spacing={2} direction={['row','column']}
            w="100%" border='1px solid'
            bg={{
                sm:"blue",
                md:"black",
                lg:"red",
                xl:"yellow"
            }}
            borderColor={
                {
                    sm:"yello",
                    md:"white",
                    lg:"blue",
                    xl:"red"
                }
            }
            >
                <Box border='1px solid black'>stack1</Box>
                <Box border='1px solid black'>stack2</Box>
                <Box border='1px solid black'>stack3</Box>
            </Stack>
        </div>
    )
}