import React from "react";
import PassowordRow from "../Components/PasswordRow";

function PasswordTablePage(props) {
  const [passwordList, setPasswordList] = React.useState(props.passwordList);
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
        {passwordList.map(function ({ id, password, website, username }) {
          return (
            <PassowordRow
              key={id}
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
