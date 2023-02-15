import { DoubleSide, MeshNormalMaterial } from "three";

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
  >
    <latheGeometry args={[points, sides]} />
  </mesh>
);

export default RotationObject;
