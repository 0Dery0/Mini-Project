import { gql, useSubscription, useMutation } from '@apollo/client';
import React from 'react'
import CoursePage from '../../Component/Admin/CoursePage'
import { toast } from 'react-toastify';

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
    const notify = () => toast.success('Success added course!', {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });

    const handleDelete = (idx) => {
      deleteCourse({variables: {id: idx}})
      toast.error('Course Success Deleted!', {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light"});
    }
  return (
    <CoursePage courses={data}
                loading={loading}
                handleDelete={handleDelete}
                notify={notify}/>   
  )
}

export default CoursePageContainer