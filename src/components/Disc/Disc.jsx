import { useMemo } from "react";
import { useControls } from "leva";
import { ThickStraightLine } from "../Lines";
import RotationObject from "../RotationObject";
import { CourierPrime } from "../Text";
import { synthPink } from "../../constants/colors";
import { darkPhongMaterial } from "../../materials";

const Disc = ({
  solid = {
    domain: [0, 1],
    func: (x) => x,
    resolution: 20,
  },
  sides = 90,
  threeDee = true,
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

  return (
    <>
      {controls.x >= domain[0] && (
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

      <mesh rotation-y={-Math.PI / 2} position-x={domain[0]}>
        {darkPhongMaterial}
        <circleGeometry args={[func(domain[0]), sides]} />
      </mesh>
      <mesh rotation-y={Math.PI / 2} position-x={controls.x}>
        {darkPhongMaterial}
        <circleGeometry args={[func(controls.x), sides]} />
      </mesh>

      <ThickStraightLine
        start={[domain[0], 0, 0]}
        end={[domain[0], func(domain[0]), 0]}
        color={synthPink}
      />
      <ThickStraightLine
        start={[controls.x, 0, 0]}
        end={[controls.x, func(controls.x), 0]}
        color={synthPink}
        label={"r=f(x)"}
      />
      <CourierPrime
        text="dx"
        size={0.25}
        position={[controls.x - 0.2, func(controls.x) + 0.4, 0]}
        color={synthPink}
        bold={true}
      />
    </>
  );
};

export default Disc;
