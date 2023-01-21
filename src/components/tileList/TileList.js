import React from "react";
import { Tile } from '../tile/Tile'
export const TileList = ({object, type,deleteContact,deleteAppointment}) => {


  return (
    <div>
      {object.map((objects, index)=> 
      <Tile 
      key={index}
      objects={objects}
      type={type}
      deleteContact={deleteContact}
      deleteAppointment={deleteAppointment}
      />
      )}
    </div>
  );
};
