import React from 'react'
import { useChangedValues, useDialog, useForm, useGlobalState } from '../../hooks'
import { svgs } from '../../assets/svgs'
import { DIALOG_HEADERS } from '../../data';
import { Input } from '../inputs/Input';
import { msgEvent, objects } from '../../functions';
import { create } from '../../controllers';
import { toastMsg } from '../../functions/msgEvent';

export const AddRowDialog = () => {

   const { values, handleChange, changedValues, isValuesChanged, restart } = useForm(objects.filterFields({}, DIALOG_HEADERS.map(field => field.internal_name)))
   const { closeDialog, dialogRef, } = useDialog('addRow')

   const handleSave = (e) => {
      e.preventDefault()
      create.bank(values).then(res => toastMsg.success('New Bank Added Successfully'))
      // console.log(values);

   }

   return (
      <dialog className={`dialog form details`} ref={dialogRef} onClose={closeDialog} >
         <form onSubmit={handleSave} className='dialog-content'>
            <header>
               <h1>Add New Bank</h1>
               <section className='btns'>
                  {isValuesChanged && <button type='submit' >{svgs.save}</button>}
                  <button type='button' onClick={closeDialog}>{svgs.clear}</button>
               </section>
            </header>
            <main >
               {DIALOG_HEADERS.map(header =>
                  <Input
                     key={header.internal_name}
                     value={values[header.internal_name]}
                     field={header}
                     handleChange={handleChange}
                  />
               )}
            </main>
         </form>
      </dialog>
   )
}

