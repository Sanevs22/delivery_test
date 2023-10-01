import { useState } from "react";
import cn from "classnames";
import st from "./style.module.scss";
import Arrow from "../../assets/icon/arrow.svg";
import Form from "../form/Form";

interface TabelHeaderProps {
  imgURL: string;
  company: {
    name: string;
    location: string;
  };
  order: number;
  shipment: number;
  remainder: number;
  status: number;
}

function Company(props: TabelHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={st.main}>
      <div className={st.header}>
        <div
          className={cn(st.arrow, { [st.arrowOpen]: isOpen })}
          onClick={() => setIsOpen(!isOpen)}
        >
          <img src={Arrow} alt="arrow" />
        </div>
        <div className={st.img}>
          <img src={props.imgURL} alt={props.company.name} />
        </div>
        <div>
          <div className={st.name}>{props.company.name}</div>
          <div className={st.location}>{props.company.location}</div>
        </div>
        <div>{props.order} ₽</div>
        <div>{props.shipment} ₽</div>
        <div>{props.remainder} ₽</div>
        <div>{props.status}</div>
      </div>
      {isOpen && (
        <div>
          test
          <Form />
        </div>
      )}
    </div>
  );
}

export default Company;
