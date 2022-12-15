
import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
    Code,
    VStack,
    HStack,
    Divider,
    Center,
    AspectRatio,
    Box,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios"

export default function ExercisecompleteDetailpage() {
    const [data, setExedata] = useState({})
    const [category, setCategory] = useState({})
    const [equipment, setEquipment] = useState([])
    const [exercise, setExercise] = useState({})
    const [image, setImage] = useState([])
    const [video, setVideo] = useState([])
    const { id } = useParams()
    // console.log(id);


    const axiosdata = {
        method: 'get',
        url: `https://wger.de/api/v2/exercisebaseinfo/${id}`,
        headers: {
            'Authorization': 'Token 86f05362b8662eea31bb8b2d1e44db554c55638f'
        }
    }

    useEffect(() => {
        axios(axiosdata)
            .then((res) => {
                setExedata(res.data)
                setCategory(res.data.category)
                setEquipment(res.data.equipment)
                setExercise(res.data.exercises[0])
                setImage(res.data.images)
            })
            .catch((err) => console.log(err))
    }, [])
    // console.log(data.id);
    // console.log(category);
    // console.log(equipment);
    // console.log(exercise);
    // console.log(image);

    

    useEffect(()=>{
        axios(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&maxResults=2&q=Burpees&key=AIzaSyC7hE9Bd8wEXxTPrpQAzm5yQBXNm4pqlHA&safeSearch=strict&type=video&videoEmbeddable=true`)
        .then((res) => {
            setVideo(res.data.items)
        })
        .catch((err) => console.log(err))
    },[id])


    return (
        <>
            <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
                <Flex p={8} flex={1} align={'center'} justify={'center'}>
                    <Stack spacing={6} w={'full'} maxW={'lg'}>
                        <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                            <Code colorScheme='red' children={category.name} />
                            {equipment && equipment?.map((item) => {
                                return <Code colorScheme='orange' key={item.id} children={item.name} />
                            })}
                        </Stack>
                        <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>

                            <Text color={'blue.400'} as={'span'}>
                                {exercise.name}
                            </Text>{' '}
                        </Heading>
                        <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
                            {exercise.description}
                        </Text>

                    </Stack>
                </Flex>
                <Flex flex={1}>
                    <Image
                        alt={'Login Image'}
                        objectFit={'cover'}
                        src={
                            'https://static5.depositphotos.com/1030985/402/i/450/depositphotos_4024807-stock-photo-muscle-galloping-body-builder.jpg'
                        }
                    />
                </Flex>
            </Stack>

            <Divider />

            <Center>
                <HStack mt={"40px"} mb={"40px"} maxW={"80%"} spacing={8}>
                    {image && image?.map((item) => {
                        return <Image w={"600px"} src={item.image} key={item.id} alt="exercise images" />
                    })}
                </HStack>
            </Center>


             <Box direction={"row"}> 

                {video && video.map((item) => {
                    return  <AspectRatio key={item.etag} maxW='320px' ratio={1}>
                    <iframe
                        title='naruto'
                        src={`https://www.youtube.com/embed/${item.id.videoId}`}
                        allowFullScreen
                        />
                    </AspectRatio>
                })}
            </Box>
           

        </>)

}