import { extend } from "@react-three/fiber";
import { MeshLineGeometry, MeshLineMaterial } from "meshline";
import { BufferGeometry } from "three";

extend({ MeshLineGeometry, MeshLineMaterial });

const ThickLine = ({ points = [], width = 5, color = 0xd3d3d30 }) => {
  const lineGeometry = new BufferGeometry().setFromPoints(points);
  console.log(points);
  return (
    <mesh rotation-x={Math.PI} rotation-z={-Math.PI / 2}>
      <meshLineGeometry
        // attach="geometry"
        points={points}
        // geometry={lineGeometry}
        // lineWidth={width}
        // color={color}
        // rotation-x={Math.PI}
        // rotation-z={-Math.PI / 2}
      />
      <meshLineMaterial attach="material" color={0xd3d3d30} lineWidth={0.1} />
      {/* </MeshLineGeometry> */}
    </mesh>
  );
};

export default ThickLine;
