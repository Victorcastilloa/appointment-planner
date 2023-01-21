import React from "react";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}> 
    <input 
    type="text"
    value={name}
    onChange={(e) => setName(e.target.value)}
    placeholder="Contact name"
    required
    />
    <PhoneInput
    defaultCountry="US"
    value={phone}
    onChange={setPhone}
    placeholder="Contact phone number"
    limitMaxLength={true}
    focusInputOnCountrySelection={true}
    autoComplete={true}
    required
    />
    <input 
    type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    placeholder="Contact email address"
    required
    />
    <input 
    type="submit" 
    value="Save contact"
    name="button"
    />
    </form>
  );
};
