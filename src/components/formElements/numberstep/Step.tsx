import { FC } from 'react';
import { BtnVariant } from '../../../types/enums';
import Button from '../../Button';
import Input from '../Input';
import './_number-step.scss';

interface StepProps {
  handleClick: any;
  labelText: string;
  onChange: any;
  value: any;
  initCount?: number;
  max?: string;
  min?: string;
}

const Step: FC<StepProps> = ({
  onChange,
  handleClick,
  value,
  initCount = 1,
  min = '0',
  max,
  labelText,
}) => (
  <article className="number-step-container">
    <Button
      ariaLabel={`Subtract ${initCount} `}
      variant={BtnVariant.Ghost}
      onClick={() => handleClick(value !== Number(min) ? -initCount : 0)}
    >
      -
    </Button>
    <Input
      type="number"
      value={value}
      onChange={onChange}
      id="count"
      labelText={labelText}
      inputHasNoLabel
      name="count"
      min={min}
      max={max}
    />

    <Button
      ariaLabel={`Add ${initCount}`}
      variant={BtnVariant.Ghost}
      onClick={() => handleClick(value !== Number(max) ? initCount : 0)}
    >
      +
    </Button>
  </article>
);

export default Step;
