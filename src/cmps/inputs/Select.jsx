export const Select = ({ field, options = [], value, handleChange }) => {

   const { name, internal_name, id, required = false } = field

   return (
      <select
         className='input-item'
         name={internal_name}
         id={id}
         onChange={(e) => handleChange(e.target.name, e.target.value)}
         value={value || ''}
         required={required}
      >
         <option value='' disabled>{name}</option>
         {
            options.map((option, optionIdx) => {
               const { id, option_display, option_value } = option
               return <option
                  key={id || optionIdx}
                  value={option_value || ''}
               >
                  {option_display}
               </option>
            })
         }
      </select>
   )
}
