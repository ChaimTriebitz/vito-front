import axios from 'axios';
import { URLS } from '../data';

export const get = {
   data,
}

async function data(page) {
   try {
      const res = await axios.get(`${URLS.base}${URLS[page].get}`, {
         headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem('vito')}`
         }
      })
      return res
   } catch (err) {
      console.error(err);
   }
};

