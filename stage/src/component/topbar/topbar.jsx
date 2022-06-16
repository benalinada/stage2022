

import './topbar.css'
import React from 'react'
import {  Link , useMatch, useResolvedPath } from "react-router-dom";

export default function Topbar() {
  
  return (
    <nav className='topbar'>
      
        <CustomLink to="/home" >
             HOME
        </CustomLink>
        <CustomLink to="/about" >
             ABOUT
        </CustomLink>
        <CustomLink to="/service" >
            SERVICE
        </CustomLink>
        <CustomLink to="/blog" >
             BLOG
        </CustomLink>
        <CustomLink to="/dentistes" >
             DENTISTES
        </CustomLink>
        <CustomLink to="/portfilo" >
             PORTFILO
        </CustomLink>
        <CustomLink to="/shortcode" >
             SHORTCODES
        </CustomLink>
        <CustomLink to="/appointment" >
             APPOINTMENT
        </CustomLink>
      
      

      
      
    </nav>
  )
}
function CustomLink({to, children,...props}){
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({path : resolvedPath.pathname, end: true})
  return(

    <li className={isActive  ? "active" : ""} > 
       <Link  to={to} {...props}> {children} </Link >
    </li>
  )

}
