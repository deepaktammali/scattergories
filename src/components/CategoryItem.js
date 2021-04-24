import React from "react";
import {Flex,Text} from "@chakra-ui/react";

export default function({categoryName,index,shouldHideText}){
    return (
        <Flex fontSize="large" fontWeight="bold" w="100%" borderBottom="1px solid #e8e8e8">
            <Text className={`${shouldHideText?"hide_text":''}`} mx="1rem">{`${index}${'\t\t'}${categoryName}`}</Text>
        </Flex>
    );
};