import React from "react";
import {Center,Flex,Text} from "@chakra-ui/react"
import {MdRefresh} from "react-icons/md";

import "./styles/Restart.css";

function Restart(props){
    return (
        <Center h="100%" className="Restart_container">
            <Flex flexDirection="column">
            <MdRefresh size="3rem" />
            <Text fontSize="1.2rem">Restart</Text>
            </Flex>
        </Center>
    );
}

export default Restart;