import { AddRowDialog, ConfirmDialog, DetailsDialog, Login } from '../../cmps'
import { useGlobalState } from '../../hooks'

export const Dialogs = () => {
   const { dialogs } = useGlobalState()

   return (
      <>
         {dialogs.details?.isOpen && <DetailsDialog />}
         {dialogs.login?.isOpen && <Login />}
         {dialogs.addRow?.isOpen && <AddRowDialog />}
         {dialogs.confirm?.isOpen && <ConfirmDialog />}
         {/* {dialogs.notes?.isOpen && <NotesDialog />} */}
      </>
   )
} 