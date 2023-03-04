import { useEffect, useMemo, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Stats, CameraControls, Environment } from "@react-three/drei";
import { useControls } from "leva";
import {
  Axes,
  Disc,
  Drum,
  RotationObject,
  RotationObjectLine,
  ThickStraightLine,
  Washer,
} from "./components";
import { synthPink, synthViolet } from "./constants/colors";
import {
  discMethod1,
  discMethodRaise,
  discMethodRaiseView,
  discMethodView,
  washerMethod,
  washerMethod1,
  washerMethod2,
  washerMethodView,
} from "./formulas";

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
  // const { twoDView, threeDView, cameraPosition, axesLength, labelProportion } =
  //   washerMethodView;
  const { twoDView, threeDView, cameraPosition, axesLength, labelProportion } =
    discMethodRaiseView;

  // useEffect(() => {
  //   // threeDee
  //   //   ? cameraRef.current?.setTarget(...threeDView, true)
  //   //   : cameraRef.current?.setTarget(...twoDView, true);
  // }, [threeDee, cameraRef, threeDView, twoDView]);

  useEffect(() => {
    window.setTimeout(
      () => cameraRef.current?.setTarget(...twoDView, true),
      500
    );
  }, []);

  return (
    <Canvas camera={{ position: cameraPosition }}>
      <ambientLight color={0x91b2cb} intensity={2} />
      <directionalLight position={[1123, 56, 79]} intensity={0.5} />
      <Environment
        files="./img/industrial_sunset_02_puresky_1k.hdr"
        background
      />
      {/* <DisplayPanel /> */}
      {/* {threeDee && <RotationObject solid={discMethod1} threeDee={threeDee} />}
      <RotationObjectLine solid={discMethod1} />
      {drums && (
        <Drum
          solid={discMethod1}
          threeDee={threeDee}
          labelProportion={labelProportion}
          functionName={threeDee ? "r=f(x)" : "f(x)"}
        />
      )}
      {discs && (
        <Disc
          solid={discMethod1}
          threeDee={threeDee}
          labelProportion={labelProportion}
          functionName={threeDee ? "r=f(x)" : "f(x)"}
        />
      )} */}
      <RotationObjectLine solid={discMethod1} />
      <ThickStraightLine start={[-44, -1, 0]} end={[49, -1, 0]} />
      <Disc
        solid={discMethod1}
        threeDee={threeDee}
        labelProportion={labelProportion}
        functionName={threeDee ? "r=f(x)" : "f(x)"}
      />
      <Disc
        solid={discMethodRaise}
        threeDee={threeDee}
        labelProportion={labelProportion}
        functionName={threeDee ? "1" : "1"}
        displayTopLabel={false}
      />

      {/* {threeDee && (
        <>
          <RotationObject solid={washerMethod1} />
          <RotationObject solid={washerMethod2} />
        </>
      )}
      <RotationObjectLine solid={washerMethod1} />
      <RotationObjectLine solid={washerMethod2} />
      {discs && (
        <Washer
          solid={washerMethod}
          labelProportion={labelProportion}
          threeDee={threeDee}
        />
      )} */}

      <CameraControls ref={cameraRef} />
      <Axes length={axesLength} labelProportion={labelProportion} />
      <Stats />
    </Canvas>
  );
};

export default App;
