import { useMemo } from "react";
import { DoubleSide, MeshNormalMaterial, Vector2 } from "three";

const RotationObject = ({
  solid = {
    domain: [0, 1],
    func: (x) => x,
    resolution: 10,
  },
  sides = 90,
  transparent = true,
  opacity = 0.5,
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
      <latheGeometry args={[points, sides, 0, Math.PI]} />
    </mesh>
  );
};

export default RotationObject;
