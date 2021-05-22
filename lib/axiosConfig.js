import axios from 'axios'
import Cookie from 'js-cookie'


const Instance = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:3000/api/v1': `${process.env.PUBLIC_URL}/api/v1`,
  headers:{
    Authorization: `Bearer token: ${Cookie.get('token')}`
  }
})



export default Instance