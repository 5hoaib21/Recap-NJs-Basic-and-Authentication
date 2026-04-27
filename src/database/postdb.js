const posts = [
  {
    id: 1,
    title: "sunt aut facere",
    body: "quia et suscipit suscipit recusandae consequuntur expedita et cum ",
  },
  {
    id: 2,
    title: "as sunt aut facere",
    body: "quia et suscipit suscipit recusandae consequuntur expedita et cum ",
  },
  {
    id: 3,
    title: "sunt aut faas as",
    body: "quia et suscipit suscipit recusandae consequuntur expedita et cum ",
  },
];

export const addPost = (newPost) => {
  posts.push(newPost);
  console.log(posts);
};

export const getPosts = () => {
  return posts;
};
