import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Home from './components/Hospital/Hospital/Home'
import AllEmplyees from './components/Hospital/Hospital/AllEmplyees'
import AllDep from './components/Hospital/Hospital/AllDep'
import DepartmentH from './components/Hospital/Hospital/DepartmentH'
import Login from './components/Hospital/Login'
const App = () => {
  return (
    <div>
     

        <BrowserRouter>
        
          <Routes>   
        <Route path='/' element={<Home/>}/>  
        <Route path='log' element={<Login/>}/>  
        <Route path='Homen' element={<Home/>}/>  
        <Route path='/allem' element={<AllEmplyees/>}/>
        <Route path='/alldp' element={<AllDep/>}/>
        <Route path='/dep' element={<DepartmentH/>}/> 
         </Routes>
          </BrowserRouter>    
          </div>
  )
}

export default App
