import { useState } from 'react'

export const useForm = (initValues) => {
   console.log(initValues);

   const [values, setValues] = useState(initValues)
   const handelChange = (e) => setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }))

   return {
      values,
      handelChange
   }

}
