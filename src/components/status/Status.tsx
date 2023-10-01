import st from "./style.module.scss";

interface StatusProps {
  value: number;
}

function Status(props: StatusProps) {
  const line = String((105 / 100) * props.value) + "px";
  return (
    <div className={st.main}>
      <div className={st.text}>{props.value} %</div>
      <div className={st.content}>
        <div className={st.line} style={{ width: line }}></div>
      </div>
    </div>
  );
}

export default Status;
