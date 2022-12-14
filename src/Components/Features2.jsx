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

export default function SplitWithImagesecond() {
    return (
        <Container maxW={'6xl'} py={12}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            
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
                        SMART WATCH INTEGRATION
                    </Text>
                    <Heading  >
                    TRAIN & LOG SEAMLESSLY IN GYM AND HOME</Heading>
                   
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
                            text={'Log training with one-click'}
                        />
                        <Feature
                            icon={
                                <Icon as={CheckCircleIcon} color={'green.500'} w={5} h={5} />
                            }
                            iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                            text={'Control rest time easily'}
                        />
                        <Feature
                            icon={
                                <Icon as={CheckCircleIcon} color={'green.500'} w={5} h={5} />
                            }
                            iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                            text={'Available on mobile and watch'}
                        />
                        <Feature
                            icon={
                                <Icon as={CheckCircleIcon} color={'green.500'} w={5} h={5} />
                            }
                            iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                            text={'Audio and video instructions'}
                        />
                    </Stack>
                </Stack>
                <Flex>
                    <Image
                        rounded={'md'}
                        alt={'feature image'}
                        src={
                            'https://www.jefit.com/wp/wp-content/uploads/2022/08/web2.png'
                        }
                        objectFit={'cover'}
                    />
                </Flex>
            </SimpleGrid>
        </Container>
    );
}