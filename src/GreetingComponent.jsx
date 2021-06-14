import React from "react";
import { useParams } from "react-router-dom";

function GreetingComponent() {
  const { name } = useParams();
  return <h1>Greeting {name}</h1>;
}

export default GreetingComponent;
