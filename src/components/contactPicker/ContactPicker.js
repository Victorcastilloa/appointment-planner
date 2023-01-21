import React from "react";

export const ContactPicker = (props) => {

  const contacts = props.contacts;
  const handleChange= props.handleChange;
  return (
    <select onChange={handleChange}>
      <option key="default" value="default">Select a contact from the list</option>
      {contacts.map((contact, index)=> 
        <option key={index} value={contact.name}>{contact.name}</option>
        )}
    </select>
  );
};
