import React from 'react'
import { Link } from 'react-router-dom';
import MobilePage from '../pages/MobilePage';

const Navbar = () => {
  return (
    <>
      <div className="navSection">
        <div className="title">
          <h1>E-Mart</h1>
        </div>
        <div className="search">
          <input type="text" placeholder='Search'/>
        </div>
        <div className="user">
          <div className="user-detail">
            signIn/signUp
          </div>
          <div className="cart">
            cart
          </div>
        </div>
      </div>
      <div className="subMenu">
        <ul>
          <Link to='/HomePage'>
            <li>HomePage</li>
          </Link>
          <Link to='/mobiles'>
            <li>Mobiles</li>
          </Link>
          <Link to='/computers'>
            <li>Computers</li>
          </Link>
          <Link to='/Tvs'>
            <li>TVs</li>
          </Link>
        </ul>
      </div>
    </>
  )
}

export default Navbar;