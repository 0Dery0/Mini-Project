import { gql, useSubscription} from '@apollo/client';
import React from 'react'
import UserCoursePage from '../../Component/User/UserCoursePage';


const GetCourse = gql`
subscription MySubscription {
  miniproject_course(order_by: {id: asc}) {
    deskripsi
    deskripsi_full
    id
    id_course
    mentor
    title
  }
}`


const UserCoursePageContainer = () => {
    const {data, loading} = useSubscription(GetCourse);
  return (
    <UserCoursePage courses={data}
                loading={loading}
                />   
  )
}

export default UserCoursePageContainer