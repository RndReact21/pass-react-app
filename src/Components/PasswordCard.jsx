import React, { useEffect, useState } from "react";

const PASSWORD_PLACEHOLDER = "**********";

function PassowordCard(props) {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [username, setUsername] = useState(props.username);
  const [password, setPassword] = useState(props.password);
  const [isEdit, setIsEdit] = useState(false);
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
    <div className="card m-2" id="card-1" style={{ width: "28rem" }}>
      <div className="card-body">
        <div className="content">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="card-title">{props.website}</h5>
            <button
              id="btn-edit"
              className={`btn ${isEdit ? "btn-success" : "btn-secondary"} `}
              onClick={function () {
                setIsEdit(!isEdit);
                setIsShowPassword(false);
                setTime(0);
              }}
            >
              {isEdit ? "save" : "edit"}
            </button>
          </div>
          {!isEdit ? (
            <>
              <div id="username">username : {username}</div>
              <div id="password">
                password : {isShowPassword ? password : PASSWORD_PLACEHOLDER}
              </div>
            </>
          ) : (
            <>
              <label for="username">username : </label>{" "}
              <input
                id="username"
                type="text"
                value={username}
                onChange={function (e) {
                  setUsername(e.target.value);
                }}
              />
              <br />
              <label id="password">password :</label>{" "}
              <input
                type="text"
                value={password}
                onChange={function (e) {
                  setPassword(e.target.value);
                }}
              />
            </>
          )}

          <p></p>
        </div>

        <div className="d-flex justify-content-between align-items-center mt-3">
          <button
            id="btn-pass"
            className={`btn ${isShowPassword ? "btn-danger" : "btn-info"} `}
            onClick={() => {
              setIsShowPassword(!isShowPassword);
              setTime(isShowPassword ? 0 : 30);
            }}
          >
            show password
          </button>
          <h6 id="timer">{time}</h6>
        </div>
      </div>
    </div>
  );
}

export default PassowordCard;
