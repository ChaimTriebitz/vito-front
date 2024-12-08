import axios from 'axios';
import { URLS } from '../data';

export const get = {
   banks
}

async function banks() {
   try {
      const res = await axios.get(`${URLS.base}${URLS.banks.get}`, {
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