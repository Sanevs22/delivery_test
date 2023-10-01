import { useState } from "react";
import cn from "classnames";
import st from "./style.module.scss";
import Arrow from "../../assets/icon/arrow.svg";
import CompanyContent from "../companyContent/CompanyContent";
import Status from "../UI/status/Status";

interface CompanyProps {
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

function Company(props: CompanyProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={st.main}>
      <div className={cn(st.header, { [st.headerOpen]: isOpen })}>
        <div
          className={cn(st.arrow, { [st.arrowOpen]: isOpen })}
          onClick={() => setIsOpen(!isOpen)}
        >
          <img src={String(Arrow)} alt="arrow" />
        </div>
        <div className={st.img}>
          <img src={props.imgURL} alt={props.company.name} />
        </div>
        <div>
          <div className={st.name}>{props.company.name}</div>
          <div className={st.location}>{props.company.location}</div>
        </div>
        <div className={st.order}>
          {props.order.toString().replace(/(\d)(?=(\d{3})+$)/g, "$1 ")} ₽
        </div>
        <div className={st.order}>
          {props.shipment.toString().replace(/(\d)(?=(\d{3})+$)/g, "$1 ")} ₽
        </div>
        <div className={st.order}>
          {props.remainder.toString().replace(/(\d)(?=(\d{3})+$)/g, "$1 ")} ₽
        </div>
        <Status value={props.status} />{" "}
      </div>
      {isOpen && (
        <div className={st.content}>
          <CompanyContent />
        </div>
      )}
    </div>
  );
}

export default Company;
