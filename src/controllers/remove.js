import axios from 'axios';
import { URLS } from '../data';

export const remove = {
   bank
}

async function bank(id) {
   try {
      const res = await axios.delete(`${URLS.base}${URLS.banks.remove}/${id}`, {
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