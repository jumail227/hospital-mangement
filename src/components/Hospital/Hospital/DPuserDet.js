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


const DpuserDet = () => {
    const {id}=useParams()
console.log(id,'iddddddd');
  const [value,setvalue]=useState([])
  const[editvalue,seteditvalue]=useState('')
  useEffect(()=>{
    axios.get(`http://localhost:3001/admin/dpmentmgt/${id}`).then(({data})=>{
      setvalue(data)
    })
  },[])

  const handleChange=async(event)=>{
  
    seteditvalue ({...editvalue,[event.target.name]:event.target.value})
  console.log(editvalue);
  }

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     await axios.post(`http://localhost:3001/admin/empupdate/${id}`,editvalue).then(({data})=>{
//       console.log(data);
      
//     })
  
//   }

//   const handleDelete=(event)=>{
//     event.preventDefault()
//      axios.post(`http://localhost:3001/admin/empdelete/${id}`)
//   }

const [selectedYear, setSelectedYear] = useState('');

// Generate an array of year options
const years = [];
const currentYear = new Date().getFullYear();
const startYear = currentYear - 100; // Start from 100 years ago
for (let year = startYear; year <= currentYear; year++) {
  years.push(year);
}
const handleYearChange = (event) => {
  setSelectedYear(event.target);
};

  return (
    <div>
      <PermHome/>
       <div><img src='https://cdn.wallpapersafari.com/42/4/FCjrNk.jpg' style={{width:'100%'}} alt=''></img></div>
      <form  >
      <div className='raw1' style={{ marginTop:'-850px' ,marginLeft:'300px',height:'370px'}}>
              <CardGroup style={{display:'flex',paddingRight:'40px' ,width:'950px'}}>
      <Card style={{marginTop:'30px',height:'300px',marginLeft:'-20px'}}>
        <Card.Img variant="top" src={value.image} style={{width:'150px',marginLeft:'730px',height:'150px',borderRadius:'100px',marginTop:'30px'}} />
                <Card.Body style={{marginTop:'-180px' ,textAlign:'start',height:'280px'}} >
          <div style={{marginTop:'20px'}}>
          <Card.Title>Department Name:</Card.Title>
          <input style={{width:'300px'}} type='text' onChange={handleChange} placeholder={value.dpname} name='dpname' value={seteditvalue.dpname}></input>
          <div className='yea' >
          <Card.Text> Year Founded:</Card.Text>
      <input value={setvalue.year} placeholder={value.year} onChange={handleChange} name='year'>
      
      </input>
    </div>

          </div>
          <div style={{marginLeft:'350px',marginTop:'-160px'}}>
          <Card.Text> Discription:</Card.Text>
          <input style={{width:'300px',height:'150px'}} onChange={handleChange} placeholder={value.dis} name='dis' type='text' value={seteditvalue.dis}></input>
 
              </div>
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

export default DpuserDet
