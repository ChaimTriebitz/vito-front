import axios from 'axios';
import { URLS } from '../data';

export const update = {
   bank
}

async function bank(id, data) {
   try {
      const res = await axios.put(`${URLS.base}${URLS.banks.update}/${id}`, data, {
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