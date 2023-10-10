import { IToggleButton } from "@/types/IToggleButton";
import { Button } from "./ToggleButton.styled";

const ToggleButton = ({
  name,
  Icon,
  ActiveIcon,
  handleClick,
  isActive,
}: IToggleButton) => {
  const isActivated = isActive(name);
  return (
    <Button $isActivated={isActivated} onClick={() => handleClick(name)}>
      {isActivated ? <ActiveIcon /> : <Icon />}
      {name}
    </Button>
  );
};
export default ToggleButton;
