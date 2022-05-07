import React, { useEffect } from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import './layout.css'
import Routers from '../../Routes/Routers'
import Siderbar from '../siderbar/Siderbar'
import TopNav from '../topnav/TopNav'
import { useGlobalContext } from '../../context/context'

const Layout = (props) => {
    const { isSidebar ,themeMode,setMode , setColor, themeColor ,dispatch} = useGlobalContext()
    useEffect(() => {
        const themeClass = localStorage.getItem('themeMode')

        const colorClass = localStorage.getItem('themeColor')

        setMode(themeClass)
        setColor(colorClass)
    }, [dispatch])
  return (
    <div>
        <BrowserRouter>
            <div className={`layout ${themeMode} ${themeColor}`}>
                <Siderbar/>
                <TopNav/>
                <div className={`layout__content ${isSidebar ? "toggle" :""}`}>
                    <div className="layout__content-main">
                        <Routers/> 
                    </div>
                </div>
            </div>
        </BrowserRouter>
    </div>
  )
}

export default Layout