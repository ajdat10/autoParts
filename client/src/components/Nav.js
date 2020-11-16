import React from 'react'
import {Link} from 'react-router-dom'


export default ({ authenticated, currentUser, className }) => {
  return (
    <header className={className}>
     <nav>
    <div className="nav-wrapper">
      <Link href="#" className="brand-logo center">AJay's Auto Blog</Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link activeClassName="nav-active" to="/login">Sign In</Link></li>
        <li><Link href="/register">Sign Up</Link></li>
        
      </ul>
    </div>
  </nav>

    </header>
  )
}