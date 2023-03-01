import { useMemo } from "react";
import { DoubleSide, Vector2 } from "three";
import CurveyLine from "./CurveyLine";

const RotationObject = ({
  solid = {
    domain: [0.1, 1],
    func: (x) => x,
    resolution: 10,
  },
  sides = 90,
  transparent = true,
  opacity = 0.5,
  threeDee = true,
  normalMaterial = true,
}) => {
  const points = useMemo(() => {
    const { domain, func, resolution } = solid;
    const pts = [];
    const dx = 0.5 / resolution;
    for (let i = domain[0]; i < domain[1]; i += dx) {
      pts.push(new Vector2(func(i), i));
    }
    pts.push(new Vector2(func(domain[1]), domain[1]));
    return pts;
  });

  return (
    <>
      <mesh rotation-z={-Math.PI / 2} rotation-x={-Math.PI / 2}>
        {normalMaterial && (
          <meshNormalMaterial
            attach="material"
            side={DoubleSide}
            transparent={transparent}
            opacity={opacity}
          />
        )}
        {!normalMaterial && (
          <meshPhongMaterial
            attach="material"
            color="#5a5a5a"
            side={DoubleSide}
          />
        )}
        {points.length > 1 && <latheGeometry args={[points, sides]} />}
      </mesh>

      {/* <CurveyLine points={points} /> */}
    </>
  );
};

export default RotationObject;
