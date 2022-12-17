import React, { useContext } from 'react'
import { Blogs } from '../Components/AllBlogs';

import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  Container,
  Heading,
} from '@chakra-ui/react';
import { DataContext } from '../Contexts/DataContext';
import {Link as RouterLink} from "react-router-dom"

const Community = () => {
const {BlogsetState} = useContext(DataContext)

  return (
    <Container mt={"50px"} mb={"20px"} maxW={["80%","70%","60%"]}>
     <Heading mb={"29px"}>Our Latest Blogs</Heading>
      {Blogs && Blogs.map((item) => {
        return  (
          <RouterLink key={item.name} to={"/singleblog"}>
        <Flex
        w={'full'}
        h={'100vh'}
        mb={"40px"}
        onClick={()=>BlogsetState(item)}
        backgroundImage={
          `url(${item.image})`
        }
        backgroundSize={'cover'}
        backgroundPosition={'center center'}>
        <VStack
          w={'full'}
          justify={'center'}
          px={{ base: 4, md: 8 }}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
          <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
            <Text
              color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={{ base: '3xl', md: '4xl' }}>
              {item.name}
            </Text>
            
          </Stack>
        </VStack>
      </Flex> 
      </RouterLink>)
      })}
    
    </Container>
  )
}

export default Community;