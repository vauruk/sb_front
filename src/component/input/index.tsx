import React from 'react'
import './input.css';
import { InputProps } from './types'

function InputVK(props: InputProps) {

    const {
        value,
        placeholder,
        onPress,
        onChange,
        onKeyDown
    } = props

    return (
        <div className="center">
            <div className="search">
                <input className="inputSearch"
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    onKeyDown={onKeyDown} />
            </div>
            <div className="divButton">
                <button className="buttonSearch" onClick={onPress}>Buscar</button>
            </div>
        </div>
    )
}

export default InputVK


