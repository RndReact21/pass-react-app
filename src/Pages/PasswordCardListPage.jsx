import React from "react";
import { connect } from "react-redux";
import PassowordCard from "../Components/PasswordCard";

function PasswordCardListPage(props) {
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
          />
        );
      })}
    </div>
  );
}
const mapStateToProps = (state) => {
  return { passwordList: state.passwords };
};

export default connect(mapStateToProps)(PasswordCardListPage);
