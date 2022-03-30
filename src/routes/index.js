import { faKitchenSet } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import ContactUs from "../webpages/contactUs";
import Home from "../webpages/home/index";
import BookList from "../webpages/listing";
import KhmerBook from '../webpages/listing/Khmer';
import EngBook from '../webpages/listing/Eng';

const routes = [
    {path: '/home', component: Home},
    {path: '/bookList', component: BookList},
    {path: '/contactUs', component: ContactUs},
    {path: '/khmerBook', component: KhmerBook},
    {path: '/engBook', component: EngBook}
];

export default routes;