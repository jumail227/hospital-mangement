import React ,{ useState,useEffect } from 'react'
import './admin.css'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import {IoIosAddCircle } from "@react-icons/all-files/io/IoIosAddCircle";
import {HiPhotograph } from "@react-icons/all-files/hi/HiPhotograph";
// import SideNav from './SideNav';
import axios from 'axios'

import FileBase64 from 'react-file-base64'





const DeptmntMgt = () => {

  const[value,setvalue]=useState()

  const handleChange=async(event)=>{
    setvalue({...value,[event.target.name]:event.target.value})
    console.log(value);
  }

  const handleSubmit =async(event)=>{
    console.log(handleSubmit);
    event.preventDefault();
    await axios.post('http://localhost:3001/admin//alldep',value).then(({data})=>{
      
    })
  }


  useEffect(()=>{
    axios.get('http://localhost:3001/viewalldepartment').then(({data})=>{
      setvalue(data)
      console.log(data,'dfvsadfvfadv');
    })
  },[])



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
            {/* <SideNav /> */}
        <div><img src='https://cdn.wallpapersafari.com/42/4/FCjrNk.jpg' style={{width:'100%'}} alt=''></img></div>

        <form onSubmit={handleSubmit}>
            <div  >
              <CardGroup className='allc'  >
      <Card >
    
        <Card.Img  src='' className='carim1' />
        
   
    
                <Card.Body  className='cardb'>
          <div className='cleft' >
          <Card.Title >Department Name:</Card.Title>
          <input style={{width:'300px' }} type='text' onChange={handleChange} name='dpname' value={setvalue.dpname} ></input>
          <div className='yea' >
          <Card.Text> Year Founded:</Card.Text>
      <select value={setvalue.year} onChange={handleChange} name='year'>
        <option value="">Select Year</option>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
                      </div>
          <div  className='cright'>
          <Card.Text> Discription:</Card.Text>
          <input style={{width:'300px',height:'170px'  }} type='text' onChange={handleChange} name='dis' value={setvalue.dis}></input>
            </div>         
            <div className='brows2'>    
          <FileBase64
multiple={ false }
onDone={(res)=>{
console.log(res.base64);
setvalue({...value,image:res.base64})
console.log(value);
}}
/>
                 </div>
 
                {/* <button style={{marginLeft:'720px',width:'0px',marginTop:'-80px',height:'0px'}}><HiPhotograph className='iconbtn'/></button> */}
        </Card.Body>


        <Card.Footer >
          <div style={{marginLeft:'400px',marginTop:'0px'}}>
       <button style={{borderRadius:'30px' ,color:'green',borderStyle:'none'}} type='submit'><IoIosAddCircle style={{fontSize:'50px',marginLeft:'-0px',color:'green'}}/></button>
       </div>
        </Card.Footer>
      </Card>   
        </CardGroup>
        </div>
        </form>

    </div>
  )
}

export default DeptmntMgt
