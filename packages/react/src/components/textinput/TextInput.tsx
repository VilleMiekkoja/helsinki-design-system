import React from 'react';

import styles from './InputWrapper.module.css';
import InputWrapper, { InputWrapperProps } from './InputWrapper';

export type TextInputProps = {
  type?: string;
} & InputWrapperProps;

const TextInput: React.FC<TextInputProps> = ({ type = 'text', ...props }) => {
  const { defaultValue, labelledBy, disabled, id, readOnly, onChange, placeholder, value } = props;
  return (
    <InputWrapper {...props}>
      <input
        type={type}
        className={styles.input}
        defaultValue={defaultValue}
        aria-labelledby={labelledBy}
        disabled={disabled}
        id={id}
        readOnly={readOnly}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
      />
    </InputWrapper>
  );
};

export default TextInput;
