import React from "react";
import Home from "../webpages/home/index";
import BookList from "../webpages/listing";
import ContactUs from "../webpages/contactUs";

const routes = [
    {path: '/home', component: Home},
    {path: '/bookList', component: BookList},
    {path:'/contactUs', component: ContactUs}
];

export default routes;