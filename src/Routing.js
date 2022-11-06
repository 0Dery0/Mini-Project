import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HelpPage from './Component/HelpPage'
import DetailCoursePageContainer from './Container/Admin/DetailCoursePageContainer'
import HomePageContainer from './Container/Admin/HomePageContainer'
import LoginPageContainer from './Container/LoginPageContainer'
import UserDetailCoursePageContainer from './Container/User/UserDetailCourseContainer'
import UserHomePageContainer from './Container/User/UserHomePageContainer'

const Routing = () => {
  return (
    <Routes>
        <Route path='/' exact element={<LoginPageContainer/>}/>
        <Route path='/Home' exact element={<HomePageContainer/>}/>
        <Route path='/UserHome' exact element={<UserHomePageContainer/>}/>
        <Route path='/UserCourse/:id' exact element={<UserDetailCoursePageContainer/>}/>
        <Route path="/Course/:id" exact element={<DetailCoursePageContainer/>}/>
        <Route path='/Help' exact element={<HelpPage/>}/>
    </Routes>
  )
}

export default Routing