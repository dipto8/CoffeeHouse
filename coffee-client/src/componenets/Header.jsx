import { NavLink } from "react-router-dom"


function Header() {
  return (
    <div>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/users'>Users</NavLink>
        <NavLink to='/signup'>Signup</NavLink>
        <NavLink to='/login'></NavLink>
        <NavLink to='/'>Login</NavLink>
        <NavLink to='/'></NavLink>
      
    </div>
  )
}

export default Header
