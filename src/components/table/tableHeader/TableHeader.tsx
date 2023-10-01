import st from "./style.module.scss";

interface TableHeaderProps {
  value: string[];
}

function TableHeader(props: TableHeaderProps) {
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

export default TableHeader;
