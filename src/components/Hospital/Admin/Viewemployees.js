

import React, { useEffect, useState } from 'react'
// import'../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
// import PermHom e from '../Hospital/PermHome'
import '../Hospital/user.css'
// import './admin.css'
// import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Viewemployees = () => {
  // const navigate=useNavigate()
    const [value,setvalue]=useState([])
    const [check,setcheck]=useState(false)

    const navigate=useNavigate()

  const handleDelete= (id)=>{
    console.log("working");
      axios.post(`http://localhost:3001/admin/empdelete/${id}`);
    //  navigate('/allem');
    toast.success('Item deleted successfully!', {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000, // Toast will automatically close after 3 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: 'my-toast my-toast-success',
      // onClose: () => {
      //   // Reload the page after the toast is closed
      //   window.location.reload();
      // }

      // style: {
      //   backgroundColor: 'white',
      //   color: 'black',
      //   fontSize: '16px',
      //   padding: '12px'
      // },
    });
      window.location.reload();
    
  }
 
  
  useEffect(()=>{
  
      axios.get('http://localhost:3001/viewemployees').then(({data})=>{
      console.log(data,'data');
      setvalue(data)
  
    })
  
  },[])
  
  
  return (
    <div >
    {/* //          <PermHome/> */}
    
        {/* <div><h1 className='hede'>Employees</h1></div> */}
     <div className='allemp'>
     
           <div className='raw1'>
           {value.map((item)=>{
            console.log(item);
    
    return(
             <CardGroup className=' carditems' >
          <Card >
            <Card.Img variant="top" src={item.image} style={{height:'300px',width:'100%'}}/>
      <Card.Body >
              <Card.Text>Name: <h3 style={{marginLeft:'50px',marginTop:'-33px'}}>{item.Name} </h3></Card.Text>
              <Card.Text> Contact: {item.mobnum}</Card.Text>
              
             </Card.Body>
            <Card.Footer>
    
            <Link to={`/admin/Aempmgt/${item._id}`}> <button className='edemp'>Edit</button> </Link>
            <button onClick={()=>{handleDelete(item._id)}} className='dlemp'>Delete</button> 

    
            {/* <a href=''>More Details</a> */}
            </Card.Footer>
          </Card>  
    
          </CardGroup>
    )
    })}
        </div>
    

        <ToastContainer />
        
            </div>
        </div>
      )
    }
   
export default Viewemployees
