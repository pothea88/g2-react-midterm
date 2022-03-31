import { faKitchenSet } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import ContactUs from "../webpages/contactUs";
import Home from "../webpages/home/index";
import BookList from "../webpages/listing";
import KhmerBook from '../webpages/listing/Khmer';
import EngBook from '../webpages/listing/Eng';
import Book01 from "../webpages/details/bookKh01";
import Book02 from "../webpages/details/booKh02";
import Book03 from "../webpages/details/bookKh03";
import Book04 from "../webpages/details/bookKh04";
import Book05 from "../webpages/details/bookKh05";
import Book06 from "../webpages/details/bookKh06";

const routes = [
    {path: '/home', component: Home},
    {path: '/bookList', component: BookList},
    {path: '/contactUs', component: ContactUs},
    {path: '/khmerBook', component: KhmerBook},
    {path: '/engBook', component: EngBook},
    {path: '/book01', component: Book01},
    {path: '/book02', component: Book02},
    {path: '/book03', component: Book03},
    {path: '/book04', component: Book04},
    {path: '/book05', component: Book05},
    {path: '/book06', component: Book06}
];

export default routes;