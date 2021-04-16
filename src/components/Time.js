import React from 'react'
import { Center, Flex, Box } from '@chakra-ui/react'
import TimeTile from './TimeTitle'
import TimeChange from './TimeChange'
import "./styles/Time.css";

function Time (props) {
  return (
    <Flex h="100%" w="100%" justifyContent="space-around" flexDirection="column">
      <Flex justifyContent="space-around">
        <Box p='1rem'>
          <TimeTile />
        </Box>
        <Box p='1rem'>
          <TimeChange />
        </Box>
      </Flex>
      <Center marginBottom="2rem" fontSize='4rem' height='100%'>
        120
      </Center>
    </Flex>
  )
}

export default Time
