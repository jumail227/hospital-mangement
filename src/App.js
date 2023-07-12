import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Home from './components/Hospital/Hospital/Home'
import AllEmplyees from './components/Hospital/Hospital/AllEmplyees'
import AllDep from './components/Hospital/Hospital/AllDep'
import DepartmentH from './components/Hospital/Hospital/DepartmentH'
import Login from './components/Hospital/Login'

   import HomeA from './components/Hospital/Admin/HomeA'
  //  import SideNav from './components/Hospital/Admin/SideNav'
   import EmployeesMgt from './components/Hospital/Admin/EmployeesMgt'
   import EmpAdd from './components/Hospital/Admin/EmpAdd'
import DeptmntMgt from './components/Hospital/Admin/DeptmntAdd'
import DepHeadmgt from './components/Hospital/Admin/DepHeadAdd'
import SideNav from './components/Hospital/Admin/SideNav'
// import Edit from './components/Hospital/Admin/Edit'
import Viewemployees from './components/Hospital/Admin/Viewemployees'
import DepHedView from './components/Hospital/Admin/DepHedView'
import EmpUserDet from './components/Hospital/Hospital/EmpUserdet'
import DepHedEdit from './components/Hospital/Admin/DepHedEdit'
import DhUserDet from './components/Hospital/Hospital/DhUserDet'
import DptmentView from './components/Hospital/Admin/DptmentView'
import DpmentEdit from './components/Hospital/Admin/DpmentEdit'
import DpuserDet from './components/Hospital/Hospital/DPuserDet'


function App() {
  return (
    <div >
     <BrowserRouter>
          <Routes>   

        <Route path='/' element={<Home/>}/>  
        <Route path='log' element={<Login/>}/>  
        <Route path='/Homen' element={<Home/>}/>  
        <Route path='/allem' element={<AllEmplyees/>}/>
        <Route path='/alldp' element={<AllDep/>}/>
        <Route path='/dep' element={<DepartmentH/>}/>
        <Route path='/empuser/:id' element={<EmpUserDet/>}/>
        <Route path='/dhuser/:id' element={<DhUserDet/>}/>
        <Route path='/dpuser/:id' element={<DpuserDet/>}/>


        <Route path='/admin'element={<SideNav/>}>
        <Route path='Aempadd' element={<EmpAdd/>}/>
        <Route path='Aempmgt/:id' element={<EmployeesMgt/>}/>
        <Route path='Ahome' element={<HomeA/>}/>
        <Route path='ADpHmgt' element={<DepHeadmgt/>}/>
        <Route path='ADpmgt' element={<DeptmntMgt/>}/>
        {/* <Route path='edit' element={<Edit/>}/> */}
        <Route path='viewemp' element={<Viewemployees/>}/>
        <Route path='dphededit/:id' element={<DepHedEdit/>}/>
        
        <Route path='dpadminview' element={<DepHedView/>}/>
        <Route path='dpview' element={<DptmentView/>}/>
        <Route path='dpedit/:id' element={<DpmentEdit/>}/>



        </Route>

         </Routes>
          </BrowserRouter>   



     </div>
  );
}

export default App;
