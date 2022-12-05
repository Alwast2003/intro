/* eslint-disable eqeqeq */
import { React } from "react";
import s from "./finished.module.scss";
import { Meta } from "./Meta";
import { result } from "../../../../assets/data.json";
import useMediaQuery from '@mui/material/useMediaQuery';

import Footer from "../../helpers/Footer";
import FooterMob from "../../helpers/FooterMob";

const Finished = (props) => {
  const time = new Date();
  const { objToCalc, number } = props;
  let current = {}
  const media = useMediaQuery('(max-width:800px)');

  if (number > -1) {
    current = result.filter(item => item.id == number)[0];
  } else {
    let genderResp = objToCalc.gender === "divers" ? "female" : objToCalc.gender;

    const filterGender = result.find(
      ({ gender, typeOfRest, meets, musicWichtig, partners }) =>
        gender === genderResp &&
        typeOfRest == objToCalc.typeOfRest &&
        meets === objToCalc.meets
    );
    current = filterGender
      ? filterGender
      : result.find((item) => item.title === "Freiheitsliebender Socialiser");
  }

  const setImage = (image) => {
    const splittedImage = image.split('/');
    return splittedImage[splittedImage.length - 1];
  }

  const gender = objToCalc.gender === 'male' ? 'Mann'
    : objToCalc.gender === 'female'
    ? 'Frau'
    : 'Divers';
  
  const image = setImage(current.image);

  const objToSend = {
    finishTime: `${time.getFullYear()}:${+time.getMonth() + 1}:${time.getDate()} ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`,
    language: navigator.language,
    browserAgent: navigator.userAgent,
    id: current.id,
    type: current.title,
    image: image,
    checked_typeOfRest: objToCalc.typeOfRest,
    checked_meets: objToCalc.meetsDescription,
    checked_musicWitching: objToCalc.musicWichtig,
    checked_partners: objToCalc.partners,
    checked_gender: gender,
  };

  return (
    <>
      <Meta title={current.title} description={current.text} image={current.image.slice(22, -4)} />
      <div className={s.container}>
        <h1 className={s.title}>
          <span>{`Vielen Dank! Wir denken, du bist im Urlaub ein${(current.genderResp === 'divers' || current.genderResp === 'female') 
                  && current.title !== 'moderner Lebemensch' ? 'e' : ''}`}
          </span>
          {`${current.title}.`}
        </h1>

        <div className={s.textBlock}>
          <div className={s.resultPicture} >
            <img src={process.env.PUBLIC_URL + current.image} alt="man" />
          </div>
          <div className={s.textContainer}>
            <div
              className="scrollen"
              style={!media ? {
                  position: 'absolute',
                  transformOrigin: 'top left',
                  transform: 'rotate(90deg) translateY(-25px)',
                  fontWeight: '600',
                  fontSize: '14px',
                }
                : {display: 'none'}
              }
            >
              {`> scrollen >>>>>`}
            </div>
            <div className={s.text}>
              {current.text.split('&').map((item, index) => (
                <p key={index}>
                  {item}
                </p>
              ))}
            </div>
              <div className={s.line}></div>
          </div>    
        </div>

        <Footer
          title="Jetzt individuelle Reise finden"
          setActiveFrage={props.setActiveFrage}
          percent=""
          prevPage="frage_4"
          nextPage=""
          buttonShow={true}
          current={current}
          objToSend={objToSend}
        />

        <FooterMob
          title="Jetzt individuelle Reise finden"
          setActiveFrage={props.setActiveFrage}
          percent=""
          prevPage="frage_4"
          nextPage=""
          buttonShow={true}
          current={current}
          objToSend={objToSend}
        />
      </div>
    </>
  );
};

export default Finished;
