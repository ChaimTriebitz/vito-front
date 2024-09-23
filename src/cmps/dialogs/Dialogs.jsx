import {  DetailsDialog, Login } from '../../cmps'
import { useGlobalState } from '../../hooks'

export const Dialogs = () => {
   const { dialogs } = useGlobalState()

   return (
      <>
         {dialogs.details?.isOpen && <DetailsDialog />}
         {dialogs.login?.isOpen && <Login />}
         {/* {dialogs.history?.isOpen && <HistoryDialog />} */}
         {/* {dialogs.notes?.isOpen && <NotesDialog />} */}
         {/* {dialogs.confirm?.isOpen && <ConfirmDialog />} */}
      </>
   )
} 