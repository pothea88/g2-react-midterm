import React, { useState } from "react";
import classNames from "classnames";
import { Collapse, NavItem, NavLink } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faHome,
  faUser,
  faLayerGroup,
  faTimesCircle,
  faImage,
  faCopy,
  faKey,
  faBook,
  faPeopleArrows
} from "@fortawesome/free-solid-svg-icons";

const SubMenu = (props) => {
  const [collapsed, setCollapsed] = useState(true);
  const toggle = () => setCollapsed(!collapsed);
  const { icon, title, items } = props;
  const [collapsedSubmenu, setCollapsedSubmenu] = useState(true);
  const toggleSubMenu = () => setCollapsedSubmenu(!collapsedSubmenu);


  return (
    <div>
      <NavItem onClick={toggle} className={classNames({ "menu-open": !collapsed })}>
        <NavLink className="dropdown-toggle">
          <FontAwesomeIcon icon={faLayerGroup} className="mr-2" />
          Book List
        </NavLink>
      </NavItem>
      <Collapse
        isOpen={!collapsed}
        navbar
        className={classNames("items-menu", { "mb-1": !collapsed })}
      >
        <NavItem className="pl-4">
          <NavLink tag={Link} to={"/khmerBook"} >
            <FontAwesomeIcon icon={faKey} className="mr-2" />
            Khmer
          </NavLink>
        </NavItem>
        <NavItem className="pl-4">
          <NavLink tag={Link} to={"/engBook"} >
            <FontAwesomeIcon icon={faKey} className="mr-2" />
            English
          </NavLink>
        </NavItem>
        <NavItem className="pl-4"> 
          <NavLink tag={Link} to={"/bookList"}>
            <FontAwesomeIcon icon={faBook} className="mr-2" />
            Technology book
          </NavLink>
        </NavItem>
        {/* <NavItem  onClick={toggleSubMenu}
          className={`classNames({ "menu-open": !collapsedSubmenu }),"pl-4"`}>
          <NavLink className="dropdown-toggle">
            <FontAwesomeIcon icon={faPeopleArrows} className="mr-2" />
            English
          </NavLink>
        </NavItem> */}
        {/* <Collapse
          isOpen={!collapsedSubmenu}
          navbar
          className={classNames("items-menu", { "mb-1 ml-4": !collapsedSubmenu })}
        >
          <NavItem className="pl-4">
            <NavLink tag={Link} to={"/introducer"} >
              <FontAwesomeIcon icon={faUser} className="mr-1" />
                  Introducer
                </NavLink>
          </NavItem>
          <NavItem className="pl-4">
            <NavLink tag={Link} to={"/userIdentity"} >
              <FontAwesomeIcon icon={faUser} className="mr-1" />
                  User Identity
                </NavLink>
          </NavItem>
        </Collapse> */}

      </Collapse>
    </div>
  );
};

export default SubMenu;