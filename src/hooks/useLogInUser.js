import axios from 'axios';
import { useGlobalState } from './useGlobalState';
import { ACTIONS } from '../state';
import { useNavigate } from 'react-router-dom';

export const useLogInUser = () => {
   const { dispatch } = useGlobalState()
   const navigate = useNavigate()
   return async () => {
      try {
         // const { data } = await axios.get(`https://vito-back.onrender.com/api/private`, {
         //    headers: {
         //       "Content-Type": "application/json",
         //       "Authorization": `Bearer ${localStorage.getItem('vito')}`
         //    }
         // })
         dispatch({ type: ACTIONS.SET, entity: 'loggedInUser', payload: '' })
         navigate('/banks')
      } catch (error) {
         console.log(error);
      }
   }

}