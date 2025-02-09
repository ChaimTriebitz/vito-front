import axios from 'axios';
import { urls } from '../config';

export const update = {
   data,
}

async function data(id, data,page) {
   try {
      const res = await axios.put(`${urls?.[page]?.update}/${id}`, data, {
         headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem('vito')}`
         }
      });
      return res.data;
   } catch (err) {
      console.error(err);
      throw err.response.data;
   }
}
