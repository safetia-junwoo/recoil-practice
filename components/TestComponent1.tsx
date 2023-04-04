import { testState } from "@/store/testState";
import { useRecoilState } from "recoil";
const TestComponent1 = () => {
  const [test, setTest] = useRecoilState(testState);
  return (
    <div>
      <h1>TestComponent1</h1>
      <div>hello</div>
      <div style={{ border: "1px solid red" }}>{test}</div>
    </div>
  );
};

export default TestComponent1;
