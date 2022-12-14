import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  createIcon,
  IconProps,
  useColorModeValue,
  Center,
  Link
} from '@chakra-ui/react';


//   fontSize={{ base: '3xl', sm: '5xl', lg: '6x1' }}
export default function HeroBanner() {
  return (
    <Container maxW={'100%'} bgColor={"#184fa3"}
    >
      <Stack

        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}>
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Flex
            direction={"column"}
            lineHeight={1.1}
            color={"white"}
          >

            <Heading
              fontWeight={700}
              fontSize={"50"}
            >
              MANAGE & TRACK ALL YOUR WORKOUTS IN ONE PLACE
            </Heading>
            <br />
            <Text fontWeight={700}
              fontSize={"30"} marginTop={"30px"} >
              #1 Popular Workout Tracking Platform Stay Strong Together
            </Text>
          </Flex>
          <Center >
            <Flex gap={"5"} display={{base:"none",md: "flex"}}>
              <Flex 
              direction={"column"}
              gap={"5"} justifyContent={"center"}
              alignItems={"center"}>
                <Link
                  as={"a"}
                  href={"https://play.google.com/store/apps/details?id=je.fit&referrer=utm_source%3Demail"}
                  target={"_blank"}>
                  <Image src='https://www.jefit.com/wp/wp-content/uploads/2021/11/googleplay.png' alt="google play store link" width={"200px"} />
                </Link>
                <Link
                  as={"a"}
                  href={"https://apps.apple.com/app/apple-store/id449810000"}
                  target={"_blank"}>
                  <Image src='https://www.jefit.com/wp/wp-content/uploads/2021/11/appstore.png' alt="apple store link" width={"200px"} />
                </Link>
              </Flex>
              <Image src='https://www.jefit.com/wp/wp-content/uploads/2021/11/qrcode_white.png' alt='barcode image' width={"200px"} />
            </Flex>
          </Center>
        </Stack>


        <Image
          alt={'Hero Image'}
          width={"600px"}
          src={
            'https://www.jefit.com/wp/wp-content/uploads/2022/03/website_hero_watch-2048x1707.png'
          }
        />


      </Stack>
    </Container>
  );
}



