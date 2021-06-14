import React from "react";
import PassowordRow from "../Components/PasswordRow";

function PasswordTablePage(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">website</th>
          <th scope="col">username</th>
          <th scope="col">password</th>
          <th scope="col">action</th>
        </tr>
      </thead>
      <tbody>
        {props.passwordList.map(function ({ id, password, website, username }) {
          return (
            <PassowordRow
              key={id}
              id={id}
              password={password}
              website={website}
              username={username}
            />
          );
        })}
      </tbody>
    </table>
  );
}

export default PasswordTablePage;
