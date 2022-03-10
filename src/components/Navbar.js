import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li> <a href="/login"> Login </a> </li>
          <li> <a href="/"> Home </a> </li>
          <li> <a href="/register"> Register </a> </li>
          <li> <a href="/users"> All users </a> </li>
          <li> <a href="/logout"> Logout </a></li>
          <li> <a href="/users/me"> My profile </a> </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
