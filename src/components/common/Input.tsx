import React, { useRef, useState } from "react";
import { InputBaseComponentProps, TextField, styled } from "@mui/material";
import {
  Control,
  Controller,
  FieldErrors,
  FieldValues,
  UseFormRegister,
  UseFormTrigger,
} from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

type InputProps = {
  label: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  multiline?: boolean;
  rows?: number;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  required?: boolean;
  control?: Control<FieldValues>;
  inputProps?: InputBaseComponentProps;
  isDisabled?: boolean;
  registerName?: string;
  pattern?: RegExp;
  patternError?: string;
  errors?: FieldErrors<FieldValues>;
};

const Input: React.FC<InputProps> = (props) => {
  const Input = styled(TextField)(() => ({
    "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
      display: "none",
    },
    "& input[type=number]": {
      MozAppearance: "textfield",
    },
    "& input::placeholder": {
      color: "#9ca3af",
    },
    background: "white",
    "& input:disabled": {
      background: "#f3f4f6",
    },
    borderColor: "#c4c2c2",
  }));

  const {
    label,
    defaultValue = "",
    onValueChange,
    multiline,
    rows = 1,
    type = "text",
    placeholder,
    required = false,
    control,
    inputProps,
    isDisabled = false,
    registerName = "",
    pattern = /()/,
    patternError = "",
    errors,
  } = props;

  const [isTyping, setIsTyping] = useState(false);

  const handleOnChange = async (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    if (typeof onValueChange === "function") {
      onValueChange(event.target.value);
    }
  };

  return (
    <div className="w-full">
      <div className="mb-1">
        {label}
        {required && <span className="text-red-600 ml-0.5">*</span>}
      </div>
      <Controller
        control={control}
        name={registerName}
        defaultValue={defaultValue}
        disabled={isDisabled}
        rules={{
          required: { value: required, message: `${label} is required!` },
          pattern: { value: pattern, message: patternError },
        }}
        render={({ field: { onChange, value, onBlur, disabled, name } }) => {
          return (
            <Input
              key={name}
              disabled={disabled}
              fullWidth
              multiline={multiline}
              rows={rows}
              value={value}
              size="small"
              type={type}
              inputProps={inputProps}
              placeholder={placeholder}
              onChange={(event) => {
                // setIsTyping(true);
                onChange(event);
                handleOnChange(event);
              }}
              onBlur={() => {
                // setIsTyping(false);
                onBlur();
              }}
              // autoFocus={isTyping}
            />
          );
        }}
      />
      {!isTyping && errors && (
        <ErrorMessage
          errors={errors}
          name={registerName}
          render={({ message }) => (
            <div className="text-red-600 mt-1">{message}</div>
          )}
        />
      )}
    </div>
  );
};

export default Input;
