import React from "react";
import { ContactPicker } from '../contactPicker/ContactPicker'


export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input 
      type="text"
      value={title}
      onChange={(e)=> setTitle(e.target.value)}
      placeholder="Appointment title"
      name="title"
      required
      />
      <label htmlFor="contact">Contact</label>
      <ContactPicker 
        contacts={contacts}
        handleChange={(e)=> {
          setContact(e.target.value);
           e.preventDefault();}}
        name="contact"
        placeholder="Select a contact"
        required
      />
      <label htmlFor="date">Date</label>
      <input 
      type="date"
      value={date}
      onChange={(e)=> setDate(e.target.value)}
      min={getTodayString()}
      name="date"
      required
      />
      <label htmlFor="title">Time</label>
      <input
      type="time"
      value={time}
      onChange={(e)=> setTime(e.target.value)}
      name="date"
      required
      />
      <input type="submit" value="Add appointment" />
      
      
      
    </form> 
  );
};
