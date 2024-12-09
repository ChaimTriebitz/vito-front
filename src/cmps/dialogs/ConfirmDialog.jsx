import { useDialog, useGlobalState } from '../../hooks';
import { ACTIONS } from '../../state';


export const ConfirmDialog = () => {
   const { dialogs, dispatch } = useGlobalState()
   const { action, msg } = dialogs.confirm
   const { closeDialog, dialogRef } = useDialog('confirm')

   const handleClick = (confirm) => {
      confirm && action().then(() => dispatch({ type: ACTIONS.REFRESH_DATA }))
      closeDialog()
   }
   return (
      <dialog className='dialog confirm' onClose={() => handleClick(false)} ref={dialogRef} >
         <div className="dialog-content">
            <header>
               <h4>Are You Sure?</h4>
            </header>
            <main>
               <h5>{msg}</h5>
            </main>
            <footer>
               <div className="btns">
                  <button onClick={() => handleClick(true)} className="btn success">Yes</button>
                  <button onClick={() => handleClick(false)} className="btn danger">No</button>
               </div>
            </footer>
         </div>
      </dialog>
   )
}
