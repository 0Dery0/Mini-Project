import { gql,  useMutation } from '@apollo/client';
import React from 'react'
import { useState, useEffect } from "react";
import { getCourses } from '../api/api';
import HomePage from '../Component/HomePage'

const InsertCourse = gql`
  mutation MyMutation($objects: [miniproject_course_insert_input!] = {}) {
    insert_miniproject_course(objects: $objects) {
      returning {
        deskripsi
        deskripsi_full
        id_course
        mentor
        title
      }
    }
  }
  `
const UpdateCourse = gql`
  mutation MyMutation($deskripsi: String!, $deskripsi_full: String!, $id_course: Int!, $mentor: String!, $title: String!, $id: Int!) {
    update_miniproject_course(where: {id: {_eq: $id}}, 
      _set: {deskripsi: $deskripsi, deskripsi_full: $deskripsi_full, id_course: $id_course, mentor: $mentor, title: $title}) {
      returning {
        deskripsi
        deskripsi_full
        id_course
        mentor
        title
      }
    }
  }

`

const DeleteCourse = gql`
    mutation MyMutation($id: Int!) {
    delete_miniproject_course_by_pk(id: $id) {
      id
    }
  }
  `
  


const HomePageContainer = () => {
    const [courses, setCourses] = useState([]);
    const [insertCourse, {loading: loadingInsert}] = useMutation(InsertCourse);
    const [updateCourse, {loading: loadingUpdate}] = useMutation(UpdateCourse);
    const [deleteCourse, {loading: loadingDelete}] = useMutation(DeleteCourse);
    const {loading, setLoading} = useState([true]);
  
    console.log(courses)
  
    const [formData, setFormData] = useState({
      id_course: "",
      id: "",
      deskripsi:"",
      mentor: "",
      deskripsi_full: "",
      title: "",
    });
  
    const handleChangeFormData = (label, newValue) => {
      setFormData({
        ...formData,
        [label]: newValue,
      });
    };
  
    const handleDelete = (idx) => {
      deleteCourse({variables: {id: idx}})
    }
  
    useEffect(() => {
      getCourses()
        .then((res) => {
          setCourses(res);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }, [loading]);

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    const courseLocation = courses.findIndex((course) => course.id === +formData.id);
    if (courseLocation >= 0){
      await updateCourse ({
        variables: {
            mentor : formData.mentor,
            title : formData.title,
            id_course : +formData.id_course,
            id : +formData.id,
            deskripsi : formData.deskripsi,
            deskripsi_full : formData.deskripsi_full
        }
      })
    } else{
      await insertCourse({
        variables: {
          objects: {
            mentor : formData.mentor,
            title : formData.title,
            id_course : +formData.id_course,
            id : +formData.id,
            deskripsi : formData.deskripsi,
            deskripsi_full : formData.deskripsi_full
            
          }
        }
      })
        .then((res) => {
          setCourses(prevState => [...prevState, res.data.insert_miniproject_course.returning[0]])
        })
    }
    
  
  }
  return (
    <HomePage   courses={courses}
                loading={loading}
                formData={formData}
            handleChangeFormData={handleChangeFormData}
            handleSubmit={handleSubmit}
            handleDelete={handleDelete}/>
  )
}

export default HomePageContainer