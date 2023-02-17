import { Html, Plane } from "@react-three/drei";
import { DoubleSide, Vector2 } from "three";

const DisplayPanel = () => {
  return (
    <mesh>
      {/* <Html
        // args={[6.21, 10, 1]}
        transform
        position-z={0.1}
        position-y={0}
        position-x={-6}
        // material={
        //   <meshPhysicalMaterial
        //     side={DoubleSide} // Required
        //     opacity={0.8} // Degree of influence of lighting on the HTML
        //     attach="material"
        //     color="#5a5a5a"
        //   />
        // }
        // style={{
        //   height: 200,
        //   width: 62.1,
        // }}
        // height={10}
        // width={6.21}
      >
        <div
          style={{
            width: 186.3,
            height: 300,
            // backgroundColor: "#d3d3d3",
            userSelect: "none",
            border: "1px solid #d3d3d3",
          }}
        >
          Panel
        </div>
      </Html>
      <Plane
        args={[6.21, 10, 1]}
        position-y={0}
        position-x={-6}
        side={DoubleSide}
        color={0xd3d3d3}
        transparent={true}
        opacity={0.5}
      >
        <Html
          transform
          scale={1}
          style={{ border: "1px solid #d3d3d3", width: 186.3, height: 113.7 }}
          position-y={3}
          width={186.3}
        >
          <div>yo</div>
          <div>yo</div>
          <div>yo</div>
        </Html>
      </Plane> */}
    </mesh>
  );
};

export default DisplayPanel;
