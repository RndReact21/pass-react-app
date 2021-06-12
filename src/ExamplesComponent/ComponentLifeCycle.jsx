import React from "react";

class ComponentLifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = { name: "" };
    console.log("from constructor");
  }

  render() {
    console.log("from render");
    return (
      <div>
        <h1> Hello from Component Life Cycle {this.props.name}</h1>
        <button
          onClick={() => {
            this.setState({ name: "123" });
          }}
        >
          ubah
        </button>
      </div>
    );
  }

  componentDidMount() {
    console.log("from didMount");
    // panggil api
    // setTimer
  }

  componentDidUpdate() {
    console.log("from didUpdate");
    // cek state
  }

  componentWillUnmount() {
    console.log("from willUnmount");
    // clearTimer
    // pooling / websocket
  }
}

export default ComponentLifeCycle;
