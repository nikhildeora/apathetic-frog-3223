import { Center, Container, Grid, GridItem, Heading, Stack, Text, VStack,Image, Flex } from '@chakra-ui/react';
import React from 'react'
import ButtonWithShadow from '../Components/Button';
import SplitWithImagefirst from '../Components/Features1';
import SplitWithImagesecond from '../Components/Features2';
import SplitWithImagethird from '../Components/Features3';
import HeroBanner from '../Components/HeroBanner';
import Pricing from '../Components/Pricing';

const Home = () => {
  return (
    <>
      {/* hero banner component  */}
      <HeroBanner />

      {/* user slide component  */}
      <Stack gap={"4"} m={"auto"} mt={"80px"} mb={"110px"}>
        <Heading >
          CONNECT WITH OVER 10 MILLION FITNEXY MEMBERS
        </Heading>
        <Center>
          <Text w={["600px", "900", "1200px"]} fontSize={"3xl"}  >
            As the most active workout community, we invite you and your friends to join us and support each other.
          </Text>
        </Center>
        
       <Center>

          <Grid templateColumns={['repeat(2, 1fr)','repeat(3, 1fr)','repeat(4, 1fr)','repeat(5, 1fr)','repeat(7, 1fr)']} gap={6}   >
            <Image src={"https://www.jefit.com/wp/wp-content/uploads/2021/11/16members-150x150.png"} alt={"image for users"} />
            <Image src={"https://www.jefit.com/wp/wp-content/uploads/2021/11/18members-150x150.png"} alt={"image for users"} />
            <Image src={"https://www.jefit.com/wp/wp-content/uploads/2021/11/19members-150x150.png"} alt={"image for users"} />
            <Image src={"https://www.jefit.com/wp/wp-content/uploads/2021/11/4members-150x150.png"} alt={"image for users"} />
            <Image src={"https://www.jefit.com/wp/wp-content/uploads/2021/11/11members-150x150.png"} alt={"image for users"} />
            <Image src={"https://www.jefit.com/wp/wp-content/uploads/2021/11/5members-150x150.png"} alt={"image for users"} />
            <Image src={"https://www.jefit.com/wp/wp-content/uploads/2021/11/14members-150x150.png"} alt={"image for users"} />
          </Grid>
          
       </Center>
       <Center>

       <Flex gap={"16"}>
          <ButtonWithShadow buttontext={"TRENDING TOPICS"}/>
          <ButtonWithShadow buttontext={"JOIN NOW"}/>
        </Flex>
       </Center>
      </Stack>

      {/* Features components  */}
      <Heading
        marginTop={"70px"}
        marginBottom={"50px"} >
        FITNEXY COVERS ALL OF YOUR WORKOUT NEEDS</Heading>
      <SplitWithImagefirst />
      <SplitWithImagesecond />
      <SplitWithImagethird />

      {/* Pricing component  */}
      <Pricing />

      {/* workout plan component with button  */}
      <VStack gap={"4"} mt={"37px"} mb={"50px"}>
        <Heading>WANT TO BUILD YOUR OWN WORKOUT PLAN?</Heading>
        <Text fontSize={"27px"} w={["600px", "900", "1200px"]}>Customize your workout plan with over 3000 free exercises in Fitnexy Workout Plan Builder. And easily share with friends.</Text>
        <ButtonWithShadow buttontext={"Create Workout Plan"} />
      </VStack>

      
    </>
  )
}

export default Home;