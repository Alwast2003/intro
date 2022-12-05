import Slider, {
  SliderThumb,
  SliderMark,
} from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import { useEffect } from "react";

const marks = [
  {
    value: 1.1,
  },
  {
    value: 2,
  },
  {
    value: 3,
  },
  {
    value: 4,
  },
  {
    value: 4.9,
  },
];

const AirbnbSlider = styled(Slider)(({ theme }) => ({
  padding: "20px 0",

  "& .MuiSlider-thumb": {
    height: 30,
    width: 37,
    borderRadius: 5,
    backgroundColor: "#8CCC03",
    border: "1px solid currentColor",

    "& .airbnb-bar": {
      height: 18,
      width: 1,
      backgroundColor: "currentColor",
      marginLeft: 2,
      marginRight: 2,
    },
  },
  "& .MuiSlider-rail": {
    color: theme.palette.mode === "dark" ? "#bfbfbf" : "#d8d8d8",
    opacity: theme.palette.mode === "dark" ? undefined : 1,
    height: 6,
    backgroundColor: "#a9b8c3",
    border: "1px solid #000",
  },

  "span.MuiSlider-colorPrimary.MuiSlider-sizeMedium.MuiSlider-root.MuiSlider-trackFalse.css-1c70q3a-MuiSlider-root": {
    padding: "20px 0",
  },
}));

function AirbnbThumbComponent(props) {
  const { children, ...other } = props;

  return (
    <SliderThumb {...other}>
      {children}
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
    </SliderThumb>
  );
}

function MarkComponent(props) {
  const { children, ...other } = props;
  const frage = props.ownerState.componentsProps.frage;

  let height;
  let width;

  if (props["data-index"] === 0 || props["data-index"] === 4 || props["data-index"] === 2) {
    height = 19;
    width = 3;
  } else {
    height = 13;
    width = 2;
  }

  const styles = frage === '3' ? {
      height: height,
      width: width,
      backgroundColor: "#ffffff",
      position: "absolute",
      top: 2,
      transform: "translateY(-50%)",
    }
    : {
      height: height,
      width: width,
      position: "absolute",
      top: 2,
      transform: "translateY(-50%)",
      backgroundColor: "#0c3f6c",
      borderRadius: 8,
    };

  return (
    <SliderMark {...other}>
      <div
        style={styles}
      />
    </SliderMark>
  );
}

const Slider_Screen = (props) => {
  const { typeOfRest, setTypeOfRest, frage, setArrows} = props;

  useEffect(() => {
    if (typeOfRest === 3) {
      setArrows(true);
    } else {
      setArrows(false);
    }
  }, [typeOfRest, frage, setArrows])

  return (
    <AirbnbSlider
      components={{ Thumb: AirbnbThumbComponent, Mark: MarkComponent }}
      componentsProps={{ frage }}
      marks={marks}
      track={false}
      value={typeOfRest}
      max={5}
      min={1}
      onChange={({ target }) => setTypeOfRest(target.value)}
      frage={frage}
    />
  );
};

export default Slider_Screen;
