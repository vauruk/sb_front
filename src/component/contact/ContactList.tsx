import React from 'react'
import './ContactList.styles.css';
import { Props } from './ContactList.types';
import { ContactItemVK } from '../index'
import Grid from '@mui/material/Grid';

function ContactListVK(props: Props) {
    return (
        <>
            <div className="listContact">
                <div>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
                        {
                            props.contactList && props.contactList.map((item, key) => (
                                <Grid item xs={2} sm={4} md={4} key={key}>
                                    <ContactItemVK contact={item} />
                                </Grid>
                            ))
                        }
                    </Grid>
                </div>
            </div>
        </>
    )
}

export default ContactListVK


