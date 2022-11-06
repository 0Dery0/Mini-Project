import React from 'react'
import DetailCoursePage from '../../Component/Admin/DetailCoursePage';
import { useNavigate, useParams } from "react-router-dom";
import { gql , useSubscription} from '@apollo/client';

const GetDetail = gql`
subscription MySubscription($id: Int!) {
    miniproject_course(where: {id: {_eq: $id}}) {
      deskripsi
      deskripsi_full
      id
      id_course
      mentor
      title
    }
  }
  
 ` 

const DetailCoursePageContainer = () => {
  const navigate = useNavigate()
  const {id} = useParams();
  const {data, loading} = useSubscription(GetDetail,{ variables: {id } }
    );
console.log(data)
  const handleGoBack = ()=>{
      navigate(-1);
  }
  return(
      <DetailCoursePage courseData={data}
      handleGoBack={handleGoBack}
      loading={loading} />
  )
}
export default DetailCoursePageContainer