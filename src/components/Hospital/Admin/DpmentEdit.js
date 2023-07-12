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




const DpmentEdit = () => {
    const {id}=useParams()
    console.log(id,'abc');

    const[value,setvalue]=useState('')
    const[editvalue,seteditvalue]=useState('')

    useEffect(()=>{
      axios.get(`http://localhost:3001/admin/dpmentmgt/${id}`).then(({data})=>{
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
         axios.post(`http://localhost:3001/admin/dpmentupdate/${id}`,editvalue).then(({data})=>{
        console.log(handleSubmit);
        
      })
    
    }








    
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
            <div><img src='https://cdn.wallpapersafari.com/42/4/FCjrNk.jpg' style={{width:'100%'}} alt=''></img></div>
 
      
 <div className='raw1' style={{ marginTop:'-850px' ,marginLeft:'300px',height:"250px"}}>
   <form onSubmit={handleSubmit}>
         <CardGroup className='cardall'>
 <Card>
         <Card.Img variant="top" src={value.image}  className='carim'/> 
          <Card.Body style={{marginTop:'-180px' ,textAlign:'start',height:'280px'}} >
     <div className='cardleft'>
     <Card.Title>Department Name:</Card.Title>
     <input style={{width:'300px'}} name='dpname' onChange={handleChange} placeholder={value.dpname} value={setvalue.dpname} type='text'></input>
     <div className='yea' >
          <Card.Text> Year Founded:</Card.Text>
      <select value={setvalue.year} onChange={handleChange} name='year' >
        <option value={value.year}>Select Year</option>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
     </div>
     <div  className='cardright' style={{marginTop:'-160px'}}>
     <Card.Text>Discription:</Card.Text>
     <input style={{width:'300px',height:'160px'}}  type='text' name='dis' onChange={handleChange} value={setvalue.dis} placeholder={value.dis}></input>
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
   <div style={{marginLeft:'0px'}}>
     <button  className='cardfoot'style={{textDecoration:'none' ,color:'white'}} type='submit' >Update</button>
     </div>
   </Card.Footer>
 </Card>   
   </CardGroup>

   
   </form>
   </div>


      
    </div>
  )
}

export default DpmentEdit
