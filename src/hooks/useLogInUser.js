import axios from 'axios';
import { useGlobalState } from './useGlobalState';
import { ACTIONS } from '../state';

export const useLogInUser = () => {
   const { dispatch } = useGlobalState()
   return async () => {
      console.log('blocking');
      try {
         const { data } = await axios.get(`http://localhost:5000/api/private`, {
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