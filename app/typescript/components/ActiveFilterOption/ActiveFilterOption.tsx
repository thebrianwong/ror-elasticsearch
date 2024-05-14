import { useState } from "react";
import ActiveFilterOptionProps from "./type";

const ActiveFilterOption = ({ updateFilterValue }: ActiveFilterOptionProps) => {
  const [isActive, setIsActive] = useState<boolean | null>(null);

  return (
    <div className="flex flex-col items-center">
      <p className="mb-1">Active Products</p>
      <div className="flex gap-x-2">
        <div>
          <label className="mr-1" htmlFor="active-true">
            For Sale
          </label>
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
        </div>
        <div>
          <label className="mr-1" htmlFor="active-false">
            Not for Sale
          </label>
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
        </div>
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
      </div>
    </div>
  );
};

export default ActiveFilterOption;
