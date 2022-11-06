import React, { useState } from 'react'

import { gql, useMutation } from '@apollo/client'
import UserDetailCoursePage from '../../Component/User/UserDetailCoursePage';

const EnrollCourse = gql`
mutation MyMutation($enrolled: String = "") {
    update_miniproject_user_by_pk(pk_columns: {id: 2}, _set: {enrolled: $enrolled}) {
      asal
      enrolled
      id
      nama
      role
      umur
    }
  }
  `
const UserAddedCourse = () => {
    const [courses, setCourses] = useState([]);
    const [enrollCourse, {loading: loadingUpdate}] = useMutation(EnrollCourse);
    const [formData, setFormData] = useState({
        enrolled: ""
      });
    
      const handleChangeFormData = (label, newValue) => {
        setFormData({
          ...formData,
          [label]: newValue,
        });
      };

      const handleEnroll = async (evt) => {
        evt.preventDefault()
            await enrollCourse ({
              variables: {
                  enrolled : formData.enrolled
              }
            })
        }
  return (
    <UserDetailCoursePage   handleEnroll={handleEnroll}
                            handleChangeFormData={handleChangeFormData}
                            formData={formData}/>
  )
}

export default UserAddedCourse