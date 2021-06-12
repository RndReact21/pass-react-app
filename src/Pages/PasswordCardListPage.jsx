import React from "react";
import PassowordCard from "../Components/PasswordCard";

function PasswordCardListPage(props) {
  const [passwordList, setPasswordList] = React.useState(props.passwordList);
  return (
    <div className="d-flex justify-content-around">
      {passwordList.map(function ({ id, password, website, username }) {
        return (
          <PassowordCard
            key={id}
            password={password}
            website={website}
            username={username}
          />
        );
      })}
    </div>
  );
}

export default PasswordCardListPage;
