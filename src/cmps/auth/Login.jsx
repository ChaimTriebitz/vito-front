import {  useState } from 'react'
import axios from 'axios'
import { useDialog, useForm, useLogInUser } from '../../hooks'
import { urls } from '../../config'

export const Login = () => {
   const { dialogRef, closeDialog } = useDialog('login')
   const { values, handleChange } = useForm({ username: '', password: '' })

   const login = useLogInUser()
   const [err, setErr] = useState('')

   const handleSubmit = async (e) => {

      e.preventDefault()

      try {
         const { data } = await axios.post(urls.auth.login, { ...values })
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
               <h5>Login</h5>
            </header>
            <main>
               <form className='form' onSubmit={handleSubmit}>
                  <div className="input">
                     <label htmlFor="username">username</label>
                     <input id='username' name='username' value={values.username} onChange={(e) => handleChange(e.target.name, e.target.value)} />
                  </div>
                  <div className="input">
                     <label htmlFor="password">password</label>
                     <input id='password' name='password' value={values.password} onChange={(e) => handleChange(e.target.name, e.target.value)} />
                  </div>
                  <button className='btn success'>submit</button>
                  <p className='error'>{err}</p>
               </form>
            </main>
         </div>
      </dialog>
   )
}
