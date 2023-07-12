// import React from 'react'
import React , { useEffect, useState }from 'react'
import './admin.css'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import {IoIosAddCircle } from "@react-icons/all-files/io/IoIosAddCircle";
import {HiPhotograph } from "@react-icons/all-files/hi/HiPhotograph";
// import SideNav from './SideNav';
import { useParams } from 'react-router-dom';


import axios from 'axios'
import FileBase64 from 'react-file-base64'




const DepHedEdit = () => {
    const {id}=useParams()
    console.log(id,'abc');

    const[value,setvalue]=useState('')
    const[editvalue,seteditvalue]=useState('')

    useEffect(()=>{
      axios.get(`http://localhost:3001/admin/dphedmgt/${id}`).then(({data})=>{
        setvalue(data)
        console.log(data,'..........');
      })

    },[])


    const handleChange= async (event)=>{
  
      seteditvalue({...editvalue,[event.target.name]:event.target.value})
      console.log(editvalue);
    }
    const handleSubmit =  (event) => {
      event.preventDefault();
         axios.post(`http://localhost:3001/admin/dphedupdate/${id}`,editvalue).then(({data})=>{
        console.log(handleSubmit);
        
      })
    
    }
       
  
  return (
    <div>
           <div><img src='https://cdn.wallpapersafari.com/42/4/FCjrNk.jpg' style={{width:'100%'}} alt=''></img></div>
 
      
 <div className='raw1' style={{ marginTop:'-850px' ,marginLeft:'300px'}}>
   <form onSubmit={handleSubmit}>
         <CardGroup className='cardall'>
 <Card>
         <Card.Img variant="top" src={value.image}  className='carim'/> 
          <Card.Body style={{marginTop:'-180px' ,textAlign:'start',height:'280px'}} >
     <div className='cardleft'>
     <Card.Title>Name:</Card.Title>
     <input style={{width:'300px'}} name='dhname' onChange={handleChange} placeholder={value.dhname} value={setvalue.dhname} type='text'></input>
     <Card.Text style={{marginTop:'30px'}}> Employee number:</Card.Text>
     <input style={{width:'200px' }} type='number' name='dhempnum' onChange={handleChange} value={setvalue.dhempnum}  placeholder={value.dhempnum} ></input>
     <Card.Text>Department: </Card.Text>
     <input style={{width:'200px' }} type='text' name='dhdepartment' onChange={handleChange} value={setvalue.department} placeholder={value.department}></input>
     </div>
     <div  className='cardright'>
     <Card.Text> Age:</Card.Text>
     <input style={{width:'100px'}} type='number'  name='dhage' onChange={handleChange} value={setvalue.dhage} placeholder={value.dhage}></input>
     <Card.Text>Discription:</Card.Text>
     <input style={{width:'300px',height:'130px'}}  type='text' name='dhdescription' onChange={handleChange} value={setvalue.dhdescription} placeholder={value.dhdescription}></input>
   <div className='brows1'>
     <FileBase64 
multiple={ false }
onDone={(res)=>{
console.log(res.base64);
setvalue({...value,image:res.base64})
console.log(value);

}}
/>
</div>
       <div  style={{marginLeft:'468px',marginTop:'-50px' }}>
     {/* <button  style={{width:'0px',height:'0px' }}><HiPhotograph className='iconbtn'/></button> */}
     </div>
         </div>
         
   </Card.Body>
   <Card.Footer >
   <div style={{marginLeft:'0px'}}>
     <button  className='cardfoot'style={{textDecoration:'none' ,color:'white'}} type='submit' >Update</button>
     </div>
     {/* <div style={{marginLeft:'400px',marginTop:'-45px'}}>
  <button  style={{borderRadius:'30px' ,color:'green',borderStyle:'none'}} ><IoIosAddCircle  style={{fontSize:'50px',marginLeft:'-0px',color:'green'}}/></button>
  <div  style={{marginLeft:'-300px',marginTop:'-46px'}}>
  <button id='ab'><a href='' style={{textDecoration:'none',color:'white'}}>Delete</a></button>
  

  </div>
  </div> */}
   </Card.Footer>
 </Card>   
   </CardGroup>

   
   </form>
   </div>


    </div>
  )
}

export default DepHedEdit
