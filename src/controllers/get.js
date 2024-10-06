import axios from 'axios';

export const get = {
   banks
}

async function banks() {
   try {
      const res = await axios.get(`https://vito-back.onrender.com/api/banks`, {
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