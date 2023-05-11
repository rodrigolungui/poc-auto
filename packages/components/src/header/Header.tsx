import React from "react";

interface HeaderProps {
  text: string;
}

/**
 * Header component which supports just h1
 */
const Header = ({ text }: HeaderProps) => {
  return <h1>{text}</h1>;
};

export { Header };
