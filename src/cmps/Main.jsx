import { Route, Routes } from 'react-router-dom'
import { Banks, Home } from '../pages'
import { Form } from '../pages/Form'
import { useGlobalState } from '../hooks'
import { useEffect } from 'react'
import { ACTIONS } from '../state'

export const Main = () => {
   const { loggedInUser, dispatch } = useGlobalState()
   // const tok = localStorage.getItem('vito')

   // useEffect(() => {
   //    if (!tok) {
   //       dispatch({ type: ACTIONS.OPEN_DIALOG, entity: 'login' })
   //    }
   //    if (tok) {
   //       dispatch({ type: ACTIONS.CLOSE_DIALOG, entity: 'login' })
   //    }
   // }, [loggedInUser])
   return (
      <main className='main cmp'>
         {/* <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/banks' element={<Banks />} />
            <Route path='/customer' element={< Form />} />
         </Routes> */}
         <Banks />
      </main>
   )
}
