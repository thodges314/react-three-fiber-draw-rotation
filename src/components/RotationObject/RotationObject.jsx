import { DoubleSide, LatheGeometry, MeshNormalMaterial } from "three";

const RotationObject = ({
  points = [],
  sides = 300,
  transparent = true,
  opacity = 0.5,
}) => (
  <mesh
    material={
      new MeshNormalMaterial({
        side: DoubleSide,
        transparent,
        opacity,
      })
    }
    rotation-z={-Math.PI / 2}
    geometry={new LatheGeometry(points, sides)}
  ></mesh>
);

export default RotationObject;
