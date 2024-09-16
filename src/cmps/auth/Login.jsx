import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { useDialog, useForm, useGlobalState, useLogInUser } from '../../hooks'

export const Login = () => {
   const data = useGlobalState()
   const { dialogRef, closeDialog } = useDialog('login')
   const { values, handelChange } = useForm({ email: '', password: '' })
   console.log(data);
   console.log(values);

   const login = useLogInUser()
   const [err, setErr] = useState('')

   const handleSubmit = async (e) => {

      e.preventDefault()

      try {
         const { data } = await axios.post(`http://localhost:5000/api/auth/login`, { ...values })
         if (data.success) {
            localStorage.setItem('vito', data.token)
            login()
         }
      } catch (error) {
         setErr(error.response.data.error)
      }
   }


   return (
      <dialog className='dialog login' ref={dialogRef} onClose={closeDialog}>
         <div className="dialog-content">
            <header>
               <h1>Login</h1>
            </header>
            <main>
               <form className='form' onSubmit={handleSubmit}>
                  <div className="input-label">
                     <label htmlFor="email">email</label>
                     <input id='email' type="email" name='email' value={values.email} onChange={handelChange} />
                  </div>
                  <div className="input-label">
                     <label htmlFor="password">password</label>
                     <input id='password' name='password' value={values.password} onChange={handelChange} />
                  </div>
                  <button className='btn success'>submit</button>
                  <p className='error'>{err}</p>
               </form>
            </main>
         </div>
      </dialog>
   )
}
