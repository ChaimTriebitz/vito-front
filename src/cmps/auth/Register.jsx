import { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { useGlobalState, useLogInUser } from '../../hooks'
import { ACTIONS } from '../../state'

export const Register = () => {
   const { dispatch } = useGlobalState()
   const login = useLogInUser()

   const navigate = useNavigate()
   const [credentials, setCredentials] = useState({ username: '', email: '', password: '', })
   const [err, setErr] = useState('')
   const handleSubmit = async (e) => {
      e.preventDefault()
      try {
         const { data } = await axios.post(`http://localhost:5000/api/auth/register`, { ...credentials })
         localStorage.setItem('vito', data.token)
         navigate('/')
         login()
      } catch (error) {
         setErr(error.response.data.error)
      }
   }

   const handleChange = (e) => {
      setCredentials((prevValues) => ({ ...prevValues, [e.target.name]: e.target.value }));
   }

   return (
      <div className='register auth-form'>
         <form className='form' onSubmit={handleSubmit}>
            <label htmlFor="name">name</label>
            <input
               id='name'
               name='username'
               value={credentials.username}
               onChange={handleChange}
            />
            <label htmlFor="email">email</label>
            <input
               id='email'
               type="email"
               name='email'
               value={credentials.email}
               onChange={handleChange}
            />
            <label htmlFor="password">password</label>
            <input
               id='password'
               name='password'
               value={credentials.password}
               onChange={handleChange}
            />
            <button>submit</button>
         </form>
         <Link to='/login'>Login</Link>
         <h2>{err}</h2>
      </div>
   )
}
