import axios from 'axios';

export const update = {
   bank
}

async function bank(id, data) {
   try {
      const res = await axios.put(`http://localhost:5000/api/banks/${id}`, data, {
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