import React from 'react'
import './ContactItem.styles.css';
import { Props } from './ContactItem.types';
import { age } from '../../util/dateUtil'

function ContactItemVK(props: Props) {
    const image = require(`../../assets/images/${props.contact?.picture}`)

    return (
        <>
            <div className="container">
                <div className="image">
                    <img className="user-avatar" src={image.default} alt="avatar" />
                </div>

                <div className="sub-container">
                    <div className="label">
                        {props.contact?.name}
                    </div>
                    <div className="label">
                        {props.contact?.phone_number}
                    </div>
                    <div className="label">
                        {age(props.contact?.birthday)} idade <br />
                    </div>

                    <p className="description">
                        {props.contact?.address}
                    </p>
                </div>
            </div>
        </>
    )
}

export default ContactItemVK


