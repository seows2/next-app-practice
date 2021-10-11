import React from "react";
import { render, screen } from "@testing-library/react";
import LectureItem from "../components/lecture/LectureItem";

describe("강의 아이템은", () => {
  beforeEach(() => {
    render(<LectureItem />);
  });
  it("썸네일을 가지고 있어야 한다.", () => {
    const lectureImg = screen.getByAltText("강의 이미지");

    expect(lectureImg).toBeInTheDocument();
  });
  it("뱃지를 가지고 있어야 한다.", () => {
    const Badge = screen.getByText("평생 소장");

    expect(Badge).toBeInTheDocument();
  });
  it("강의 제목을 렌더링 해야한다.", () => {
    const title = screen.getByRole("heading", {
      name: "완벽한 Next, TS, test 강의",
    });

    expect(title).toBeInTheDocument();
  });
  it("강의 설명을 렌더링 해야한다.", () => {
    const description = screen.getByText(
      "이 강의는 설명설명설명설명설명설명설명설명설명설명설명설명"
    );

    expect(description).toBeInTheDocument();
  });
});
