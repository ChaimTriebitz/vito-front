import axios from 'axios';
import { URLS } from '../data';

export const update = {
   data,
}

async function data(id, data,page) {
   try {
      const res = await axios.put(`${URLS.base}${URLS[page].update}/${id}`, data, {
         headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem('vito')}`
         }
      });
      return res;
   } catch (err) {
      console.error(err);
      throw err;
   }
}
