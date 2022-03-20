import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const Navigation = () => {
    return (
        <Nav>
            <NavList>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/mybooks">My Books</Link>
                </li>
                <li>
                    <Link to="/favorites">Favorites</Link>
                </li>
                <li>
                    <Link to="/">Logout</Link>
                </li>
            </NavList>
        </Nav>
    );
};
const Nav = styled.nav`
    padding: 1em;
    background: #f7f3e9;
    @media (max-width: 700px) {
        padding-top: 64px;
    }
    @media (min-width: 700px) {
        position: fixed;
        width: 220px;
        height: calc(100% - 64px);
        overflow-y: scroll;
    }
`;
const NavList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    line-height: 2;
    a {
        text-decoration: none;
        font-weight: bold;
        font-size: 1em;
        color: #333;
    }
    a:visited {
        color: #333;
    }
    a:hover,
    a:focus {
        color: #0077cc;
    }
`;
export default Navigation;