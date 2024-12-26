import { svgs } from '../../assets'
import { remove } from '../../controllers'
import { useGlobalState } from '../../hooks'
import { ACTIONS } from '../../state'


export const Remove = ({ row, header }) => {
   const { dispatch, page } = useGlobalState()

   const handleRemove = () => {
      dispatch({
         type: ACTIONS.OPEN_DIALOG,
         entity: 'confirm',
         payload: {
            action: () => remove.data(row._id, page),
            msg: `deleting "${row[header.msg]}" from table`
         }
      })
   }
   return (
      <button className='remove' onClick={handleRemove}>{svgs.trashBin}{svgs.trashCover}</button>
   )
}
