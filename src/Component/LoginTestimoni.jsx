import React from 'react'
import { Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

const LoginTestimoni = () => {
  return (
    <div  className='d-flex justify-content-evenly'>
    <motion.div
    whileHover={{scale: 1.1}}>
        <Card className="course-card-border font-merri" style={{ width: '23rem' }}>
            <Card.Img variant="top" src={(require('../Img/basreeng.png'))} height={300} className='p-5'/>
            <Card.Body>
            <Card.Text className='d-flex flex-column justify-content-between align-items-center'>
                <div className='mb-4'>
                "Saya awalnya cuma coba-coba, tapi akhirnya ketagihan. Saya pun sekarang telah menjadi penjual 
                basreng yang terkenal ramah setelah saya mempraktekan resep serta promotion step yang diajarkan oleh mentor saya."
                </div>
                <div className='d-flex flex-column align-items-center'>
                    <span>Asep Basreeeng</span>
                    <span className='text-smaller'>CEO Basreng Ramah</span>
                </div>
            </Card.Text>
            </Card.Body>
        </Card>
    </motion.div>
    <motion.div
    whileHover={{scale: 1.1}}>
        <Card className="course-card-border font-merri" style={{ width: '19rem' }}>
            <Card.Img variant="top" src={(require('../Img/nurhadi.png'))} height={300} className='p-5'/>
            <Card.Body>
            <Card.Text>
            <div className='mb-4'>
                "Setelah mengikuti course selama satu semester saya pun dapat mempelajari lebih dalam 
                    dunia komedi, akhirnya saya pun dinobatkan jadi raja meme oleh teman-teman saya."  
            </div>
                <div className='d-flex flex-column align-items-center'>    
                    <span>Nurhadi x Aldo</span>
                    <span  className='text-smaller'>Meme Lord</span>
                </div>
            </Card.Text>
            </Card.Body>
        </Card>
    </motion.div>
    <motion.div
    whileHover={{scale: 1.1}}>
        <Card className="course-card-border font-merri" style={{ width: '23rem' }}>
            <Card.Img variant="top"  src={(require('../Img/samsu.png'))} height={300} className='p-5'/>
            <Card.Body>
            <Card.Text className='d-flex flex-column justify-content-between align-items-center'>
                <div className='mb-4'>
                    "Setelah berguru selama satu semester saya telah mempelajari banyak sekali materi ilmu-ilmu yang sangat 
                    bermanfaat sehingga saya dapat mendirikan pedepokan saya sendiri, pokoknya belajar disini tuh Ho'oh Tenaaan.
                </div>
                <div className='d-flex flex-column align-items-center mb-3'>
                    <span>Gus Samsu</span>
                    <span  className='text-smaller'>Pendiri Pedepokan Ho'oh Tenan</span>
                </div>
            
            </Card.Text>
            </Card.Body>
        </Card>
    </motion.div>
    </div>
  )
}

export default LoginTestimoni