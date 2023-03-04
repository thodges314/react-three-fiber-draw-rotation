import { useMemo } from "react";
import { useControls } from "leva";
import { ThickStraightLine } from "../Lines";
import RotationObject, { FlatIntegral } from "../RotationObject";
import { CourierPrime } from "../Text";
import { synthPink, synthViolet } from "../../constants/colors";
import { darkPhongMaterial } from "../../materials";

const Washer = ({
  solid = {
    domain: [0, 1],
    bigFunc: (x) => x,
    littleFunc: (x) => x,
    resolution: 20,
  },
  sides = 90,
  threeDee = true,
  labelProportion = 1,
  functionNameBig = "f(x)",
  functionNameLittle = "g(x)",
  // displayTopLabel = false,
  labelColorBig = synthPink,
  labelColorLittle = synthViolet,
}) => {
  const { domain, bigFunc, littleFunc, resolution } = solid;
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
  console.log(threeDee);
  const zTransform = 1 / 2;
  const yTransform = 3 ** (1 / 2) / 2;
  return (
    <>
      {controls.x >= domain[0] &&
        (threeDee ? (
          <>
            <RotationObject
              solid={{
                domain: [domain[0], controls.x],
                func: bigFunc,
                resolution: resolution,
              }}
              sides={sides}
              normalMaterial={false}
            />
            <RotationObject
              solid={{
                domain: [domain[0], controls.x],
                func: littleFunc,
                resolution: resolution,
              }}
              sides={sides}
              normalMaterial={false}
            />
          </>
        ) : (
          <FlatIntegral
            solid={{
              domain: [domain[0], domain[1]],
              funcTop: bigFunc,
              funcBottom: littleFunc,
              resolution: resolution,
            }}
            rightBound={controls.x}
          />
        ))}

      {threeDee && (
        <>
          <mesh rotation-y={-Math.PI / 2} position-x={domain[0]}>
            {darkPhongMaterial}
            <ringGeometry
              args={[littleFunc(domain[0]), bigFunc(domain[0]), sides]}
            />
          </mesh>
          <mesh rotation-y={-Math.PI / 2} position-x={controls.x}>
            {darkPhongMaterial}
            <ringGeometry
              args={[littleFunc(controls.x), bigFunc(controls.x), sides]}
            />
          </mesh>
          <ThickStraightLine
            start={[controls.x, 0, 0]}
            end={[
              controls.x,
              yTransform * littleFunc(controls.x),
              zTransform * littleFunc(controls.x),
            ]}
            color={synthViolet}
            label={functionNameLittle}
            labelProportion={labelProportion}
          />
          <ThickStraightLine
            start={[controls.x, 0, 0]}
            end={[
              controls.x,
              yTransform * bigFunc(controls.x),
              -zTransform * bigFunc(controls.x),
            ]}
            color={synthPink}
            label={functionNameBig}
            labelProportion={labelProportion}
          />
        </>
      )}

      {!threeDee && (
        <>
          <ThickStraightLine
            start={[controls.x + 0.01, 0, 0.01]}
            end={[controls.x + 0 + 0.01, littleFunc(controls.x), 0.01]}
            color={labelColorLittle}
            label={functionNameLittle}
            labelProportion={labelProportion}
          />
          <ThickStraightLine
            start={[controls.x - 0.01, 0, 0.01]}
            end={[controls.x - 0.01, bigFunc(controls.x), 0.01]}
            color={labelColorBig}
            label={functionNameBig}
            labelProportion={labelProportion}
            labelRight={false}
          />
        </>
      )}
      {/* {displayTopLabel && (
        <CourierPrime
          text="dx"
          size={0.25 * labelProportion}
          position={[
            controls.x - 0.2 * labelProportion,
            func(controls.x) + 0.4 * labelProportion,
            0,
          ]}
          color={synthPink}
          bold={true}
        />
      )} */}
    </>
  );
};

export default Washer;
