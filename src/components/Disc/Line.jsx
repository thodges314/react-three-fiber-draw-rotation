import { BufferGeometry, Vector3 } from "three";
import { Roboto } from "../Text";

const LineExport = ({
  start = [0, 0, 0],
  end = [0, 0, 0],
  lineWidth = 10,
  label = "",
}) => {
  const points = [
    new Vector3(start[0], start[1], start[2]),
    new Vector3(end[0], end[1], end[2]),
  ];
  const lineGeometry = new BufferGeometry().setFromPoints(points);
  const labelPos = [
    (start[0] + end[0]) / 2 + 0.1,
    (start[1] + end[1]) / 2,
    (start[2] + end[2]) / 2,
  ];

  return (
    <>
      <line geometry={lineGeometry}>
        <lineBasicMaterial
          attach="material"
          color={0xd3d3d3}
          linewidth={lineWidth}
        />
      </line>
      {label !== "" && (
        <Roboto position={labelPos} text={label} color={0xd3d3d3} size={0.25} />
      )}
    </>
  );
};

export default LineExport;
