import React, { InputHTMLAttributes, useRef, useEffect, useState, forwardRef, useImperativeHandle } from 'react';
import { useField } from '@unform/core';

import ReactInputMask from 'react-input-mask';
import { IconType } from 'react-icons';
import { Container, InputComp, Separator } from './styles';
import colors from '../../../../style/colors';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  divClassName?: string;
  inputMask?: string;
  Icon: IconType;
}

export interface InputRef {
  setValue(value: string): void;
  getValue: () => string;
}

const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = (
  { name, disabled, divClassName, inputMask, defaultValue, Icon, onChange, ...rest },
  ref,
) => {
  const inputRef = useRef<ReactInputMask>(null);
  const { fieldName, error, defaultValue: formDefault, registerField } = useField(name);
  const [mask, setMask] = useState(defaultValue || formDefault || '');

  const handleMask = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    return setMask(value);
  };

  useEffect(() => {
    setMask(defaultValue || formDefault || '');
  }, [defaultValue, formDefault]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      clearValue: pickerRef => {
        setMask('');
      },
    });
  }, [fieldName, registerField]);

  useImperativeHandle(ref, () => ({
    setValue(value: string) {
      setMask(value);
    },
    getValue() {
      return mask;
    },
  }));

  return (
    <Container className={divClassName} isError={!!error} disabled={disabled}>
      <Icon size={40} color={colors.secondary} style={{ padding: 5 }} />
      <Separator />
      <InputComp
        name={fieldName}
        mask={inputMask || ''}
        value={mask}
        autoComplete="nope"
        onChange={e => {
          handleMask(e);
          if (onChange) onChange(e);
        }}
        ref={inputRef}
        {...rest}
      />
    </Container>
  );
};

export default forwardRef(Input);
