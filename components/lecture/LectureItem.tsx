import React from "react";
import { Lecture } from "interface/lecture";
import TagList from "../tags/TagList";

interface Props {
  lecture: Lecture;
}

const LectureItem = ({ lecture }: Props): JSX.Element => {
  const { title, tags, description, thumbs } = lecture;
  return (
    <div>
      <img src={thumbs} alt="강의 이미지" />
      <TagList tagListData={tags} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default LectureItem;
