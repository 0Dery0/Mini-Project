import React from 'react'
import { useState } from "react";
import HomePage from '../../Component/Admin/HomePage'


const HomePageContainer = () => {
    const [courses] = useState([]);
    const {loading} = useState([true]);
  return (
    <HomePage   courses={courses}
                loading={loading}
                />
    
  )
}

export default HomePageContainer