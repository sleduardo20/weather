import React, { useEffect, InputHTMLAttributes, useRef } from 'react';
import { useField } from '@unform/core';

import { search } from '../../styles/Icons';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const Input: React.FC<InputProps> = ({ name, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <input ref={inputRef} {...rest} defaultValue={defaultValue} />
      <img src={search} alt="search" />
    </Container>
  );
};

export default Input;
