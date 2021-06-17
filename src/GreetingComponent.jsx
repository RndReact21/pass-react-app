import React from "react";
import { useParams } from "react-router-dom";

function GreetingComponent() {
  const { abc } = useParams();
  return <h1>Greeting {abc}</h1>;
}

export default GreetingComponent;
