import React, { useEffect, useState }  from 'react'
import PermHome from './PermHome'
// import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './user.css'

import { Link, Outlet, useNavigate } from 'react-router-dom';


const DepartmentH = () => {
  // const navigate=useNavigate()
  const [value,setvalue]=useState([])

  useEffect(()=>{
    axios.get('http://localhost:3001/viewdephead').then(({data})=>{
      setvalue(data)
      console.log(data,'dfvsadfvfadv');
    })
  },[])

  return (
    <div>
      <PermHome/>
     <div className='allcard' >
      {value.map((item)=>{
        return(
    <Card className='dhcard' >
      <Card.Img variant="top" src={item.image}  className='cardimg'/>
      <Card.Body  >
        <Card.Title className='cardcont' >Department Head:</Card.Title>
        <h1>{item.department}</h1>
        
        <Card.Text className='cardcont' >
        Employee number:
        </Card.Text>
        <h1>{item.dhempnum}</h1>
         
      </Card.Body>
      <Card.Footer  >
      <Link to={`/dhuser/${item._id}`}><button className='dhdet'  >Details</button></Link>

      </Card.Footer>
    </Card>
    
    
    )
  })}

</div>



      
    </div>
  )
}

export default DepartmentH
