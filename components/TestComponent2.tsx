import React, { useRef } from "react";
import { testState, getPost, postState } from "@/store/testState";
import { useRecoilState, useRecoilValue } from "recoil";
const TestComponent2 = () => {
  const [test, setTest] = useRecoilState(testState);
  const [postData, setPostData] = useRecoilState(postState);
  const currentPost = useRecoilValue(getPost);
  const inputRef = useRef(null);
  const updateTestState = () => {
    if (inputRef.current) {
      // setTest(inputRef.current.value);
    }
  };

  const getPostData = (id: number) => {
    setPostData((prev) => {
      return { ...prev, id };
    });
  };

  return (
    <div>
      <h1>TestComponent2</h1>
      <div>hello</div>
      <input type="text" ref={inputRef} />
      <button onClick={updateTestState}>Send</button>
      <div>
        <button onClick={() => getPostData(1)}>1</button>
        <button onClick={() => getPostData(2)}>2</button>
        <button onClick={() => getPostData(3)}>3</button>
        <button onClick={() => getPostData(4)}>4</button>
        <button onClick={() => getPostData(5)}>5</button>
      </div>
      <div>
        {currentPost.length > 0 &&
          currentPost.map((post) => (
            <div key={post.id}>
              <p>{post.id}</p>
              <p>{post.name}</p>
              <p>{post.email}</p>
              <p>{post.body}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TestComponent2;
