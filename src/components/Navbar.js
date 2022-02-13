import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/About">{props.aboutText}</Link>
          </li>
        </ul>
        {/* <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}

        {/* <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
          <input className="form-check-input" onClick={props.toggleModeBlue} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Blue Mode</label>
        </div>

        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
          <input className="form-check-input" onClick={props.toggleModeGreen} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Green Mode</label>
        </div>

        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
          <input className="form-check-input" onClick={props.toggleModeRed} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Red Mode</label>
        </div> */}

        <div class={`form-check text-${props.mode==='light'?'dark':'light'}`}>
            <input class="form-check-input" onClick={props.toggleModeBlue} type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
            <label class="form-check-label" for="flexRadioDefault1">
            Blue Mode
            </label>
        </div>
        <div class={`form-check text-${props.mode==='light'?'dark':'light'}`}>
            <input class="form-check-input" onClick={props.toggleModeGreen} type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
            <label class="form-check-label" for="flexRadioDefault2">
            Green Mode
            </label>
        </div>
        <div class={`form-check text-${props.mode==='light'?'dark':'light'}`}>
            <input class="form-check-input" onClick={props.toggleModeRed} type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
            <label class="form-check-label" for="flexRadioDefault1">
            Red Mode
            </label>
        </div>
      </div>
    </div>
  </nav>
  )
  
}

Navbar.propTypes = {
    title: PropTypes.string,
    aboutText: PropTypes.string
}

Navbar.defaultProps = {
    title: 'set title Here',
    aboutText: 'set about here'
};
