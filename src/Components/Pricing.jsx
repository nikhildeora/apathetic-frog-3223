import { ReactNode } from 'react';
import {
    Box,
    Stack,
    HStack,
    Heading,
    Text,
    VStack,
    useColorModeValue,
    List,
    ListItem,
    ListIcon,
    Button,
} from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';

// : { children: ReactNode }

function PriceWrapper({ children }) {
    return (
        <Box
            mb={4}
            shadow="base"
            borderWidth="1px"
            alignSelf={{ base: 'center', lg: 'flex-start' }}
            borderColor={useColorModeValue('gray.200', 'gray.500')}
            borderRadius={'xl'}>
            {children}

        </Box>
    );
}

export default function Pricing() {
    return (
        <Box py={12}>
            <VStack spacing={2} textAlign="center">
                <Heading as="h1" fontSize="4xl">
                    PLANS THAT SUIT YOU BEST
                </Heading>
               
            </VStack>
            <Stack
                direction={{ base: 'column', md: 'row' }}
                textAlign="center"
                justify="center"
                spacing={{ base: 4, lg: 10 }}
                py={10}>
                <PriceWrapper>
                    <Box py={4} px={12}>
                        <Text fontWeight="500" fontSize="2xl">
                            FREE
                        </Text>

                        <Text fontSize="3xl" fontWeight="600">
                            Basic
                        </Text>


                    </Box>
                    <VStack
                        bg={useColorModeValue('blue.50', 'gray.700')}
                        py={4}
                        borderBottomRadius={'xl'}>
                        <List spacing={3} textAlign="start" px={12}>
                            <ListItem>
                                <ListIcon as={FaCheckCircle} color="blue.500" />
                                Ads supported
                            </ListItem>
                            <ListItem>
                                <ListIcon as={FaCheckCircle} color="blue.500" />
                                Flexible workout planner
                            </ListItem>
                            <ListItem>
                                <ListIcon as={FaCheckCircle} color="blue.500" />
                                Top-notch log tracker
                            </ListItem>
                            <ListItem>
                                <ListIcon as={FaCheckCircle} color="blue.500" />
                                1400+ exercises library
                            </ListItem>
                            <ListItem>
                                <ListIcon as={FaCheckCircle} color="blue.500" />
                                Body stats tracking tools
                            </ListItem>
                            <ListItem>
                                <ListIcon as={FaCheckCircle} color="blue.500" />
                                Support interval training
                            </ListItem>
                        </List>
                        <Box w="80%" pt={7}>
                            <Button w="full" colorScheme="blue" variant="outline">
                                Start trial
                            </Button>
                        </Box>
                    </VStack>
                </PriceWrapper>

                <PriceWrapper>
                    <Box position="relative">
                        <Box
                            position="absolute"
                            top="-16px"
                            left="50%"
                            style={{ transform: 'translate(-50%)' }}>
                            <Text
                                textTransform="uppercase"
                                bg={useColorModeValue('#184fa3', 'red.700')}
                                px={3}
                                py={1}
                                color={useColorModeValue('white', 'gray.300')}
                                fontSize="sm"
                                fontWeight="600"
                                rounded="xl">
                                Most Popular
                            </Text>
                        </Box>
                        <Box py={4} px={12}>
                            <Text fontWeight="500" fontSize="2xl">
                                Elite Monthly
                            </Text>
                            <HStack justifyContent="center">
                                <Text fontSize="3xl" fontWeight="600">
                                    $
                                </Text>
                                <Text fontSize="5xl" fontWeight="900">
                                    12.99
                                </Text>
                                <Text fontSize="3xl" color="gray.500">
                                    /month
                                </Text>
                            </HStack>
                            <Text>Monthly Billing</Text>
                        </Box>
                        <VStack
                            bg={useColorModeValue('blue.50', 'gray.700')}
                            py={4}
                            borderBottomRadius={'xl'}>
                            <List spacing={3} textAlign="start" px={12}>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="blue.500" />
                                    All BASIC plan features
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="blue.500" />
                                    No ads
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="blue.500" />
                                    Comprehensive training reports
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="blue.500" />
                                    Advanced tracking features
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="blue.500" />
                                    Compare records with friends
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="blue.500" />
                                    Exercise tips from FITNEXY experts
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="blue.500" />
                                    Premium workout plans
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="blue.500" />
                                    More...
                                </ListItem>
                            </List>
                            <Box w="80%" pt={7}>
                                <Button w="full" colorScheme="blue" >
                                    Start trial
                                </Button>
                            </Box>
                        </VStack>
                    </Box>
                </PriceWrapper>
                <PriceWrapper>
                    <Box py={4} px={12}>
                        <Text fontWeight="500" fontSize="2xl">
                            Elite Yearly
                        </Text>
                        <HStack justifyContent="center">
                            <Text fontSize="3xl" fontWeight="600">
                                $
                            </Text>
                            <Text fontSize="5xl" fontWeight="900">
                                10.99
                            </Text>
                            <Text fontSize="3xl" color="gray.500">
                                /month
                            </Text>
                        </HStack>
                        <Text>Yearly Billing</Text>
                    </Box>
                    <VStack
                        bg={useColorModeValue('blue.50', 'gray.700')}
                        py={4}
                        borderBottomRadius={'xl'}>
                        <List spacing={3} textAlign="start" px={12}>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="blue.500" />
                                    All BASIC plan features
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="blue.500" />
                                    No ads
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="blue.500" />
                                    Comprehensive training reports
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="blue.500" />
                                    Advanced tracking features
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="blue.500" />
                                    Compare records with friends
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="blue.500" />
                                    Exercise tips from FITNEXY experts
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="blue.500" />
                                    Premium workout plans
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="blue.500" />
                                    More...
                                </ListItem>
                            </List>
                        <Box w="80%" pt={7}>
                            <Button w="full" colorScheme="blue" >
                                Start trial
                            </Button>
                        </Box>
                    </VStack>
                </PriceWrapper>
            </Stack>
        </Box>
    );
}