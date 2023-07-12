import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Home.css'


const PermHome = () => {
  const navigate=useNavigate()

  const go=()=>{
    console.log('go');
    navigate('/Homen')
    
 }
 const emp=()=>{
navigate('/allem')

 }
 const alldepartment=()=>{
  navigate('/alldp')

 }
 const department=()=>{
  navigate('/dep')

 }

 const logout=()=>{

  navigate('/log')
 }




 
  return (
    <div>
           <div className='navbar'>
            <h1 className='phhed' style={{marginLeft:''}}>Hospital Managements</h1>
            
        <ul className='phul' style={{marginLeft:'500px' ,borderStyle:'none'}}>
            <li className='lin' ><button  className='linav' onClick={go}>Home</button></li>
            <li className='lin' ><button  className='linav' onClick={emp}>All Employees</button></li>
            <li className='lin' ><button className='linav' style={{height:'50px',marginTop:'-4px'}} onClick={department}>Department Heads</button></li>
            <li className='lin'> <button className='linav' onClick={alldepartment}>All Departments</button> </li>
            <li className='lin'> <button className='linav' id='logout' onClick={logout} >Log in </button></li>
       </ul>
       </div>
    </div>
  )
}

export default PermHome
