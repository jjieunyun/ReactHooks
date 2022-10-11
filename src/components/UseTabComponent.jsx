import React, { useState } from "react";
import useTabs from "../Hooks/useTabs";

const content = [
  {
    tab: "section 1",
    content: "Section1 Content",
  },
  {
    tab: "section 2",
    content: "Section2 Content",
  },
  {
    tab: "section 3",
    content: "Section3 Content",
  },
];

const UseTabComponent = () => {
  const { currentItem, changeItem } = useTabs(0, content);

  return (
    <div>
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      {currentItem.content}
    </div>
  );
};

export default UseTabComponent;
