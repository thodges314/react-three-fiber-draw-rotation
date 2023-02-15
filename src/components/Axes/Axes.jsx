import { Inconsolata } from "../Text";

const Axes = ({ length = 6 }) => (
  <>
    <Inconsolata text="x" size={0.3} position={[6, 0, 0]} />
    <Inconsolata text="y" size={0.3} position={[0, 6, 0]} />
    <Inconsolata text="z" size={0.3} position={[0, 0, 6]} />
    <mesh>
      <axesHelper args={[length]} />
    </mesh>
  </>
);

export default Axes;
