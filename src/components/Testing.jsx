import React from "react";

function testing(props) {
  const trueText = (
    <h1 className=" text-white uppercase font-medium text-2xl trueText">
      {props.title}
    </h1>
  );
  const falseText = (
    <h1 className=" text-white uppercase font-medium text-2xl falseText">
      {props.para}
    </h1>
  );

  return props.rightContent ? trueText : falseText;
}

export default testing;
