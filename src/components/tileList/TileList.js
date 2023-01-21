import React from "react";
import { Tile } from '../tile/Tile'
export const TileList = ({object, type}) => {


  return (
    <div>
      {object.map((objects, index)=> 
      <Tile 
      key={index}
      objects={objects}
      type={type}
      />
      )}
    </div>
  );
};
