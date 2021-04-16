import React from 'react'
import { Center, Flex, Box } from '@chakra-ui/react'
import LetterTitle from './LetterTitle'
import LetterReRoll from './LetterReRoll'

import "./styles/Letter.css";

function Letter (props) {
  return (

    <Flex className="Letter_container" fontWeight="bold" h="100%" w="100%" justifyContent="space-around" flexDirection="column">
      <Flex justifyContent="space-around">
      <Box p="1rem">
        <LetterTitle />
      </Box>
      <Box p="1rem">
        <LetterReRoll />
      </Box>
      </Flex>
      <Center fontSize='15rem' height='100%'>
        D
      </Center>
    </Flex>
  )
}

export default Letter
