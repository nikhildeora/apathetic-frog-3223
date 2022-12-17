import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
} from '@chakra-ui/react';
import ButtonWithShadow from './Button';
import {Link as RouterLink} from "react-router-dom"


export default function ExerciseImage() {
    return (
        <>
        <Flex
            w={'full'}
            h={'100vh'}
            backgroundImage={
                'url(https://static5.depositphotos.com/1030985/402/i/450/depositphotos_4024807-stock-photo-muscle-galloping-body-builder.jpg)'
            }
            backgroundSize={'cover'}
            backgroundPosition={'center center'}>
            <VStack
                w={'full'}
                justify={'center'}
                px={useBreakpointValue({ base: 4, md: 8 })}
            //   bgGradient={'linear(to-r, blackAlpha.600, transparent)'}
            >
                <Stack h={'100vh'} maxW={'2xl'}  spacing={6}  alignContent={"space-around"} flexDirection={"column"} justifyContent={"space-around"} >

                    <Stack  w={"2xl"} direction={'row'} justifyContent={"space-between"} >
                        <RouterLink to={`/allexercise/${8}`}>
                        <Button
                            bg={'blue.400'}
                            rounded={'full'}
                            color={'white'}
                            _hover={{ bg: 'blue.500' }}>
                            Arms
                        </Button>
                        </RouterLink>

                        <RouterLink to={`/allexercise/${13}`}>
                        <Button
                            bg={'blue.400'}
                            rounded={'full'}
                            color={'white'}
                            _hover={{ bg: 'blue.500' }}>
                            Shoulders
                        </Button>
                        </RouterLink>
                    </Stack>
                    <Stack w={"2xl"} direction={'row'} justifyContent={"space-between"} >
                    <RouterLink to={`/allexercise/${12}`}>
                        <Button
                            bg={'blue.400'}
                            rounded={'full'}
                            color={'white'}
                            _hover={{ bg: 'blue.500' }}>
                            Back
                        </Button>
                        </RouterLink>
                        <RouterLink to={`/allexercise/${11}`}>
                        <Button
                            bg={'blue.400'}
                            rounded={'full'}
                            color={'white'}
                            _hover={{ bg: 'blue.500' }}>
                            Chest
                        </Button>
                        </RouterLink>
                    </Stack>
                    <Stack w={"2xl"} direction={'row'} justifyContent={"space-between"} >
                    <RouterLink to={`/allexercise/${15}`}>
                        <Button
                            bg={'blue.400'}
                            rounded={'full'}
                            color={'white'}
                            _hover={{ bg: 'blue.500' }}>
                            Cardio
                        </Button>
                        </RouterLink>
                        <RouterLink to={`/allexercise/${10}`}>
                        <Button
                            bg={'blue.400'}
                            rounded={'full'}
                            color={'white'}
                            _hover={{ bg: 'blue.500' }}>
                            Abs
                        </Button>
                        </RouterLink>
                    </Stack>
                    <Stack w={"2xl"} direction={'row'} justifyContent={"space-between"} >
                    <RouterLink to={`/allexercise/${9}`}>
                        <Button
                            bg={'blue.400'}
                            rounded={'full'}
                            color={'white'}
                            _hover={{ bg: 'blue.500' }}>
                            Legs
                        </Button>
                        </RouterLink>
                        <RouterLink to={`/allexercise/${14}`}>
                        <Button
                            bg={'blue.400'}
                            rounded={'full'}
                            color={'white'}
                            _hover={{ bg: 'blue.500' }}>
                            Calves
                        </Button>
                        </RouterLink>
                    </Stack>
                </Stack>
            </VStack>
        </Flex>
        <RouterLink to={`/allexercise/${"all"}`}>
            <ButtonWithShadow buttontext={"All Exercise"} />
        </RouterLink>
            </>
    );
}