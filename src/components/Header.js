import React from 'react';
import styled from 'styled-components';
import logo from '../assests/logo.png';

const Header = () => {
return (
    <HeaderBar>
        <img src={logo} alt="Xcelvations Logo" height="60" />
    </HeaderBar>
     
    );
};
const HeaderBar = styled.header`
    width: 100%;
    padding: 0.5em 1em;
    display: flex;
    height: 64px;
    position: fixed;
    align-items: center;
    background-color: #fff;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
    z-index: 1;
`;
export default Header;