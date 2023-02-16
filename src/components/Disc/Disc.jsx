import { Fragment, useEffect, useMemo } from "react";
import { useControls } from "leva";
import { DoubleSide, MeshBasicMaterial } from "three";
import Line from "./Line";
import debounce from "../../utils/debounce";

const Disc = ({
  solid = {
    domain: [0, 1],
    func: (x) => x,
    resolution: 10,
  },
  sides = 90,
}) => {
  const { domain, func, resolution } = solid;
  const step = useMemo(() => 0.1 / resolution);
  const options = useMemo(
    () => ({
      x: {
        value: domain[0],
        min: domain[0],
        max: domain[1],
        step: step,
      },
    }),
    []
  );
  const controls = useControls(options);

  const debouncedChangeHandler = useMemo(
    () => debounce(() => console.log("BOUNCE"), 500), // make solid and change to solid
    []
  );

  useEffect(() => {
    console.log("move"); //change to discs
    debouncedChangeHandler();
  }, [controls.x]);

  const discs = useMemo(() => {
    const discsArray = [];
    for (let i = domain[0]; i <= controls.x + step; i += step) {
      discsArray.push(
        <Fragment key={i}>
          <mesh rotation-y={-Math.PI / 2} position-x={i}>
            <meshBasicMaterial
              attach="material"
              color="#5a5a5a"
              side={DoubleSide}
            />
            <circleGeometry args={[func(i), sides]} />
          </mesh>
          <Line start={[i, 0, 0]} end={[i, func(i), 0]} />
        </Fragment>
      );
    }
    return discsArray;
  }, [controls.x]);

  return <>{discs}</>;
};

export default Disc;
