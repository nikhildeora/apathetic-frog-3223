import { Center, Container, Heading, Text } from '@chakra-ui/react';
import React from 'react'
import ExerciseImage from '../Components/ExerciseImage';

const Exercise = () => {
  return (
    <>
    <Heading mt={"50px"} mb={"40px"}>FITNEXY Exercise Database</Heading>
    <Text  mb={"10px"} fontSize={"3xl"}>Exercises By Muscle Group</Text>
    <Text  mb={"50px"} fontSize={"2xl"}>Find exercises that work out the muscle groups you're targeting.</Text>
    <Container mt={"50px"} mb={"50px"} maxW={["400px","500px","600px"]}>

    <ExerciseImage />
    </Container>
    </>
  )
}

export default Exercise;