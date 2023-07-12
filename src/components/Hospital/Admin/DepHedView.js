import React, { useEffect, useState }  from 'react'
// import PermHome from './PermHome'
// import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './admin.css'
// import '../Hospital/user.css'
import { useParams } from 'react-router-dom';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";




const DepHedView = () => {
    const [value,setvalue]=useState([])
const {id}=useParams()
console.log(id,'///////aaaaaaaaaa');


    useEffect(()=>{
      axios.get('http://localhost:3001/viewdephead').then(({data})=>{
        setvalue(data)
        console.log(data,'dfvsadfvfadv');
      })
    },[])

    const handleDelete=(id)=>{
      console.log(handleDelete);
      axios.post(`http://localhost:3001/admin/dpheddelete/${id}`)

      toast.success('Item deleted successfully!', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000, // Toast will automatically close after 3 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: 'my-toast my-toast-success',
      })
    }
  return (
    <div>
            
     <div className='allcardadm' >
      {value.map((item)=>{
        return(
    <Card className='dhacard' >
      <Card.Img variant="top" src={item.image}  className='cardimg'/>
      <Card.Body  >
        <Card.Title className='cardcont' >Department Head:</Card.Title>
        <h1 className='dhatit'>{item.department}</h1>
        
        <Card.Text className='cardcont' >
        Employee Number:
        </Card.Text>
        <h1 className='dhatit'>{item.dhempnum}</h1>
         
      </Card.Body>
      <Card.Footer>
      <Link to={`/admin/dphededit/${item._id}`}><button  className='dhaedit' >Edit</button></Link>
      <button onClick={()=>{handleDelete(item._id)}} className='dhadele' >Delete</button>

      </Card.Footer>
    </Card>
    
    
    )
  })}

</div>
<ToastContainer />

    </div>
  )
}

export default DepHedView
