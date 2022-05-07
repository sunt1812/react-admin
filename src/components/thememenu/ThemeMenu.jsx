import React, { Fragment, useEffect, useRef, useState } from 'react'
import { useGlobalContext } from '../../context/context'
import { clickOutsideRef } from '../../utils'

import './theme-menu.css'
const mode_settings = [
    {
        id: 'light',
        name: 'Light',
        background: 'light-background',
        class: 'theme-mode-light',       
    },
    {
        id: 'dark',
        name: 'Dark',
        background: 'dark-background',
        class: 'theme-mode-dark',
    }
]
const color_settings = [
    {
        id: 'blue',
        name: 'Blue',
        background: 'blue-color',
        class: 'theme-color-blue'
    },
    {
        id: 'red',
        name: 'Red',
        background: 'red-color',
        class: 'theme-color-red'
    },
    {
        id: 'cyan',
        name: 'Cyan',
        background: 'cyan-color',
        class: 'theme-color-cyan'
    },
    {
        id: 'green',
        name: 'Green',
        background: 'green-color',
        class: 'theme-color-green'
    },
    {
        id: 'orange',
        name: 'Orange',
        background: 'orange-color',
        class: 'theme-color-orange'
    },
]
const ThemeMenu = () => {
    // clickOutsideRef
    const menuToggleRef = useRef(null)
    const menuRef = useRef(null)
    const activeMenu = () => menuRef.current.classList.add('active')
    const closeMenu = () => menuRef.current.classList.remove('active') 
    clickOutsideRef(menuRef,menuToggleRef)
    // theme more dart
    const [currMode, setCurrMode] = useState("light");
    const [currColor, setCurrColor] = useState("blue");
    const {setMode,setColor} = useGlobalContext()

    const handleSetMode = (mode) => {
        setCurrMode(mode.id)
        localStorage.setItem("themeMode",mode.class)
        setMode(mode.class)
    }
    const handleSetColor = (color) => {
        setCurrColor(color.id)
        localStorage.setItem("themeColor",color.class)
        setColor(color.class)
    }

    useEffect(() => {
        const themeClass = mode_settings.find(e => e.class === localStorage.getItem('themeMode'))
        const colorClass = color_settings.find(e => e.class === localStorage.getItem('themeColor'))

        if (themeClass !== undefined) setCurrMode(themeClass.id)
        if (colorClass !== undefined) setCurrColor(colorClass.id)

    }, []);

  return (
    <Fragment>
         <div className="dropdown__toggle" onClick={activeMenu} ref={menuToggleRef}>
            <i className='bx bx-palette'></i>
        </div>
        <div className="theme-menu" ref={menuRef}>
            <h4 className="theme-menu__title">Theme settings</h4>
            <button className="theme-menu__close" onClick={closeMenu}>
                <i className='bx bx-x'></i>
            </button>
            <div className="theme-menu__select">
                <span className="theme-menu__select__choose">Choose mode</span>
                <ul className="mode-list">
                   {mode_settings.map(item => (
                       <li key={item.id} onClick={() => handleSetMode(item)}>
                           <div className={`mode-list__color ${item.background} ${item.id === currMode ?"active" :""} `}>
                                <i className='bx bx-check'></i>
                           </div>
                           <span>{item.name}</span>
                       </li>
                   ))}
                </ul>
            </div>
            <div className="theme-menu__select">
                <span className="theme-menu__select__choose"> Choose color</span>
                <ul className="mode-list">
                    {color_settings.map(item => (
                        <li key={item.id} onClick={() => handleSetColor(item)}>
                            <div className={`mode-list__color ${item.background} ${item.id === currColor ?"active" :""} `}>
                                <i className='bx bx-check'></i>
                            </div>
                            <span>{item.name}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </Fragment>
  )
}

export default ThemeMenu