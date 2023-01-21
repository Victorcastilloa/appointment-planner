import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */

  const savedContacts = JSON.parse(localStorage.getItem('contacts'));
const [contacts, setContacts] = useState(savedContacts || []);
const savedAppointments = JSON.parse(localStorage.getItem('appointments'))
  const [appointments, setAppointments]= useState(savedAppointments || []);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */

  function newContact(name,phone,email) {
    const newContact= {
      name: name,
      phone: phone,
      email: email
    }

    setContacts((prev) => 
    [...prev, newContact])
  }

  useEffect(()=> {
    localStorage.setItem('contacts', JSON.stringify(contacts));
    localStorage.setItem('appointments', JSON.stringify(appointments))
  }, [contacts,appointments])

  function newAppointment(title, contact, date, time) {
    const newAppointment= {
      title: title,
      contact: contact, 
      date: date,
      time: time
    }

    setAppointments((prev) => 
    [...prev, newAppointment]
    )

    
  }

  function deleteContact(index) {
    
  setContacts((prevContacts) => {
    prevContacts.splice(index, 1);
    return [...prevContacts];
  });
}

function deleteAppointment(index) {
    
  setAppointments((prevAppointments) => {
    prevAppointments.splice(index, 1);
    return [...prevAppointments];
  });
}

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
             {/* Add props to ContactsPage */}
            <ContactsPage 
            contacts = {contacts}
            newContact= {newContact}
            deleteContact= {deleteContact}
            />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage 
            appointments={appointments}
            contacts={contacts}
            newAppointment={newAppointment}
            deleteAppointment={deleteAppointment}
            />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
