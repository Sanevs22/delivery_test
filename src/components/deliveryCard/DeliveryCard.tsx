import { useState } from "react";
import cn from "classnames";
import st from "./style.module.scss";
import Arrow from "../../assets/icon/arrow.svg";

interface DeliveryCardProps {
  status: "inRoad" | "done";
}

function DeliveryCard(props: DeliveryCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={st.main}>
      <div className={cn(st.header, { [st.headerOpen]: isOpen })}>
        <div
          className={cn(st.arrow, { [st.arrowOpen]: isOpen })}
          onClick={() => setIsOpen(!isOpen)}
        >
          <img src={Arrow} alt="arrow" />
        </div>
        <div>dost</div>
        <div>12.11.2023</div>
        <div>Трекинг номер</div>
        <div>Габариты</div>
        <div>Общий вес</div>
        <div>Кол-во мест</div>
        <div>Оплата доставки</div>
      </div>
      {isOpen && <div className={st.content}>Подробности доставки </div>}
    </div>
  );
}

export default DeliveryCard;
