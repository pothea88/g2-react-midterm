import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLayerGroup,
  faPager,
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";
import { NavItem, NavLink, Nav, Row, Col } from "reactstrap";
import classNames from "classnames";
import { Link, Redirect } from "react-router-dom";
import Image from 'react-bootstrap/Image';
import SubMenu from './SubMenu';
import {useState, useEffect} from 'react';

function SideBar({ isOpen, toggle }){
    return (
        <div className={classNames("sidebar", { "is-open": isOpen })}>
          <div className="sidebar-header">
              <Col >
                <Row>
                  {/* <Image src="https://s.tmimgcdn.com/scr/1200x627/185200/magic-book-logo-design-template_185226-original.png" alt="logo" style={{width:'60px'}} roundedCircle className="mt-3 ml-3 " /> */}
                  <div className="mt-5 ml-5 ">
                    <h6>GROUP 2</h6>
                    {/* <p typeof="meta" className="text-center">super admin</p> */}
                  </div>
                </Row>
              </Col>
          </div>
          <hr></hr>
          <div className="side-menu">
            <Nav vertical className="list-unstyled pb-3">
              <NavItem>
                <NavLink tag={Link} to={"/home"}>
                  <FontAwesomeIcon icon={faLayerGroup} className="mr-2" />
                  Home
                </NavLink>
              </NavItem>
              <SubMenu />
              <NavItem>
                <NavLink tag={Link} to={"/bookList"}>
                  <FontAwesomeIcon icon={faPager} className="mr-2" />
                  Book
                </NavLink>
              </NavItem>
            </Nav>
          </div>
        </div>
    );
};

function logoutConfirm(e) {
  let confirm = window.confirm('Do you want to log off from the system?');
  if(!confirm)
      e.preventDefault();
}

export default SideBar;