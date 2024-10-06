import axios from 'axios';

export const remove = {
   bank
}

async function bank(id) {
   try {
      const res = await axios.delete(`https://vito-back.onrender.com/api/banks/${id}`, {
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