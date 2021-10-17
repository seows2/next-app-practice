import React from "react";
import LectureItem from "./LectureItem";
import { useQuery } from "react-query";
import { Lecture } from "interface/lecture";

const LectureList = (): JSX.Element => {
  const { isLoading, data } = useQuery("lecture_list", () =>
    fetch("/api/lectures").then((res) => res.json())
  );

  if (isLoading) return <div>로딩 중...</div>;

  const lectureItems = data.lectureList.map((lecture: Lecture) => (
    <LectureItem key={lecture.id} lecture={lecture} />
  ));

  return <div>{lectureItems}</div>;
};

export default LectureList;
