import React from 'react'
import { useDialog, useForm, useGlobalState } from '../../hooks'
import { svgs } from '../../assets/svgs'
import { DIALOG_FIELDS } from '../../data';
import { toastMsg, objects } from '../../functions';
import { create } from '../../controllers';
import { Inputs } from '../../cmps';
import { ACTIONS } from '../../state';

export const AddRowDialog = () => {
   const { page, dispatch } = useGlobalState()

   const { values, handleChange, changedValues, isValuesChanged, restart } = useForm(objects.filterFields({}, DIALOG_FIELDS[page].map(field => field.internal_name)))
   const { closeDialog, dialogRef, } = useDialog('addRow')

   const handleSave = () => {
      create.data(values, page)
         .then((res) => toastMsg.success(res.data.message))
         .then(() => dispatch({ type: ACTIONS.REFRESH_DATA }))
         .then(closeDialog)
         .catch((err) => toastMsg.error(err.response.data.message))
   }

   return (
      <dialog className={`dialog  details`} ref={dialogRef} onClose={closeDialog} >
         <div className='dialog-content'>
            <header>
               <h4>Add New Row</h4>
               <section className='btns'>
                  {isValuesChanged && <button onClick={handleSave} >{svgs.save}</button>}
                  <button type='button' onClick={closeDialog}>{svgs.clear}</button>
               </section>
            </header>
            <main className='form'>
               {DIALOG_FIELDS[page].map(field =>
                  <Inputs
                     key={field.internal_name}
                     value={values[field.internal_name]}
                     field={field}
                     handleChange={handleChange}
                     options={field.options}
                  />
               )}
            </main>
         </div>
      </dialog>
   )
}

