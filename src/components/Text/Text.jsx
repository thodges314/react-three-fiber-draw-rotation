import { extend } from "@react-three/fiber";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { medGrey } from "../../constants/colors";

import courierPrimeFile from "../../fonts/Courier_Prime_Regular.json";
import courierPrimeBoldFile from "../../fonts/Courier_Prime_Bold.json";
import inconsolataFile from "../../fonts/Inconsolata_Regular.json";
import robotoFile from "../../fonts/Roboto_Regular.json";

extend({ TextGeometry });

const Inconsolata = ({
  text = "",
  size = 0.5,
  position = [0, 0, 0],
  color = medGrey,
}) => {
  const inconsolata = new FontLoader().parse(inconsolataFile);
  const textOptions = {
    font: inconsolata,
    size: size,
    height: 0.01,
  };

  return (
    <mesh position={position}>
      <textGeometry args={[text, textOptions]} />
      <meshBasicMaterial attach="material" color={color} />
    </mesh>
  );
};

const Roboto = ({
  text = "",
  size = 0.5,
  position = [0, 0, 0],
  color = medGrey,
}) => {
  const roboto = new FontLoader().parse(robotoFile);
  const textOptions = {
    font: roboto,
    size: size,
    height: 0.01,
  };

  return (
    <mesh position={position}>
      <textGeometry args={[text, textOptions]} />
      <meshBasicMaterial attach="material" color={color} />
    </mesh>
  );
};

const CourierPrime = ({
  text = "",
  size = 0.5,
  position = [0, 0, 0],
  color = medGrey,
  bold = false,
}) => {
  const courierPrime = new FontLoader().parse(
    bold ? courierPrimeBoldFile : courierPrimeFile
  );
  const textOptions = {
    font: courierPrime,
    size: size,
    height: 0.01,
  };

  return (
    <mesh position={position}>
      <textGeometry args={[text, textOptions]} />
      <meshBasicMaterial attach="material" color={color} />
    </mesh>
  );
};

export { CourierPrime, Inconsolata, Roboto };
