import axios from 'axios'
import { urls } from '../config'

export const remove = {
   data,
}

async function data(id,page) {
   try {
      const res = await axios.delete(`${urls?.[page]?.remove}/${id}`, {
         headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem('vito')}`
         }
      })
      return res
   } catch (err) {
      throw err
   }
}
