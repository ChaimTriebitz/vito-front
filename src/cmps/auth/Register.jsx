import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useDialog, useForm, useGlobalState, useLogInUser } from '../../hooks'
import { urls } from '../../config'

export const Register = () => {
   const login = useLogInUser()
   const { dialogRef, closeDialog } = useDialog('register')
   const { values, handleChange } = useForm({ username: '', email: '', password: '', })
   const navigate = useNavigate()
   const [err, setErr] = useState('')
   const handleSubmit = async (e) => {
      e.preventDefault()
      try {
         const { data } = await axios.post(urls.auth.register, { ...values })
         localStorage.setItem('vito', data.token)
         navigate('/')
         login()
      } catch (error) {
         setErr(error.response.data.error)
      }
   }


   return (
      <dialog className='dialog register' ref={dialogRef} onClose={closeDialog}>
         <div className="dialog-content">

            <header>
               <h5>Register</h5>
            </header>
            <main>
               <form className='form' onSubmit={handleSubmit}>
                  <div className="input">
                     <label htmlFor="name">name</label>
                     <input
                        id='name'
                        name='username'
                        value={values.username}
                        onChange={(e) => handleChange(e.target.name, e.target.value)}
                     />
                  </div>
                  <div className="input">
                     <label htmlFor="email">email</label>
                     <input
                        id='email'
                        type="email"
                        name='email'
                        value={values.email}
                        onChange={(e) => handleChange(e.target.name, e.target.value)}
                     />
                  </div>
                  <div className="input">
                     <label htmlFor="password">password</label>
                     <input
                        id='password'
                        name='password'
                        value={values.password}
                        onChange={(e) => handleChange(e.target.name, e.target.value)}
                     />
                  </div>
                  <button className='btn success'>submit</button>
               </form>
               {/* <Link to='/login'>Login</Link> */}
               <h2>{err}</h2>
            </main>
         </div>

      </dialog>

   )
}
