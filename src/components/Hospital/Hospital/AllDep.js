import React, { useEffect , useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import PermHome from './PermHome';
import './user.css'
import axios from 'axios';
import { Link, Outlet, useNavigate } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


const AllDep = () => {

  const [value,setvalue]=useState([])
useEffect(()=>{
  axios.get('http://localhost:3001/viewalldepartment').then(({data})=>{
    setvalue(data)
    console.log(data,'df////////////');

  })
},[])
  return (

    <div>
    <PermHome/>

        <div className='alldepd'>
                {value.map((item)=>{

return(
      


<CardGroup>
<Card className=' carditemsd' >

  <Card.Img variant="top" className='dpimg' src={item.image}/>
<Card.Body >
    <Card.Title style={{textAlign:'center',fontWeight:"bolder",fontSize:'30px'}}>{item.dpname} </Card.Title>
    
   </Card.Body>
  <Card.Footer>

  <Link to={`/dpuser/${item._id}`}> <button className='detemp'>Details</button> </Link>

  </Card.Footer>
</Card>  
</CardGroup>

)
})}

    
        </div>
       
        

    

      
    </div>
  )
}

export default AllDep
