import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';
import {
    SideBar,
    Topbar,
    Content,
    App
} from '../index';
import '../../App.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const TheLayout = (props) => {
  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);
  
  return (
    <div className="d-flex" id="wrapper">
    {/* <!-- Sidebar --> */}
    <div className="bg-light border-right" id="sidebar-wrapper">
      <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
    </div>
    {/* <!-- /#sidebar-wrapper --> */}

    {/* <!-- Page Content --> */}
    <div id="page-content-wrapper" style={{width:'100%'}}>
        <Topbar toggleSidebar={toggleSidebar} sidebarIsOpen={sidebarIsOpen}/>
      <div className="container-fluid">
        <Content />
        {/* <App /> */}
      </div>
    </div>
    {/* <!-- /#page-content-wrapper --> */}
   
  </div>
  )
}

export default withRouter(TheLayout);