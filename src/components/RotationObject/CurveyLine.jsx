import { BufferGeometry } from "three";

const CurveyLine = ({ points = [] }) => {
  const lineGeometry = new BufferGeometry().setFromPoints(points);

  return (
    <line
      geometry={lineGeometry}
      rotation-x={Math.PI}
      rotation-z={-Math.PI / 2}
    >
      <lineBasicMaterial attach="material" color={0xd3d3d3} linewidth={5} />
    </line>
  );
};

export default CurveyLine;
