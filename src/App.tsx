import React, { useState } from 'react';
import { InputVK, ContactListVK } from './component';
import { Contact } from './component/contact/ContactItem.types';
import ContactService from './service/contact'

import './App.css';

function App() {
  const [contacts, setContacts] = useState<Contact[]>([])
  const [value, setValue] = useState<string>("")

  const searchContact = () => {
    if (value.length > 0) {
      ContactService.listData(value).then(res => {
        setContacts(res)
      })
    } else {
      setContacts([])
    }
  }

  const valueSearch = (value: any) => {
    console.log("value", value.target.value)
    setValue(value.target.value)
  }
  return (
    <div className="App">
      <InputVK value={value} onChange={valueSearch} onPress={searchContact} />
      <p></p>
      {
        contacts.length > 0 && <ContactListVK contactList={contacts} />
      }
      {
        contacts.length === 0 && <b> No results, please review your search or try a different one!</b>
      }
    </div >
  );
}

export default App;
