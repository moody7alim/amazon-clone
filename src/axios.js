import axios from 'axios';

const instance = axios.create({
  baseURL:
    'https://us-central1-challenge-97cc1.cloudfunctions.net/api'
  //'http://localhost:5001/challenge-97cc1/us-central1/api'
  ,
  // THE BACKEND API URL
});

export default instance;