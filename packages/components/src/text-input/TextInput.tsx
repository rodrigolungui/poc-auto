import React from "react";

interface TextInputProps {
  className: string;
  id: string;
  label: string;
  name: string;
  dataTestid?: string;
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
}: TextInputProps) => {
  return (
    <div className={className} data-testid={dataTestid}>
      <label style={{ display: "block" }} htmlFor={name}>
        {label}
      </label>
      <input name={name} id={id} />
    </div>
  );
};

export { TextInput };
