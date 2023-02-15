import { useMemo } from "react";
import { useControls } from "leva";
import { DoubleSide, MeshBasicMaterial } from "three";

const Disc = ({ renderFunction = (x) => x, limits = [0, 10], sides = 300 }) => {
  const options = useMemo(
    () => ({
      x: {
        value: limits[0],
        min: limits[0],
        max: limits[1],
        step: (limits[1] - limits[0]) / 256,
      },
    }),
    []
  );
  const controls = useControls(options);

  return (
    <mesh
      material={
        new MeshBasicMaterial({
          side: DoubleSide,
          color: 0x5a5a5a,
        })
      }
      rotation-y={-Math.PI / 2}
      position-x={controls.x}
    >
      <circleGeometry args={[renderFunction(controls.x), sides]} />
    </mesh>
  );
};

export default Disc;
