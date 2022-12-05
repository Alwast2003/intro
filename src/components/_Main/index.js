import React, { useEffect, useState } from "react";
import s from "./mainModal.module.scss";

import Intro from "./screensModal/Intro_anyme_person";
import FRAGE_1 from "./screensModal/Frage_1";
import FRAGE_2 from "./screensModal/Frage_2";
import FRAGE_3 from "./screensModal/Frage_3";
import FRAGE_4 from "./screensModal/Frage_4";
import Finished from "./screensModal/Finished";

const INITIAL = {
  typeOfRest: 3,
  meets: "",
  meetsDescription: "",
  musicWichtig: 3,
  partners: "",
  gender: "",
};

const Main_modal = (props) => {
  const [state, setState] = useState(INITIAL);
  const [activeFrage, setActiveFrage] = useState("");
  const [number, setNumber] = useState(-1);

  useEffect(() => {
    if (document.location.href.includes('index')) {
      const url = decodeURIComponent(document.location.href)
      const splittedHref = url.split('/');
      const number = splittedHref[splittedHref.length - 1].split('.')[1];

      setNumber(number);
      setActiveFrage('finished')
    }
  }, [])
 
  return (
    <div className={props.cookie ? s.overlayCookie : s.overlay}>
      <div className={s.mainModal}>
        {activeFrage === "" && (
          <Intro
            cookie={props.cookie}
            plus={props.plus}
            setActiveFrage={setActiveFrage}
          />
        )}
        {activeFrage === "frage_1" && (
          <FRAGE_1
            setActiveFrage={setActiveFrage}
            typeOfRest={state.typeOfRest}
            setTypeOfRest={(weather) =>
              setState({ ...state, typeOfRest: weather })
            }
          />
        )}
        {activeFrage === "frage_2" && (
          <FRAGE_2
            setActiveFrage={setActiveFrage}
            meets={state.meets}
            setMeets={(type, description) => {
              setState({ ...state, meets: type, meetsDescription: description })
            }}
          />
        )}
        {activeFrage === "frage_3" && (
          <FRAGE_3
            setActiveFrage={setActiveFrage}
            musicWichtig={state.musicWichtig}
            setMusicWichtig={(musicWichtig) =>
              setState({ ...state, musicWichtig: musicWichtig })
            }
          />
        )}
        {activeFrage === "frage_4" && (
          <FRAGE_4
            setActiveFrage={setActiveFrage}
            partners={state.partners}
            setPartners={(partner) => setState({ ...state, partners: partner })}
            gender={state.gender}
            setGender={(dayTime) => setState({ ...state, gender: dayTime })}
          />
        )}
        {activeFrage === "finished" && (
          <Finished setActiveFrage={setActiveFrage} objToCalc={state} number={number} />
        )}
      </div>
    </div>
  );
};

export default Main_modal;
