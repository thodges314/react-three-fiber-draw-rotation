import { LineCurve3, CatmullRomCurve3, Vector3, DoubleSide } from "three";

const ThickCurveyLine = ({ points = [], width = 0.02, color = 0xd3d3d30 }) => {
  const threepoints = points.map((point) => new Vector3(point.x, point.y, 0));
  const curve = new CatmullRomCurve3(threepoints);
  return (
    <mesh rotation-x={Math.PI} rotation-z={-Math.PI / 2}>
      <tubeGeometry
        attach="geometry"
        args={[curve, threepoints.length * 2, width, 16, false]}
      />
      <meshNormalMaterial attach="material" side={DoubleSide} />
    </mesh>
  );
};

export default ThickCurveyLine;
