import React from 'react'

export const Category = (props) => {
    return (
        <li><a href="#" onClick={()=> props.filterBy(props.name)} >{props.name}</a></li>
    )
}