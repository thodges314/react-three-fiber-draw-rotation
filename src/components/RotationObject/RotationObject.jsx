import { useMemo, useRef, useEffect, useState } from "react";
import { DoubleSide, MeshNormalMaterial, Vector2, MathUtils } from "three";
import CurveyLine from "./CurveyLine";
import { useFrame } from "@react-three/fiber";

const RotationObject = ({
  solid = {
    domain: [0, 1],
    func: (x) => x,
    resolution: 10,
  },
  sides = 90,
  transparent = true,
  opacity = 0.5,
  threeDee = true,
}) => {
  const points = useMemo(() => {
    const { domain, func, resolution } = solid;
    const pts = [];
    const numberPoints = resolution * (domain[1] - domain[0]) + 1;
    const dx = (domain[1] - domain[0]) / (numberPoints - 1);
    for (let i = 0; i < numberPoints; i++) {
      const x = domain[0] + i * dx;
      pts.push(new Vector2(func(x), x));
    }
    return pts;
  });
  // useFrame((_, delta) => console.log(delta));

  return (
    <>
      <mesh
        material={
          new MeshNormalMaterial({
            side: DoubleSide,
            transparent,
            opacity,
          })
        }
        rotation-z={-Math.PI / 2}
        rotation-x={-Math.PI / 2}
      >
        <latheGeometry args={[points, sides]} />
      </mesh>

      {/* <CurveyLine points={points} /> */}
    </>
  );
};

export default RotationObject;
