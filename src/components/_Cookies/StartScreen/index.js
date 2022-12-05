import React, { useState } from "react";
import useMediaQuery from '@mui/material/useMediaQuery';

import s from "./startScreen.module.scss";

const INITIAL = {
  notwendig: true,
  statistik: true,
  personalisierung: true,
  openCookiesMenu: false,
};

export default function StartScreen({ setCookie }) {
  const [state, setState] = useState(INITIAL);
  const media = useMediaQuery('(max-width:800px)');

  return (
    <>
      <div className={s.chooseCookie}>
        <div
          className={`${s.chooseCookie__text} ${
            state.openCookiesMenu && s.classToClick
          }`}
          style={media && state.openCookiesMenu ? {paddingBottom: '20px'} : {}}
        >
          <h3>Wir haben ein paar Urlaubscookies für euch!</h3>
          <p>
            Ihr habt die Wahl, ob das nur die unbedingt Notwendigen für den
            Betrieb der Website sind oder ob auch Cookies zur anonymen
            statistischen Analyse zugelassen werden. Weitere Infos findet ihr in
            unserer <a href="https://holidayfind.de/klassik/datenschutz" target="_blank">Datenschutzerklärung</a>.
          </p>
          <div className={s.chooseCookie__cookiesMenu}>
            <div className={s.checkbox_block}>
              <label id={state.notwendig ? s.checkedCookieParam : ""}>
                <input
                  type="checkbox"
                  name="notwendig"
                  checked={state.notwendig}
                />
                Notwendig
              </label>
              <label id={state.statistik ? s.checkedCookieParam  : ""}>
                <input
                  type="checkbox"
                  name="statistik"
                  checked={state.statistik}
                  onChange={() =>
                    setState({ ...state, statistik: !state.statistik })
                  }
                />
                Statistik
              </label>
              <label id={state.personalisierung ? s.checkedCookieParam  : ""}>
                <input
                  type="checkbox"
                  name="personalisierung"
                  checked={state.personalisierung}
                  onChange={() =>
                    setState({
                      ...state,
                      personalisierung: !state.personalisierung,
                    })
                  }
                />
                Personalisierung
              </label>
            </div>
            <div className={s.text}>
              <h4>Notwendig</h4>
              <p>zum reibungslosen Betrieb von holidayfind.de</p>
              <h4>Statistik</h4>
              <p>
                zur Optimierung von holidayfind.de durch anonymisierte
                Informationen.
              </p>
              <h4>Personalisierung</h4>
              <p>
                zum anonymen temporären Speichern von Merklisten, Reisedaten
                etc. – erst dadurch ist es möglich z.B. persönliche Wünsche mit
                Hotelsservices zu matchen.
              </p>
            </div>
            <div className={s.btn_agree_cookies}>
              <button type="button" onClick={() => setCookie(false)}>
                Auswahl akzeptieren
              </button>
              <button
                type="button"
                onClick={() => {
                  setCookie(false);
                  setState({ ...INITIAL, openCookiesMenu: true });
                  document.cookie = "cookie_accepted=true; path=/";
                }}
              >
                Alle akzeptieren
              </button>
            </div>
          </div>
        </div>
        <div className={media && state.openCookiesMenu ? s.hide : s.chooseCookie__buttons}>
          <button type="button" onClick={() => {
              setCookie(false);
              document.cookie = "cookie_accepted=true; path=/";
              setState({ ...state, openCookiesMenu: !state.openCookiesMenu })
            }}>
            Alle Cookies zulassen
          </button>
          <button
            type="button"
            onClick={() =>
              setState({ ...state, openCookiesMenu: !state.openCookiesMenu })
            }
          >
            Einstellungen verwalten
          </button>
        </div>
      </div>
    </>
  );
}
