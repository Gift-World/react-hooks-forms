import React, { useState } from "react";

function Form({
  firstName,
  lastName,
  handleFirstNameChange,
  handleLastNameChange,
}) {
 /*  const [firstName, setFirstName] = useState("Charles");
  const [lastName, setLastName] = useState("Gift"); */
/* function handleFirstNameChange(e){
  setFirstName(e.target.value)
}
function handleLastNameChange(e){
  setLastName(e.target.value)
} */

  return (
    <form>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName}/>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
