import React, { useEffect, useState } from 'react'
import {
    Tabs, TabList, TabPanels, Tab, TabPanel, Tbody, Tr, Td, Table, Thead, Th, Image, Input, Text, Button, Editable,
    EditableInput,
    EditablePreview,
} from '@chakra-ui/react'
import axios from 'axios';
import {Link as RouterLink} from "react-router-dom"


const defaultImage = "https://wger.de/media/exercise-images/81/Biceps-curl-1.png"

const DefaultExerciseRow = () => {
  const [data,setData] = useState([]);
  const [loading,setLoading] = useState(true)

  let randomnumber = Math.floor(Math.random()*50)

  useEffect(()=>{
    setLoading(true)
    axios(`https://wger.de/api/v2/exercisebaseinfo/?limit=5&offset=${randomnumber}`,{
        headers : {
            'Authorization': 'Token 86f05362b8662eea31bb8b2d1e44db554c55638f'
        }
    }).then((res)=>{
        // console.log(res.data.results)
        setData(res.data.results)})
        .then(setLoading(false))
    .catch((err)=>console.log(err))
  },[])

  


  return (  loading ? <TabPanel> ...Loading! </TabPanel> : 
    <TabPanel>
                    <Table maxW={"800px"}>
                        <Thead>
                            <Tr>
                                <Th>Muscle</Th>
                                <Th>Image</Th>
                                <Th>Exercise Name</Th>
                                <Th>Order</Th>
                                <Th>Reps</Th>
                                <Th>Sets </Th>
                                <Th>Interval in sec</Th>
                                <Th>Link</Th>
                                
                            </Tr>
                        </Thead>
                        <Tbody>

                            {data && data.map((item)=>{
                                return <Tr key={item.id}>
                                     <Td>{item.category.name}</Td>
                                <Td><Image w={"40px"} src={item.images.length===0 ? defaultImage : item.images[0].image} alt={"image"} /> </Td>
                                <Td>{item.exercises[0].name}</Td>
                                <Td> <Editable defaultValue='1'>
                                    <EditablePreview />
                                    <EditableInput />
                                </Editable> </Td>
                                <Td> <Editable defaultValue={item.category.id}>
                                    <EditablePreview />
                                    <EditableInput />
                                </Editable> </Td>
                                <Td> <Editable defaultValue='5'>
                                    <EditablePreview />
                                    <EditableInput />
                                </Editable></Td>
                                <Td> <Editable defaultValue='60 '>
                                    <EditablePreview />
                                    <EditableInput />
                                </Editable> </Td>
                                <Td> <RouterLink to={`/exercisedetail/${item.id}`}>
                                    <Button>Link</Button>
                                </RouterLink>
                                    </Td>
                                </Tr>
                            })}
                        </Tbody>
                    </Table>
                    
                </TabPanel>
  )
}

export default DefaultExerciseRow;