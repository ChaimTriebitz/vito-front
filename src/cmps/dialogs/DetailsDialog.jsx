import React from 'react'
import { useDialog, useForm, useGlobalState } from '../../hooks'
import { svgs } from '../../assets/svgs'
import { DIALOG_FIELDS } from '../../data';
import {  Inputs } from '../../cmps';
import { objects } from '../../functions';
import { update } from '../../controllers';

export const DetailsDialog = () => {

   const { dialogs, page } = useGlobalState()
   const { row } = dialogs.details
   const { lender } = row

   const { values, handleChange, changedValues, isValuesChanged, restart } = useForm(objects.filterFields(row, DIALOG_FIELDS[page].map(field => field.internal_name)))
   const { closeDialog, dialogRef, } = useDialog('details')

   const handleSave = () => {
      update.data(row._id, values, page)
   }

   return (
      <dialog className={`dialog form details`} ref={dialogRef} onClose={closeDialog} >
         <div className="dialog-content">

            <header>
               <h1>{lender}</h1>
               <section className='btns'>
                  {isValuesChanged && <button onClick={handleSave} >{svgs.save}</button>}
                  <button onClick={closeDialog}>{svgs.clear}</button>
               </section>
            </header>
            <main >
                  {
                     DIALOG_FIELDS[page].map(field =>
                        <Inputs
                           key={field.internal_name}
                           value={values[field.internal_name]}
                           field={field}
                           handleChange={handleChange}
                           options={field.options}
                        />
                     )
                  }
            </main>
         </div>

      </dialog>
   )
}
