import {
  Box, Button, Heading, Text, Tabs, TabList, TabPanels, Tab, TabPanel, Input, Tbody, Tr, Td, Table, Thead, Th, Image, Editable,
  EditableInput,
  EditablePreview,
  Center,
  VStack,
  HStack,
} from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from 'react'
import LevelwisePlans from '../Components/LevelwisePlans';
import axios from "axios"
import { Link as RouterLink } from "react-router-dom"
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

const CreatenewPlan = () => {
  const {setContextstate,contextstate} = useContext(DataContext);
  const [alldata, setAlldata] = useState([]);
  const [day, setDay] = useState("")
  const [state, setState] = useState(true)
  const [schejson, setSchejson] = useState([])
  const [dayid, setDayid] = useState(0);
  const [statetd, setStatetd] = useState(true)

  useEffect(() => {
    // axios(`http://localhost:8000/schedule`)
    axios(`https://render-deployed-fitnexy.onrender.com/schedule`)
      .then((res) => {
        setDayid(res.data[0].id)
      })
  }, [])

  useEffect(() => {
    setState(true)
    setStatetd(true)
    // axios(`http://localhost:8000/schedule`)
    axios(`https://render-deployed-fitnexy.onrender.com/schedule`)
      .then((res) => {
        setSchejson(res.data)
        console.log(res.data)
      })
      .catch((err) => console.log(err))
  }, [state, statetd])



  // console.log("sche",schejson.schedules);
  // console.log("dayid", dayid);
  const Postdata = () => {
    // axios.post(`http://localhost:8000/schedule`, {
    axios.post(`https://render-deployed-fitnexy.onrender.com/schedule`, {
      "myday": day,
      "schedules": []
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }




  const Postschedule = (dataid) => {
    //  console.log(dataid);
    const dataArr = alldata.filter((item) => {
      return item.id === dataid;
    })
    // console.log("dataarr", dataArr);
    const datayetobj = {
      key: dataArr[0].id,
      category: dataArr[0].category,
      exercise_base: dataArr[0].exercise_base,
      name: dataArr[0].name,
      order: 1,
      reps: 4,
      sets: 5,
    }

    // console.log("dataobj", datayetobj);
    // have to comment it 
    // setMydataarr(datayetobj)

    // Getdaywiseschedule(datayetobj)

    let newdeeclareobj = [];
    // axios(`http://localhost:8000/schedule/${dayid}`)
    axios(`https://render-deployed-fitnexy.onrender.com/schedule/${dayid}`)
      .then((res) => {
        newdeeclareobj = res.data.schedules
      }).then(() => console.log("newdeclared", newdeeclareobj))
      .finally(() => {
        // axios.patch(`http://localhost:8000/schedule/${dayid}`, {
        axios.patch(`https://render-deployed-fitnexy.onrender.com/schedule/${dayid}`, {
          "schedules": [...newdeeclareobj, datayetobj]
        })
      })

  }



  useEffect(() => {
    axios(`https://wger.de/api/v2/exercise/?limit=250`, {
      headers: {
        'Authorization': 'Token 86f05362b8662eea31bb8b2d1e44db554c55638f'
      }
    })
      .then((res) => {
        setAlldata(res.data.results)
        console.log(res.data.results)
      })
      .catch((err) => console.log(err))
  }, [])



  return (
    <>
      <Heading mt={"50px"} mb={"40px"} > DEFAULT PLAN FOR YOU </Heading>
      <LevelwisePlans />

      <Heading mt={"50px"} mb={"40px"}> CREATE YOUR OWN PLAN</Heading>
      <Text w={"85%"} m={"auto"} mb={"70px"}>Plan your workout online and take it on the go. Fitnexy's Advanced Workout Planner is designed to make planning your workout routine for the week simple. Create your own custom workout plan online with the help of the Fitnexy exercise library and share it with friends or take it on the go with your phone.

        Set this workout plan as your current routine and then add your own exercises. To attach the workout to your account log in and select “set plan”. The workout will be set as your default workout on the workout tab in-app. If you set the plan as your favorite it will appear under “My Plans”.

        Whether you're a fitness beginner or expert - Fitnexy's advanced workout planner works for any skill level. Build your own workout plan or generate a workout plan that you can customize to meet your needs.  Change the workout schedule to fit your lifestyle and find a routine that works for you.
      </Text>

      <Center mb={"60px"} >

        <HStack spacing={7}>
          {/* tabs module  */}
          <Tabs border={"1px solid grey"} minH={"400px"} maxH={"auto"}>
            <TabList>
              {schejson && schejson.map((item) => {
                return <Tab key={item.id} onClick={() => setDayid(item.id)} >{item.myday}</Tab>
              })}

            </TabList>

            <TabPanels>
              {schejson && schejson.map((item) => (

                <TabPanel key={item.id}>
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

                      {item.schedules && item.schedules.map((el) => (
                        // <Text>{el.name}</Text> 

                        <Tr key={el && el.key}>
                          <Td>{categoryobj[el.category]}</Td>
                          <Td> <Image w={"40px"} src='https://wger.de/media/exercise-images/81/Biceps-curl-1.png' alt={"image of exercise"} /> </Td>
                          <Td>{el.name}</Td>
                          <Td>{el.order}</Td>
                          <Td>{el.reps}</Td>
                          <Td>{el.sets}</Td>
                          <Td>60 s</Td>
                          <Td> <RouterLink to={`/exercisedetail/${el.exercise_base}`}>
                            <Button>Link</Button>
                          </RouterLink>
                          </Td>

                        </Tr>

                      ))}

                    </Tbody>
                  </Table>
                </TabPanel>
              ))}

            </TabPanels>
          </Tabs>

          {/* Input box and button */}
          <VStack spacing={5}>

            <Input border={"4px solid black"} w={"200px"} type="text" placeholder={"add day"} onChange={(e) => setDay(e.target.value)} />
            <Button onClick={() => {
              Postdata()
              setState(false)
              setContextstate(!contextstate)
            }}>Add Day</Button>

            {/* scroll bar code  */}
            <Box
              maxW={"250px"}
              maxH={"300px"}
              overflowX="auto"
              whiteSpace={"wrap"}
              pb={"17px"}
              p={"7px"}
              border={"1px solid #888"}
              sx={
                {
                  '::-webkit-scrollbar': {
                    width: '10px'
                  },
                  '::-webkit-scrollbar-track': {
                    background: '#f1f1f1'
                  },
                  '::-webkit-scrollbar-thumb': {
                    background: '#888'
                  },
                  '::-webkit-scrollbar-thumb:hover': {
                    background: '#555'
                  }
                }
              }
            >

              {alldata && alldata.map((item) => {
                return <Text
                  _hover={{
                    bg: 'blue.500',
                  }}
                  _focus={{
                    bg: 'blue.500',
                  }}
                  onClick={() => {
                    Postschedule(item.id)
                    setStatetd(false)
                    setContextstate(!contextstate)
                  }}
                  key={item.id} >
                  {item.name}
                </Text>
              })}

            </Box>
          </VStack>
        </HStack>
      </Center>
    </>
  )
}

export default CreatenewPlan;