import axios from 'axios';
import { urls } from '../config';

export const get = {
   data,
}

async function data(page) {
   console.log(page);
   
   try {
      const res = await axios.get(urls?.[page]?.get, {
         headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem('vito')}`
         }
      })
      return res.data
   } catch (err) {
      throw err
   }
};

