import axios from 'axios';
import { useGlobalState } from './useGlobalState';
import { ACTIONS } from '../state';

export const useLogInUser = () => {
   const { dispatch } = useGlobalState()
   return async () => {
      try {
         const { data } = await axios.get(`https://vito-back.onrender.com/api/private`, {
            headers: {
               "Content-Type": "application/json",
               "Authorization": `Bearer ${localStorage.getItem('vito')}`
            }
         })
         dispatch({ type: ACTIONS.SET, entity: 'loggedInUser', payload: data.user })
      } catch (error) {
         console.log(error);
      }
   }

}