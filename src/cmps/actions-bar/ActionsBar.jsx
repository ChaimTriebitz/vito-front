import { useState } from 'react'
import { useGlobalState, useUpdateEffect } from '../../hooks'
import { FILTERS } from '../../data'
import { Select } from '../inputs/Select'
import { ACTIONS } from '../../state'
import { AddRow, MultiSelect, Search } from '..'

export const ActionsBar = () => {
   const [value, setValue] = useState('')
   const { dispatch, filters, page } = useGlobalState()
   const handleChange = (a, b) => {
      setValue(b)
   }

   // useUpdateEffect(() => {
   //    dispatch({ type: ACTIONS.SET, entity: 'filters', payload: { ...filters, category: value } })
   // }, [value])

   // const { field, options } = FILTERS[page]?.categories

   return (
      <div className='actions-bar'>
         {/* <Select
            field={field}
            options={options}
            value={value}
            handleChange={handleChange}
         /> */}
         <Search />
         <AddRow />
      </div>
   )
}
