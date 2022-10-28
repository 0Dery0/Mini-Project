import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DetailCoursePageContainer from './Container/DetailCoursePageContainer'
import HomePageContainer from './Container/HomePageContainer'
import LoginPageContainer from './Container/LoginPageContainer'

const Routing = () => {
  return (
    <Routes>
        <Route path='/' exact element={<LoginPageContainer/>}/>
        <Route path='/Home' exact element={<HomePageContainer/>}/>
        <Route path="/Course/:id" exact element={<DetailCoursePageContainer/>}/>
    </Routes>
  )
}

export default Routing