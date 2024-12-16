import { useEffect } from 'react'
import { useGlobalState } from '../hooks'
import { get } from '../controllers'
import { ACTIONS } from '../state'
import { ActionsBar, Table } from '../cmps'
import { TABLE_HEADERS } from '../data'

export const Lenders = () => {
   
   const { dispatch, lenders, refreshCount, search, sort } = useGlobalState()

   const rows = lenders.filter(item =>
      (item.email && item.contact.toLowerCase().includes(search)) ||
      (item.lender && item.lender.toLowerCase().includes(search))
   ).sort((a, b) => {
      const fieldA = a[sort.by]
      const fieldB = b[sort.by]
      if (fieldA === fieldB || !sort.by || !sort.dir) return 0
      if (fieldA < fieldB) return sort.dir === 'asc' ? -1 : 1
      if (fieldA > fieldB) return sort.dir === 'asc' ? 1 : -1
   })

   useEffect(() => {
      get.data('lenders')
         .then((res) => dispatch({ type: ACTIONS.SET, entity: 'lenders', payload: res.data }))
         .then(() => dispatch({ type: ACTIONS.SET, entity: 'isDataLoading', payload: false }))
   }, [refreshCount])

   return (
      <main className='page lenders'>
         <ActionsBar />
         {/* <button className='btn' style={{ position: 'absolute',background:'black',zIndex:9099 }} onClick={insert}>insert lenders</button> */}
         <Table headers={TABLE_HEADERS.lenders} rows={rows} />
      </main>
   )
}
