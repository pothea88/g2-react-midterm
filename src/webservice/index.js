import { apiLink } from "./configuration";
import axios from "axios";

const getHeader = () => {
    return {
        'Content-Type': 'application/json',
    };
};
export const getBooks = (url) => {
    var result = axios.get(apiLink + url);
    return result;
}
