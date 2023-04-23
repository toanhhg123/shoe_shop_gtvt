import React, { createContext, useState } from "react";
import { products } from "../data/data";

export const ShoeContext = createContext();

const ShoeContextProvider = (props) => {
  const [data] = useState(products);
  return (
    <ShoeContext.Provider value={{ data }}>
      {props.children}
    </ShoeContext.Provider>
  );
};

export default ShoeContextProvider;
