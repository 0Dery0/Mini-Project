import { gql,  useMutation } from '@apollo/client';
import React from 'react'
import { useState, useEffect } from "react";
import { getCourses } from '../api/api';
import { toast } from 'react-toastify';
import SideNavbarItems from '../Component/Admin/Navbar/SideNavbarItems';

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
  

const NavbarEditCourseContainer = () => {
    const [courses, setCourses] = useState([]);
    const [updateCourse, {loading: loadingUpdate}] = useMutation(UpdateCourse);
    const {loading, setLoading} = useState([true]);
    const notify = () => toast.success('Course Success Edited!', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  
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
        alert('Id yang anda masukan tidak ada!')
          .then((res) => {
            setCourses(prevState => [...prevState, res.data.update_miniproject_course.returning[0]])
          })
      }
    
    
    
    
  
  }
  return (
    <SideNavbarItems    courses={courses}
                        loading={loading}
                        formData={formData}
                    handleChangeFormData={handleChangeFormData}
                    handleSubmit={handleSubmit}
                    notify={notify}/>
    
  )
}

export default NavbarEditCourseContainer