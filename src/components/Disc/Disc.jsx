import { Fragment, useEffect, useMemo, useState } from "react";
import { useControls } from "leva";
import { DoubleSide } from "three";
import Line from "./Line";
import debounce from "../../utils/debounce";
import RotationObject from "../RotationObject";
import CurveyLine from "../RotationObject/CurveyLine";
// import Label from "../Label";
import { Inconsolata } from "../Text";

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
      label: true,
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
    const [start, end, increment] = [
      domain[0] * 100,
      controls.x * 100,
      step * 100,
    ];
    for (let i = start; i <= end; i += increment) {
      const j = i / 100;
      discsArray.push(
        <Fragment key={i}>
          <mesh rotation-y={-Math.PI / 2} position-x={j}>
            <meshBasicMaterial
              attach="material"
              color="#5a5a5a"
              side={DoubleSide}
            />
            <circleGeometry args={[func(j), sides]} />
          </mesh>
        </Fragment>
      );
    }
    return discsArray;
  }, [controls.x]);

  return (
    <>
      {!displaySolid && discs}
      {displaySolid && controls.x >= domain[0] && (
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
        label={"r"}
      />
      <Inconsolata
        text="dx"
        size={0.2}
        position={[controls.x - 0.2, func(controls.x) + 0.4, 0]}
      />
    </>
  );
};

export default Disc;
