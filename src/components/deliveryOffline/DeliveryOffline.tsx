import st from "./style.module.scss";
import Trash from "../../assets/icon/trash.svg";
import Form from "../form/Form";
import Table from "../table/Table";

function DeliveryOffline() {
  return (
    <div className={st.main}>
      <div className={st.header}>
        <div className={st.text}>Доставка поставщика offine</div>
        <div className={st.trash}>
          <img src={String(Trash)} alt="trash" />
        </div>
      </div>
      <div className={st.form}>
        <Form />
      </div>
      <Table />
    </div>
  );
}

export default DeliveryOffline;
