import React from "react";
import {Center,Flex,Text} from "@chakra-ui/react"
import {MdRefresh} from "react-icons/md";

import "./styles/Restart.css";
import { useRecoilState, useSetRecoilState } from "recoil";
import gameStatusState from "../state/play_status_state";
import timeLimitState from "../state/timelimit_state";

function Restart(props){
    const setGameStatus = useSetRecoilState(gameStatusState);
    
    const handleClick = ()=>{
        setGameStatus({isPaused:true,isRestarted:true});
    };

    return (
        <Center h="100%" className="Restart_container" onClick={handleClick}>
            <Flex flexDirection="column">
            <MdRefresh size="3rem" />
            <Text fontSize="1.2rem">Restart</Text>
            </Flex>
        </Center>
    );
}

export default Restart;