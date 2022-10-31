import React from "react";
import { useEffect, useState } from "react";

const Commands = (props) => {
  const [command, typeCommand] = useState("");

  const startProgram = (event) => {
    const commandInput = document.getElementById("command-input");
    const commandWindow = document.getElementById("command-window");
    if (event.key === "Enter") {
      const userCommand = command.toLowerCase();
      console.log(command);
      // Main logic
      if (userCommand === "hello") {
        commandWindow.innerText = "Hello.";
      } else if (
        userCommand === "back" ||
        userCommand === "exit" ||
        userCommand === "main menu"
      ) {
        commandWindow.innerText = "Back to main menu.";
      }
      // Error message
      else {
        commandWindow.innerText = "I do not understand.";
      }
      // Clear out previous commands
      commandInput.placeholder = "";
      typeCommand("");
    }
  };

  return (
    <>
      <input
        id="command-input"
        placeholder={props.placeholder}
        onChange={(e) => typeCommand(e.target.value)}
        onKeyDown={startProgram}
        value={command}
      />
    </>
  );
};
export default Commands;
