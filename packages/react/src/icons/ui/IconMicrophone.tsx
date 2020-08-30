import React from 'react';

import { IconProps } from '../Icon.interface';
import classNames from '../../utils/classNames';
import styles from '../Icon.module.css';

export const IconMicrophone = ({ size = 's', className = '', style = {}, ...rest }: IconProps) => (
  <svg
    className={classNames(styles.icon, styles[size], className)}
    style={style}
    viewBox="0 0 24 24"
    {...rest}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <path
        d="M8 23v-2h3v-2.57a7.002 7.002 0 01-5.996-6.69L5 11.5h2a5 5 0 009.995.217L17 11.5h2a7.002 7.002 0 01-5.999 6.929L13 21h3v2H8zm4-22a4.004 4.004 0 013.978 3.59l.016.205L16 5v6a4 4 0 01-4 4 4.004 4.004 0 01-3.978-3.59l-.016-.205L8 11V4.971l.007-.205A4 4 0 0112 1zm0 2a1.999 1.999 0 00-1.98 1.7l-.015.153L10 5v5.971l.003.147a2 2 0 003.992.031L14 11V5.029l-.003-.147A2 2 0 0012 3z"
        fill="currentColor"
      />
    </g>
  </svg>
);
