import { useMemo } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { Stats, OrbitControls, Environment } from "@react-three/drei";
import { useControls } from "leva";
import {
  BoxGeometry,
  SphereGeometry,
  DodecahedronGeometry,
  Vector2,
  LatheGeometry,
  MeshStandardMaterial,
  MeshNormalMaterial,
  MeshBasicMaterial,
  MeshPhysicalMaterial,
} from "three";
// import Polyhedron from "./Polyhedron";

const App = () => {
  const polyhedron = [
    new BoxGeometry(),
    new SphereGeometry(0.785398),
    new DodecahedronGeometry(0.785398),
  ];

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
  // console.log(points);

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
    <Canvas camera={{ position: [-6, 0, 0] }}>
      {/* <Environment files="./img/StudioHDR_2_StarField_01_1080.hdr" background /> */}
      {/* <Environment files="./img/nebula-01-low.hdr" background /> */}
      {/* <Environment files="./img/Milkyway_Light.hdr" background /> */}
      <Environment
        files="./img/industrial_sunset_02_puresky_1k.hdr"
        background
      />
      <mesh
        material={
          new MeshPhysicalMaterial({
            color: 0xffff00,
            metalness: 0.5,
            // depthWrite: false,
          })
        }
        rotation-x={Math.PI / 2}
        geometry={new LatheGeometry(points, 300)}
      >
        {/* <latheGeometry args={[points, 300]} /> */}
        {/* <MeshStandardMaterial /> */}
      </mesh>
      {/* <Polyhedron
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
      /> */}

      <OrbitControls />
      <axesHelper args={[6]} />
      {/* <gridHelper /> */}
      <Stats />
    </Canvas>
  );
};

export default App;
