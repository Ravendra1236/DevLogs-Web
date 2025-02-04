import React from "react";

interface PropsType {
  Children: React.ReactNode;
}

function Parent({ Children }: PropsType) {
  return <div>{Children}</div>;
}

export default Parent;
