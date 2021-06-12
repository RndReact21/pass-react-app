import React, { useState } from "react";
import PasswordTablePage from "./Pages/PasswordTablePage";

import PasswordCardListPage from "./Pages/PasswordCardListPage";

let defaultPasswordList = [
  { id: 123, password: "123", website: "BNCC", username: "email@gmail.com" },
  {
    id: 124,
    password: "asmdlkasmd",
    website: "Binus",
    username: "binus@gmail.com",
  },
  {
    id: 125,
    password: "asm dlas",
    website: "Socs",
    username: "socs@gmail.com",
  },
];

function App() {
  return (
    <>
      <PasswordCardListPage passwordList={defaultPasswordList} />
      <PasswordTablePage passwordList={defaultPasswordList} />
    </>
  );
}

export default App;
