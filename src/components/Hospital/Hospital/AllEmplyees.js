import React, { useEffect, useState } from 'react'
// import'../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import PermHome from './PermHome'
import './user.css'
// import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'





const AllEmplyees = () => {
  const navigate=useNavigate()
  const [value,setvalue]=useState([])


  const handleDelete= (id)=>{
    console.log("working");
      axios.post(`http://localhost:3001/admin/empdelete/${id}`);
     navigate('/allem');
     
     toast('delete succesfully', {
     position: "top-right",
     autoClose: 5000,
     hideProgressBar: false,
     closeOnClick: true,
     pauseOnHover: true,
     draggable: true,
     progress: undefined,
     theme: "light",
     });

     
    
  }


useEffect(()=>{
  
    axios.get('http://localhost:3001/viewemployees').then(({data})=>{
    console.log(data,'data');
    setvalue(data)

  })

},[])




  return (
    <div >

         <PermHome/>
  

    {/* <div><h1 className='hede'>Employees</h1></div> */}
<div className='allemp'>
 
        <div className='raw1'>
        {value.map((item)=>{

return(
         <CardGroup  >
      <Card className=' carditems' >
     
        <Card.Img style={{width:"100%",height:'350px'}} variant="top" src={item.image}/>
  <Card.Body >
          <Card.Title style={{fontWeight:'lighter'}} className='ddddd'>Name:<h3 className='cddcd' >{item.Name} </h3></Card.Title>
          <Card.Text style={{fontWeight:'lighter'}}> Contact: {item.mobnum}</Card.Text>
          
         </Card.Body>
        <Card.Footer>

        <Link to={`/empuser/${item._id}`}> <button className='detemp'>Details</button> </Link>
         {/* <button onClick={()=>{handleDelete(item._id)}}>Delete</button>  */}

        {/* <a href=''>More Details</a> */}
        </Card.Footer>
      </Card>  

      </CardGroup>
)
})}
    </div>




    
        </div>
        
    </div>
  )
}

export default AllEmplyees
