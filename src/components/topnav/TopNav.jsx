import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../../context/context'
import notificationApi from '../../pake-api/notification-api'
import userMenuApi from '../../pake-api/user-menu-api'
import Dropdown from '../dropdown/Dropdown'
import ThemeMenu from '../thememenu/ThemeMenu'
import './topnav.css'
const curr_user = {
	img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa8T-cdFA2BDy4ldgQ1zD4BC_moe9MEPaW4Q&usqp=CAU",
	display_name:"my name"
}
const renderUserToggle = (user) => (
	<div className="avatar">
		<img src={user.img} alt="" />
		<span className="name">{user.display_name}</span>
	</div>
)
const renderUserMenu = () => (
	<div className="bell">
		<i className='bx bxs-bell'></i>
		<span className="label">3</span>
	</div>
)
const TopNav = () => {
	const{ handleSidebar} = useGlobalContext()

  return (  
		<div className="topnav">
			<div className="topnav__content">
				<h2 className="topnav__content__logo">
					admin dashboard
				</h2>
				<div className="topnav__content__bar" onClick={handleSidebar}>
					<i className='bx bx-align-middle'></i>
				</div>
				<ul className="topnav__content__menu">
					<li className={`topnav__content__menu__item `}>
						<Dropdown 
							customToggle={() => renderUserToggle(curr_user)}
							data={userMenuApi}
						/>
					</li>
					<li className={`topnav__content__menu__item `}>
						<Dropdown 
							customUserMenu = {() =>renderUserMenu()}
							data={notificationApi}
							renderFooter={() => <Link to='/'>View All</Link>}
						/>
					</li>
					<li className="topnav__content__menu__item">
						<ThemeMenu />						
					</li>
				</ul>
			</div>
		</div>
  )
}

export default TopNav