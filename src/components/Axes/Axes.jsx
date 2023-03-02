import { Inconsolata } from "../Text";
import { medGrey } from "../../constants/colors";

const Axes = ({ length = 6 }) => (
  <>
    <Inconsolata text="x" size={0.3} position={[6, 0, 0]} color={medGrey} />
    <Inconsolata text="y" size={0.3} position={[0, 6, 0]} color={medGrey} />
    <Inconsolata text="z" size={0.3} position={[0, 0, 6]} color={medGrey} />
    <mesh>
      <axesHelper args={[length]} />
    </mesh>
  </>
);

export default Axes;
