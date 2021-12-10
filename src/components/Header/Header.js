import React from "react"
import Form from "react-bootstrap/Form"

const Header = (props) => {
    
      return (
    <>
   <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/TextUtils/#/">{props.title}</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className={props.HomeName} aria-current="page" href="/TextUtils/#/">{props.home}</a>
        </li>
        <li className="nav-item">
<a className="nav-link" target="_blank" rel="noreferrer" href="https://osourcegames.firebaseapp.com/About.html">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" target="_blank" rel="noreferrer" href="https://www.patreon.com/join/OpenSourceGames">Pricing</a>
        </li>
      </ul>
    </div>
  <Form className="d-flex">
  <Form.Check onClick={props.toggleMode}
    type="switch"
    id="custom-switch"
    label={`Enable ${props.btnText} Mode`}
  />
</Form>
  </div>
</nav>
        </>
    )
}

export default Header
