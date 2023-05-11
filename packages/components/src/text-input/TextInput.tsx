import React, { ChangeEvent } from "react";

interface TextInputProps {
  className: string;
  id: string;
  label: string;
  name: string;
  dataTestid?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Text input component, which includes the label
 */
const TextInput = ({
  className,
  id,
  label,
  name,
  dataTestid,
  onChange = () => {},
}: TextInputProps) => {
  return (
    <div className={className} data-testid={dataTestid}>
      <label style={{ display: "block" }} htmlFor={name}>
        {label}
      </label>
      <input name={name} id={id} onChange={onChange} />
    </div>
  );
};

export { TextInput };
