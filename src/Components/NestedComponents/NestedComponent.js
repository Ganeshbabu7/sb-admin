import React from 'react'
import {Link} from 'react-router-dom'
import {Outlet} from 'react-router-dom'

function NestedComponent() {
  return <div style={{display:"flex", flexDirection:"column"}}>
    <h1> This is example to demonstrate Nested Component</h1>
    <ul>
        <Link to='profile'> <li> <div>Profile</div> </li> </Link>
        <Link to='account'> <li> <div>Account</div> </li> </Link>
        <Link to='useref'> <li> <div>Use Ref</div> </li> </Link>
        <Link to='usereducer'> <li> <div>Use Reducer</div> </li> </Link>
        <Link to='/nestedcomponent'> <li> <div>Nested Home</div> </li> </Link>
    </ul>
    <Outlet/>
  </div>
}

export default NestedComponent;