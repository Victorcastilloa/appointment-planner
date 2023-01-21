import React from "react";

export const Tile = ({objects, type}) => {

const arrayOfObjects= Object.values(objects);

  return (
    <div className="tile-container">
      {arrayOfObjects.map((element,index)=> {
        return (
          <>
          {index === 0 ? <h3 className="tile-title" key={index}>{element}</h3> : <p className="tile" key={index}>{element}</p>}
          </>
        )
      })}
    </div>
  );
};
