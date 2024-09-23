

export const Input = ({
   field = {},
   value,
   handleChange = () => { },
}) => {

   const { internal_name, type, name } = field

   return (
      <div className={`input`} >
         <label htmlFor={internal_name}>{name}</label>
         <input
            type={type}
            name={internal_name}
            value={value || ''}
            onChange={handleChange}
         />
      </div>
   )
}
