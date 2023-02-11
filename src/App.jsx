import { useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { Stats, OrbitControls } from "@react-three/drei";
import { useControls } from "leva";
import { BoxGeometry, SphereGeometry, DodecahedronGeometry } from "three";
import Polyhedron from "./Polyhedron";

const App = () => {
  const polyhedron = [
    new BoxGeometry(),
    new SphereGeometry(0.785398),
    new DodecahedronGeometry(0.785398),
  ];

  const options = useMemo(
    () => ({
      x: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
      y: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
      z: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
      visible: true,
      color: { value: "lime" },
    }),
    []
  );

  const pA = useControls("Polyhedron A", options);
  const pB = useControls("Polyhedron B", options);
  return (
    <Canvas camera={{ position: [0, 0, 3] }}>
      <Polyhedron
        position={[-1, 1, 0]}
        rotation={[pA.x, pA.y, pA.z]}
        visible={pA.visible}
        color={pA.color}
        polyhedreon={polyhedron}
      />
      <Polyhedron
        position={[1, 1, 0]}
        rotation={[pB.x, pB.y, pB.z]}
        visible={pB.visible}
        color={pB.color}
        polyhedreon={polyhedron}
      />

      <OrbitControls />
      <axesHelper args={[5]} />
      <gridHelper />
      <Stats />
    </Canvas>
  );
};

export default App;
