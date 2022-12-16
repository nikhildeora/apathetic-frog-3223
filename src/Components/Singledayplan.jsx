import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
    Tbody, Tr, Td, Table, Thead, Th, Image, Input, Editable,
    EditableInput,
    EditablePreview,
    Center,
} from '@chakra-ui/react';
import { Link as RouterLink } from "react-router-dom"
import axios from "axios"
import { useContext } from 'react';
import { DataContext } from '../Contexts/DataContext';


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

export default function Singledayplan(props) {
    const {day,schedules,id} = props;
    const {Deletewholeday,Deleteparticularexercise,PatchparticularDig} = useContext(DataContext)

    //   console.log("day",day);
    //   console.log("schedule",schedules);
    //   console.log("id",id);

//   const DeleteDay = () =>{
//       axios.delete(`http://localhost:8000/schedule/${id}`)
//       .then((res)=>console.log(res))
//       .catch((err)=>console.log(err))
//   }

   

    return (
        <Flex
            w={'full'}
            h={'100vh'}
            mt={"20px"}
            mb={"20px"}
            backgroundImage={
                'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLNFY27J6280pUEGiGGkH1-Tzbt6IhZTssNQ&usqp=CAU)'
            }
            backgroundSize={'cover'}
            backgroundPosition={'center center'}
        >
            <VStack
                w={'90%'}
                // m={"auto"}
                border={"1px solid black"}
                justify={'center'}
                px={useBreakpointValue({ base: 4, md: 8 })}
                bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
                <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
                    <Text
                        color={'white'}
                        fontWeight={700}
                        lineHeight={1.2}
                        fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
                        {day}
                        <Button color={"black"} onClick={()=>Deletewholeday(id)} >Delete</Button>
                    </Text>



                    <Table maxW={"800px"}
                    >
                        <Thead>
                            <Tr >
                                <Th color={"white"}>Muscle</Th>
                                <Th color={"white"}>Image</Th>
                                <Th color={"white"}>Exercise Name</Th>
                                <Th color={"white"}>Order</Th>
                                <Th color={"white"}>Reps</Th>
                                <Th color={"white"}>Sets </Th>
                                <Th color={"white"}>Interval in sec</Th>
                                <Th color={"white"}>Link</Th>
                                <Th color={"white"}>Delete</Th>

                            </Tr>
                        </Thead>
                        <Tbody>
                            {schedules && schedules.map((el) => {
                                return (
                                    <Tr key={el && el.key}>
                                        <Td color={"white"}>{categoryobj[el.category]}</Td>
                                        <Td bgColor={"white"} border={"6px solid #9b846f"}>  <Image w={"40px"} src='https://wger.de/media/exercise-images/81/Biceps-curl-1.png' alt={"image of exercise"} /> </Td>
                                        <Td color={"white"}>{el.name}</Td>
                                        <Td> <Editable onChange={(e)=>PatchparticularDig(e,id,schedules,"order",el.key)} border={"1px solid black"} color={"white"} value={el.order}>
                                            <EditablePreview />
                                            <EditableInput />
                                        </Editable> </Td>
                                        <Td> <Editable onChange={(e)=>PatchparticularDig(e,id,schedules,"reps",el.key)} border={"1px solid black"} color={"white"} value={el.reps}>
                                            <EditablePreview />
                                            <EditableInput />
                                        </Editable> </Td>
                                        <Td> <Editable onChange={(e)=>PatchparticularDig(e,id,schedules,"sets",el.key)} border={"1px solid black"} color={"white"} value={el.sets}>
                                            <EditablePreview />
                                            <EditableInput />
                                        </Editable></Td>
                                        <Td color={"white"}>60 s</Td>
                                        <Td> <RouterLink to={`/exercisedetail/${el.exercise_base}`}>
                                            <Button>Link</Button>
                                        </RouterLink>
                                        </Td>
                                        <Td><Button onClick={()=>Deleteparticularexercise(id,schedules,el.key)}>Delete</Button></Td>
                                    </Tr>)
                            })}
                        </Tbody>
                    </Table>

                </Stack>
            </VStack>
        </Flex>
    );
}