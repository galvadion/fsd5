import React from 'react'

const CustomSelect = (props) =>{
    return (
        <select name={props.default} 
            id={props.default}  
            value={props.value} 
            onChange={(e) => props.setter(e.target.value)}>
          <option value="" disabled>{props.default}</option>
          {
              props.options.map(option => {
                  return <option value={option.value}>{option.label}</option>
              })
          }
        </select>
    )
}

export default CustomSelect