import React,{useEffect, useState} from 'react'
import { Center, Flex, Box } from '@chakra-ui/react'
import TimeTile from './TimeTitle'
import TimeChange from './TimeChange'
import "./styles/Time.css";
import { useRecoilState, useRecoilValue } from 'recoil';
import timeLimitState from '../state/timelimit_state';
import gameStatusState from '../state/play_status_state';

function Time (props) {

  const [gameStatus,setGameStatus] = useRecoilState(gameStatusState);
  const timeLimit = useRecoilValue(timeLimitState);
  const [countDownValue,setCountDownValue] = useState(timeLimit);

  useEffect(()=>{
    if(gameStatus.isRestarted){
      setCountDownValue(timeLimit);
      setGameStatus({...gameStatus,isRestarted:false})
    }
    else if(!gameStatus.isPaused){
      let intervalID = setInterval(()=>{
        let newCountDownValue = countDownValue - 1;
        if(newCountDownValue==-1){
          setGameStatus({isPaused:true})
        }
        else{
          setCountDownValue(newCountDownValue)
        }
      },1000);

      return ()=>{
        clearInterval(intervalID);
      }
    }
  },[gameStatus,countDownValue]);


  return (
    <Flex h="100%" w="100%" justifyContent="space-around" flexDirection="column">
      <Flex justifyContent="space-around">
        <Box p='1rem'>
          <TimeTile />
        </Box>
        <Box p='1rem'>
          <TimeChange isDisabled={!gameStatus.isPaused} />
        </Box>
      </Flex>
      <Center marginBottom="2rem" fontSize='4rem' fontWeight="bold" height='100%'>
        {countDownValue}
      </Center>
    </Flex>
  )
}

export default Time
