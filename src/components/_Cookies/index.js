import React from "react";
import StartScreen from "./StartScreen";

import s from "./newStart.module.scss";

export default function Cookie({setCookie}) {
  return (
    <div className={s.newStart__container}>
      <StartScreen setCookie={setCookie}/>
    </div>
  );
}
