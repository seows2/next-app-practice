import React from "react";
import LectureItem from "./LectureItem";
import { Lecture } from "../../interface/lecture";
import useLectures from "../../hooks/useLectures";

const LectureList = (): JSX.Element => {
  const { isLoading, data } = useLectures();

  if (isLoading) return <div>로딩 중...</div>;

  const lectureItems = data.lectureList.map((lecture: Lecture) => (
    <LectureItem key={lecture.id} lecture={lecture} />
  ));

  return <div>{lectureItems}</div>;
};

export default LectureList;
