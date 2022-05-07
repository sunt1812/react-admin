import React, { useRef } from 'react'
import { clickOutsideRef } from '../../utils';
import './dropdown.css'

const Dropdown = (props) => {
    const toggleRef = useRef(null);
    const contentRef = useRef(null);
    clickOutsideRef(contentRef,toggleRef)
  return (
    <div className="dropdown">
        <div className="dropdown__toggle" ref={toggleRef}>
            {props.customToggle ? props.customToggle() : ''}
            {props.customUserMenu ? props.customUserMenu() :""}
        </div>
        <div className={`dropdown__content`} ref={contentRef}>
            <ul className="submenu">
                {props.data.map((item,index) => (
                    <li className="submenu__item" key={index}>
                        <i className={item.icon}></i>
                        <span>{item.content}</span>
                    </li>
                ))}
                {
                    props.renderFooter ? (
                        <div className="dropdown__footer">
                            {props.renderFooter()}
                        </div>
                    ) : ''
                }
            </ul>
        </div>
    </div>
  )
}

export default Dropdown