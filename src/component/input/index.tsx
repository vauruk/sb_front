import React from 'react'
import './input.css';
import { InputProps } from './types'

function InputVK(props: InputProps) {

    return (
        <div className="center">
            <div className="search">
                <input className="inputSearch" value={props.value} onChange={props.onChange} />
            </div>
            <div className="divButton">
                <button className="buttonSearch" onClick={props.onPress}>Buscar</button>
            </div>
        </div>
    )
}

export default InputVK


