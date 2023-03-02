import { LineCurve3, CatmullRomCurve3, Vector3, DoubleSide } from "three";

const TubeLine = ({ points = [], width = 5, color = 0xd3d3d30 }) => {
  const threepoints = points.map((point) => new Vector3(point.x, point.y, 0));
  const curve = new CatmullRomCurve3(threepoints);
  return (
    <mesh rotation-x={Math.PI} rotation-z={-Math.PI / 2}>
      <tubeGeometry
        attach="geometry"
        args={[curve, points.length * 2, 0.02, 16, false]}
      />
      <meshBasicMaterial attach="material" color={color} side={DoubleSide} />
    </mesh>
  );
};

export default TubeLine;
