import { useRouter } from "next/router";

const BlogPostPage = () => {
  const router = useRouter();
  console.log("router", router.query);
  return (
    <div>
      <h1>The blog posts</h1>
    </div>
  );
};

export default BlogPostPage;
