export function generateDummyPosts(amount: number): any {
  return new Array(amount).fill(null).map((e, i) => ({
    id: `${i + 1}`,
    title: `Post ${i + 1}`,
    body: `Post body ${i + 1}`,
    author: null,
    comments: [],
  }));
}

export const posts = [...generateDummyPosts(10)];
