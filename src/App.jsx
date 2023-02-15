import { useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { Stats, OrbitControls, Environment } from "@react-three/drei";
import { useControls } from "leva";
import { Vector2 } from "three";
import { Axes, RotationObject } from "./components";

const App = () => {
  const points = [];
  const start = 1;
  const end = 4;
  const numberPoints = 75;
  const dx = (end - start) / numberPoints;
  const func = (x) => x ** 3 - 7 * x ** 2 + 14 * x - 5;
  for (let i = 0; i < numberPoints; i++) {
    const x = start + i * dx;
    points.push(new Vector2(func(x), x));
  }

  // const options = useMemo(
  //   () => ({
  //     x: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
  //     y: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
  //     z: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
  //     visible: true,
  //     color: { value: "lime" },
  //   }),
  //   []
  // );

  // const pA = useControls("Polyhedron A", options);
  // const pB = useControls("Polyhedron B", options);
  return (
    <Canvas camera={{ position: [0, 0, 10] }}>
      <Environment
        files="./img/industrial_sunset_02_puresky_1k.hdr"
        background
      />
      <RotationObject points={points} />
      <OrbitControls />
      <Axes />
      <Stats />
    </Canvas>
  );
};

export default App;
