import { useState } from "react";

import { IoCheckmarkOutline } from "react-icons/io5";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

import {
  Label,
  Option,
  OptionsContainer,
  DropdownContainer,
} from "@/styles/filterDropdown.styles";
import { FilterOptions } from "@/types/filterDropdown.types";

export default function FilterDropdownComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<FilterOptions | null>(
    null
  );

  const toggleDropdown = (): void => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleOptionClick = (option: FilterOptions): void => {
    setSelectedOption(option === selectedOption ? null : option);
    toggleDropdown();
  };

  const renderIcon = (option: string): JSX.Element | null => {
    if (option === selectedOption) {
      return <IoCheckmarkOutline />;
    }
    return null;
  };

  return (
    <DropdownContainer>
      <Label onClick={toggleDropdown} aria-expanded={isOpen}>
        {selectedOption ?? "Filtrar por"}
        {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </Label>
      {isOpen && (
        <OptionsContainer>
          {Object.values(FilterOptions).map((option) => (
            <Option
              key={option}
              onClick={() => handleOptionClick(option)}
              aria-selected={option === selectedOption}
            >
              {option}
              {renderIcon(option)}
            </Option>
          ))}
        </OptionsContainer>
      )}
    </DropdownContainer>
  );
}
