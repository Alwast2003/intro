import React from "react";
import s from "./frage_4.module.scss";

import Footer from "../../helpers/Footer";

import haken from "./images/Haken.svg";
import man from "./images/Illu-traveller-man-v3.png";
import woman from "./images/Illu-traveller-woman-v3.png";
import rainbow from "./images/rainbow.svg";
import moon from "./images/moon.svg";
import sun from "./images/sun.svg";
import FooterMob from "../../helpers/FooterMob";

const Frage_4 = (props) => {
  const { partners, setPartners, gender, setGender } = props;
  

  const listDayTime = [
    {
      type: "female",
      checked: gender === "female" ? true : false,
      description:
        "Oh ja, ich will was erleben und freue mich auf neue Bekanntschaften.",
      image: woman,
    },

    {
      type: "divers",
      checked: gender === "divers" ? true : false,
      description:
        "Oh ja, ich will was erleben und freue mich auf neue Bekanntschaften.",
      image: rainbow,
    },

    {
      type: "male",
      checked: gender === "male" ? true : false,
      description:
        "Oh ja, ich will was erleben und freue mich auf neue Bekanntschaften.",
      image: man,
    },
  ];

  const listPartners = [
    {
      type: "als_Single",
      checked: partners === "als_Single" ? true : false,
      label: "als Single",
    },
    {
      type: "mit_Kind",
      checked: partners === "mit_Kind" ? true : false,
      label: "mit Kind/Kindern",
    },
    {
      type: "mit_Partner",
      checked: partners === "mit_Partner" ? true : false,
      label: "mit Partner*in",
    },
    {
      type: "mit_Freunden",
      checked: partners === "mit_Freunden" ? true : false,
      label: "mit Freunden",
    },
  ];

  return (
    <div className={s.container}>
      <h1 className={s.genderTitle}>
        Für wen planst du wahrscheinlich <br />
        den nächsten Urlaub?
      </h1>

      <h2>
        <div className={s.containertitle}>Für mich …</div>
      </h2>

      <div className={s.partneer__gender}>
        <img className={s.sideImage} src={moon} alt="moon" />
        {listDayTime.map((item) => (
          <label
            key={item.type}
            className={item.type === "divers" ? s.gender__rainbow : s.people}
          >
            <label
              className={
                item.type === "divers"
                  ? s.insideRainbow
                  : item.type === "female"
                  ? s.inside
                  : s.insideRight
              }
            >
              <input
                id={`${item.type}`}
                type="checkbox"
                checked={item.checked}
                onChange={() => {
                  if (item.checked) {
                    setGender("");
                  } else {
                    setGender(item.type);
                  }
                }}
              />
              <img className={s.inside} src={haken} alt="haken" />
            </label>
            <img
              className={item.type === "divers" ? s.rainbow : s.man}
              src={item.image}
              alt={item.type}
            />
          </label>
        ))}
        <img className={s.sideImage} src={sun} alt="sun" />
      </div>

      <div className={s.partneer__types}>
        {listPartners.map((item) => (
          <label className={s.outside} key={item.type}>
            <label className={s.inside}>
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => {
                  if (item.checked) {
                    setPartners("");
                  } else {
                    setPartners(item.type);
                  }
                }}
              />
              <img src={haken} alt="haken" />
            </label>
            <span>{item.label}</span>
          </label>
        ))}
      </div>

      <Footer
        title="Deinen Urlaubstyp entdecken"
        setActiveFrage={props.setActiveFrage}
        percent="100"
        prevPage="frage_3"
        nextPage="finished"
        buttonShow={partners !== "" && gender !== "" ? true : false}
      />

      <FooterMob
        title="Deinen Urlaubstyp entdecken"
        setActiveFrage={props.setActiveFrage}
        percent="100"
        prevPage="frage_3"
        nextPage="finished"
        buttonShow={partners !== "" && gender !== "" ? true : false}
      />
    </div>
  );
};

export default Frage_4;
