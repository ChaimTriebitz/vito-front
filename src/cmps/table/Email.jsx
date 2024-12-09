import React from 'react'

export const Email = ({ row, header }) => {
   return (
      <a
         className='email'
         href={`mailto:${row[header.internal_name]}`}
         title={'email me'}>
         {row[header.internal_name]}
      </a>
   )
}
