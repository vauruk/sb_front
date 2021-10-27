import React from 'react'
import './ContactList.styles.css';
import { Props } from './ContactList.types';
import { ContactItemVK } from '../index'

function ContactListVK(props: Props) {
    return (
        <>
            <div className="listContact">
                {
                    props.contactList && props.contactList.map((item, key) => (
                        <ContactItemVK key={key} contact={item} />
                    ))
                }
            </div>
        </>
    )
}

export default ContactListVK


