import { PostPreviews } from "./PostPreviews";

export const PrimaryPostPreviews = () => (
  <PostPreviews posts={[]} pagination={{
    currentPage: 1,
    totalPages: 1,
  }} />
);

const PostPreviewsProps = {
  title: "PostPreviews",
  component: PostPreviews,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qxzMxzEPoblvQiLRD7D34u/Sinatra-Library?node-id=172%3A562",
    },
  },
}

export default PostPreviewsProps