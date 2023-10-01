import cn from "classnames";
import st from "./style.module.scss";
import DeliveryCard from "../deliveryCard/DeliveryCard";
import DeliveryOffline from "../deliveryOffline/DeliveryOffline";

function CompanyContent() {
  return (
    <div className={st.main}>
      <div className={st.deliveryCard}>
        <DeliveryCard status="done" />
        <DeliveryCard status="inRoad" />
        <DeliveryCard status="inRoad" />
      </div>
      <DeliveryOffline />
    </div>
  );
}

export default CompanyContent;
