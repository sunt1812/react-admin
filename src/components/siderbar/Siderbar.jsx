import React, { useState } from 'react'
import { Link ,useLocation} from 'react-router-dom'
import { useGlobalContext } from '../../context/context'
import sidebarApi from '../../pake-api/sidebar-api'
import './siderbar.css'

const Siderbar = () => {
	const { pathname } = useLocation()
	const active = sidebarApi.findIndex(e => e.route === pathname)
	const {isSidebar} = useGlobalContext()
  return (
    <div className={`siderbar ${isSidebar ? "toggle" :""}`}>
      <div className="siderbar__logo">
        admin dashboard
      </div>
	  <div className="siderbar__search">
		  <input type="text" placeholder="search..." />
		  <i className='bx bx-search'></i>
	  </div>
	  <aside className="siderbar__menu">
		  {
			  sidebarApi.map((item,index) => (
				  <Link to={item.route} key={index}>
					  <div className={`siderbar__menu__item ${active === index ? "active" :""}`}>
						  <i className={item.icon}></i>
						  <span>{item.display_name}</span>
					  </div>
				  </Link>
			  ))
		  }
	  </aside>
    </div>
  )
}

export default Siderbar