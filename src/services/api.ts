import axios from "axios";
import { getUserLocalStorage } from "../context/AuthProvider/util";

export const api = axios.create({
    baseURL: "https://reqres.in/api/",
});


