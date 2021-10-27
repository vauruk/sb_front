import React, { useState } from 'react';
import { InputVK, ContactListVK } from './component';
import { Contact } from './component/contact/ContactItem.types';
import ContactService from './service/contact'
import spinner from './assets/spinner.png'

import './App.css';

function App() {
  const [contacts, setContacts] = useState<Contact[] | undefined>(undefined)
  const [value, setValue] = useState<string>("")
  const [loading, setLoadging] = useState<boolean>(false)
  const [error, setError] = useState<string | undefined>(undefined)

  const _handleKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      searchContact()
    }
  }

  const startLoading = () => {
    setTimeout(() => {
      setLoadging(false)
    }, 2000);
  }


  const searchContact = () => {
    setContacts(undefined)
    setError(undefined)
    setLoadging(true)
    if (value.length > 0) {
      ContactService.listData(value)
        .then(res => {
          setContacts(res)
          startLoading()
        }).catch(err => {
          console.log("Erro:", err)
          setError("Server is not responding!")
          setContacts(undefined)
          setLoadging(false)
        }
        )
    } else {
      setContacts([])
    }
  }

  const valueSearch = (value: any) => {
    setValue(value.target.value)
  }

  return (
    <div className="App">
      <InputVK value={value}
        placeholder="Jhon or Jhon 33"
        onKeyDown={_handleKeyDown}
        onChange={valueSearch} onPress={searchContact} />
      <p></p>
      {
        loading &&
        <div className="App-header">
          <img className="App-logo" src={spinner} alt="Loading ..." />
        </div>
      }
      {
        !loading && contacts && contacts.length > 0 && <ContactListVK contactList={contacts} />
      }
      {
        contacts?.length === 0 && !loading && <b> No results, please review your search or try a different one!</b>
      }
      {
        error && <b>{error}</b>
      }
    </div >
  );
}

export default App;
