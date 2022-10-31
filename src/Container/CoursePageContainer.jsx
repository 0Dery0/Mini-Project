import { gql, useSubscription, useMutation } from '@apollo/client';
import React from 'react'
import CoursePage from '../Component/CoursePage'

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

const DeleteCourse = gql`
  mutation MyMutation($id: Int!) {
  delete_miniproject_course_by_pk(id: $id) {
    id
  }
}
`

const CoursePageContainer = () => {
    const {data, loading} = useSubscription(GetCourse);
    const [deleteCourse, {loading: loadingDelete}] = useMutation(DeleteCourse);

    const handleDelete = (idx) => {
      deleteCourse({variables: {id: idx}})
    }
  return (
    <CoursePage courses={data}
                loading={loading}
                handleDelete={handleDelete}/>   
  )
}

export default CoursePageContainer