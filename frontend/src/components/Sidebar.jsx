import React from 'react'
import {FaTh,FaBars,FaUserAlt} from 'react-icons/fa'
import { NavLink } from 'react-router-dom';
import './Navbar.css'
function Sidebar({children}) {
    const menuItem=[
        {
            path:"/admindashboard",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/teacher",
            name:"Teacher",
            icon:<FaUserAlt/>
        },
        {
            path:"/course",
            name:"Course",
            icon:<FaTh/>
        }
    ]
  return (
    <div>
      <div className=' containerdiv ' >
        <div className='sidebar'>
            <div className='top-section'>
                <h1 className='logo'>
                    Brilliant
                </h1>
                <div className='bars'>
                    <FaBars/>
                </div>
            </div>
            {
                menuItem.map((item,index)=>(
                <NavLink to={item.path} key={index} className='link active'>
              <div className='icon'>
             {item.icon}
              </div>
              <div className='limk-text'>{item.name}</div>

                </NavLink>
                    
                ))
            }
        </div>
        <main>{children}</main>
      </div>
    </div>
  )
}

export default Sidebar

