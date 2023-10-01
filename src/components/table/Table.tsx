import st from "./style.module.scss";
import TableHeader from "./tableHeader/TableHeader";
import TableItem from "./tableItem/TableItem";
import img from "../../assets/img.png";

function Table() {
  return (
    <div className={st.main}>
      <div className={st.header}>
        <TableHeader
          value={[
            "Наименование",
            "Отгрузка шт",
            "Остаток шт",
            "Сумма отгрузки",
            "Сумма остаток",
          ]}
        />
      </div>
      <div className={st.items}>
        <TableItem
          imgUrl={img}
          name="Токарный станок"
          article="Z-MaT | F200.1"
          value="0"
          all="10"
          sum={75200000}
          sumAll={75200000}
        />
        <TableItem
          imgUrl={img}
          name="Токарный станок"
          article="Z-MaT | F200.1"
          value="0"
          all="10"
          sum={75200000}
          sumAll={75200000}
        />
        <TableItem
          imgUrl={img}
          name="Токарный станок"
          article="Z-MaT | F200.1"
          value="0"
          all="10"
          sum={75200000}
          sumAll={75200000}
        />
      </div>
    </div>
  );
}

export default Table;
