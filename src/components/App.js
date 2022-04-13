import React, { useState, useEffect } from "react";
// import { uuid } from "uuidv4";
import { v4 as uuidv4 } from 'uuid';

// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {//yeha ... hata ke check karna h 
    setContacts([...contacts, { id: uuidv4(), ...contact }]);
  };
console.log(contacts)
  const removeContactHandler = (id) => {
    // console.log(id)
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      {/* <Router>
        
        <Switch>
          <Route path="add" component={AddContact} />
          <Route path="/" component={ContactList} />
        </Switch> */}
        <Header /> 
         <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler} />
       
      {/* </Router> */}
    </div>
  );
}

export default App;
