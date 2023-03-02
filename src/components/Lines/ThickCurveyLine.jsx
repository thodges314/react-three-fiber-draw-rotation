import { CatmullRomCurve3, Vector3, DoubleSide } from "three";

const ThickCurveyLine = ({
  points = [],
  width = 0.02,
  rotationX = 0,
  rotationY = 0,
  rotationZ = 0,
  color,
}) => {
  const threepoints = points.map((point) => new Vector3(point.x, point.y, 0));
  const curve = new CatmullRomCurve3(threepoints);
  return (
    <mesh rotation-x={rotationX} rotation-y={rotationY} rotation-z={rotationZ}>
      <tubeGeometry
        attach="geometry"
        args={[curve, threepoints.length * 2, width, 16, false]}
      />
      {color ? (
        <meshPhongMaterial color={color} attach="material" side={DoubleSide} />
      ) : (
        <meshNormalMaterial attach="material" side={DoubleSide} />
      )}
    </mesh>
  );
};

export default ThickCurveyLine;
