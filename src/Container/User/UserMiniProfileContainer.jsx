import React from 'react'
import Card from 'react-bootstrap/Card';
import { Spinner } from 'react-bootstrap';
import { gql, useSubscription } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {IoIosPerson} from 'react-icons/io'


const SubsProfileAdmin = gql`
subscription MySubscription {
  miniproject_user(where: {id: {_eq: 2}}) {
    asal
    id
    nama
    umur
    role
  }
}
`

const UserMiniProfileContainer = () => {
    const {data, loading} = useSubscription(SubsProfileAdmin);
    const userEmail = useSelector((state) => state.user.userEmail)
    const navigate = useNavigate();
    const handleLogOut = () => {
        navigate('/')
    }
  return (
    <div className='d-flex justify-content-center font-merri'>
                    {
                      loading
                      ?
                      <Spinner animation="border" variant='primary'/>
                      :
                      data?.miniproject_user.map((user) =>(
                        <Card border="light" style={{ width: '14rem' }}>
                          <Card.Header>{user.role}</Card.Header>
                          <Card.Body>
                            <Card.Title><IoIosPerson/>{user.nama}</Card.Title>
                              <span>Umur : {user.umur}</span><br/>
                              <span>Email : {userEmail}</span><br/>
                              <span>Asal : {user.asal}</span><br/>
                              <button onClick={handleLogOut} className="btn btn-primary mt-3 text-small">
                                Log Out!
                              </button>
                          </Card.Body>
                        </Card>
                      ))
                    }
                    </div>
  )
}

export default UserMiniProfileContainer