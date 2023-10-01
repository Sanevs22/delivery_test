import st from "./style.module.scss";

import TabelHeader from "./components/tabelHeader/TabelHeader";
import Company from "./components/company/Company";
import comp1Logo from "./assets/comp1.png";
import comp2Logo from "./assets/comp2.png";

function App() {
  return (
    <div className={st.main}>
      <div className={st.header}>Доставка поставщиков online</div>
      <TabelHeader
        value={[
          "Компания",
          "Сумма заказа",
          "Сумма отгрузки",
          "Сумма остаток",
          "Выполнение",
        ]}
      />
      <br />
      <Company
        imgURL={comp1Logo}
        company={{
          name: "ООО Koyo",
          location: "Санкт-Петербург",
        }}
        order={12000000000}
        shipment={12000000000}
        remainder={0}
        status={100}
      />
      <Company
        imgURL={comp2Logo}
        company={{
          name: "ООО SZDO",
          location: "Брянск",
        }}
        order={12000000000}
        shipment={6000000000}
        remainder={6000000000}
        status={50}
      />
    </div>
  );
}

export default App;
