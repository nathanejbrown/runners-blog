import axios from 'axios';

let url = process.env.NODE_ENV === 'production' ? 'https://running-blog.herokuapp.com/' : 'http://localhost:3001/'

const instance = axios.create({
  baseURL: url
})

export default instance;