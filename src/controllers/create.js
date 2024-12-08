import axios from 'axios';
import { URLS } from '../data';

export const create = {
   bank
}

async function bank(data) {
   try {
      const res = await axios.post(`${URLS.base}${URLS.banks.create}`, data, {
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