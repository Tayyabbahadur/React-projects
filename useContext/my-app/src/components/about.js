import React, { useContext } from "react";
import notecontext from "../context/notecontext";

function About() {
  const a = useContext(notecontext)
  console.log(a);
  return (
    <div>
      this is about {a.name} and he is in class {a.class}
    </div>
  );
}

export default About;
