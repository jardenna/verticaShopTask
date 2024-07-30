import { FC } from 'react';
import { IconName } from '../types/enums';

import { IconDefaultProps } from '../types/interfaces';
import LogoIcon from './icons/LogoIcon';

interface IconProps extends IconDefaultProps {
  name: IconName;
}

const iconMapping = {
  logo: LogoIcon,
};

const Icon: FC<IconProps> = ({
  name,
  size = '20',
  height,
  title,
  className = '',
}) => {
  const IconComponent = iconMapping[name];
  return (
    <IconComponent
      size={size}
      height={height}
      title={title}
      className={className}
    />
  );
};

export default Icon;
