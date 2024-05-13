import { useState } from "react";
import ActiveFilterOptionProps from "./type";

const ActiveFilterOption = ({ updateFilterValue }: ActiveFilterOptionProps) => {
  const [trueChecked, setTrueChecked] = useState(false);
  const [falseChecked, setFalseChecked] = useState(false);

  return (
    <>
      <p>Active Products</p>
      <label htmlFor="active-true">For Sale</label>
      <input
        type="radio"
        name="is_active"
        id="active-true"
        value="true"
        checked={trueChecked}
        onChange={(e) => {
          setTrueChecked(true);
          setFalseChecked(false);
          updateFilterValue(true);
        }}
      />
      <label htmlFor="active-false">Not for Sale</label>
      <input
        type="radio"
        name="is_active"
        id="active-false"
        value="false"
        checked={falseChecked}
        onChange={(e) => {
          setFalseChecked(true);
          setTrueChecked(false);
          updateFilterValue(false);
        }}
      />
      <a
        className="text-blue-500 hover:text-blue-800"
        href="/"
        onClick={(e) => {
          e.preventDefault();
          setTrueChecked(false);
          setFalseChecked(false);
          updateFilterValue(null);
        }}
      >
        Reset
      </a>
    </>
  );
};

export default ActiveFilterOption;
