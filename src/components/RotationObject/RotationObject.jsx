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
  normalMaterial = true,
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
        <latheGeometry args={[points, sides]} />
      </mesh>

      {/* <CurveyLine points={points} /> */}
    </>
  );
};

export default RotationObject;
