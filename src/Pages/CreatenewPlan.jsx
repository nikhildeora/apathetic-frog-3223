import { Box, Button, Heading, Text, Tabs, TabList, TabPanels, Tab, TabPanel, Input } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import DefaultPlan from '../Components/DefaultPlan';
import LevelwisePlans from '../Components/LevelwisePlans';
import axios from "axios"


const CreatenewPlan = () => {
  const [alldata, setAlldata] = useState([]);
  const [day, setDay] = useState("")
  const [state,setState] = useState(true)
  const [schejson, setSchejson] = useState([])
  const [presentschedule,setPresentschedule] = useState([])
  const [dayid, setDayid] = useState(0);

useEffect(()=>{
  setState(true)
  axios(`http://localhost:8000/schedule`)
  .then((res)=>{
    setDayid(res.data[0].id)
    setSchejson(res.data)
    console.log(res.data)})
  .catch((err)=>console.log(err))
},[state])

// console.log("dayid", dayid);
  const Postdata = () => {
    axios.post(`http://localhost:8000/schedule`,{
      "myday" : day ,
      "schedules" : []
    })
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))
  }

const Getalreadypresentschedule = (dataArr) =>{
 axios.patch(`http://localhost:8000/schedule/${dayid}`,{
      "schedules" : [ [...presentschedule] ,dataArr[0]]
    })
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))
}

const Getdaywiseschedule = (dataArr)=>{
    axios(`http://localhost:8000/schedule/${dayid}`)
    .then((res)=>{
      setPresentschedule(res.data.schedules)
      console.log(res.data.schedules)})
      .then(()=>Getalreadypresentschedule(dataArr))
    .catch((err)=>console.log(err))
}

  const Postschedule = (dataid) =>{
    //  console.log(dataid);
    const dataArr = alldata.filter((item)=>{
      return item.id===dataid;
    })
    // console.log(dataArr);

    Getdaywiseschedule(dataArr)
    

   
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
      <Text w={"85%"} m={"auto"} mb={"30px"}>Plan your workout online and take it on the go. Fitnexy's Advanced Workout Planner is designed to make planning your workout routine for the week simple. Create your own custom workout plan online with the help of the Fitnexy exercise library and share it with friends or take it on the go with your phone.

        Set this workout plan as your current routine and then add your own exercises. To attach the workout to your account log in and select “set plan”. The workout will be set as your default workout on the workout tab in-app. If you set the plan as your favorite it will appear under “My Plans”.

        Whether you're a fitness beginner or expert - Fitnexy's advanced workout planner works for any skill level. Build your own workout plan or generate a workout plan that you can customize to meet your needs.  Change the workout schedule to fit your lifestyle and find a routine that works for you.
      </Text>

      {/* tabs module  */}
      <Tabs>
        <TabList>
          {schejson && schejson.map((item)=>{
            return <Tab key={item.id} onClick={()=>setDayid(item.id)} >{item.myday}</Tab>
          })}
          
        </TabList>

        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <Input type="text" placeholder={"add day"} onChange={(e) => setDay(e.target.value)}  />
      <Button onClick={()=>{
        Postdata()
        setState(false)  }}>Add Day</Button>

      {/* scroll bar code  */}
      <Box
        maxW={"200px"}
        maxH={"200px"}
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
            onClick={()=>Postschedule(item.id)}
            key={item.id} >
            {item.name}
          </Text>
        })}

      </Box>

    </>
  )
}

export default CreatenewPlan;