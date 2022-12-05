import React, { useEffect, useState } from "react";
import {FacebookShareButton, TwitterShareButton} from 'react-share';
import { sendRes } from "../../../../utils/api";
import s from "./footer.module.scss";
import twitter from './images/twitter.png';
import facebook from './images/facebook.png';
import percent25 from './images/Prozent-25.svg';
import percent50 from './images/50-Prozent.svg';
import percent75 from './images/75-Prozent.svg';
import percent100 from './images/100-Prozent.svg';

const Footer = ({
  title,
  setActiveFrage,
  percent,
  prevPage,
  nextPage,
  buttonShow,
  current,
  objToSend,
}) => {
  const [hide, setHide] = useState(true)
  const [hrefString, setHrefString] = useState('');
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (current) {
      const numberToFind = current.id;
      setHrefString(numberToFind);
    }
    if (document.location.href.includes('index')) {
      setHide(false);
    }
  }, [current])

  return (
    <>
      <footer className={s.desktop}>
        {percent !== "" ? (
          <div className={s.percent}>
            <img src={
                percent === '25' 
                ? percent25
                : percent === '50'
                ? percent50
                : percent === '75'
                ? percent75
                : percent100
              }
              alt={`${percent}%`}
            />
          </div>
        ) : hide && (
            //hidden block for user
            <div className={s.socials} style={{visibility: "hidden"}}>
              <TwitterShareButton
                url={`https://holidayfind.de/urlaubstyp/index.${hrefString}.html`}
                title={current.title} via={`${current.title.replace(' ', '')} ${current.text.split(' ').slice(0,30).join(' ')}...`}
                onClick={() => {
                  return
                }}
              >
                <img src={twitter} style={{width: '30px', height: '30px'}} alt="twitter" />
              </TwitterShareButton>
              <FacebookShareButton
                url={`https://holidayfind.de/urlaubstyp/index.${hrefString}.html`}
                onClick={() => {
                  return
                }}
              >
                <img src={facebook} style={{width: '30px', height: '30px'}} alt="facebook"/>
              </FacebookShareButton>
            </div>
          )
        }

        {buttonShow
          ? title === 'Jetzt individuelle Reise finden'
            ? (<a
                href="https://holidayfind.de/individual/urlaubsinteressen"
                style={hide ? {} : {transform: 'translate(-50%, -30px)'}}
                className={s.btn}
                onClick={(event) => {
                  if (counter === 0) {
                    event.preventDefault();
                    setCounter(1);
                    setTimeout(() => {
                      setCounter(0)
                    }, 1000)
                  }
                }}
               >
                  {title}
                </a>)
            : (<button
              className={s.btn}
              onClick={() => {
                if (title === "Jetzt individuelle Reise finden") {
                  window.location.replace("https://google.com");
                } else {
                  setActiveFrage(nextPage);
                }
              }}
            >
              {title}
            </button>)
          : ''
        }

        {hide && (
          <button className={s.btn_back} onClick={() => setActiveFrage(prevPage)}>zurück</button>
        )}
      </footer>
    </>
  );
};

export default Footer;