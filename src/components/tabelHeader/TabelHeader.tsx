import st from "./style.module.scss";

interface TabelHeaderProps {
  value: string[];
}

function TabelHeader(props: TabelHeaderProps) {
  return (
    <div className={st.main}>
      <div className={st.box}></div>
      {props.value.map((text, i) => (
        <div className={st.box} key={i}>
          {text}
        </div>
      ))}
    </div>
  );
}

export default TabelHeader;
