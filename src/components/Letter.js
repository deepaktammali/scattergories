import React from 'react'
import { Center, Flex, Box,Fade } from '@chakra-ui/react'
import { useRecoilValue } from 'recoil';

import letterState from "../state/letter_state";
import LetterTitle from './LetterTitle'
import LetterReRoll from './LetterReRoll'
import "./styles/Letter.css";


function Letter (props) {

  const letterStateValue = useRecoilValue(letterState);

  return (
    <Flex alignItems="center" justifyContent="flex-start" className="Letter_container" fontWeight="bold" h="100%" w="100%" flexDirection="column">
      <Flex  w="100%" justifyContent="space-around">
      <Box p="1rem">
        <LetterTitle />
      </Box>
      <Box p="1rem">
        <LetterReRoll />
      </Box>
      </Flex>
      <Center w="100%"  fontSize='15rem' height='15rem'>
      {letterStateValue}
      </Center>
    </Flex>
  )
}

export default Letter
