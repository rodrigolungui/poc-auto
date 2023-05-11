import React, { ChangeEvent, HTMLAttributes } from "react";

interface TextInputProps {
  className: string;
  id: string;
  label: string;
  name: string;
  dataTestid?: string;
  disabled: boolean;
  inputAttrs?: HTMLAttributes<HTMLInputElement>;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Text input component, which includes the label
 */
const TextInput = ({
  className,
  id,
  inputAttrs,
  label,
  name,
  dataTestid,
  disabled,
  onChange = () => {},
}: TextInputProps) => {
  return (
    <div className={className} data-testid={dataTestid}>
      <label style={{ display: "block" }} htmlFor={name}>
        {label}
      </label>
      <input
        name={name}
        id={id}
        disabled={disabled}
        onChange={onChange}
        {...inputAttrs}
      />
    </div>
  );
};

export { TextInput };
