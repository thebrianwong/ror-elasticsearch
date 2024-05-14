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
    <div className="flex flex-col items-center">
      <p className="mb-2">{label}</p>
      <div className="flex items-center gap-x-2">
        <div>
          <label htmlFor={`${metaLabel}_from`}>From: </label>
          <input
            type="number"
            name={`${metaLabel}_from`}
            className="bg-neutral-200 border-black border-2 focus:ring outline-none p-1 rounded placeholder:text-slate-500"
            id={`${metaLabel}_from`}
            placeholder="0"
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
        </div>
        <div>
          <label htmlFor={`${metaLabel}_to`}>To: </label>
          <input
            type="number"
            name={`${metaLabel}_to`}
            className="bg-neutral-200 border-black border-2 focus:ring outline-none p-1 rounded placeholder:text-slate-500"
            id={`${metaLabel}_to`}
            placeholder="100"
            value={toValue || ""}
            onChange={(e) => {
              e.target.value === ""
                ? setToValue(null)
                : setToValue(e.target.value);
              updateFilterValue({
                from: fromValue === null ? null : Number(fromValue),
                to: e.target.value === "" ? null : Number(e.target.value),
              });
            }}
          />
        </div>
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
      </div>
    </div>
  );
};

export default NumberFilterOption;
