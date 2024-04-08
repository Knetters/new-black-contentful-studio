import React from "react";

interface ButtonComponentProps {
  text: string;
}

export const Button: React.FC<ButtonComponentProps> = ({ text }) => {
  return <button>{text}</button>;
};
