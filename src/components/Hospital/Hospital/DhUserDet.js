
import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
// import './SideNav'
// import SideNav from './SideNav';
import axios from 'axios';
import  { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import FileBase64 from 'react-file-base64'
import PermHome from './PermHome';


const DhUserDet = () => {
    const {id}=useParams()
    console.log(id,'iddddddd');
      const [value,setvalue]=useState([])
      const[editvalue,seteditvalue]=useState('')
      useEffect(()=>{
        axios.get(`http://localhost:3001/admin/dphedmgt/${id}`).then(({data})=>{
          setvalue(data)
        })
      },[])
    
      const handleChange=async(event)=>{
      
        seteditvalue ({...editvalue,[event.target.name]:event.target.value})
      console.log(editvalue);
      }
    
  return (
    <div>
         <PermHome/>
       <div><img src='https://cdn.wallpapersafari.com/42/4/FCjrNk.jpg' style={{width:'100%'}} alt=''></img></div>
      <form  >
      <div className='raw1' style={{ marginTop:'-850px' ,marginLeft:'300px',height:'350px'}}>
              <CardGroup style={{display:'flex',paddingRight:'40px' ,width:'950px'}}>
      <Card style={{marginTop:'30px',height:'300px',marginLeft:'-20px'}}>
        <Card.Img variant="top" src={value.image} style={{width:'150px',marginLeft:'730px',height:'150px',borderRadius:'100px',marginTop:'50px'}} />
                <Card.Body style={{marginTop:'-180px' ,textAlign:'start',height:'280px'}} >
          <div style={{marginTop:'20px'}}>
          <Card.Title>Name:</Card.Title>
          <input style={{width:'300px'}} type='text' onChange={handleChange} placeholder={value. dhname} name=' dhname' value={seteditvalue. dhname}></input>
          <Card.Text> Employee Number:</Card.Text>
          <input style={{width:'300px'}} type='10number' onChange={handleChange} placeholder={value.dhempnum} name='dhempnum' value={seteditvalue.dhempnum}></input>
          </div>
          <div style={{marginLeft:'350px',marginTop:'-140px'}}>
          <Card.Text> Age:</Card.Text>
          <input style={{width:'100px'}} type='2number' onChange={handleChange} placeholder={value.dhage} name='dhage' value={seteditvalue.dhage}></input>
        
          <Card.Text> Discription:</Card.Text>
          <input style={{width:'300px',height:'80px'}} onChange={handleChange} placeholder={value.dhdescription} name='dhdescription' type='text' value={seteditvalue.dhdescription}></input>
 
          <div style={{marginTop:'-20px',marginLeft:'-350px'}}>
          {/* <a className='link'>Department</a>  */}
          <Card.Text> Department:</Card.Text>

          <input placeholder={value.department}></input>
          </div>
              </div>
        </Card.Body>
      </Card>   
        </CardGroup>
        </div>
        </form>


    </div>
  )
}

export default DhUserDet
