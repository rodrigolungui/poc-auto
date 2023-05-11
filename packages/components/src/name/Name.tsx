import React from "react";

interface NameProps {
  firstName: string;
  lastName: string;
  birthday: string;
}

const Name = ({ firstName, lastName, birthday }: NameProps) => {
  return (
    <div>
      Name: {firstName} {lastName}
      Birthday: {birthday}
    </div>
  );
};

export { Name };
