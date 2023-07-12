import React , { useState }from 'react'
import './admin.css'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import {IoIosAddCircle } from "@react-icons/all-files/io/IoIosAddCircle";
import {HiPhotograph } from "@react-icons/all-files/hi/HiPhotograph";
// import SideNav from './SideNav';


import axios from 'axios'
import FileBase64 from 'react-file-base64'




const DepHeadmgt = () => {
  
  const[value,setvalue]=useState('')


  const handleChange= async (event)=>{

    setvalue({...value,[event.target.name]:event.target.value})
  console.log(value);
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios.post('http://localhost:3001/admin/Dephead',value).then(({data})=>{
      console.log(data);
      
    })
  
  }
     
  return (
    <div>
         {/* <SideNav /> */}
         <div><img src='https://cdn.wallpapersafari.com/42/4/FCjrNk.jpg' style={{width:'100%'}} alt=''></img></div>
 
      
      <div className='raw1' style={{ marginTop:'-850px' ,marginLeft:'300px'}}>
        <form onSubmit={handleSubmit}>
              <CardGroup className='cardall'>
      <Card>
              <Card.Img variant="top" src={value.image}  className='carim'/> 
               <Card.Body style={{marginTop:'-180px' ,textAlign:'start',height:'280px'}} >
          <div className='cardleft'>
          <Card.Title>Name:</Card.Title>
          <input style={{width:'300px'}} name='dhname' onChange={handleChange} value={setvalue.dhname} type='text'></input>
          <Card.Text style={{marginTop:'30px'}}> Employee number:</Card.Text>
          <input style={{width:'200px' }} type='number' name='dhempnum' onChange={handleChange} value={setvalue.dhempnum}></input>
          <Card.Text> </Card.Text>
          {/* <input placeholder=' Dipartment:' style={{width:'200px' }} type='text' name='dhdepartment' onChange={handleChange} value={setvalue.dhdepartment}></input> */}
          <select  name='department' onChange={handleChange} value={setvalue.department}>  
    <option >Departments</option>
    <option > General surgery</option>
    <option>Cardiology</option>
    <option>Orthopedic</option>
    <option>Radiology</option>
    <option>Nephrology</option>
    <option>Oncology</option>
  </select>
         
          </div>
          <div  className='cardright'>
          <Card.Text> Age:</Card.Text>
          <input style={{width:'100px'}} type='number'  name='dhage' onChange={handleChange} value={setvalue.dhage}></input>
          <Card.Text>Discription:</Card.Text>
          <input style={{width:'300px',height:'130px'}}  type='text' name='dhdescription' onChange={handleChange} value={setvalue.dhdescription}></input>
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
         
              </div>
              
        </Card.Body>
        <Card.Footer >
        {/* <div style={{marginLeft:'0px'}}>
          <button  className='cardfoot'><a href=''  style={{textDecoration:'none' ,color:'white'}} >Update</a></button>
          </div> */}
          <div style={{marginLeft:'450px'}}>
       <button  style={{borderRadius:'30px' ,color:'green',borderStyle:'none'}} type='submit'><IoIosAddCircle  style={{fontSize:'50px',marginLeft:'-0px',color:'green'}}/></button>
       </div>
       {/* <div  style={{marginLeft:'-300px',marginTop:'-46px'}}>
       <button id='ab'><a href='' style={{textDecoration:'none',color:'white'}}>Delete</a></button>
      </div> */}
        </Card.Footer>
      </Card>   
        </CardGroup>

        
        </form>
        </div>

        

    </div>
  )
}

export default DepHeadmgt;
