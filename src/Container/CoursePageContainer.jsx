import { gql, useSubscription } from '@apollo/client';
import React from 'react'
import CoursePage from '../Component/CoursePage'

const GetCourse = gql`
subscription MySubscription {
    miniproject_course {
      deskripsi
      deskripsi_full
      id_course
      mentor
      title
    }
  }`

const CoursePageContainer = () => {
    const {data, loading} = useSubscription(GetCourse);

  return (
    <CoursePage courses={data}
                loading={loading}/>   
  )
}

export default CoursePageContainer