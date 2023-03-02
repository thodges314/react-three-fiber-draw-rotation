import { darkGrey, lightGrey } from "../constants/colors";
import { DoubleSide, Vector2 } from "three";

const darkPhongMaterial = (
  <meshPhongMaterial
    attach="material"
    color={darkGrey}
    specular={lightGrey}
    side={DoubleSide}
  />
);

const translucentNormalMaterial = (
  <meshNormalMaterial
    attach="material"
    side={DoubleSide}
    transparent={true}
    opacity={0.5}
  />
);
export { darkPhongMaterial, translucentNormalMaterial };
