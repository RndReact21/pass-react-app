import React, { useEffect, useState } from "react";

const PASSWORD_PLACEHOLDER = "**********";

function PassowordRow(props) {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [time, setTime] = useState(0);
  useEffect(() => {
    let timeOutOBject = setTimeout(function () {
      if (time < 1) {
        setIsShowPassword(false);
      } else {
        setTime(time - 1);
      }
    }, 1000);
    return function () {
      clearTimeout(timeOutOBject);
    };
  }, [time]);

  return (
    <tr>
      <td>{props.website}</td>
      <td>{props.username}</td>
      <td>{isShowPassword ? props.password : PASSWORD_PLACEHOLDER}</td>
      <td>
        <button
          onClick={function () {
            setTime(30);
            setIsShowPassword(!isShowPassword);
          }}
          className={`btn btn-sm ${isShowPassword ? "btn-danger" : "btn-info"}`}
        >
          {isShowPassword ? "hide password" : "show password"}
        </button>
      </td>
    </tr>
  );
}

export default PassowordRow;
