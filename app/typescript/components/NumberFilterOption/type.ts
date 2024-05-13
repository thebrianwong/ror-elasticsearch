import RangeFilter from "../../types/rangeFilter.type";

type NumberFilterOptionProps = {
  label: string;
  metaLabel: string;
  updateFilterValue: (value: RangeFilter) => void;
};

export default NumberFilterOptionProps;
