import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Header.module.css'
import { PATH } from './Routes'

function Header() {
    return (
        <div className={s.header}>
            <NavLink to={PATH.PRE_JUNIOR} activeClassName={s.active}>Pre-junior</NavLink>
            <NavLink to={PATH.JUNIOR} activeClassName={s.active}>Junior</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS} activeClassName={s.active}>Junior+</NavLink>
        </div>
    )
}

export default Header
