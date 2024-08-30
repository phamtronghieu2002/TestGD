import { FC, useState } from "react";
import { FormEvent, InputChangeEvent } from "../types";

export type FielTpe = {
  [key: string]: any; // key là string và value có thể là bất kỳ kiểu nào
};
interface FormType {
  formField: FielTpe[];
  onSubmit: (dataForm: FielTpe) => void;
}

const Form: FC<FormType> = ({ formField, onSubmit }) => {
  const [dataForm, setDataForm] = useState<FielTpe>({});
  const handleChange = (e: InputChangeEvent) => {
    const { name, value } = e.target;
    setDataForm({ ...dataForm, [name]: value });
  };
  return (
    <div className="wrapper">
      <form
        onSubmit={(e: FormEvent) => {
          e.preventDefault();
          onSubmit(dataForm);
        }}
        action=""
      >
        {formField.map((field, index) => {
          console.log("as", dataForm[field?.name]);

          return (
            <input
             
              onChange={handleChange}
              value={dataForm[field.name] || field.value}
              key={index}
              name={field.name}
              type={field.type}
              placeholder={field.placeholder}
              {...field.options}
            />
          );
        })}
        <button>submit</button>
      </form>
    </div>
  );
};
export default Form;
