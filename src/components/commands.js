import React from "react";
import { useEffect, useState } from "react";

const Commands = (props) => {
  const [command, typeCommand] = useState("");

  const startProgram = (event) => {
    if (event.key === "Enter") {
      console.log(command);
      // Testing logic below
      if (command.toLowerCase() === "hello") {
        alert("hello human");
      }
      typeCommand("");
    }
  };

  return (
    <>
      <input
        placeholder={props.placeholder}
        onChange={(e) => typeCommand(e.target.value)}
        onKeyDown={startProgram}
        value={command}
      />
    </>
  );
};
export default Commands;
