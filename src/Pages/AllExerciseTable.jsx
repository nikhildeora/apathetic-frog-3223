import React, { useEffect, useState } from 'react'
import { useParams, Link as RouterLink } from 'react-router-dom';
import axios from 'axios';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Image,
    Button,
    Heading,
    Stack,
} from '@chakra-ui/react'
import ButtonWithShadow from '../Components/Button';

const equipmentobj = {
    1: 'Barbell',
    8: 'Bench',
    3: 'Dumbbell',
    4: 'Gym mat',
    9: 'Incline bench',
    10: 'Kettlebell',
    7: 'none (bodyweight exercise)',
    6: 'Pull-up bar',
    5: 'Swiss Ball',
    2: 'SZ-Bar'
}

const categoryobj = {
    10: "Abs",
    8: "Arms",
    12: "Back",
    14: "Calves",
    15: "Cardio",
    11: "Chest",
    9: "Legs",
    13: "Shoulders"
}

const AllExerciseTable = () => {
    const { category } = useParams()
    const [categorywisedata, setCategorywisedata] = useState([])
    const [previous, setPrevious] = useState("")
    const [present, setPresent] = useState(`https://wger.de/api/v2/exercise?category=${category}&limit=10`)
    const [next, setNext] = useState("")
    // console.log(category);

    useEffect(() => {
        axios(present, {
            headers: {
                'Authorization': 'Token 86f05362b8662eea31bb8b2d1e44db554c55638f'
            }
        })
            .then((res) => {
                setPrevious(res.data.previous)
                setNext(res.data.next)
                setCategorywisedata(res.data.results)
                console.log(res)
            })
            .catch((err) => console.log(err))
    }, [present, category])


    return (
        <>
           <Heading mt={"50px"} mb={"40px"}>Category Wise Data</Heading>
            <TableContainer m={"auto"} mt={"60px"} mb={"60px"} w={"70%"} >
                <Table variant='striped' colorScheme='blue'>

                    <Thead>
                        <Tr>
                            <Th>Category</Th>
                            <Th>Image</Th>
                            <Th>Exercise Name</Th>
                            <Th>Equipment</Th>
                            <Th>Link</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {categorywisedata && categorywisedata.map((item)=>{
                            return <Tr key={item.id}>
                                <Td>{categoryobj[item.category]}</Td>
                                <Td><Image w={"40px"} src='https://wger.de/media/exercise-images/81/Biceps-curl-1.png' alt={"image of exercise"} /> </Td>
                                <Td>{item.name} </Td>
                                <Td>{equipmentobj[item.equipment[0]]}</Td>
                                <Td><RouterLink to={`/exercisedetail/${item.exercise_base}`}>
                            <Button>Link</Button>
                          </RouterLink></Td>
                            </Tr>
                        })}
                    </Tbody>
                   
                </Table>
            </TableContainer>

            <Stack mb={"40px"} direction={"row"} justifyContent={"center"} alignItems={"center"} >
            <Button
                            bg={'blue.400'}
                            rounded={'full'}
                            color={'white'}
                            px={"32px"}
                            isDisabled={previous===null}
                            onClick={()=>setPresent(previous)}
                            _hover={{ bg: 'blue.500' }}>
                            Previous
                        </Button>
                        <Button
                            bg={'blue.400'}
                            rounded={'full'}
                            color={'white'}
                            isDisabled={next===null}
                            onClick={()=>setPresent(next)}
                            px={"32px"}
                            _hover={{ bg: 'blue.500' }}>
                            Next
                        </Button>
            </Stack>
        </>
    )
}

export default AllExerciseTable;