import React from 'react'
import {assets} from '../assets/assets';
import {Link} from 'react-router-dom';

const Navbar = () => {
    
  return (
    <div className = 'flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400 '>
      <img className = "w-44 cursor-pointer" src= {assets.logo} alt="" />
      <ul className = 'hidden md:flex items-start gap-5 font-medium'>
        <li className = 'py-1'>
       <Link to ='/'>
           HOME
           <hr className = 'border-none outline-none h-0.5 bg-primary w-3/5 m-auto'/>
        </Link>
        </li>
             <li className = 'py-1'>
       <Link to = '/doctors'> ALL DOCTORS <hr className = 'border-none outline-none h-0.5 bg-primary w-3/5 m-auto'/></Link>
         </li>
         <li className = 'py-1'>
          <Link to = '/about'>ABOUT <hr className = 'border-none outline-none h-0.5 bg-primary w-3/5 m-auto'/></Link>
        </li>
        <li className = 'py-1'>
        <Link to ='/contact'>CONTACT <hr className = 'border-none outline-none h-0.5 bg-primary w-3/5 m-auto'/></Link>
        </li>
  
        </ul>
          <div>
        <Link>
             Create Account
        </Link>
       
  
      </div>
    </div>
  )
}

export default Navbar;
