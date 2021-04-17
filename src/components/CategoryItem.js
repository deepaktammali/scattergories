import React from "react";
import {Flex,Text} from "@chakra-ui/react";

export default function(props){
    return (
        <Flex fontSize="larger" fontWeight="bold" w="100%" borderBottom="1px solid #e8e8e8">
            <Text mx="1rem">1</Text>
            <Text>Categories Item</Text>
        </Flex>
    );
};