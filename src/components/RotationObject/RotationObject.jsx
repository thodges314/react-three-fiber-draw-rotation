import { useMemo } from "react";
import { Vector2 } from "three";
import { darkPhongMaterial, translucentNormalMaterial } from "../../materials";

const RotationObject = ({
  solid: { domain = [0.1, 1], func = (x) => x, resolution = 10 },
  sides = 90,
  normalMaterial = true,
}) => {
  const points = useMemo(() => {
    const pts = [];
    const dx = 0.5 / resolution;
    for (let i = domain[0]; i < domain[1]; i += dx) {
      pts.push(new Vector2(func(i), i));
    }
    pts.push(new Vector2(func(domain[1]), domain[1]));
    return pts;
  });

  return (
    <mesh rotation-z={-Math.PI / 2} rotation-x={-Math.PI / 2}>
      {normalMaterial ? translucentNormalMaterial : darkPhongMaterial}
      {points.length > 1 && <latheGeometry args={[points, sides]} />}
    </mesh>
  );
};

export default RotationObject;
