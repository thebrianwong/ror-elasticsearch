import RangeFilter from "../../types/rangeFilter.type";

type DateFilterOptionProps = {
  label: string;
  metaLabel: string;
  updateFilterValue: (value: RangeFilter) => void;
};

export default DateFilterOptionProps;
