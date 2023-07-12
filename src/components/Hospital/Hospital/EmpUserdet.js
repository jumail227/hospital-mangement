
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


const EmpUserDet = () => {
    const {id}=useParams()
    console.log(id,'iddddddd');
      const [value,setvalue]=useState([])
      const[editvalue,seteditvalue]=useState('')

      useEffect (()=>{
        console.log("running");
        axios.get(`http://localhost:3001/admin/empmgt/${id}`).then(({data})=>{
          setvalue(data)
          console.log(data,'dataaaaaaaaaaaaaaaa');
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
      <div className='raw1' style={{ marginTop:'-850px' ,marginLeft:'300px'}}>
              <CardGroup style={{display:'flex',paddingRight:'40px' ,width:'950px',height:'30px'}}>
      <Card style={{marginTop:'30px',height:'300px',marginLeft:'-20px'}}>
        <Card.Img  variant="top" src='' style={{width:'150px',marginLeft:'730px',height:'150px',borderRadius:'100px',marginTop:'30px'}} />
        <Card.Body style={{marginTop:'-180px' ,textAlign:'start',height:'280px'}} >
          <div className='fraw' >
          <Card.Title >Name:</Card.Title>
          <input style={{width:'300px'}} required type='text' name='Name' onChange={handleChange}   value={seteditvalue.Name} placeholder={value.Name}></input>
          <Card.Text> Contact:</Card.Text>
          <input style={{width:'300px'}} required type='number' name='mobnum' onChange={handleChange} value={seteditvalue.mobnum} placeholder={value.mobnum} ></input>
          <Card.Text> Department:</Card.Text>
          <input style={{width:'300px'}} required type='text' name='department' onChange={handleChange} value={seteditvalue.department} placeholder={value.department}></input>
          </div>
          <div className='sraw'>
          <Card.Text> Age:</Card.Text>
          <input style={{width:'100px'}} required type='2number' name='age' onChange={handleChange} value={seteditvalue.age} placeholder={value.age}></input>
         <div style={{marginLeft:'130px',marginTop:'-66px'}}>
          <Card.Text> Id:</Card.Text>
          <input  style={{width:'100px'}} placeholder={value.id} required type='text'   name='id' onChange={handleChange} value={seteditvalue.id} ></input>
          </div>
          <Card.Text> Discription:</Card.Text>
          <input required style={{width:'300px',height:'105px' ,textAlign:'start'}} type='text'  name='descrp' onChange={handleChange} value={seteditvalue.descrp} placeholder={value.descrp}></input>
 
</div>
{/* <div className='brows'>
<FileBase64
multiple={ false }
onDone={(res)=>{
console.log(res.base64);
setvalue({...value,image:res.base64})
}}
/>
</div> */}
            
          {/* <div >
          <a className='link' style={{marginLeft:'120px'}}>Department</a> <a className='link' style={{marginLeft:'250px'}}>Report To</a>
          </div> */}
              {/* <div> 
                <a id='picbtn'  style={{marginLeft:'830px',marginTop:'-50px'}}><HiPhotograph className='iconbtn' style={{marginTop:'-70px'}}/></a>
</div>
 */}

        </Card.Body>
 
        {/* <Card.Footer >
          
        <button type='submit' className='cardfoot'>Update</button>
        <button id='ab' onClick={handleDelete}>Delete</button>
        </Card.Footer> */}
      </Card>   
        </CardGroup>
        </div>
        </form>


    </div>
  )
}

export default EmpUserDet
