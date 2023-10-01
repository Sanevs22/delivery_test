import { useState } from "react";
import st from "./style.module.scss";

interface InputProps {
  value: string;
  placeholder: string;
  label: string;
  className?: any;
}

function Input(props: InputProps) {
  let [value, setValue] = useState(props.value);
  return (
    <div className={props.className}>
      <div className={st.label}>{props.label}</div>
      <input
        className={st.input}
        type="text"
        placeholder={props.placeholder}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </div>
  );
}

export default Input;
