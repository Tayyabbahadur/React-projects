import React from "react";
import notecontext from "./notecontext";

const Notestate = (props) => {
  const state = {
    name: "harry",
    class: "5b",
  };

  return (
    <notecontext.Provider value={state}>{props.children}</notecontext.Provider>
  );
};
export default Notestate;
