import { useState } from "react";
import st from "./style.module.scss";
import Minus from "../../../assets/icon/minus.svg";
import Plus from "../../../assets/icon/plus.svg";

interface InputPlusProps {
  value: number;
}

function InputPlus(props: InputPlusProps) {
  let [value, setValue] = useState(props.value);
  return (
    <div className={st.main}>
      <div className={st.icon} onClick={() => setValue(value - 1)}>
        <img src={Minus} alt="minus" />
      </div>
      <div className={st.text}>{value}</div>
      <div className={st.icon} onClick={() => setValue(value + 1)}>
        <img src={Plus} alt="Plus" />
      </div>
    </div>
  );
}

export default InputPlus;
