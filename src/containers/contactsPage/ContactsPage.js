import React, { useEffect, useState } from "react";
import { ContactForm } from '../../components/contactForm/ContactForm';
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const {contacts, newContact, deleteContact} = props;
const [name, setName]= useState('');
const [phone, setPhone]= useState(null);
const [email, setEmail]= useState('');
const [duplicate, setDuplicate]= useState(false)


useEffect(()=> {
  setDuplicate(contacts.some(contact => contact.name === name));
}, [name, contacts]);



  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */ 

    if(duplicate === false){
      newContact(name, phone, email);
      setName('');
      setPhone('');
      setEmail('');
    }
    
    if(duplicate === true) {
      setDuplicate(false);
      alert('This contact exist');
      setName('');
      setPhone('');
      setEmail('');
    }
  
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm 
        name={name}
        setName={setName}
        phone={phone}
        setPhone={setPhone}
        email={email}
        setEmail={setEmail}
        handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList 
        object={contacts}
        type="contacts"
        deleteContact={deleteContact}
        />
      </section>
    </div>
  );
};
