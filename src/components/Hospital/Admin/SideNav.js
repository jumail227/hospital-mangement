import React from 'react'
import './admin.css'
import { Link, Outlet, useNavigate } from 'react-router-dom';


const SideNav = () => {
  const navigat=(useNavigate)

  const empad=()=>{
    navigat('/Aempadd')

  }

  const empmg=()=>{
    navigat('/Aempmgt')
  }


  const sliding=()=>{
  document.querySelector("a.ham-icon").addEventListener("click", function(event){
    document.getElementById("sideNavigation").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  })};
  
  const slidingclose=()=>{
  document.querySelector("a.close-btn").addEventListener("click", function(event){
   document.getElementById("sideNavigation").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  })};
  
  return (
    <div>
      <div id="sideNavigation" class="sidenav">
  <a href="#" class="close-btn" onClick={slidingclose}>&times;</a>
  <a href="#">Home</a>
  {/* <Link to={'/admin/Aempmgt'}> Employees Mangement </Link> */}
  <Link to={'/admin/viewemp'}>Employees Mangement </Link>
  <Link to={'/admin/Aempadd'}>Employees Add</Link>
  <Link to={'/admin/ADpmgt'}>Department Add</Link>
  <Link to={'/admin/dpview'}>Department Mgt</Link>
  <Link to={'/admin/ADpHmgt'}>Department Head Add</Link>
  <Link to={'/admin/dpadminview'}>Department Head <br/>Mangement</Link>
  <a href="#">Log Out</a>
</div>
 
<nav class="topnav">
  <a href="#" class="ham-icon" onClick={sliding}>
    <svg width="30" height="30">
        <path d="M0,5 30,5" stroke="#000" stroke-width="5"/>
        <path d="M0,14 30,14" stroke="#000" stroke-width="5"/>
        <path d="M0,23 30,23" stroke="#000" stroke-width="5"/>
    </svg>
  </a>
</nav>

<section id="main">
  {/* <h1>This Side Navigation Menu Looks Good!</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
</section> 

<Outlet/>
</div>
  )
}

export default SideNav
