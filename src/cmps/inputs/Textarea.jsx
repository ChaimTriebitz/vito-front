export const Textarea = ({
   field = {},
   value,
   handleChange = () => { },
}) => {

   const { internal_name, type, required = false } = field

   return (
      <textarea
         className='input-item'
         type={type}
         name={internal_name}
         value={value || ''}
         onChange={(e) => handleChange(e.target.name, e.target.value)}
         required={required}
      />
   )
}
