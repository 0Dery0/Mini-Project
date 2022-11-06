import React from 'react'
import { Card } from 'react-bootstrap';

const LoginTestimoni = () => {
  return (
    <div  className='d-flex justify-content-evenly'>
    <Card className="card-course-t" style={{ width: '23rem' }}>
        <Card.Img variant="top" src={(require('../Img/basreeng.png'))} height={350} className='p-5'/>
        <Card.Body style={{height:'27vh'}}>
        <Card.Text className='d-flex flex-column justify-content-between align-items-center'>
            <div>
            "Saya awalnya cuma coba-coba, tapi akhirnya ketagihan. Saya pun sekarang telah menjadi penjual 
            basreng yang terkenal ramah setelah saya mempraktekan resep serta promotion step yang diajarkan oleh mentor saya."
            </div><br/>
            <div className='d-flex flex-column align-items-center'>
                <span>Asep Basreeeng</span>
                <span className='text-small'>CEO Basreng Ramah</span>
            </div>
        </Card.Text>
        </Card.Body>
    </Card>
    <Card className="card-course-t" style={{ width: '23rem' }}>
        <Card.Img variant="top" src={(require('../Img/nurhadi.png'))} height={350} className='p-5'/>
        <Card.Body style={{height:'27vh'}}>
        <Card.Text>
           <div>
            "Setelah mengikuti course selama satu semester saya pun dapat mempelajari lebih dalam 
                dunia komedi, akhirnya saya pun dinobatkan jadi raja meme oleh teman-teman saya."  
           </div><br/><br/>
            <div className='d-flex flex-column align-items-center'>    
                <span>Nurhadi x Aldo</span>
                <span  className='text-small'>Meme Lord</span>
            </div>
        </Card.Text>
        </Card.Body>
    </Card>
    <Card className="card-course-t" style={{ width: '23rem' }}>
        <Card.Img variant="top"  src={(require('../Img/samsu.png'))} height={350} className='p-5'/>
        <Card.Body style={{height:'27vh'}}>
        <Card.Text className='d-flex flex-column justify-content-between align-items-center'>
            <div>
                "Setelah berguru selama satu semester saya telah mempelajari banyak sekali materi ilmu-ilmu yang sangat 
                bermanfaat sehingga saya dapat mendirikan pedepokan saya sendiri, pokoknya belajar disini tuh Ho'oh Tenaaan."
                <br/>
            </div>
            <div className='d-flex flex-column align-items-center'>
                <span>Gus Samsu</span>
                <span  className='text-small'>Pendiri Pedepokan Ho'oh Tenan</span>
            </div>
        
        </Card.Text>
        </Card.Body>
    </Card>
    </div>
  )
}

export default LoginTestimoni