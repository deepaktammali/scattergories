import React from 'react'
import { Center, Flex, Text } from '@chakra-ui/react'
import { MdPlayArrow, MdPause } from 'react-icons/md'
import { useRecoilState } from 'recoil'
import gameState from '../state/play_status_state'
import './styles/Play.css'

function Play () {
  const [currGameState, setGameState] = useRecoilState(gameState)

  const handleClick = ()=>setGameState({isPaused:!currGameState.isPaused});

  return (
    <Flex
      className='Play_container'
      h='100%'
      fontSize='1.2em'
      flexDirection='column'
      justifyContent='stretch'
      onClick={handleClick}
    >
      <Text p='1rem' fontWeight='bold' m={0} flex={1}>
        {currGameState.isPaused ? 'Play' : 'Pause'}
      </Text>
      <Center marginBottom='2rem' flex={10} height='100%'>
        {currGameState.isPaused ? (
          <MdPlayArrow size='50%' />
        ) : (
          <MdPause size='50%' />
        )}
      </Center>
    </Flex>
  )
}

export default Play
