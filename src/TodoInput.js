import React, {Component} from 'react'
import './TodoInput.css'

function submit(props,e){
    if (e.key === 'Enter') {
        props.onSubmit(e)
    }
}
function changeTitle(props,e){
    props.onChange(e)
}
export default function (props) {
    return <input type="text" 
            placeholder="要做的东西..."
            value={props.content}
            className="TodoInput"
            onKeyPress={submit.bind(null,props)}
            onChange={changeTitle.bind(null,props)}
            />
}