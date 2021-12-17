import { useState } from "react";
import { useActionData } from "remix";
import YourStory from "~/components/your-story";

const NewPost = () => {
  const actionData = useActionData();

  const [post, setPost] = useState(null);

  return (
    <div className="flex flex-col w-full h-full">
      <YourStory onComplete={(value) => setPost(null)} />
    </div>
  );
};

export default NewPost;
