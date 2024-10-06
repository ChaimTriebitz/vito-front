import axios from 'axios';

export const create = {
   bank
}

async function bank(data) {
   try {
      const res = await axios.post(`https://vito-back.onrender.com/api/banks/create`, data, {
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