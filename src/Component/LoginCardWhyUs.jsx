import React from 'react'
import { Card } from 'react-bootstrap';
import { motion } from 'framer-motion';


const LoginCardWhyUs = () => {
  return (
    <div  className='d-flex justify-content-evenly'>
        <motion.div
        whileHover={{scale: 1.1}}>
            <Card className="course-card-border" style={{ width: '23rem' }}>
                <Card.Body>
                <Card.Title className="d-flex align-items-center course-card-title mb-3 text-title-why">Flexibel</Card.Title>
                <Card.Text className="course-card-text mb-4">
                    Pembelajaran di Spy-On dapat diakses dan dilakukan dimana saja dengan fitur 
                    online course para pelajar tidak perlu takut akan ketinggalan materi.
                </Card.Text>
                </Card.Body>
            </Card>
        </motion.div>
        <motion.div
        whileHover={{scale: 1.1}}>
            <Card className="course-card-border" style={{ width: '23rem' }}>
                <Card.Body>
                <Card.Title className="d-flex align-items-center course-card-title mb-3 text-title-why">Mentor Yang Berpengalaman</Card.Title>
                <Card.Text className="course-card-text mb-4">
                    Materi yang di ajarkan pada para pengguna disampaikan langsung oleh para mentor yang 
                    berpengalaman dibidangnya masing-masing.
                </Card.Text>
                </Card.Body>
            </Card>
        </motion.div>
        <motion.div
        whileHover={{scale: 1.1}}>
            <Card className="course-card-border" style={{ width: '23rem' }}>
                <Card.Body>
                <Card.Title className="d-flex align-items-center course-card-title mb-3 text-title-why">Course Beragam</Card.Title>
                <Card.Text className="course-card-text mb-4">
                    Di Spy-On terdapat beragam course yang bisa pengguna pilih, sehingga pengguna dapat lebih banyak
                    pengalaman dari course yang telah diikuti.
                </Card.Text>
                </Card.Body>
            </Card>
        </motion.div>
    </div>
    
  )
}

export default LoginCardWhyUs