import React from 'react'
import Card from 'react-bootstrap/Card';
import { Spinner } from 'react-bootstrap';
import { gql, useSubscription } from '@apollo/client';
import { useNavigate } from 'react-router-dom';


const SubsProfile = gql`
    subscription MySubscription {
        miniproject_user {
        asal
        nama
        umur
        }
    }
    
`

const MiniProfileContainer = () => {
    const {data, loading} = useSubscription(SubsProfile);
    const navigate = useNavigate();

    const handleLogOut = () => {
        navigate('/')
    }
  return (
    <div className='d-flex justify-content-center'>
                    {
                      loading
                      ?
                      <Spinner animation="border" variant='primary'/>
                      :
                      data?.miniproject_user.map((user) =>(
                        <Card border="primary" style={{ width: '14rem' }}>
                          <Card.Header>Administrator</Card.Header>
                          <Card.Body>
                            <Card.Title>{user.nama}</Card.Title>
                              <div>Umur : {user.umur}</div>
                              <div>Asal : {user.asal}</div>
                              <button  onClick={handleLogOut} className="btn btn-primary mt-3">
                                Log Out!
                              </button>
                          </Card.Body>
                        </Card>
                      ))
                    }
                    </div>
  )
}

export default MiniProfileContainer