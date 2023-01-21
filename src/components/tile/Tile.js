import React from "react";
import './Tile.css'

export const Tile = ({objects, deleteContact, deleteAppointment}) => {
  const arrayOfObjects = Object.values(objects);

  const handleDelete = (index) => {
    
      if(objects.hasOwnProperty('name')){
      
       if (window.confirm('Are you sure you want to delete this contact?')){
        deleteContact(index);
       } 
      } else if(objects.hasOwnProperty('title')){
        if (window.confirm('Are you sure you want to delete this appointment?')) {
         deleteAppointment(index);
        } 
      }
      
    
  };

  return (
    <div className="tile-container">
      {arrayOfObjects.map((element, index) => {
        return (
          <>
            {index === 0 ? (
              <h3 className="tile-title" key={index}>
                {element}
                
                <button type="submit" 
                onClick={() => handleDelete(index) } 
                value="Delete contact"
                className="deletebtn"
                >Delete</button>
              </h3>
            ) : (
              <p className="tile" key={index}>
                {element}
                
              </p>
            )}
          </>
        );
      })}
    </div>
  );
};
