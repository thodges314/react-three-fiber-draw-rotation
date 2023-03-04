import { Inconsolata } from "../Text";
import { medGrey } from "../../constants/colors";

const Axes = ({ length = 6, labelProportion = 1 }) => (
  <>
    <Inconsolata
      text="x"
      size={0.3 * labelProportion}
      position={[length, 0, 0]}
      color={medGrey}
    />
    <Inconsolata
      text="y"
      size={0.3 * labelProportion}
      position={[0, length, 0]}
      color={medGrey}
    />
    <Inconsolata
      text="z"
      size={0.3 * labelProportion}
      position={[0, 0, length]}
      color={medGrey}
    />
    <mesh>
      <axesHelper args={[length]} />
    </mesh>
  </>
);

export default Axes;
