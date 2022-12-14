import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
} from '@chakra-ui/react';
import {CheckCircleIcon} from "@chakra-ui/icons"
import { ReactElement } from 'react';

//   interface FeatureProps {
//     text: string;
//     iconBg: string;
//     icon?: ReactElement;
//   }
// : FeatureProps
const Feature = ({ text, icon, iconBg }) => {
    return (
        <Stack direction={'row'} align={'center'}>
            <Flex
                w={8}
                h={8}
                align={'center'}
                justify={'center'}
                rounded={'full'}
                bg={iconBg}>
                {icon}
            </Flex>
            <Text fontWeight={600} fontSize={"20px"}>{text}</Text>
        </Stack>
    );
};

export default function SplitWithImagethird() {
    return (
        <Container maxW={'6xl'} py={12}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Flex>
                    <Image
                        rounded={'md'}
                        alt={'feature image'}
                        src={
                            'https://www.jefit.com/wp/wp-content/uploads/2022/08/web3.png'
                        }
                        objectFit={'cover'}
                    />
                </Flex>
                <Stack spacing={4}>
                    <Text
                        textTransform={'uppercase'}
                        color={'blue.400'}
                        fontWeight={600}
                        fontSize={'sm'}
                        bg={useColorModeValue('blue.50', 'blue.900')}
                        p={2}
                        alignSelf={'flex-start'}
                        rounded={'md'}>
                       PROGRESS TRACKING
                    </Text>
                    <Heading  >
                    VIEW PROGRESS & REACH NEW LIMITS</Heading>
                   
                    <Stack
                        spacing={4}
                        divider={
                            <StackDivider
                                borderColor={useColorModeValue('gray.100', 'gray.700')}
                            />
                        }>
                        <Feature
                            icon={
                                <Icon as={CheckCircleIcon} color={'green.500'} w={5} h={5} />
                            }
                            iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                            text={'Track workout time and weightlifting'}
                        />
                        <Feature
                            icon={
                                <Icon as={CheckCircleIcon} color={'green.500'} w={5} h={5} />
                            }
                            iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                            text={'Set target muscles and body measurements'}
                        />
                        <Feature
                            icon={
                                <Icon as={CheckCircleIcon} color={'green.500'} w={5} h={5} />
                            }
                            iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                            text={'Understand muscle recovery rate'}
                        />
                        <Feature
                            icon={
                                <Icon as={CheckCircleIcon} color={'green.500'} w={5} h={5} />
                            }
                            iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                            text={'Set 1RM goals and refresh records'}
                        />
                    </Stack>
                </Stack>
              
            </SimpleGrid>
        </Container>
    );
}