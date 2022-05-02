import ky from "ky";
import {toast} from 'react-toastify';

const token = localStorage.getItem('token')
const API = ky.create({
  headers: {
    'Content-Type': 'application/json',
    "Authorization" : token ? `Bearer ${token}` : ''
  },
  prefixUrl: 'http://localhost:3000',
  throwHttpErrors: false,
  hooks: {
    afterResponse: [async (req, options, res) => {
      const {message} = await res.json();
      if(!res.ok){
        toast.error(message, {position: 'bottom-left'})
      }
    }]
  }
})


export default API