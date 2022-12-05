import React, { useState } from "react";
import s from "./frage_1.module.scss";

import FooterMobile from '../../helpers/FooterMob';
import Footer from "../../helpers/Footer";
import SliderScreen from "../../helpers/Slider";
import clouds from './images/Clouds.svg';
import tree from './images/tree.svg';
import left from './images/left.svg';
import right from './images/right.svg';

const Frage_1 = React.memo((props) => {
  const { typeOfRest, setTypeOfRest } = props;
  const [arrows, setArrows] = useState(true);

  return (
    <>
      
      <h1 className={s.mainTitle}>Was ist Urlaub für dich?</h1>

      <div className={s.containerTitle}>
        <h2>
          <div className={s.container}>
          Das ist vor allem ...
          </div>
        </h2>
      </div>
      

      <div className={s.vacation__contentContainer}>
        <div className={s.container}>
          <div className={s.vacation__titles}>
            <h3>… ein Gefühl großer Freiheit.</h3>
            <h3>… Erholung pur und Sicherheit.</h3>
          </div>
          
          <div className={s.vacation__image}>
            <img src={clouds} className={s.hide} alt="clouds" />
            <div className={s.slider}>
              {arrows && (<img src={left} alt="left arrow"/>)}
              <SliderScreen setArrows={setArrows} typeOfRest={typeOfRest} setTypeOfRest={setTypeOfRest} frage="1"/>
              {arrows && (<img src={right} alt="right arrow"/>)}
            </div>
            <img src={tree} className={s.hide} alt="tree" />
          </div>
          
          <div className={s.vacation__description}>
              <p>Ich freue mich auf neue Eindrücke und Erlebnisse.</p>
              <p className={s.right}>Ich schätze Klarheit und Ordnung.</p>
              <div className={s.line}></div>
              <div className ={`${s.line} ${s.lineRight}`}></div>
              <p>Ich bin spontan, neugierig und <br /> unternehmungslustig.</p>
              <p className={s.right}>Ich finde meine Ruhe in strukturierter <br /> Umgebung.</p>
          </div>
        </div>
      </div>

      <Footer
        title="Weiter"
        setActiveFrage={props.setActiveFrage}
        percent="25"
        prevPage=""
        nextPage="frage_2"
        buttonShow={typeOfRest === 3 ? false : true}
      />

      <FooterMobile 
        title="Weiter"
        setActiveFrage={props.setActiveFrage}
        percent="25"
        prevPage=""
        nextPage="frage_2"
        buttonShow={typeOfRest === 3 ? false : true}
      />
      
    </>
  );
});

export default Frage_1;
