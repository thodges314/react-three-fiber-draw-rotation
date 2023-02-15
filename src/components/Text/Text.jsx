import { extend } from "@react-three/fiber";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";

import inconsolataFile from "../../fonts/Inconsolata_Regular.json";

extend({ TextGeometry });

const Inconsolata = ({
  text = "",
  size = 0.5,
  position = [0, 0, 0],
  color = 0x5a5a5a,
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

export { Inconsolata };
