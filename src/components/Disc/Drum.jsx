import { useMemo, Fragment } from "react";
import { useControls } from "leva";
import Line from "./Line";
import { Roboto } from "../Text";

const Drum = ({
  solid = {
    domain: [0, 1],
    func: (x) => x,
    resolution: 10,
  },
  sides = 90,
}) => {
  const { domain, func, resolution } = solid;
  const step = useMemo(() => 1 / resolution);

  const options = useMemo(
    () => ({
      x: {
        value: domain[0],
        min: domain[0],
        max: domain[1] - step,
        step: step,
      },
    }),
    []
  );
  const controls = useControls(options);

  const drums = useMemo(() => {
    const drumArray = [];
    for (let i = domain[0]; i <= controls.x + step / 2; i += step) {
      drumArray.push(
        <Fragment key={i}>
          <mesh rotation-z={-Math.PI / 2} position-x={i + step / 2}>
            <meshPhongMaterial attach="material" color="#5a5a5a" />
            <cylinderGeometry args={[func(i), func(i), step, sides]} />
          </mesh>
          <Line start={[i, 0, 0]} end={[i, func(i), 0]} />
          <Line start={[i + step, 0, 0]} end={[i + step, func(i), 0]} />
        </Fragment>
      );
    }
    return drumArray;
  }, [controls.x]);

  return (
    <>
      {drums}
      <Line start={[domain[0], 0, 0]} end={[domain[0], func(domain[0]), 0]} />
      <Line
        start={[controls.x + step, 0, 0]}
        end={[controls.x + step, func(controls.x), 0]}
        label="r"
      />
      <Roboto
        text="Δx"
        size={0.2}
        position={[controls.x, func(controls.x) + 0.4, 0]}
      />
    </>
  );
};

export default Drum;
