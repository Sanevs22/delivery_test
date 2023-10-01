import st from "./style.module.scss";

import Input from "./components/input/Input";
import Form from "./components/form/Form";
import TabelHeader from "./components/tabelHeader/TabelHeader";

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
      <Form />
    </div>
  );
}

export default App;
