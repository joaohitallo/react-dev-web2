import React, { useState, useEffect } from 'react';
import './index.css'
import { Link } from "react-router-dom"
import Categorias from '../Categorias';

const NavBar = () => {


  return (
    <header>
      <div>
        <Link to="/">
          <h1>Home</h1>
        </Link>
      </div>
      <Categorias />
    </header>
  )
}

export default NavBar