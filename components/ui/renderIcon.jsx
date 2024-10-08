import { FaBullhorn } from 'react-icons/fa';

const iconsMap = {
  FaBullhorn: FaBullhorn,
};

const renderIcon = (iconName) => {
  const IconComponent = iconsMap[iconName];
  return IconComponent ? <IconComponent /> : null;
};

<div>{renderIcon(objective.icon)}</div>;
