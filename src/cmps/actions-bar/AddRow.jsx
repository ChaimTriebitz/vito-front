import { svgs } from '../../assets/svgs'
import { useGlobalState } from '../../hooks'
import { ACTIONS } from '../../state'


export const AddRow = () => {

   const { dispatch } = useGlobalState()

   const handleAddRow = () => {
      dispatch({
         type: ACTIONS.OPEN_DIALOG,
         entity: 'addRow',
      })
   }

   return (
      <section className='item add'>
         <button onClick={handleAddRow}>{svgs.plus}</button>
      </section>
   )
}
