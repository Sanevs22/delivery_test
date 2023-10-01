import st from "./style.module.scss";

import Input from "../input/Input";

interface InputProps {
  value: string;
  placeholder: string;
  label: string;
}

function Form() {
  return (
    <div className={st.main}>
      <Input placeholder="Статус" value="Деловые линии" label="Статус" />
      <Input
        placeholder="Дата отгрузки"
        value="21/09/2023"
        label="Дата отгрузки"
      />
      <Input placeholder="Длина" value="100" label="Длина" />
      <Input placeholder="Высота" value="100" label="Высота" />
      <Input placeholder="Ширина" value="100" label="Ширина" />
      <Input
        placeholder="Количество мест"
        value="Деловые линии"
        label="Количество мест"
      />
      <Input placeholder="Вес" value="100" label="Вес" />
      <Input
        className={st.box8}
        placeholder="Условия доставки"
        value="Деловые линии"
        label="Условия доставки"
      />
      <Input placeholder="Цена доставки" value="100" label="Цена доставки" />
      <Input
        placeholder="Траснпортная компания"
        value="Деловые линии"
        label="Траснпортная компания"
      />
      <Input
        className={st.box11}
        placeholder="URL"
        value="Деловые линии"
        label="URL"
      />
      <Input
        placeholder="Номер отслеживания"
        value="Деловые линии"
        label="Номер отслеживания"
      />
    </div>
  );
}

export default Form;
