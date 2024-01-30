import React, { useState } from 'react'

const NavBar = ({ handleFilter }) => {
  const [value, setValue] = useState('')

  const handleChange = ({target}) => {
    setValue(target.value)
    handleFilter(target.value)
  }

  return (
    <nav className="navbar">
        <form className="form-inline d-flex flex-row justify-content-between">
            <input className="form-control mr-3" type="search" placeholder="Search" aria-label="Search" value={value} onChange={handleChange}/>
        </form>
    </nav>
  )
}

export default NavBar