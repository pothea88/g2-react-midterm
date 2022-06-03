import React from 'react';
import logo from '../assests/logo.png';

const Header = () => {
    return(
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light font-weight-bold font-size-4" style={{boxShadow:'10px 5px 5px rgb(179, 179, 179)'}}>
                <a className="navbar-brand" href={`/`}>
                    <img src="https://s.tmimgcdn.com/scr/1200x627/185200/magic-book-logo-design-template_185226-original.png" alt='logo' style={{width:'200px'}} />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end mr-5" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href={'/'}>Home</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                            Books
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href={'/khmerBook'}>Khmer Book</a>
                            <a class="dropdown-item" href={'/englishBook'}>English Book</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={'/contact'}>Contact Us</a>
                        </li>
                    </ul>
                </div>
                </nav>
        </React.Fragment>
    )
}
export default Header;