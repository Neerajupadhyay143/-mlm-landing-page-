import React, { useState } from 'react'
import "./Style.css"
import File from "../ppt/Presentation.pptx"

function NavBar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const closeNavbar = () => {
    setIsNavbarOpen(false);
  };


  return (

    <>

      <nav className={`navbar navbar-expand-lg navbar-dark bg-dark fixed-top header ${isNavbarOpen ? 'show' : ''}`}>
        <div className="container">
          <a className="navbar-brand" href="https://hammertradex.com/./index.html">
            <img style={{ borderRadius: '100%' }} className="img-fluid logo_img" src="../images/OkDreamer25.jpg" alt width="100px" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation" onClick={toggleNavbar}>
            <span className="navbar-toggler-icon" />
          </button>
          <div className={`collapse navbar-collapse ${isNavbarOpen ? 'show' : ''}`} id="navbarScroll">
            <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#platform" onClick={closeNavbar}>Platform</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#token" onClick={closeNavbar}>Token</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#roadmap" onClick={closeNavbar}>Roadmap</a>
              </li>
              {/* <li class="nav-item">
                        <a class="nav-link" target="_blank" href="https://hammertradex.com/public/front/assets/hammer-tradex.pdf">Whitepaper</a>
                    </li> */}
              <li className="nav-item">
                <a className="nav-link" href="#faq" onClick={closeNavbar}>FAQ</a>
              </li>
              <li className="nav-item">
                <a style={{ cursor: 'pointer' }} href={File} className="nav-link" download>Download</a>
              </li>
              {/* <li class="nav-item">
                        <a class="nav-link" target="_blank" href="https://hammertradex.com/blog">Blog</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://hammertradex.com/giveaway">$100k Giveaway</a>
                    </li> */}
              <li className="nav-item header_btns">
                <a className="nav-link header_btn header_btn_hover" target="_blank" href="https://hammertradex.com/login">Login <i className="fa fa-angle-right" /></a>
              </li>
              <li className="nav-item header_btns second_btn">
                <a className="nav-link header_btn header_btn_hover" style={{ marginLeft: 25 }} target="_blank" href="https://hammertradex.com/signup">New Registration <i className="fa fa-angle-right" /></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </>
  )
}

export default NavBar;