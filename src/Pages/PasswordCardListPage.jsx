import React from "react";
import PassowordCard from "../Components/PasswordCard";

function PasswordCardListPage(props) {
  function modifyPassword(id, password, username) {
    let modPasswordList = props.passwordList.map(function (pass) {
      if (pass.id === id) {
        pass.password = password;
        pass.username = username;
      }
      return pass;
    });
    console.log(modPasswordList);
    props.setPasswordList(modPasswordList);
  }

  return (
    <div className="d-flex justify-content-around">
      {props.passwordList.map(function ({ id, password, website, username }) {
        return (
          <PassowordCard
            key={id}
            id={id}
            password={password}
            website={website}
            username={username}
            modifyPassword={modifyPassword}
          />
        );
      })}
    </div>
  );
}

export default PasswordCardListPage;
