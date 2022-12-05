import React, { useEffect, useRef, useState } from "react";
import s from "./frage_2.module.scss";

import Footer from "../../helpers/Footer";
import haken from './images/Haken.svg';
import coctails from './images/Illu-Cocktails.svg';
import fire from './images/Illu-Feuer.svg';
import island from './images/island.svg';
import sunGlasses from './images/sunglasses.svg'
import FooterMob from "../../helpers/FooterMob";

import first from './images/toggleImages/Urlauber-01.svg';
import second from './images/toggleImages/Urlauber-02.svg';
import third from './images/toggleImages/Urlauber-03.svg';
import fourth from './images/toggleImages/Urlauber-04.svg';
import fiveth from './images/toggleImages/Urlauber-05.svg';
import sixth from './images/toggleImages/Urlauber-06.svg';

const people = [
  first,
  fourth,
  second,
  fiveth,
  third,
  sixth,
];

const Frage_2 = (props) => {
  const { meets, setMeets } = props;
  const index = useRef(0);
  const [image, setImage] = useState(people[0]);
  

  const listTypeHoliday = [
    {
      type: "cocktails",
      checked: meets === "cocktails" ? true : false,
      description:
        "Oh ja, ich will etwas erleben und freue mich auf neue Bekanntschaften.",
      image: coctails,
    },
    {
      type: "camping",
      checked: meets === "camping" ? true : false,
      description:
        "Ich unternehme gern etwas mit anderen, ist mir aber nicht das Wichtigste.",
      image: fire,
    },
    {
      type: "sunbath",
      checked: meets === "sunbath" ? true : false,
      description:
        "Jein. Ich bin oﬀen, aber nicht aktiv auf der Suche nach Anschluss.",
      image: sunGlasses,
    },
    {
      type: "island",
      checked: meets === "island" ? true : false,
      description:
        "Ganz ehrlich? Urlaub ist Zeit für mich. Ich will abschalten und Kraft tanken.",
      image: island,
    },
  ];

  useEffect(() => {
    const timeId = setTimeout(function addNew() {
      if (index.current >= 5) {
        index.current = 0
      } else {
        index.current++;
      }

      setImage(people[index.current]);
    }, 1500)

    return () => clearInterval(timeId);
  }, [image, index])

  return (
    <div className={s.container}>

      <div className={s.human}>
        <img src={image} alt="persons"/>
      </div>
      <h1 className={s.title}>Urlaub! <br className={s.hideTitle} /> Beste Zeit, Menschen kennenzulernen?</h1>

      <div>
        {listTypeHoliday.map((item) => (
          <label className={s.checkboxContainer} key={item.type}>
            <label className={s.inside}>
                <input
                  id={`${item.type}`}
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => {
                    if (item.checked) {
                      setMeets("");
                    } else {
                      setMeets(item.type, item.description);
                    }
                  }}
                />
                <img src={haken} alt="" />
            </label>

            <p>
              {item.description}
            </p>

            <img className={s.visible} src={item.image} alt={item.type} />
          </label> 
        ))}
      </div>
      <Footer
        title="Weiter"
        setActiveFrage={props.setActiveFrage}
        percent="50"
        prevPage="frage_1"
        nextPage="frage_3"
        buttonShow={meets !== "" ? true : false}
      />

      <FooterMob
        title="Weiter"
        setActiveFrage={props.setActiveFrage}
        percent="50"
        prevPage="frage_1"
        nextPage="frage_3"
        buttonShow={meets !== "" ? true : false}
      />
    </div>
  );
};

export default Frage_2;