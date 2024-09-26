import React from 'react'
import { Thead, Tbody } from '../../cmps';

export const Table = ({ headers, rows }) => {

   return (
      <div className="table-container">
         <table>
            <Thead headers={headers} />
            <Tbody headers={headers} rows={rows} />
         </table>
      </div>
   )
}
