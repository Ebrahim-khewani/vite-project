
import React from 'react';
import { Link } from 'react-router-dom';


function NavBar()
{
  
  return (
    <> 
    <nav className="navbar navbar-expand-lg bg-light p-0">
    <a className="navbar-brand" href="#">Start React</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
      aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarScroll">
      <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="index.html">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="add.html">add product</a>
          {/* <Link to={"./assets/component/AddProduct"}>add product</Link> */}
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
            aria-expanded="false">
            shope
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
      <button className="btn btn-outline-dark ">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-fill"
          viewBox="0 0 16 16">
          <path
            d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z">
          </path>
        </svg>
        cart
        <span className="bg-dark rounded-circle text-white p-sm-1 p-0"> 0 </span>
      </button>
    </div>
    </nav>
    </>
 
      ) 
}

export default NavBar
