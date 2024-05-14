import { useState } from "react";
import ActiveFilterOptionProps from "./type";

const ActiveFilterOption = ({ updateFilterValue }: ActiveFilterOptionProps) => {
  const [isActive, setIsActive] = useState<boolean | null>(null);

  return (
    <>
      <p>Active Products</p>
      <label htmlFor="active-true">For Sale</label>
      <input
        type="radio"
        name="is_active"
        id="active-true"
        value="true"
        checked={isActive ? true : false}
        onChange={(e) => {
          setIsActive(true);
          updateFilterValue(true);
        }}
      />
      <label htmlFor="active-false">Not for Sale</label>
      <input
        type="radio"
        name="is_active"
        id="active-false"
        value="false"
        checked={isActive === false ? true : false}
        onChange={(e) => {
          setIsActive(false);
          updateFilterValue(false);
        }}
      />
      <a
        className="text-blue-500 hover:text-blue-800"
        href="/"
        onClick={(e) => {
          e.preventDefault();
          setIsActive(null);
          updateFilterValue(null);
        }}
      >
        Reset
      </a>
    </>
  );
};

export default ActiveFilterOption;
