import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import {
  Navbar,
  Container,
  Col,
  Row,
  NavbarToggler,
  NavbarBrand,
} from "reactstrap";
import logo from '../../assests/logo.png';

const Topbar = ({ toggleSidebar }) => {
  const [topbarIsOpen, setTopbarOpen] = useState(true);
  const toggleTopbar = () => setTopbarOpen(!topbarIsOpen);

  return (
     <Container fluid>
       <Row>
        <Col>
            <Navbar bg="danger" light>
              <NavbarBrand ><img src="https://s.tmimgcdn.com/scr/1200x627/185200/magic-book-logo-design-template_185226-original.png" id="logo" style={{width:'150px', marginLeft:'0 auto'}} /></NavbarBrand>
              <NavbarToggler expand="md lg sm xs" onClick={toggleSidebar} />
            </Navbar>
          </Col>
       </Row>
     </Container>
  );
};

export default Topbar;