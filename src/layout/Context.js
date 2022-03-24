import { useState } from "react";
import ReactDOM from "react-dom";

function Component1() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <div>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 />
    </div>
  );
}

function Component2({ user }) {
  return (
    <div>
      <h1>Component 2</h1>
      <Component3  />
    </div>
  );
}

function Component3({ user }) {
  return (
    <div>
      <h1>Component 3</h1>
      <Component4  />
    </div>
  );
}

function Component4({ user }) {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 />
    </>
  );
}

function Component5({ user }) {
  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}

export default Component1;