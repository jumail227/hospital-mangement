import React from 'react'
// import Dropdown from 'react-bootstrap/Dropdown';
import PermHome from './PermHome'


const Home = () => {
 
  return (
    <div className='allhome'>      
      
        <PermHome/>
         <div className='img'>
         <img src='https://img.freepik.com/premium-photo/abstract-blur-beautiful-luxury-hospital-clinic-interior-background_103324-624.jpg' alt="" style={{marginTop:'0px' ,width:'1365px',height:'530px'}}></img>
        <div style={{marginTop:'-400px'}}>
         <h1 className='hos' style={{marginTop:'-20px'}}>Hospital Name</h1>
         <p className='par' style={{textAlign:'center', fontSize:'30px' ,marginTop:'-0px'}}>A new Discovery of health</p>
         </div>
        </div>


</div>
    
  )
}

export default Home
