import React, { useEffect, useState } from 'react';

export const MultiSelect = ({
   field = {},
   value = [],
   handleChange = () => { },
   options = []
}) => {

   const [values, setValues] = useState(value)
   console.log(values)

   useEffect(() => {
      handleChange(field.internal_name, values)
   }, [values])

   const handleCheckboxChange = (optionValue) => {
      setValues((prevValues) =>
         prevValues.includes(optionValue)
            ? prevValues.filter(v => v !== optionValue)
            : [...prevValues, optionValue]
      )
   }

   return (
      <div className='input-item multi-select'>
         {
            options.map(option => {
               const { id, option_display, option_value } = option
               return (
                  <div key={id} className='multi-select-item'>
                     <input
                        type="checkbox"
                        id={id}
                        value={option}
                        checked={values.includes(option_value)}
                        onChange={() => handleCheckboxChange(option_value)}
                     />
                     <label htmlFor={id}>{option_display}</label>
                  </div>
               )
            })
         }
      </div>
   );
};

