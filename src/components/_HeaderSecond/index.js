import React from "react";
import s from "./header.module.scss";
import logo from './images/Logo-holidayfind-Claim4.svg';

const HeaderSecond = () => {
  return (
    <header className={s.main_header}>
      <div className={s.logo}>
        <a href="http://holidayfind.de" className={s.logo_link}>
          <img src={logo} alt="Logo" />
        </a>
      </div>
    </header>
  );
};

export default HeaderSecond;
