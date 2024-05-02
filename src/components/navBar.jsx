import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div>
        <div className='d-flex justify-content-center'>
            <ul className='d-flex list-style-none gap-4 bg-danger rounded-2 p-1 px-4 text-white mt-1 '>
                <li>Home</li>
                <li>About</li>
                <li><Link className='text-decoration-none text-white' to="/contact" >Contact</Link> </li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar
