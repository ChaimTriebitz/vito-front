import React from 'react'
import { useChangedValues, useDialog, useForm, useGlobalState } from '../../hooks'
import { svgs } from '../../assets/svgs'
import { DIALOG_HEADERS } from '../../data';
import { Input } from '../Input';
import { objects } from '../../functions';

export const DetailsDialog = () => {

   const { dialogs } = useGlobalState()
   const { row } = dialogs.details
   const { lender } = row

   const { values, handelChange, changedValues, isValuesChanged, restart } = useForm(objects.filterFields(row, DIALOG_HEADERS.map(field => field.internal_name)))
   const { closeDialog, dialogRef, } = useDialog('details')

   const handleSave = (e) => {
      e.preventDefault()

   }
   
   return (
      <dialog className={`dialog form details`} ref={dialogRef} onClose={closeDialog} >
         <form onSubmit={handleSave} className='dialog-content'>
            <header>
               <h1>{lender}</h1>
               <section className='btns'>
                  <button type='submit' >{svgs.save}</button>
                  <button type='button' onClick={closeDialog}>{svgs.clear}</button>
               </section>
            </header>
            <main >
               {DIALOG_HEADERS.map(header =>
                  <Input
                     key={header.internal_name}
                     value={values[header.internal_name]}
                     field={header}
                     handleChange={handelChange}
                  />
               )}
            </main>
         </form>
      </dialog>
   )
}
