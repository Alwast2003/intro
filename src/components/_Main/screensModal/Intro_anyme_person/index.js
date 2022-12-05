import React, { useEffect, useState } from "react";

import s from "./intro.module.scss";
import desktopText from "./images/desktoptext.svg";
import mobiletext from './images/minText.png';
import father from './images/family_Zustand_1_Vater.png';
import aloneParent from './images/family_Zustand_2_Alleinerziehende.png';
import grandmother from './images/family_Zustand_3_Oma.png';
import mother from './images/family_Zustand_4_Mutti.png';
import friend from './images/family_Zustand_5_Freundin.png';

const images = [
  father,
  aloneParent,
  grandmother,
  mother,
  friend,
];

const Intro = (props) => {
  const [state, setState] = useState(images[0]);
  const { plus, cookie } = props;

  useEffect(() => {
      plus(0);
      
      let timerId = setTimeout(function anymeShowFamilyPerson() {
      const random = Math.floor(Math.random() * 5);

      setState((prevState) => {
        if (prevState === images[random]) {
          if (random < 4) {
            return images[random + 1];
          }
          if (random === 4) {
            return images[random - 1];
          }
        } else {
          return images[random];
        }
      });

      timerId = setTimeout(anymeShowFamilyPerson, 1000);
    }, 1000);

    return () => clearTimeout(timerId);
  }, [plus, state]);

  return (
    <>
      <div className={cookie ? s.animePersonOpacity : s.animePerson}>
        <img src={state} alt="family" />
      </div>

      <div className={cookie ? s.opacityContainer : s.container}>
        <div className={s.line} />
        <div className={s.textBlock}>
          <h1>Entdecke deinen Urlaubstyp!</h1>
          <div className={s.letsGo}>
            <picture>
              <source srcSet={desktopText} media="(min-width: 800px)"/>
              <img src={mobiletext} alt="text"/>
            </picture>
            <button
              onClick={() => {
                props.setActiveFrage("frage_1");
                props.plus(1);
              }}
            >
              Los geht's!
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
