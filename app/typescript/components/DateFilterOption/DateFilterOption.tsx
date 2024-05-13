import { useState } from "react";
import DateFilterOptionProps from "./type";

const DateFilterOption = ({
  label,
  metaLabel,
  updateFilterValue,
}: DateFilterOptionProps) => {
  const [fromDate, setFromDate] = useState<string | null>(null);
  const [toDate, setToDate] = useState<string | null>(null);

  return (
    <>
      <p>{label}</p>
      <label htmlFor={`${metaLabel}-from`}>From: </label>
      <input
        type="date"
        name={`${metaLabel}_from`}
        id={`${metaLabel}-from`}
        value={fromDate || ""}
        onChange={(e) => {
          const fromEpochTime = new Date(e.target.value).getTime();
          const toEpochTime = toDate ? new Date(toDate).getTime() : null;
          setFromDate(e.target.value);
          updateFilterValue({
            from: Number.isNaN(fromEpochTime) ? null : fromEpochTime,
            to: Number.isNaN(toEpochTime) ? null : toEpochTime,
          });
        }}
      />
      <label htmlFor={`${metaLabel}-to`}>To: </label>
      <input
        type="date"
        name={`${metaLabel}_to`}
        id={`${metaLabel}-to`}
        value={toDate || ""}
        onChange={(e) => {
          console.log(e.target.value);
          const toEpochTime = new Date(e.target.value).getTime();
          const fromEpochTime = fromDate ? new Date(fromDate).getTime() : null;
          setToDate(e.target.value);
          updateFilterValue({
            from: Number.isNaN(fromEpochTime) ? null : fromEpochTime,
            to: Number.isNaN(toEpochTime) ? null : toEpochTime,
          });
        }}
      />
      <a
        className="text-blue-500 hover:text-blue-800"
        href="/"
        onClick={(e) => {
          e.preventDefault();
          setFromDate(null);
          setToDate(null);
          updateFilterValue({ from: null, to: null });
        }}
      >
        Reset
      </a>
    </>
  );
};

export default DateFilterOption;
