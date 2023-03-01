import { useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { Stats, OrbitControls, Environment } from "@react-three/drei";
import { useControls } from "leva";
import { Axes, Disc, DisplayPanel, Drum, RotationObject } from "./components";
import { discMethod1 } from "./formulas";

const App = () => {
  const options = useMemo(
    () => ({
      discs: false,
      drums: false,
      threeDee: false,
    }),
    []
  );
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
  // console.log(points);
  const { discs, drums, threeDee } = useControls("display options", options);
  return (
    <Canvas camera={{ position: [2, 0, 10] }}>
      <ambientLight color="#5a5a5a" intensity={0.5} />
      <directionalLight position={[8, 8, 8]} intensity={0.5} />
      <Environment
        files="./img/industrial_sunset_02_puresky_1k.hdr"
        background
      />
      {/* <DisplayPanel /> */}
      <RotationObject solid={discMethod1} threeDee={threeDee} />
      {drums && <Drum solid={discMethod1} />}
      {discs && <Disc solid={discMethod1} />}
      <OrbitControls target={[2, 0, 0]} />
      <Axes />
      <Stats />
    </Canvas>
  );
};

export default App;
