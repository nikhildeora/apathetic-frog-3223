import { Text, Box } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'

const myArr = [
  {
    first: "1",
    second: [{
      name: "nikhil"
    },
    {
      name: "pratik"
    }]
  },
  {
    first: "2",
    second: [{
      name: "chintan"
    },
    {
      name: "nishant"
    }]
  },
  {
    first : "3",
    second : []
  }
]

const Elite = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    setState(myArr)
  }, [])
  console.log("state", state);

  function letcheck(){
    state && state.forEach((ele) => {
      for(let i=0;i<ele.second.length;i++){
        console.log("names",ele.second[i].name);
      }
    });
  }
  
  letcheck()
  return (
    <>
       {state && state.map((item)=>{
        return <Text key={item.first}>{item.first}</Text>
       })}

       {state && state.map((item)=>(
         <Box>
          <Text>{item.first}</Text>
          <ul>
            {item.second && item.second.map((el)=>(
              <li>{el.name}</li>
       ))}
          </ul>
         </Box> 
       ))}

    </>
  )
}

export default Elite;