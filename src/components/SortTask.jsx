import Select from "react-select";
import {
  controlStyles,
  dropdownIndicatorStyles,
  menuStyles,
  optionStyles,
  selectInputStyles,
  singleValueStyles,
  sortingOptions,
  valueContainerStyles,
} from "../lib/constants";
import clsx from "clsx";
import { useSort } from "../stores/useItemStore";

export default function SortTask() {
  const sortBy = useSort((state) => state.sortBy);
  return (
    <Select
      unstyled
      isSearchable={false}
      onChange={(option) => sortBy(option.value)}
      defaultValue={sortingOptions[0]}
      options={sortingOptions}
      classNames={{
        control: () => controlStyles,
        input: () => selectInputStyles,
        valueContainer: () => valueContainerStyles,
        singleValue: () => singleValueStyles,
        dropdownIndicator: () => dropdownIndicatorStyles,
        menu: () => menuStyles,
        option: ({ isFocused, isSelected }) =>
          clsx(
            isFocused && optionStyles.focus,
            isSelected && optionStyles.selected,
            optionStyles.base
          ),
      }}
    />
  );
}
