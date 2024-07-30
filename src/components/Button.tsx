/* eslint-disable react/button-has-type */

import { FC, ReactNode } from 'react';
import { BtnVariant } from '../types/enums';

interface ButtonProps {
  children: ReactNode;
  ariaControls?: string;
  ariaExpanded?: boolean;
  ariaLabel?: string;
  ariaSelected?: boolean;
  autoFocus?: boolean;
  btnRef?: (el: HTMLButtonElement | null) => void;
  className?: string;
  id?: string;
  onClick?: () => void;
  role?: string;
  tabIndex?: 0 | -1;
  type?: 'submit' | 'reset' | 'button' | undefined;
  variant?: BtnVariant;
}

const Button: FC<ButtonProps> = ({
  children,
  type = 'button',
  id,
  tabIndex,
  variant = 'primary',
  onClick,
  btnRef,
  ariaSelected,
  ariaExpanded,
  ariaControls,
  ariaLabel,
  role,
  className = '',
  autoFocus,
}) => (
  <button
    id={id}
    tabIndex={tabIndex}
    role={role}
    type={type}
    ref={btnRef}
    onClick={onClick}
    aria-selected={ariaSelected}
    aria-expanded={ariaExpanded}
    aria-controls={ariaControls}
    aria-label={ariaLabel}
    autoFocus={autoFocus}
    className={`btn btn-${variant} ${className}`}
  >
    {children}
  </button>
);

export default Button;
