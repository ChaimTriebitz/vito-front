import React, { useState } from 'react'
import { Select } from '../cmps'
import { FILTERS } from '../data'
import { useGlobalState, useUpdateEffect } from '../hooks'
import { ACTIONS } from '../state'

export const ActionsBar = () => {
   const [value, setValue] = useState('')
   const { dispatch, filters } = useGlobalState()
   const handleChange = (a, b) => {
      setValue(b)
   }

   useUpdateEffect(() => {
      dispatch({ type: ACTIONS.SET, entity: 'filters', payload: { ...filters, category: value } })
   }, [value])
console.log(filters);

   const { field, options } = FILTERS.categories
   return (
      <div className='actions-bar'>
         <Select
            field={field}
            options={options}
            value={value}
            handleChange={handleChange}
         />
      </div>
   )
}
