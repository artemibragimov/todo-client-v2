import { useRef, useState } from "react";
import useOnClickOutside from "@/utils/hooks/useOnClickOutside";
import { IDropdown } from "@/types/IDropdown";
import { DropdownButton, List, ListItem } from "./Dropdown.styled";

const Dropdown = ({
  options,
  Icon,
  ActiveIcon,
  handleClick,
  isActive,
}: IDropdown) => {
  const divRef = useRef<HTMLDivElement>(null);

  const [selected, setSelected] = useState<string>("All");
  const [dropdown, setDropdown] = useState<boolean>(false);

  useOnClickOutside(divRef, () => setDropdown(false));

  const isActivated = isActive(selected);

  const handleItemClick = (name: string) => {
    handleClick(name);
    setSelected(name);
    setDropdown(false);
  };

  return (
    <div ref={divRef}>
      <DropdownButton
        $isActivated={isActivated}
        onClick={() => setDropdown(!dropdown)}
      >
        {isActivated ? <ActiveIcon /> : <Icon />}
        {selected}
      </DropdownButton>

      {dropdown && (
        <List>
          {options.map((option: string, i: number) => (
            <ListItem
              key={i}
              $isActivated={isActive(option)}
              onClick={() => handleItemClick(option)}
            >
              {isActive(option) ? <ActiveIcon /> : <Icon />}
              {option}
            </ListItem>
          ))}
        </List>
      )}
    </div>
  );
};

export default Dropdown;
