import React from 'react';
import {Link, useNavigate} from 'react-router-dom';

export default function Navbar() {

  const navigate = useNavigate();

  const handleLogout = ()=>{
    localStorage.removeItem("authToken");
    navigate("/login");
  }

  return (
    <div>
  <nav className="navbar navbar-expand-lg navbar-dark bg-success">
  <div className="container-fluid">
    <Link className="navbar-brand fs-1 fst-italic me-5" to="/">GoFood</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <Link className="nav-Link active text-light text-decoration-none fs-4" aria-current="page" to ="/">Home</Link>
        </li>
        {(localStorage.getItem("authToken"))?
        <li className="nav-item">
          <Link className="nav-Link mx-5 text-light text-decoration-none fs-4" aria-current="page" to ="/">My Orders</Link>
        </li>
        :""}
      </ul>

      {(!localStorage.getItem("authToken"))?
      <div className="d-flex">
          <Link className="btn bg-white mx-1 text-decoration-none" to ="/login">Login</Link>
          <Link className="btn bg-white mx-1 text-decoration-none" to ="/createuser">Signup</Link>
      </div>
      :
      <div className='d-flex'>
      <div>
          <div className="btn bg-white mx-2 text-success">My Cart</div>
      </div>
      <div>
          <div className="btn bg-white mx-2 text-danger" onClick={handleLogout}>Logout</div>
      </div>
      </div>
      }

    </div>
  </div>
</nav>
    </div>
  )
}
