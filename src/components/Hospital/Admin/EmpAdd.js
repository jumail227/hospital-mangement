import React,{useState, useEffect} from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
// import SideNav from './SideNav';
import './admin.css'
import {IoIosAddCircle } from "@react-icons/all-files/io/IoIosAddCircle";
// import {HiPhotograph } from "@react-icons/all-files/hi/HiPhotograph";
// import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import FileBase64 from 'react-file-base64'
// import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';


const EmpAdd = () => {
  // const navigate=useNavigate()
  const[value,setvalue]=useState('')
  const {id}=useParams()
  console.log(id,'iddddddd');

  const [getdata,setGetdata]=useState([])
  const [depdata,setdepdata]=useState('')
  const [resdata,setresdata]=useState([])


  

  const handleChange= async (event)=>{

    setvalue({...value,[event.target.name]:event.target.value})
    console.log(value);
  }

  

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios.post('http://localhost:3001/admin/addemp',value).then(({data})=>{
      console.log(data);
      
    })
  
  }

 
  // useEffect(()=>{
  //   axios.get('http://localhost:3002/admin/department').then(data)
  //       console.log(data,'depdata');
  //       setGetdata(data)
  //       console.log(getdata,"------");
  //   })
 

    // useEffect(()=>{
    //   if (depdata){
    //      axios.get(http://localhost:3002/admin/departmentHead/${depdata}).then(({data})=>{
    //       // console.log(data,'=======');
    //       setresdata(data)
    //       // console.log(resdata);
    //     })
    //   }
    //   },[depdata])

  
    


    

  return (
    <div>

        {/* <SideNav /> */}
        <div><img src='https://cdn.wallpapersafari.com/42/4/FCjrNk.jpg' style={{width:'100%'}} alt=''></img></div>

        <form onSubmit={handleSubmit}>
            <div className='raw1' style={{ marginTop:'-850px',paddingLeft:'280px'}}>
            
              <CardGroup style={{display:'flex',paddingRight:'40px' ,width:'1000px'}}>
      <Card className='crdd'>

        <Card.Img variant="top" name='picture' onChange={handleChange} src={value.image} style={{width:'150px',marginLeft:'750px',marginTop:'20px',height:'150px',borderRadius:'100px'}} />
                <Card.Body style={{marginTop:'-180px' ,textAlign:'start',height:'280px'}} >
          <div className='fraw' >
          <Card.Title >Name:</Card.Title>
          <input style={{width:'300px'}} required type='text' name='Name' onChange={handleChange}   value={setvalue.Name}></input>
          <Card.Text> Contact:</Card.Text>
          <input style={{width:'300px'}} required type='number' name='mobnum' onChange={handleChange} value={setvalue.mobnum} ></input>
          {/* <Card.Text> Department:</Card.Text>
          <input style={{width:'300px'}} required type='text' name='department' onChange={handleChange} value={setvalue.department}></input> */}
        
        
        
      
      

   <div style={{marginTop:'30px'}}>
  
      
  <select  name='department' onChange={handleChange} value={setvalue.department} >  
    <option >Departments</option>
    <option > General surgery</option>
    <option>Cardiology</option>
    <option>Orthopedic</option>
    <option>Radiology</option>
    <option>Nephrology</option>
    <option>Oncology</option>
  </select>

    
</div>


<div >
  
          <Card.Text> Report To:</Card.Text>

          {/* {value.map((item)=>{

return( */}
           <input className='link' style={{marginTop:'-60px'}} placeholder={value.dhdepartment}></input>
           {/* )
          })}
           */}
         
           </div>

         
          </div>
          <div className='sraw'>
          <Card.Text> Age:</Card.Text>
          <input style={{width:'100px'}} required type='2number' name='age' onChange={handleChange} value={setvalue.age}></input>
          <input  style={{width:'100px',marginLeft:'50px',paddingLeft:'40px'}} placeholder='ID' required type='text'   name='id' onChange={handleChange} value={setvalue.id}></input>
          <Card.Text> Discription:</Card.Text>
          <input required style={{width:'300px',height:'105px' ,textAlign:'start'}} type='text'  name='descrp' onChange={handleChange} value={setvalue.descrp}></input>
 
</div>
<div className='brows'>
<FileBase64
multiple={ false }
onDone={(res)=>{
console.log(res.base64);
setvalue({...value,image:res.base64})
}}
/>
</div>
            
              {/* <div> 
                <a id='picbtn'  style={{marginLeft:'830px',marginTop:'-50px'}}><HiPhotograph className='iconbtn' style={{marginTop:'-70px'}}/></a>
</div>
 */}

        </Card.Body>
        <Card.Footer >
        <div>
       <button type='submit' style={{borderRadius:'30px' ,color:'green',borderStyle:'none',width:'50px',marginLeft:'400px'}}><IoIosAddCircle  style={{fontSize:'50px',marginLeft:'0px',color:'green'}}/></button>
       </div>

        </Card.Footer>
      </Card>   
        </CardGroup>
        </div>
        </form>
    </div>
  )
}

export default EmpAdd
