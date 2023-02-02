import BlogData from "./BlogData./blog.js";

const blogData = {
  name: "Underreacted",
  image: "https://via.placeholder.com/150",
  about: "A blog about learning React",
  posts: [
    {
      id: 1,
      title: "Components 101",
      preview: "Setting up the building blocks of your site",
    },
    {
      id: 2,
      title: "React Data Flow",
      preview: "Passing props is never passé",
    },
    {
      id: 3,
      title: "Function vs Class Components",
      preview: "React, meet OOJS.",
    },
  ],
};

function App() {
  return (
    <div>
      <BlogData {...blogData} />
    </div>
  );
}