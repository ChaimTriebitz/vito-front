import { Cells } from '../Cells'


export const Actions = ({ row, field }) => {
   return (
      <div className='actions'>
         {
            field.headers.map((header, i) =>
               <Cells
                  key={i}
                  row={row}
                  header={header}
               />
            )
         }
      </div>
   )
}
