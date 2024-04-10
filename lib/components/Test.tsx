import React, { ReactNode } from "react";

interface TestComponentProps {
  title: string;
  children: ReactNode;
}

export const Test: React.FC<TestComponentProps> = ({
  title,
  children,
  ...experiencesProps
}) => {
  return (
    <div {...experiencesProps}>
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
};
