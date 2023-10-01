import st from "./style.module.scss";

interface HeaderProps {
  value: string[];
}

function Header(props: HeaderProps) {
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

export default Header;
