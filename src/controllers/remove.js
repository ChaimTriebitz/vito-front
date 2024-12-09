import axios from 'axios';
import { URLS } from '../data';

export const remove = {
   data,
}

async function data(id,page) {
   try {
      const res = await axios.delete(`${URLS.base}${URLS[page].remove}/${id}`, {
         headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem('vito')}`
         }
      });
      return res;
   } catch (err) {
      console.error(err);
   }
}
