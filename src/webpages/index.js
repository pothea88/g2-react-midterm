import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Home from './home';
import MyBooks from './mybooks';
import Favorites from './favorites';
import Layout from '../components/Layout';
import SignIn from '../components/SignIn';
const Webpages = () => {
    return(
        <Router>
            <Layout>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path = "/mybooks" element={<MyBooks />} />
                    <Route path = "/favorites" element={<Favorites />} />
                </Routes>
            </Layout>
        </Router>
    );
};
export default Webpages;