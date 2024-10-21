import React from 'react'
import style from "./nav.module.css"
import { Link } from 'react-router-dom'
import Logo from '../Assets/logo.png'

const Nav = () => {
    return (
            <nav>
                <article className={style.nav2}>
                    <Link to={"/"}><img src={Logo} alt="" srcset="" height={"60px"} /></Link>
                </article>
                <article className={style.nav1}>
                    <Link id={style.links} to={'/dashboard'} >DASHBOARD</Link>
                    <Link id={style.links} to={'/room'} >ROOMS</Link>
                    <Link id={style.links} to={"/gallery"}>GALLERY</Link>
                    <Link id={style.links} to={"/dine"}>DINE & DRINK</Link>
                    <Link id={style.links} to={"/events"}>EVENTS</Link>
                    <Link id={style.links} to={"/offers"}>OFFERS</Link>
                    <Link id={style.links} to={"/shop"}>SHOP</Link>
                    <Link id={style.links} to={"/contact"}>CONTACT</Link>
                </article>

                <article className={style.nav3}>
                    <button><Link to={"/book"} style={{ "textDecoration": "none", "color": "Black" }}>BOOK NOW</Link></button>
                </article>
            </nav>
    )
}

export default Nav