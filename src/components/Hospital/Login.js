import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import './Hospital/user.css'




const Login = () => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const[value,setvalue]=useState('')
  const navigate=useNavigate()


  // const handleEmailChange = (event) => {
  //   setEmail(event.target.value);
  // };

  // const handlePasswordChange = (event) => {
  //   setPassword(event.target.value);
  // };

  const handleChange= async (event)=>{

    setvalue({...value,[event.target.name]:event.target.value})
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios.post('http://localhost:3001/log',value).then(({data})=>{
      console.log(data);
      if(data.status){
        navigate('/admin/Ahome')
        // console.log(navigate);
      }
      else{
        setError(true)
      }

    })
  
  }
     
  
  return (
    
    <div className='bgimg' >
      <div>
            <img className='imaa' src='https://thumbs.dreamstime.com/b/doctor-leading-medical-blurry-hospital-background-doctor-leading-medical-blurry-hospital-background-130587421.jpg' alt='' style={{height:'610px' ,width:'800px',marginLeft:'0px' ,display:'block'}}></img>
            </div>
    <div className='box' >
    <h1 className='loghed' style={{marginTop:'-50px'}} >Hospital</h1>

        <form className='input' onSubmit={handleSubmit} >
          <label> 
        <input name='username' onChange={handleChange} value={setvalue.username} placeholder="username" className='ina'  /> 
        </label>
        <br/>
        <label>
        <input placeholder="password" onChange={handleChange} name='password' value={setvalue.password} id='inputa'/>
        </label>
        

        <div className='bth'>
          <br/>  
            <button id='log'type='submit' style={{backgroundColor:'forestgreen'}}>Login</button>
        </div>
           
           </form>
           
      {error &&
      <h1>invalid</h1> 

      }
           </div>

           <div>
            {/* <img src='https://thumbs.dreamstime.com/b/doctor-leading-medical-blurry-hospital-background-doctor-leading-medical-blurry-hospital-background-130587421.jpg' alt='' style={{height:'610px' ,width:'800px' ,marginTop:'20px'}}></img> */}
            </div>  
    </div>
    
  
  )
}

export default Login
