import { gql,  useMutation } from '@apollo/client';
import React from 'react'
import { useState, useEffect } from "react";
import { getCourses } from '../api/api';
import { toast } from 'react-toastify';
import SideNavbarItems from '../Component/Admin/Navbar/SideNavbarItems';


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
  


const NavbarAddCourseContainer = () => {
    const [courses, setCourses] = useState([]);
    const [insertCourse, {loading: loadingInsert}] = useMutation(InsertCourse);
    const {loading, setLoading} = useState([true]);
  
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
    const id_courseLocation = courses.findIndex((course) => course.id_course === +formData.id_course);
    if (courseLocation >= 0){
      toast.info('Id ini sudah diambil!', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }else{
      if (id_courseLocation >= 0){
        toast.info('Id Course ini sudah diambil!', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
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
            toast.success('Course Berhasil Ditambahkan!', {
              position: "top-center",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              });
          })
      }
    }
    
    
    
  
  }
  return (
    <SideNavbarItems    courses={courses}
                        loading={loading}
                        formData={formData}
            handleChangeFormData={handleChangeFormData}
            handleSubmit={handleSubmit}
            />
    
  )
}

export default NavbarAddCourseContainer