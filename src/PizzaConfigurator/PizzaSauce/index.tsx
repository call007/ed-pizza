import { Fieldset, Radiobox } from "@ui-kit";
import { FieldsName, Option } from "../types";

interface Props {
  dataOptions: Option[];
  checkedOptions?: Option[];
}

export function PizzaSauce(props: Props) {
  return (
    <Fieldset legend="Выберите соус">
      {props.dataOptions.map((option) => (
        <Radiobox
          key={option.id}
          data-id={option.id}
          value={option.value}
          price={option.price}
          name={FieldsName.Sauce}
          id={`${FieldsName.Sauce}-${option.id}`}
          defaultChecked={
            !!props.checkedOptions?.find((item) => item.id === option.id)
          }
        />
      ))}
    </Fieldset>
  );
}
