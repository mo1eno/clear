import { useState } from "react";
import classes from "../Style/Components/reg.module.scss";
import UIButton from "./UIButton";
const Reg = () => {
  const [reg, setReg] = useState(true);
  return (
    <div class={classes["Card"]}>
      {reg ? <h1>Registration</h1> : <h1>Login</h1>}
      <p>Phone number:</p>
      <input placeholder="+7 (___)" type="number" />
      <p>Password:</p>
      <input placeholder="**********" type="text" />
      <UIButton type="string">Click</UIButton>
      {reg ? (
        <p>
          Have an account? <div onClick={() => setReg(!reg)}>Log in</div>
        </p>
      ) : (
        <p>
          Don`t have an account? <div onClick={() => setReg(!reg)}>Sign in</div>
        </p>
      )}
    </div>
  );
};
export default Reg;
