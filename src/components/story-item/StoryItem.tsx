import { FC } from "react";
import StoryItemBody from "./StoryItemBody";
import StoryItemHeader from "./StoryItemHeader";
import StoryItemFooter from "./StoryItemFooter";

const StoryItem: FC<any> = ({ story }: any) => {
  console.log(story);
  return (
    <div>
      <StoryItemHeader story={story} />
      <StoryItemBody story={story} />
      <StoryItemFooter story={story} />
    </div>
  );
};

export default StoryItem;
