import st from "./style.module.scss";
import DeliveryCard from "../deliveryCard/DeliveryCard";
import DeliveryOffline from "../deliveryOffline/DeliveryOffline";
import Button from "../UI/button/Button";

function CompanyContent() {
  return (
    <div className={st.main}>
      <div className={st.deliveryCard}>
        <DeliveryCard status="done" />
        <DeliveryCard status="inRoad" />
        <DeliveryCard status="inRoad" />
      </div>
      <DeliveryOffline />
      <div className={st.tool}>
        <Button title="Сохранить"></Button>
        <Button title="Удалить" type="second"></Button>
      </div>
    </div>
  );
}

export default CompanyContent;
