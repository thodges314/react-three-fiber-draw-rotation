import { Text } from "troika-three-text";
import { extend } from "react-three-fiber";
import { DoubleSide } from "three";

extend({ Text });

const Label = ({
  text = "",
  fontsize = 2,
  xPos = 0,
  yPos = 0,
  zPos = 0,
  color = "#5a5a5a",
}) => {
  return (
    <text
      position={[xPos, yPos, zPos]}
      fontSize={fontsize}
      color={color}
      text={text}
    >
      <meshPhongMaterial attach="material" color="#5a5a5a" side={DoubleSide} />
    </text>
  );
};

export default Label;
