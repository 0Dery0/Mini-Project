import React from 'react'
import { Card } from 'react-bootstrap';

const LoginCardWhyUs = () => {
  return (
    <div  className='d-flex justify-content-evenly'>
        <Card className="card-course-w d-flex flex-column justify-content-center" style={{ width: '23rem' }}>
            <Card.Body>
            <Card.Title className="d-flex align-items-center">Flexibel</Card.Title>
            <Card.Text>
                Pembelajaran di Spy-On dapat diakses dan dilakukan dimana saja dengan fitur 
                online course para pelajar tidak perlu takut akan ketinggalan materi.
            </Card.Text>
            </Card.Body>
        </Card>
        <Card className="card-course-w" style={{ width: '23rem' }}>
            <Card.Body>
            <Card.Title>Mentor Yang Berpengalaman</Card.Title>
            <Card.Text>
                Materi yang di ajarkan pada para pengguna disampaikan langsung oleh para mentor yang 
                berpengalaman dibidangnya masing-masing.
            </Card.Text>
            </Card.Body>
        </Card>
        <Card className="card-course-w" style={{ width: '23rem' }}>
            <Card.Body>
            <Card.Title>Course Beragam</Card.Title>
            <Card.Text>
                Di Spy-On terdapat beragam course yang bisa pengguna pilih, sehingga pengguna dapat lebih banyak
                pengalaman dari course yang telah diikuti.
            </Card.Text>
            </Card.Body>
        </Card>
    </div>
    
  )
}

export default LoginCardWhyUs