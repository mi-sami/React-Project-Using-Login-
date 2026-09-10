import React from 'react'

const Navbar = () => {
  return (
    <div>
        <NavLink
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
>
  Home
</NavLink>
    </div>
  )
}

export default Navbar