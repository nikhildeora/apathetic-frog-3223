import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from '../Pages/Home'
import GetApp from '../Pages/GetApp'
import Exercise from '../Pages/Exercise'
import Community from '../Pages/Community'
import Coach from '../Pages/Coach'
import Elite from '../Pages/Elite'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
import MyPlans from '../Pages/MyPlans'
import CreatenewPlan from '../Pages/CreatenewPlan'
import ExercisecompleteDetailpage from '../Pages/ExercisecompleteDetailpage'


const AllRoutes = () => {
  return (
    <Routes >
        <Route path='/' element={<Home />} ></Route>
        <Route path='/getapp' element={<GetApp />}></Route>
        <Route path="/myplans" element={<MyPlans />}></Route>
        <Route path="/createnewplan" element={<CreatenewPlan />}></Route>
        <Route path='/exercise' element={<Exercise />}></Route>
        <Route path='/exercisedetail/:id' element={<ExercisecompleteDetailpage />}></Route>
        <Route path='/community' element={<Community />}></Route>
        <Route path='/coach' element={<Coach />}></Route>
        <Route path='/elite' element={<Elite />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
    </Routes>
  )
}

export default AllRoutes;