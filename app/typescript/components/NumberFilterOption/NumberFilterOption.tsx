import { useState } from "react";
import NumberFilterOptionProps from "./type";

const NumberFilterOption = ({
  label,
  metaLabel,
  updateFilterValue,
}: NumberFilterOptionProps) => {
  const [fromValue, setFromValue] = useState<string | null>(null);
  const [toValue, setToValue] = useState<string | null>(null);

  return (
    <>
      <p>{label}</p>
      <label htmlFor={`${metaLabel}_from`}>From: </label>
      <input
        type="number"
        name={`${metaLabel}_from`}
        id={`${metaLabel}_from`}
        value={fromValue || ""}
        onChange={(e) => {
          e.target.value === ""
            ? setFromValue(null)
            : setFromValue(e.target.value);
          updateFilterValue({
            from: e.target.value === "" ? null : Number(e.target.value),
            to: toValue === null ? null : Number(toValue),
          });
        }}
      />
      <label htmlFor={`${metaLabel}_to`}>To: </label>
      <input
        type="number"
        name={`${metaLabel}_to`}
        id={`${metaLabel}_to`}
        value={toValue || ""}
        onChange={(e) => {
          e.target.value === "" ? setToValue(null) : setToValue(e.target.value);
          updateFilterValue({
            from: fromValue === null ? null : Number(fromValue),
            to: e.target.value === "" ? null : Number(e.target.value),
          });
        }}
      />
      <a
        className="text-blue-500 hover:text-blue-800"
        href="/"
        onClick={(e) => {
          e.preventDefault();
          setFromValue(null);
          setToValue(null);
          updateFilterValue({
            from: null,
            to: null,
          });
        }}
      >
        Reset
      </a>
    </>
  );
};

export default NumberFilterOption;