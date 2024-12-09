import axios from 'axios';
import { URLS } from '../data';

export const create = {
   data,
}

async function data(data, page) {
   try {
      const res = await axios.post(`${URLS.base}${URLS[page].create}`, data, {
         headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem('vito')}`
         }
      })
      return res
   } catch (err) {
      console.error(err)
      throw err
   }
}
