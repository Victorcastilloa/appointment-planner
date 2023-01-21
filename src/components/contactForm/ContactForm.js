import React from "react";

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
    <input
    type="tel"
    value={phone}
    onChange={(e) => setPhone(e.target.value)}
    placeholder="Contact phone number"
    maxLength="12"
    minLength="9"
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
