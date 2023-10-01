import cn from "classnames";
import st from "./style.module.scss";
import Form from "../form/Form";
import DeliveryCard from "../deliveryCard/DeliveryCard";

function CompanyContent() {
  return (
    <div className={st.main}>
      <div className={st.deliveryCard}>
        <DeliveryCard status="done" />
        <DeliveryCard status="inRoad" />
        <DeliveryCard status="inRoad" />
      </div>
      <Form />
    </div>
  );
}

export default CompanyContent;
