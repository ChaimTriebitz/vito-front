import React, { useEffect } from 'react'
import { useGlobalState } from '../hooks';
import { get } from '../controllers';
import { ACTIONS } from '../state';
import { ActionsBar, Table } from '../cmps';
import { TABLE_HEADERS } from '../data';

export const Lenders = () => {
   const { filters, dispatch, lenders,refreshCount } = useGlobalState()

   useEffect(() => {
      get.data('lenders').then((res) => dispatch({ type: ACTIONS.SET, entity: 'lenders', payload: res.data }))
   }, [refreshCount])

   // const insert = async () => {
   //    try {
   //       const { data } = await axios.post(`${URLS.base}${URLS.lenders.createMany}`, { data: rows }, {
   //          headers: {
   //             "Content-Type": "application/json",
   //             "Authorization": `Bearer ${localStorage.getItem('vito')}`
   //          }
   //       })
   //       if (data.success) {
   //          console.log(data);

   //       }
   //    } catch (error) {
   //       console.log(error.response.data.error)
   //    }
   // }

   return (
      <main className='page lenders'>
         <ActionsBar />
         {/* <button className='btn' style={{ position: 'absolute',background:'black',zIndex:9099 }} onClick={insert}>insert lenders</button> */}
         <Table headers={TABLE_HEADERS.lenders} rows={lenders} />
      </main>
   );
}
