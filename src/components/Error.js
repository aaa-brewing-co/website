import React from "react";

import Navbar from "./commons/Navbar";
import Header from "./commons/Header";

function Error() {
  return (
    <div className="error">
      <Navbar />
      <Header
        title="ONO GOT ERROR"
        emoji="😰"
      />
    </div>
  );
};

export default Error;