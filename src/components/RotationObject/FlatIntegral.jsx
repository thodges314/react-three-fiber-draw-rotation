import { useMemo } from "react";
import { darkPhongMaterial } from "../../materials";

const FlatIntegral = ({
  solid: {
    domain = [0.1, 1],
    funcTop = (x) => x,
    funcBottom = (_x) => 0,
    resolution = 10,
  },
  rightBound = domain[1],
}) => {
  const dx = useMemo(() => {
    return 0.1 / resolution;
  }, []);
  const shapes = useMemo(() => {
    const func = (x) => funcTop(x) - funcBottom(x);
    const shps = [];
    for (let i = domain[0]; i < domain[1]; i += dx) {
      const smlr = Math.min(func(i), func(i + dx));
      shps.push(
        <mesh
          position-x={i + dx / 2}
          position-y={smlr / 2 + funcBottom(i)}
          rotation-z={-Math.PI / 2}
          key={Math.round(i * 100)}
        >
          {darkPhongMaterial}
          <planeGeometry args={[smlr, dx]} />
        </mesh>
      );
    }
    return shps;
  }, []);
  const idx = (rightBound - domain[0]) / dx;
  return <mesh>{shapes.slice(0, idx)}</mesh>;
};

export default FlatIntegral;
