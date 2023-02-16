import { useRef, useMemo } from "react";
import { BufferGeometry, Vector3 } from "three";

const LineExport = ({ start = [0, 0, 0], end = [0, 0, 0], label = "" }) => {
  const lineRef = useRef();
  const points = [
    new Vector3(start[0], start[1], start[2]),
    new Vector3(end[0], end[1], end[2]),
  ];
  const lineGeometry = new BufferGeometry().setFromPoints(points);
  useMemo(() => console.log(lineRef), [lineRef]);

  return (
    <line geometry={lineGeometry} ref={lineRef}>
      <lineBasicMaterial attach="material" color={0xd3d3d3} linewidth={5} />
    </line>
  );
};

export default LineExport;