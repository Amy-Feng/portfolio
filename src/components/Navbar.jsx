import React from 'react';

export function Navbar() {

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary pt-0">
      <div className="container-fluid">
        <a className="navbar-brand bg-darkpink text-light px-4 pb-2 fs-5 rounded-bottom" href="#">Home</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link fs-6 text-darkpink" aria-current="page" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-6 text-darkpink" href="#">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-6 text-darkpink" href="#">Awards</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-6 text-darkpink" href="#">Art</a>
            </li>

          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2 text-darkpink fs-6" type="search" placeholder="Search" aria-label="Search"></input>
            <button className="btn btn-outline-pink text-pink fs-6" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}