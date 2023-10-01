import st from "./style.module.scss";
import Trash from "../../../assets/icon/trash.svg";
import InputPlus from "../../UI/inputPlus/InputPlus";

interface TableItemProps {
  imgUrl: string;
  name: string;
  article: string;
  value: string;
  all: string;
  sum: number;
  sumAll: number;
}

function TableItem(props: TableItemProps) {
  return (
    <div className={st.main}>
      <div className={st.image}>
        <img style={{ height: "60px" }} src={props.imgUrl} alt="img" />
      </div>
      <div className={st.disc}>
        <div className={st.name}>{props.name}</div>
        <div className={st.article}>{props.article}</div>
      </div>
      <div>
        <InputPlus value={0} />
      </div>
      <div className={st.text}>{props.all}</div>
      <div className={st.text}>
        {props.sum.toString().replace(/(\d)(?=(\d{3})+$)/g, "$1 ")} RUB
      </div>
      <div className={st.text}>
        {props.sumAll.toString().replace(/(\d)(?=(\d{3})+$)/g, "$1 ")} RUB
      </div>
      <div className={st.trash}>
        <img src={Trash} alt="Trash" />
      </div>
    </div>
  );
}

export default TableItem;
