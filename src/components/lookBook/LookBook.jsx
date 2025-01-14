import React from "react";
import LookBookData from "./LookBookData";

function LookBook() {
  return (
    <div>
      <ul className="flex gap-5 justify-between pb-8 mb-8 border-b border-gray-100 overflow-auto">
        <LookBookData />
      </ul>
    </div>
  );
}

export default LookBook;
