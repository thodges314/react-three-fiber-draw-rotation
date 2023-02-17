import { Fragment, useEffect, useMemo, useState } from "react";
import { useControls } from "leva";
import { DoubleSide } from "three";
import Line from "./Line";
import debounce from "../../utils/debounce";
import RotationObject from "../RotationObject";
import CurveyLine from "../RotationObject/CurveyLine";

const Disc = ({
  solid = {
    domain: [0, 1],
    func: (x) => x,
    resolution: 10,
  },
  sides = 90,
}) => {
  const { domain, func, resolution } = solid;
  const step = useMemo(() => 0.5 / resolution);
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

  const [displaySolid, setDisplaySolid] = useState(false);

  const debouncedChangeHandler = useMemo(
    () =>
      debounce(() => {
        setDisplaySolid(true);
      }, 500),
    []
  );

  useEffect(() => {
    setDisplaySolid(false);
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
        </Fragment>
      );
    }
    return discsArray;
  }, [controls.x]);

  return (
    <>
      {!displaySolid && discs}
      {displaySolid && controls.x > domain[0] && (
        <RotationObject
          solid={{
            domain: [domain[0], controls.x],
            func: func,
            resolution: resolution,
          }}
          sides={sides}
          normalMaterial={false}
        />
      )}
      {displaySolid && (
        <>
          <mesh rotation-y={-Math.PI / 2} position-x={domain[0]}>
            <meshBasicMaterial attach="material" color="#5a5a5a" />
            <circleGeometry args={[func(domain[0]), sides]} />
          </mesh>
          <mesh rotation-y={Math.PI / 2} position-x={controls.x}>
            <meshBasicMaterial attach="material" color="#5a5a5a" />
            <circleGeometry args={[func(controls.x), sides]} />
          </mesh>
          <Line
            start={[domain[0], 0, 0]}
            end={[domain[0], func(domain[0]), 0]}
          />
          <Line
            start={[controls.x, 0, 0]}
            end={[controls.x, func(controls.x), 0]}
          />
          {/* <CurveyLine points={points} /> */}
        </>
      )}
      <Line start={[domain[0], 0, 0]} end={[domain[0], func(domain[0]), 0]} />
      <Line
        start={[controls.x, 0, 0]}
        end={[controls.x, func(controls.x), 0]}
      />
    </>
  );
};

export default Disc;
