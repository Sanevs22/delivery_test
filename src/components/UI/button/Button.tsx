import st from "./style.module.scss";

interface ButtonProps {
  title: string;
  type?: "second";
}

function Button(props: ButtonProps) {
  if (props.type === "second") {
    return (
      <>
        <button className={st.second}>{props.title}</button>
      </>
    );
  }

  return (
    <>
      <button className={st.main}>{props.title}</button>
    </>
  );
}

export default Button;
