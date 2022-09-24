import React from 'react'
import AdminSidebar from '../components/AdminSidebar'
import Sidebar from '../components/Sidebar'
import './Form.scss'


function AdminDashboard() {
  return (
    <div className=''>

      <AdminSidebar/>
     {/* <div className='sidebardiv  '>
  
  <Sidebar/>
  </div> */}
      <div className='container contentdiv '>
        <div>
            <h1>hi admin</h1>
      </div>
      </div>
</div>
  )
   
}

export default AdminDashboard
