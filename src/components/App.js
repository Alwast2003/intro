import React, { useEffect, useState } from "react";
import "../assets/css/main.scss";

import Header from "./_Header";
import Main from "./_Main";
import Cookies from "./_Cookies";
import HeaderSecond from "./_HeaderSecond";
import { Development } from "./_Main/helpers/Development";

function App() {
  const [cookie, setCookie] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (!document.location.href.includes('index')) {
      const currentCook = document.cookie
      .split("; ")
      .find((item) => item === "cookie_accepted=true");

      if (currentCook) {
        setCookie(false);
      } else {
        setCookie(true);
      }
    }
  }, []);

  return (
    <div className="screen_block">
      {counter === 1 ? <HeaderSecond /> : <Header />}
      <Main plus={setCounter} cookie={cookie} />
      {cookie && <Cookies setCookie={setCookie} />}
      <Development />
    </div>
  );
}

export default App;
