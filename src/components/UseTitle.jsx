import React, { useEffect, useState } from "react";
import useTitle from "../Hooks/useTitle";

const UseTitle = () => {
  const titleUpdater = useTitle("loading...");

  setTimeout(() => titleUpdater("Home"), 5000);

  return <div>UseTitle</div>;
};

export default UseTitle;
