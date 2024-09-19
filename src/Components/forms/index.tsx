// @ts-nocheck
import { useState, useEffect, useRef } from "react";

const Builder = ({ fields, onChange }: { fields: any; onChange: any }) => {
  const initialState = useRef({});

  const loadInitialState = () => {
    const tempFields = initialState.current as any;
    for (const k in fields) {
      tempFields[fields[k].name] = fields[k].defaultValue?.toString() || "";
    }
    initialState.current = tempFields;
  };

  loadInitialState();

  const [data, setData] = useState(initialState.current);
  const [inputs, setInputs] = useState(fields);

  useEffect(() => {
    setData(initialState.current);
    setInputs(fields);
  }, [fields, initialState]);

  useEffect(() => {
    onChange(data);
  }, [data, onChange]);

  const handleChange = (e: any) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const checkReadOnly = (field: any) =>
    field.readonly ? "(No se puede editar)" : "(Opcional)";
  const fieldOrEmpty = (field: any, empty = "") => field || empty;

  return (
    <>
      {inputs.map((field: any) => {
        const { name } = field as any;

        if (data?.[field.name] == null) return null;

        let formInput = (
          <input
            className="form-control"
            key={"input" + field.name}
            placeholder={fieldOrEmpty(field.placeholder)}
            name={field.name}
            defaultValue={field.defaultValue || ""}
            value={data[name]}
            onChange={handleChange}
          />
        );

        if (field.readonly) {
          formInput = (
            <input
              readOnly
              disabled
              key={"input" + field.name}
              placeholder={fieldOrEmpty(field.placeholder)}
              name={field.name}
              defaultValue={field.defaultValue || ""}
              value={data[name]}
            />
          );
        }

        if (field.number) {
          formInput = (
            <input
              className="form-control"
              type="number"
              min={fieldOrEmpty(field.min)}
              key={"input" + field.name}
              placeholder={fieldOrEmpty(field.placeholder)}
              name={field.name}
              defaultValue={fieldOrEmpty(field.defaultValue)}
              value={data[name]}
              onChange={handleChange}
            />
          );
        }

        return (
          <div style={{ width: "90%" }} key={"formcontrol-" + field.name}>
            <label style={{ marginTop: "1rem" }} key={"label-" + field.name}>
              {fieldOrEmpty(field.label)}{" "}
              {field.required ? "*" : checkReadOnly(field)}{" "}
            </label>
            {formInput}
            {field.noValid && (
              <small key={"small" + field.name} style={{ color: "red" }}>
                {field.noValidMessage}
              </small>
            )}
          </div>
        );
      })}
    </>
  );
};
export default Builder;
