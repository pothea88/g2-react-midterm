import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Router, Route } from 'react-router-dom';
import Home from './webpages/home';
import React from 'react';
import KhmerBook from './webpages/listing/Khmer';
import EngBook from './webpages/listing/Eng';
import ContactUs from './webpages/contactUs';


function App() {
  return (
      <React.Fragment>
        <BrowserRouter>
          <Route path={'/'} exact component={Home} />
          <Route path={'/khmerBook'} component={KhmerBook} />
          <Route path={'/englishBook'} component={EngBook} />
          <Route path={'/contact'} component={ContactUs} />
        </BrowserRouter>
      </React.Fragment>
       
  );
}

export default App;
