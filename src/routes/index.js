import React from "react";
import Home from "../webpages/home/index";
import BookList from "../webpages/listing";

const routes = [
    {path: '/home', component: Home},
    {path: '/bookList', component: BookList}
];

export default routes;