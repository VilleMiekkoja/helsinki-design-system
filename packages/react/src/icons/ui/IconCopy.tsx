import React from 'react';

import { IconProps } from '../Icon.interface';
import classNames from '../../utils/classNames';
import styles from '../Icon.module.css';

export const IconCopy = ({ size = 's', className = '', style = {}, ...rest }: IconProps) => (
  <svg
    className={classNames(styles.icon, styles[size], className)}
    style={style}
    viewBox="0 0 24 24"
    {...rest}
    role="img"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="none" fillRule="evenodd">
      <rect width="24" height="24" />
      <path
        fill="currentColor"
        d="M6,10 L6,12 L5,12 L5,18 L12,18 L12,17 L14,17 L14,19 C14,19.5522847 13.5522847,20 13,20 L4,20 C3.44771525,20 3,19.5522847 3,19 L3,11 C3,10.4477153 3.44771525,10 4,10 L6,10 Z M20,4 C20.5522847,4 21,4.44771525 21,5 L21,15 C21,15.5522847 20.5522847,16 20,16 L8,16 C7.44771525,16 7,15.5522847 7,15 L7,5 C7,4.44771525 7.44771525,4 8,4 L20,4 Z M19,6 L9,6 L9,14 L19,14 L19,6 Z"
      />
    </g>
  </svg>
);
