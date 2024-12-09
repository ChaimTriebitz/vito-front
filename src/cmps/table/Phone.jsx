import React from 'react'

export const Phone = ({ row, header }) => {
   return (
      <a
      className='phone'
         href={`tel:${row[header.internal_name]}`}
         title={'call me'}>
         {row[header.internal_name]}
      </a>
   )
}
