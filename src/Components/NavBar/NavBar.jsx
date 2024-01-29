import React from 'react'

const NavBar = () => {
  return (
    <nav className="navbar">
        <form className="form-inline d-flex flex-row justify-content-between">
            <input className="form-control mr-3" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0 ml-3" type="submit">Search</button>
        </form>
    </nav>
  )
}

export default NavBar