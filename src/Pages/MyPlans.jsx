import { Container } from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from 'react'
import Singledayplan from '../Components/Singledayplan';
import axios from "axios"
import { DataContext } from '../Contexts/DataContext';


const MyPlans = () => {
const {completescheduledata} = useContext(DataContext)

//  const [data,setData] = useState([])
  
//  useEffect(()=>{
//   axios(`http://localhost:8000/schedule`)
//   .then((res)=>{
//     setData(res.data)
//     console.log(res.data)})
//   .catch((err)=>console.log(err))
//  },[])

  return (
    <>
      <Container maxW={["400px","600px","1200px"]}>
        
        {completescheduledata && completescheduledata.map((item)=>{
          return <Singledayplan
         key={item.id}
         day={item.myday}
         schedules={item.schedules}
         id={item.id}
          />
        })}
      </Container>
    </>
  )
}

export default MyPlans;