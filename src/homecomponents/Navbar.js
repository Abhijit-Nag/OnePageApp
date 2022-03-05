import React from 'react';

// import { Link } from "react-router-dom";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function Navbar() {
  return (
    <>
      {/* <body> */}<Router>
        <div className='navbar'>



          <span>< Link className='navigationbar' to="/">Home</Link></span>
          <span><Link className='navigationbar' to="/Counter">Counter</Link></span>
          <span><Link className='navigationbar' to="/Weather">Weather APP</Link> </span>
          <span><Link className='navigationbar' to="/todolist">To-Do List APP</Link></span>
          <span><Link className='navigationbar' to="/Contact">Contact Me</Link></span>


        </div></Router>
      {/* <h1>Hi , My name is ABHIJIT NAG</h1> */}
      {/* </body> */}
    </>
  )
}
