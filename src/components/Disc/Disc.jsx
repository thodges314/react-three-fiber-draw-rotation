import { useMemo } from "react";
import { useControls } from "leva";
import { DoubleSide, MeshBasicMaterial } from "three";
import Line from "./Line";

const Disc = ({
  solid = {
    domain: [0, 1],
    func: (x) => x,
    resolution: 10,
  },
  sides = 90,
}) => {
  const options = useMemo(
    () => ({
      x: {
        value: solid.domain[0],
        min: solid.domain[0],
        max: solid.domain[1],
        step: 0.1 / solid.resolution,
      },
    }),
    []
  );
  const controls = useControls(options);

  return (
    <>
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
        <circleGeometry args={[solid.func(controls.x), sides]} />
      </mesh>
      <Line
        start={[controls.x, 0, 0]}
        end={[controls.x, solid.func(controls.x), 0]}
      />
    </>
  );
};

export default Disc;
