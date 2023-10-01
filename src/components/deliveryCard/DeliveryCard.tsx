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
        <div className={st.status}>
          <div
            className={cn(st.circle, {
              [st.circleDone]: props.status === "done",
            })}
          ></div>
          <div>{props.status === "done" ? "Доставлен" : "В пути"}</div>
        </div>
        <div className={st.text}>12.11.2023</div>
        <div className={st.disc}>
          <div className={st.title}>Трекинг номер</div>
          <div className={st.text}>
            <a href="http://google.com" target="blank">
              34856387564
            </a>
          </div>
        </div>
        <div className={st.disc}>
          <div className={st.title}>Габариты</div>
          <div className={st.text}>90х90х90 mm</div>
        </div>
        <div className={st.disc}>
          <div className={st.title}>Общий вес</div>
          <div className={st.text}>100 kg</div>
        </div>
        <div className={st.disc}>
          <div className={st.title}>Кол-во мест</div>
          <div className={st.text}>5</div>
        </div>
        <div className={st.disc}>
          <div className={st.title}>Оплата доставки</div>
          <div className={st.text}>Оплачена</div>
        </div>
      </div>
      {isOpen && <div className={st.content}>Подробности доставки </div>}
    </div>
  );
}

export default DeliveryCard;
