import { gql, useSubscription } from '@apollo/client';
import React from 'react'
import DetailCoursePage from '../Component/DetailCoursePage';
import { useMutation} from "@apollo/client"
import { useState, useEffect } from "react";
import { getCourses } from '../api/api';

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
const InsertCourse = gql`
  mutation MyMutation($objects: [miniproject_course_insert_input!]!) {
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
const DeleteCourse = gql`
    mutation MyMutation($id: Int!) {
    delete_miniproject_course_by_pk(id: $id) {
      id
    }
  }
  `
  

const DetailCoursePageContainer = () => {
    const {data} = useSubscription(GetCourse);
    const {loading, setLoading} = useState([true]);



    const [courses, setCourses] = useState([]);
    const [insertCourse, {loading: loadingInsert}] = useMutation(InsertCourse);
    // const [updateArticle, {loading: loadingUpdate}] = useMutation(UpdateArticle);
    const [deleteCourse, {loading: loadingDelete}] = useMutation(DeleteCourse);
  
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
    console.log(courseLocation)
    if (courseLocation >= 0){
    //   await updateArticle ({
    //     variables: {
    //         mentor : formData.mentor,
    //         title : formData.title,
    //         id_course : +formData.rating,
    //         id : +formData.id,
    //         deskripsi : formData.deskripsi,
    //         deskripsi_full : formData.deskripsi_full
    //     }
    //   })
    } else{
      console.log(formData)
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
    <DetailCoursePage   courses={data}
                        loading={loading}
                        formData={formData}
          handleChangeFormData={handleChangeFormData}
          handleSubmit={handleSubmit}
          handleDelete={handleDelete}/>
  )
}

export default DetailCoursePageContainer