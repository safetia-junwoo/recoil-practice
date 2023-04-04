import { v1 } from "uuid";
import { atom, selector } from "recoil";
const testState = atom({
  key: `testState${v1()}`,
  default: "hello",
});

const postState = atom({
  key: `postState${v1()}`,
  default: {
    id: 1,
  },
});

const getPost = selector({
  key: `getPost${v1()}`,
  get: async ({ get }) => {
    const post = get(postState);
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${post.id}`
    );
    const data = await res.json();
    console.log(data);
    return data;
  },
});

export { testState, getPost, postState };
