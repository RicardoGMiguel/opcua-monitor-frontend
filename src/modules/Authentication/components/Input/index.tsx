import React, { InputHTMLAttributes, useRef, useEffect, useState, forwardRef, useImperativeHandle } from 'react';
import { useField } from '@unform/core';
import { FiAlertCircle } from 'react-icons/all';

import ReactInputMask from 'react-input-mask';
import { IconType } from 'react-icons';
import colors from '../../../../style/colors';
import { Container, InputComp, ShowPasswordButton, Error } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  divClassName?: string;
  inputMask?: string;
  Icon: IconType;
  isPassword: boolean;
  clickOnEyeButton?: () => void;
  EyeIcon?: IconType;
}

export interface InputRef {
  // eslint-disable-next-line no-unused-vars
  setValue(value: string): void;
  getValue: () => string;
}

const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = (
  { name, disabled, divClassName, inputMask, defaultValue, Icon, isPassword, clickOnEyeButton, EyeIcon, onChange, ...rest },
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
      // eslint-disable-next-line no-unused-vars
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
      <Icon size={34} color={colors.primary} style={{ padding: 6 }} />
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
      {isPassword && EyeIcon && (
        <ShowPasswordButton onClick={clickOnEyeButton}>
          <EyeIcon color={colors.inactive} size={25} />
        </ShowPasswordButton>
      )}
      {error && (
        <Error title={error}>
          <FiAlertCircle color={colors.danger} size={20} />
        </Error>
      )}
    </Container>
  );
};

export default forwardRef(Input);
