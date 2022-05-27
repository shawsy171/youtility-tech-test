// axios instance
import axios from "axios";

const baseURL = 'https://hiring.dev.youtility.co.uk'

export const youtilityAPI = axios.create({
  baseURL,
  headers: { 'accept': 'text/plain' }
});