import React from "react";

interface BoxProps {
  bg: string;
  border: string;
  children: JSX.Element;
  d: string;
  m: string;
}

const Box = ({ bg, border, children, d, m }: BoxProps) => {
  return (
    <div style={{ background: bg, border, display: d, margin: m }}>
      {children}
    </div>
  );
};

export { Box };
