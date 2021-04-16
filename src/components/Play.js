import React from 'react'
import { Center,Flex,Text } from '@chakra-ui/react'
import { MdPlayArrow } from 'react-icons/md'

import "./styles/Play.css";

function Play () {
  return (
    <Flex className="Play_container" h="100%" fontSize="1.2em" flexDirection="column" justifyContent="stretch">
    <Text p="1rem" fontWeight="bold" m={0} flex={1}>Play</Text>
      <Center marginBottom="2rem" flex={10} height='100%'>
        <MdPlayArrow size='50%' />
      </Center>
    </Flex>
  )
}

export default Play
