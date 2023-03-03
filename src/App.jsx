import { useEffect, useMemo, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Stats, CameraControls, Environment } from "@react-three/drei";
import { useControls } from "leva";
import { Axes, Disc, Drum, RotationObject } from "./components";
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

  const { discs, drums, threeDee } = useControls("display options", options);
  const cameraRef = useRef();
  const threeDView = [2, 0, 0];
  const twoDView = [2, 1, 0];

  useEffect(() => {
    // threeDee
    //   ? cameraRef.current?.setTarget(...threeDView, true)
    //   : cameraRef.current?.setTarget(...twoDView, true);
  }, [threeDee, cameraRef, threeDView, twoDView]);

  useEffect(() => {
    window.setTimeout(
      () => cameraRef.current?.setTarget(...twoDView, true),
      500
    );
  }, []);

  return (
    <Canvas camera={{ position: [2.5, 0, 10] }}>
      <ambientLight color={0x91b2cb} intensity={2} />
      <directionalLight position={[1123, 56, 79]} intensity={0.5} />
      <Environment
        files="./img/industrial_sunset_02_puresky_1k.hdr"
        background
      />
      {/* <DisplayPanel /> */}
      <RotationObject solid={discMethod1} threeDee={threeDee} />
      {drums && <Drum solid={discMethod1} threeDee={threeDee} />}
      {discs && <Disc solid={discMethod1} threeDee={threeDee} />}
      <CameraControls ref={cameraRef} />
      <Axes />
      <Stats />
    </Canvas>
  );
};

export default App;
