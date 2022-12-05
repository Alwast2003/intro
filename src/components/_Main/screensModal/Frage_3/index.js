import React, { useState } from "react";
import s from "./frage_3.module.scss";

import Footer from "../../helpers/Footer";
import SliderScreen from "../../helpers/Slider";
import listener from './images/biggerListener.png';
import desktopListener from './images/desktopListener.png';
import FooterMob from "../../helpers/FooterMob";
import left from './images/left.svg';
import right from './images/right.svg';

const Frage_3 = (props) => {
  const { musicWichtig, setMusicWichtig } = props;
  const [arrows, setArrows] = useState(true);

  return (
    <div className={s.container}>
      <h1>Wie wichtig ist Musik <br className={s.hideInTitle} /> in deinem Urlaub?</h1>

      <div className={s.line}></div>

      <div className={s.imageContainer}>
        <picture>
          <source srcSet={desktopListener} media="(min-width: 801px)"/>
          <img src={listener} className={s.listener} alt="listener"/>
        </picture>
      </div>
      
      <div className={s.togglerContainer}>
          <div className={s.containerTog}>
              <span className={s.hide}>unwichtig</span>
              <div className={s.sliderContainer}>
                {arrows && (<img src={left} className={s.arrow} alt="left arrow"/>)}
                <SliderScreen
                typeOfRest={musicWichtig}
                setTypeOfRest={setMusicWichtig}
                frage="3"
                setArrows={setArrows}
                />
                {arrows && (<img src={right} className={s.arrow} alt="right arrow"/>)}
              </div>
              <span className={s.hide}>sehr wichtig</span>
          </div>
          <div className={s.div}>
            <span>unwichtig</span>
            <span>sehr wichtig</span>
          </div>
      </div>
      <Footer
        title="Weiter"
        setActiveFrage={props.setActiveFrage}
        percent="75"
        prevPage="frage_2"
        nextPage="frage_4"
        buttonShow={musicWichtig === 3 ? false : true}
      />

      <FooterMob
        title="Weiter"
        setActiveFrage={props.setActiveFrage}
        percent="75"
        prevPage="frage_2"
        nextPage="frage_4"
        buttonShow={musicWichtig === 3 ? false : true}
      />
    </div>
  );
};

export default Frage_3;
