import { useMemo, Fragment } from "react";
import { useControls } from "leva";
import { ThickStraightLine } from "../Lines";
import { CourierPrime } from "../Text";
import { lightGrey, synthPink } from "../../constants/colors";
import { darkPhongMaterial } from "../../materials";

const Drum = ({
  solid = {
    domain: [0, 1],
    func: (x) => x,
    resolution: 10,
  },
  sides = 90,
  threeDee = true,
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
          <mesh
            rotation-z={-Math.PI / 2}
            position-x={i + step / 2}
            position-y={threeDee ? 0 : func(i) / 2}
          >
            {darkPhongMaterial}
            {threeDee ? (
              <cylinderGeometry args={[func(i), func(i), step, sides]} />
            ) : (
              <planeGeometry args={[func(i), step]} />
            )}
          </mesh>
          {threeDee && (
            <>
              <ThickStraightLine
                start={[i, 0, 0]}
                end={[i, func(i), 0]}
                color={lightGrey}
                width={0.01}
              />
              <ThickStraightLine
                start={[i + step, 0, 0]}
                end={[i + step, func(i), 0]}
                color={lightGrey}
                width={0.01}
              />
            </>
          )}
        </Fragment>
      );
    }
    return drumArray;
  }, [controls.x, threeDee]);

  return (
    <>
      {drums}
      {threeDee ? (
        <>
          <ThickStraightLine
            start={[domain[0], 0, 0]}
            end={[domain[0], func(domain[0]), 0]}
            color={synthPink}
          />
          <ThickStraightLine
            start={[controls.x + step, 0, 0]}
            end={[controls.x + step, func(controls.x), 0]}
            label={"r=f(x)"}
            color={synthPink}
          />
        </>
      ) : (
        <CourierPrime
          text="f(x)"
          position={[controls.x + step + 0.01, func(controls.x) / 2, 0]}
          size={0.25}
          color={synthPink}
          bold={true}
        />
      )}
      <CourierPrime
        text="Δx"
        size={0.25}
        position={[
          controls.x - 0.05,
          func(controls.x) + (threeDee ? 0.4 : 0.1),
          0,
        ]}
        color={synthPink}
        bold={true}
      />
    </>
  );
};

export default Drum;
