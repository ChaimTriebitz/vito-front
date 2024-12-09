import { Route, Routes } from 'react-router-dom'
import { Banks, Lenders } from '../pages'
import { useGlobalState } from '../hooks'
import { useEffect } from 'react'
import { ACTIONS } from '../state'

export const Main = () => {
   const { loggedInUser, dispatch } = useGlobalState()
   const tok = localStorage.getItem('vito')

   useEffect(() => {
      if (!tok) {
         dispatch({ type: ACTIONS.OPEN_DIALOG, entity: 'login' })
      }
      if (tok) {
         dispatch({ type: ACTIONS.CLOSE_DIALOG, entity: 'login' })
      }
   }, [loggedInUser])

   // useEffect(() => {
   //    if (!tok) {
   //       dispatch({ type: ACTIONS.OPEN_DIALOG, entity: 'register' })
   //    }
   //    if (tok) {
   //       dispatch({ type: ACTIONS.CLOSE_DIALOG, entity: 'register' })
   //    }
   // }, [loggedInUser])

   if (!loggedInUser && !tok) return
   return (
      <Routes>
         {/* <Route  path='/banks' element={<Banks />}/> */}
         <Route  path='/lenders' element={<Lenders />}/>
      </Routes>
   )
}
