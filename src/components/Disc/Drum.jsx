import { useEffect, useMemo, Fragment } from "react";
import { useControls } from "leva";
import Line from "./Line";
import { useFrame } from "@react-three/fiber";

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
      <directionalLight position={[8, 8, 8]} intensity={0.5} />
      <ambientLight color="#5a5a5a" intensity={0.5} />

      {drums}
      <Line start={[domain[0], 0, 0]} end={[domain[0], func(domain[0]), 0]} />
      <Line
        start={[controls.x + step, 0, 0]}
        end={[controls.x + step, func(controls.x), 0]}
      />
    </>
  );
};

export default Drum;
